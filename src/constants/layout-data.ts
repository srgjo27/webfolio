import {
  Home,
  Briefcase,
  GraduationCap,
  Folders,
  Mail,
  BookUser,
  type LucideIcon,
} from "lucide-react";

export interface MenuItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const SITE_METADATA = {
  title: "Webfolio",
  description: "A personal portfolio with an AI career advisor.",
  fonts: {
    spaceGrotesk:
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap",
    sourceCodePro:
      "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap",
    jetBrainsMono:
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap",
  },
} as const;

export const LEFT_MENU_ITEMS: MenuItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/education", label: "Education", icon: GraduationCap },
] as const;

export const RIGHT_MENU_ITEMS: MenuItem[] = [
  { href: "/projects", label: "Projects", icon: Folders },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/guestbook", label: "Guestbook", icon: BookUser },
] as const;

export const ALL_MENU_ITEMS: MenuItem[] = [
  ...LEFT_MENU_ITEMS,
  ...RIGHT_MENU_ITEMS,
] as const;
