export class Appointment {
  dateTime: Date;
  finished: boolean;
  serviceId: string;
  customer: {
    email: string,
    name: string,
    phone: string
  }
}
