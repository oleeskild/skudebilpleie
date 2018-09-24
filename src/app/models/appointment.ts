import { Timestamp } from "firebase/functions";
import {ContactInfo} from "./contact-info";

export class Appointment {
  dateTime: Timestamp;
  finished: boolean;
  serviceId: string;
  durationInMin: number;
  contactInfo: ContactInfo;
}
