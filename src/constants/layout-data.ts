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

export const BINARY_CONFIG = {
  rows: 100,
  columns: 200,
  fontSize: "12px",
  lineHeight: "1.2",
} as const;

export const HEXAGON_VIEWBOX = "0 0 100 115.47" as const;
export const HEXAGON_POLYGON_POINTS =
  "50,0 100,28.87 100,86.6 50,115.47 0,86.6 0,28.87" as const;
