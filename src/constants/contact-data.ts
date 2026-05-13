import { ContactMethod } from "@/types/contact";
import { SiGmail, SiLinkerd, SiGithub } from "react-icons/si";

export const contactData: ContactMethod[] = [
    {
        icon: SiGmail,
        title: "Email",
        value: "josuasiregar0103@gmail.com",
        href: "mailto:josuasiregar0103@gmail.com",
        cta: "Send an Email",
    },
    {
        icon: SiLinkerd,
        title: "LinkedIn",
        value: "/in/josua-siregar",
        href: "https://www.linkedin.com/in/josua-siregar/",
        cta: "Connect on LinkedIn",
    },
    {
        icon: SiGithub,
        title: "GitHub",
        value: "/srgjo27",
        href: "https://github.com/srgjo27",
        cta: "View on GitHub",
    },
];
