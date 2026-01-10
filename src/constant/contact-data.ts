import { ContactMethod } from "@/types/contact";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const contactData: ContactMethod[] = [
    {
        icon: faEnvelope,
        title: "Email",
        value: "josuasiregar0103@gmail.com",
        href: "mailto:josuasiregar0103@gmail.com",
        cta: "Send an Email",
    },
    {
        icon: faLinkedin,
        title: "LinkedIn",
        value: "/in/josua-siregar",
        href: "https://www.linkedin.com/in/josua-siregar/",
        cta: "Connect on LinkedIn",
    },
    {
        icon: faGithub,
        title: "GitHub",
        value: "/srgjo27",
        href: "https://github.com/srgjo27",
        cta: "View on GitHub",
    },
];
