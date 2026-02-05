export function PortugalFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#006847" d="M0 0h640v480H0z"/>
      <path fill="#ff2936" d="M213.3 0h426.7v480H213.3z"/>
      <circle cx="213.3" cy="240" r="80" fill="#ffce08"/>
      <path fill="#006847" d="M213.3 160c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 120c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/>
    </svg>
  );
}

export function UKFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
      <path fill="#012169" d="M0 0h640v480H0z"/>
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
      <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
      <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
      <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
    </svg>
  );
}

export function MozambiqueFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#007168" width="900" height="600"/>
      <rect fill="#000" y="200" width="900" height="200"/>
      <rect fill="#fcdd09" y="400" width="900" height="200"/>
      <path fill="#fff" d="M0 175h900v50H0zm0 200h900v50H0z"/>
      <path fill="#d21034" d="M0 0l450 300L0 600z"/>
      <path fill="#fcdd09" d="M150 300l75-105 27 120 111-60-111-60-27 120z"/>
      <rect fill="#000" x="90" y="260" width="150" height="15" transform="rotate(-35 165 267.5)"/>
      <path fill="#fff" d="M180 240l60 45v30h-120v-30z"/>
    </svg>
  );
}
