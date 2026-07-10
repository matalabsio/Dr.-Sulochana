export type AppointmentPayload = {
  name: string;
  phone: string;
  email: string;
  consultationType: string;
  preferredDate: string;
  message: string;
  locale: string;
  source: string;
  sourcePage?: string;
};
