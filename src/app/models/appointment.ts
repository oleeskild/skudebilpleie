import { Timestamp } from "firebase/functions";
import {ContactInfo} from "./contact-info";

export interface Appointment {
  dateTime: Timestamp;
  finished: boolean;
  serviceId: string;
  durationInMin: number;
  contactInfo: ContactInfo;
}
