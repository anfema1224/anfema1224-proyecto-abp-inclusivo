export async function GET() {
  return Response.json({
    configured: Boolean(process.env.OPENAI_API_KEY),
    model: "gpt-transcribe",
  });
}

export const dynamic = "force-dynamic";

const MAX_AUDIO_BYTES = 10 * 1024 * 1024;

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "El servicio de transcripción aún no tiene configurada la clave de OpenAI." },
      { status: 503 },
    );
  }

  try {
    const input = await request.formData();
    const audio = input.get("audio");

    if (!(audio instanceof File)) {
      return Response.json(
        { error: "No se recibió un archivo de audio válido." },
        { status: 400 },
      );
    }

    if (audio.size === 0) {
      return Response.json(
        { error: "El fragmento de audio está vacío." },
        { status: 400 },
      );
    }

    if (audio.size > MAX_AUDIO_BYTES) {
      return Response.json(
        { error: "El fragmento de audio supera el tamaño permitido." },
        { status: 413 },
      );
    }

    const body = new FormData();
    body.append("file", audio, audio.name || "segmento.webm");
    body.append("model", "gpt-transcribe");
    body.append("language", "es");
    body.append(
      "prompt",
      "Español de Colombia. Contexto educativo SENA, inclusión, Lengua de Señas Colombiana, electrónica, automatización industrial, componentes electrónicos y formación técnica.",
    );

    const upstream = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body,
    });

    const data = (await upstream.json()) as {
      text?: string;
      error?: { message?: string };
    };

    if (!upstream.ok) {
      console.error("OpenAI transcription error", upstream.status, data.error?.message);
      return Response.json(
        { error: "No fue posible transcribir este fragmento. Inténtalo nuevamente." },
        { status: upstream.status >= 500 ? 502 : 400 },
      );
    }

    return Response.json({ text: data.text?.trim() ?? "" });
  } catch (error) {
    console.error("Transcription route error", error);
    return Response.json(
      { error: "Ocurrió un error al procesar el audio." },
      { status: 500 },
    );
  }
}
