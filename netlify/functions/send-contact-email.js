exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "Content-Type" } };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: "Server configuration error" }) };
  }

  try {
    const { nome, cognome, email, telefono, messaggio } = JSON.parse(event.body);

    if (!nome || !cognome || !telefono || !messaggio) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Tutti i campi obbligatori devono essere compilati" }),
      };
    }

    // Send notification email to company
    const companyEmail = "volpianosegreteria@algecopower.it";
    const companyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Algeco Power <onboarding@resend.dev>",
        to: [companyEmail],
        subject: `Nuova richiesta di contatto da ${nome} ${cognome}`,
        html: `
          <h2>Nuova richiesta di contatto</h2>
          <p><strong>Nome:</strong> ${nome} ${cognome}</p>
          <p><strong>Email:</strong> ${email || "Non fornita"}</p>
          <p><strong>Telefono:</strong> ${telefono}</p>
          <h3>Messaggio:</h3>
          <p>${messaggio.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!companyRes.ok) {
      const errorData = await companyRes.json().catch(() => ({}));
      console.error("Resend API error:", JSON.stringify(errorData));
      throw new Error(errorData.message || `Resend API error: ${companyRes.status}`);
    }

    // Send confirmation email to user if email provided
    if (email) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Algeco Power <onboarding@resend.dev>",
          to: [email],
          subject: "Abbiamo ricevuto la tua richiesta - Algeco Power",
          html: `
            <h1>Grazie per averci contattato, ${nome}!</h1>
            <p>Abbiamo ricevuto la tua richiesta e ti ricontatteremo il prima possibile.</p>
            <p>Ecco un riepilogo del tuo messaggio:</p>
            <blockquote style="border-left: 3px solid #ccc; padding-left: 10px; margin: 10px 0;">
              ${messaggio.replace(/\n/g, "<br>")}
            </blockquote>
            <p>Cordiali saluti,<br>Il Team Algeco Power</p>
            <hr>
            <p style="font-size: 12px; color: #666;">
              Algeco Power S.r.l. - Partner E-Distribuzione<br>
              Tel: 011 9450392
            </p>
          `,
        }),
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email inviate con successo" }),
    };
  } catch (error) {
    console.error("Error in send-contact-email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
