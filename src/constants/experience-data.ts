import { ExperienceItem } from "@/types/experience";

export const experienceData: ExperienceItem[] = [
    {
        role: "Teaching Assistant",
        company: "Institut Teknologi Del",
        period: "Aug 2022 - Dec 2022",
        location: "Toba, North Sumatra",
        description:
            "As an Assistant Lecturer in Computer Architecture and Organization, I mentored more than 60 students by designing tutorial sessions and managing practical work. This initiative proved successful in significantly improving students' understanding of the material, practical performance, and average grades.",
        tags: ["Mentoring", "Teaching", "Computer Architecture"],
    },
    {
        role: "Mobile Developer",
        company: "EGOV Center",
        period: "Aug 2023 - Dec 2023",
        location: "Toba, North Sumatra",
        description:
            "Developed a Drinking Water Retribution Recording application that improved work efficiency by 30% and a Tourism App for over 1,000 users. I demonstrated expertise in Flutter and Git, integrating with REST APIs to increase functionality efficiency by 50%. Key features implemented include QR code payments, complaint handling, thermal printer integration for faster invoicing, and Google Maps API for enhanced navigation, resulting in a significant boost in user satisfaction and transaction speed.",
        tags: [
            "Flutter",
            "REST API",
            "Git",
            "Google Maps API",
            "Mobile Development",
        ],
    },
    {
        role: "Software Engineer",
        company: "PT. Indonesia AirAsia",
        period: "Feb 2024 - Jul 2024",
        location: "Tangerang, Banten",
        description:
            "Designed and developed AIRMASTER Super App, an internal application based on Flutter and Firebase, which successfully improved the team's operational efficiency. Implemented clean code standards and function testing, which significantly reduced the number of bugs before release and strengthened the stability of the app. Actively collaborated in cross-divisional teams to accelerate application development cycles, which directly contributed to AirAsia's digital transformation strategic initiatives.",
        tags: ["Flutter", "Firebase", "Mobile Development", "Clean Code"],
    },
    {
        role: "Front End Developer",
        company: "PT. Bank Raya Indonesia Tbk",
        period: "Sep 2024 - Present",
        location: "South Jakarta, Jakarta",
        description:
            "Developed a Raya mobile-based digital banking application using Flutter, with integration of WebView components to display specific web modules within the application. Integrated REST API with the user interface to support dynamic data interaction. Performed performance optimization, debugging, and code maintenance to ensure the application remains stable and responsive. Collaborate closely with Backend, QA, and UI/UX Designer teams to ensure synchronization between feature design and implementation. Take an active role in Scrum-based development, including sprint planning, daily stand-ups, and retrospectives, with the support of tools such as Jira for project management and Confluence for team documentation.",
        tags: [
            "Flutter",
            "Mobile Development",
            "API Integration",
            "Performance Optimization",
            "Scrum",
            "Jira",
            "Confluence",
        ],
    },
];
