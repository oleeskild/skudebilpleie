export class Appointment {
  dateTime: Date;
  finished: boolean;
  serviceId: string;
  durationInMin: number;
  customer: {
    email: string,
    name: string,
    phone: string
  }
}
