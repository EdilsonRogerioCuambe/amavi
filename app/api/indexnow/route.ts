import { NextResponse } from 'next/server';

export async function GET() {
  const host = 'amavi.org.mz';
  const key = '56d56d7889e44d658c14d9b4c062c3e1';
  const keyLocation = `https://${host}/${key}.txt`;

  const urlList = [
    `https://${host}/pt`,
    `https://${host}/en`,
    `https://${host}/pt/sobre`,
    `https://${host}/en/sobre`,
    `https://${host}/pt/programas`,
    `https://${host}/en/programas`,
    `https://${host}/pt/noticias`,
    `https://${host}/en/noticias`,
  ];

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true, message: 'IndexNow ping sent successfully' });
    } else {
      const errorText = await response.text();
      return NextResponse.json({ success: false, message: 'Failed to send IndexNow ping', error: errorText }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: 'An error occurred while sending IndexNow ping', error: String(error) }, { status: 500 });
  }
}
