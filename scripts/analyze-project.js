const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const PROJECT_ROOT = process.cwd();
const APP_DIR = path.join(PROJECT_ROOT, 'app');
const COMPONENTS_DIR = path.join(PROJECT_ROOT, 'components');
const MESSAGES_FILE = path.join(PROJECT_ROOT, 'messages', 'pt.json'); // Using PT as reference

// Helper to recursively find files
function findFiles(dir, ext) {
  let results = [];
  if (!fs.existsSync(dir)) return results;

  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(file, ext));
    } else {
      if (file.endsWith(ext)) results.push(file);
    }
  });
  return results;
}

// Load existing translations to key checking
let translations = {};
try {
  const content = fs.readFileSync(MESSAGES_FILE, 'utf8');
  translations = JSON.parse(content);
} catch (e) {
  console.warn("Could not load translations file:", e.message);
}

function flattenKeys(obj, prefix = '') {
  let keys = [];
  for (const k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null) {
      keys = keys.concat(flattenKeys(obj[k], prefix + k + '.'));
    } else {
      keys.push(prefix + k);
    }
  }
  return keys;
}
const knownKeys = new Set(flattenKeys(translations));

// 1. Translation Analysis
console.log("--- Analyzing Translations ---");
const filesToScan = [...findFiles(APP_DIR, '.tsx'), ...findFiles(COMPONENTS_DIR, '.tsx')];
const suspectStrings = [];

filesToScan.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, i) => {
    // Simple heuristic: match text between > and < that looks like user content
    // This is VERY naive but good for a first pass
    const match = />([^<>{}\n]+)</g.exec(line);
    if (match) {
      const text = match[1].trim();
      // Filter out likely non-text things (numbers, symbols only, short common code bits)
      if (text.length > 2 && !/^[0-9\s!@#$%^&*()_+=\-\[\]\\';,./?]+$/.test(text)) {
          suspectStrings.push({ file: path.relative(PROJECT_ROOT, filePath), line: i + 1, text });
      }
    }
  });
});

console.log(`Found ${suspectStrings.length} potential untranslated strings.`);
if (suspectStrings.length > 0) {
    console.log("Top 10 potential candidates:");
    suspectStrings.slice(0, 10).forEach(s => console.log(`  ${s.file}:${s.line} - "${s.text}"`));
}


// 2. Routing Analysis
console.log("\n--- Analyzing Routes ---");

// Build map of existing routes
const existingRoutes = new Set();
const pageFiles = findFiles(APP_DIR, 'page.tsx');

pageFiles.forEach(file => {
    let routePath = path.relative(APP_DIR, path.dirname(file));
    // Remove [locale] prefix if present
    routePath = routePath.replace(/^\[locale\]\\?/, '').replace(/^\[locale\]\//, '');
    // Normalize path separators
    routePath = routePath.split(path.sep).join('/');
    // Handle dynamic routes basic cleanup (e.g. [id] -> :id or keep as pattern)
    // For exact matching we might keep them or simplify. Let's keep basics.
    if (routePath === '') routePath = '/';
    else routePath = '/' + routePath;

    existingRoutes.add(routePath);
});

console.log(`Discovered ${existingRoutes.size} valid routes in structure.`);
// existingRoutes.forEach(r => console.log(`  Route: ${r}`));

// Scan for links
const brokenLinks = [];
filesToScan.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');

    // Naive regex for href="..." or router.push("...")
    // Captures: href="...", href={'...'}, router.push('...')
    const regex = /(?:href|push)\s*[:=]\s*(?:['"]|{['"])([^'"}\]]+)/g;

    let match;
    while ((match = regex.exec(content)) !== null) {
        let link = match[1];

        // Ignore external links, anchors, api calls, etc.
        if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto') || link.startsWith('/api') || link === '/') continue;

        // Normalize checking against defined routes
        // This is complex for dynamic routes, so we just check exact matches for now
        // or simplistic dynamic matching

        // Remove query strings
        const cleanLink = link.split('?')[0];

        // Check if potentially valid
        let found = false;

        // Direct match?
        if (existingRoutes.has(cleanLink)) found = true;

        // Try matching dynamic segments
        if (!found) {
             for (const route of existingRoutes) {
                 // Convert route definition (e.g. /users/[id]) to regex
                 // [slug] -> [^/]+
                 const pattern = route.replace(/\[.*?\]/g, '[^/]+');
                 const re = new RegExp(`^${pattern}$`);
                 if (re.test(cleanLink)) {
                     found = true;
                     break;
                 }
             }
        }

        if (!found) {
            brokenLinks.push({ file: path.relative(PROJECT_ROOT, filePath), link });
        }
    }
});

console.log(`Found ${brokenLinks.length} potentially broken or questionable internal links.`);
if (brokenLinks.length > 0) {
    brokenLinks.forEach(b => console.log(`  ${b.file} -> ${b.link}`));
}
