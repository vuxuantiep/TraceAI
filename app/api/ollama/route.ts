import { NextResponse } from 'next/server';
import { execFile } from 'child_process';
import { promisify } from 'util';

export const runtime = 'nodejs';

const execFilePromise = promisify(execFile);

function parseOllamaOutput(output: string) {
  const text = output.trim();
  const lines = text.split(/\r?\n/).filter(Boolean);
  const candidate = lines[lines.length - 1] ?? text;

  try {
    const parsed = JSON.parse(candidate);
    return parsed.output ?? parsed.text ?? parsed.reply ?? JSON.stringify(parsed);
  } catch {
    return text;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = (body.message ?? '').toString();
    const requestedModel = (body.model ?? '').toString();
    const model = requestedModel || 'qwen2.5-coder';

    if (!message.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const ollamaPath = process.env.OLLAMA_PATH || 'ollama';
    const args = ['run', model, message, '--format', 'json', '--nowordwrap'];

    let reply: string;
    try {
      const { stdout, stderr } = await execFilePromise(ollamaPath, args, {
        shell: true,
        timeout: 120000, // 2 minute timeout
        maxBuffer: 10 * 1024 * 1024, // 10MB buffer
      });
      reply = parseOllamaOutput(stdout || stderr);
    } catch (execErr: any) {
      // If the command fails but has output, try to parse it
      if (execErr.stdout) {
        reply = parseOllamaOutput(execErr.stdout);
      } else {
        throw execErr;
      }
    }

    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error('[/api/ollama] Error:', err);
    return NextResponse.json({ error: err.message ?? 'Unknown error' }, { status: 500 });
  }
}
