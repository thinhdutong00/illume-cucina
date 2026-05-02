import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "RESEND_API_KEY non configurata." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const { nome, telefono, email, persone, data, orario, note } = body;

    if (!nome || !telefono || !email || !persone || !data || !orario) {
      return Response.json(
        { error: "Campi obbligatori mancanti." },
        { status: 400 }
      );
    }

    const { data: resendData, error } = await resend.emails.send({
      from: "Illume Prenotazioni <onboarding@resend.dev>",
      to: ["infoillume.pizzeriaemiliana@gmail.com"],
      replyTo: email,
      subject: `Nuova richiesta prenotazione - ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #3b2a24; line-height: 1.6;">
          <h1 style="color: #c9793f;">Nuova richiesta prenotazione</h1>

          <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
          <p><strong>Telefono:</strong> ${escapeHtml(telefono)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Persone:</strong> ${escapeHtml(persone)}</p>
          <p><strong>Data:</strong> ${escapeHtml(data)}</p>
          <p><strong>Orario:</strong> ${escapeHtml(orario)}</p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p><strong>Note / allergie / richieste:</strong></p>
          <p>${escapeHtml(note || "Nessuna nota indicata.")}</p>
        </div>
      `,
    });

    if (error) {
      return Response.json(
        {
          error: "Errore Resend.",
          details: error,
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      data: resendData,
    });
  } catch (error) {
    return Response.json(
      {
        error: "Errore durante l'invio della prenotazione.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}