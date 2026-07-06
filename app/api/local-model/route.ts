import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body.message || '';

    // If a LOCAL_MODEL_URL env var is set, proxy the request to that URL
    const modelUrl = process.env.LOCAL_MODEL_URL;
    if (modelUrl) {
      const resp = await fetch(modelUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: message }),
      });
      const data = await resp.json();
      // Expecting { reply: '...' } or similar
      return NextResponse.json({ reply: data.reply ?? JSON.stringify(data) });
    }

    // Fallback mock response for local development
    const reply = `Mock-Antwort (lokal): Ich habe deine Nachricht empfangen: "${message}"`;
    return NextResponse.json({ reply });
  } catch (err: any) {
    return NextResponse.json({ error: err.message ?? 'Unknown error' }, { status: 500 });
  }
}
