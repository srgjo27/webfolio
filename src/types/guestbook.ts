import { Timestamp } from "firebase/firestore";

export type GuestbookEntry = {
    id: string;
    name: string;
    message: string;
    createdAt: Timestamp;
};
