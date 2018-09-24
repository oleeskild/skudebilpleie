import { Timestamp } from "firebase/functions";

export class Appointment {
  dateTime: Timestamp;
  finished: boolean;
  serviceId: string;
  durationInMin: number;
  customer: {
    email: string,
    name: string,
    phone: string
  }
}
