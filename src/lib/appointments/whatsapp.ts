import { doctor } from "@/content/doctor";
import type { AppointmentPayload } from "@/lib/appointments/types";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "919849861089";

export function buildWhatsAppAppointmentMessage(data: AppointmentPayload): string {
  const lines = [
    `Hello, I would like to book an appointment at ${doctor.hospital}.`,
    "",
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*Email:* ${data.email}`,
    `*Consultation:* ${data.consultationType}`,
  ];

  if (data.preferredDate) {
    lines.push(`*Preferred date:* ${data.preferredDate}`);
  }

  if (data.message.trim()) {
    lines.push(`*Message:* ${data.message.trim()}`);
  }

  lines.push("", "Please confirm my appointment. Thank you.");
  return lines.join("\n");
}

export function getWhatsAppAppointmentUrl(data: AppointmentPayload): string {
  const text = buildWhatsAppAppointmentMessage(data);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
