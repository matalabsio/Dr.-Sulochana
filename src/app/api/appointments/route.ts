import { NextResponse } from "next/server";
import type { AppointmentPayload } from "@/lib/appointments/types";

type AppointmentBody = Partial<AppointmentPayload>;

function isValidPayload(body: AppointmentBody): body is AppointmentPayload {
  return (
    typeof body.name === "string" &&
    body.name.trim().length >= 2 &&
    typeof body.phone === "string" &&
    body.phone.trim().length >= 8 &&
    typeof body.email === "string" &&
    body.email.includes("@") &&
    typeof body.consultationType === "string" &&
    body.consultationType.trim().length > 0 &&
    typeof body.preferredDate === "string" &&
    typeof body.message === "string" &&
    typeof body.locale === "string" &&
    typeof body.source === "string"
  );
}

export async function POST(request: Request) {
  let body: AppointmentBody;

  try {
    body = (await request.json()) as AppointmentBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields" }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.APPOINTMENTS_WEBHOOK_SECRET;

  if (!webhookUrl) {
    // Allow WhatsApp flow even before Google Sheet webhook is configured.
    return NextResponse.json({
      ok: true,
      stored: false,
      message: "Webhook not configured — appointment not saved to sheet",
    });
  }

  const row = {
    timestamp: new Date().toISOString(),
    name: body.name.trim(),
    phone: body.phone.trim(),
    email: body.email.trim(),
    consultationType: body.consultationType.trim(),
    preferredDate: body.preferredDate.trim(),
    message: body.message.trim(),
    locale: body.locale,
    source: body.source,
    sourcePage: body.sourcePage?.trim() || "",
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...row,
        ...(webhookSecret ? { secret: webhookSecret } : {}),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      return NextResponse.json(
        { ok: false, error: "Failed to save appointment", detail },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to reach Google Sheets webhook",
        detail: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 502 },
    );
  }
}
