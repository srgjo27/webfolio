import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ContactMethod {
    icon: IconDefinition;
    title: string;
    value: string;
    href: string;
    cta: string;
}
