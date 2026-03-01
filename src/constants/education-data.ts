import { EducationItem } from "@/types/education";
import { ICONS } from "@/constants/img_string";

export const educationData: EducationItem[] = [
    {
        institution: "BINUS University",
        degree: "Bachelor's Degree, Information Systems",
        period: "2024 - 2026",
        details: [
            "Currently pursuing an online Bachelor's degree in Information Systems.",
        ],
        logo: ICONS.BINUS_LOGO,
    },
    {
        institution: "Institut Teknologi Del",
        degree: "Associate Degree, Information Technology",
        period: "2021 - 2024",
        details: [
            "GPA: 3.56/4.00",
            "Relevant Courses: Web Development, Mobile Development, Database Systems, Algorithms & Machine Learning",
            "Developer for Kedaireka Matching Fund Program in 2023",
            "Teaching Assistant / Practicum Assistant for Computer Architecture and Organization course TA. 2022/2023",
            "Gemastik XV Competition Participation in 2022",
        ],
        logo: ICONS.IT_DEL_LOGO,
    },
];
