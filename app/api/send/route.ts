import { Resend } from "resend";
import { getAvailableSlots, isClosedDay, parseReservationDate } from "../../lib/restaurant-hours";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nome,
      nomeTavolo,
      telefono,
      email,
      persone,
      data,
      orario,
      note,
      privacyAccepted,
    } = body;

    if (!nome || !telefono || !email || !persone || !data || !orario) {
      return Response.json(
        { error: "Campi obbligatori mancanti." },
        { status: 400 }
      );
    }

    if (!privacyAccepted) {
      return Response.json(
        { error: "Informativa privacy non accettata." },
        { status: 400 }
      );
    }

    const reservationDate = parseReservationDate(data);
    if (!reservationDate) {
      return Response.json(
        { error: "Data di prenotazione non valida." },
        { status: 400 }
      );
    }

    if (isClosedDay(reservationDate)) {
      return Response.json(
        { error: "Il lunedì il ristorante è chiuso. Scegli un altro giorno." },
        { status: 400 }
      );
    }

    if (!getAvailableSlots(reservationDate).includes(orario)) {
      return Response.json(
        { error: "Scegli un orario tra quelli disponibili." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "RESEND_API_KEY non configurata." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data: resendData, error } = await resend.emails.send({
      from: "Illume Prenotazioni <prenotazioni@illumepizzeriaemiliana.it>",
      to: ["infoillume.pizzeriaemiliana@gmail.com"],
      replyTo: email,
      subject: `Nuova richiesta prenotazione - ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #3b2a24; line-height: 1.6;">
          <h1 style="color: #c9793f;">Nuova richiesta prenotazione</h1>

          <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
          <p><strong>Nome tavolo:</strong> ${escapeHtml(nomeTavolo || "Non indicato")}</p>
          <p><strong>Telefono:</strong> ${escapeHtml(telefono)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Persone:</strong> ${escapeHtml(persone)}</p>
          <p><strong>Data:</strong> ${escapeHtml(data)}</p>
          <p><strong>Orario:</strong> ${escapeHtml(orario)}</p>
          <p><strong>Privacy:</strong> Accettata</p>

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
