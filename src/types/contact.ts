import { IconType } from "react-icons";

export interface ContactMethod {
    icon: IconType;
    title: string;
    value: string;
    href: string;
    cta: string;
}
