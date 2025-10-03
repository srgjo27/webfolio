"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import { ICONS } from "@/constant/img_string";

const educationData = [
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

export default function EducationPage() {
  const main = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      tl.from(".education-title", { opacity: 0, x: -30 }).from(
        ".education-card",
        {
          opacity: 0,
          y: 40,
          stagger: 0.2,
        },
        "-=0.5"
      );
    },
    { scope: main }
  );

  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6" ref={main}>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="education-title text-3xl font-bold tracking-tight font-headline">
          Education
        </h2>
      </div>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <Card
            key={index}
            className="education-card hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              <span
                className="font-code text-accent/50 absolute top-4 animate-drip-long"
                style={{
                  right: "5%",
                  fontSize: "12px",
                  animationDelay: "1.2s",
                  animationDuration: "8s",
                }}
              >
                1
              </span>
              <span
                className="font-code text-accent/30 absolute top-8 animate-drip-long"
                style={{
                  right: "15%",
                  fontSize: "10px",
                  animationDelay: "3.5s",
                  animationDuration: "9s",
                }}
              >
                0
              </span>
              <span
                className="font-code text-accent/50 absolute top-2 animate-drip-long"
                style={{
                  right: "25%",
                  fontSize: "12px",
                  animationDelay: "0.8s",
                  animationDuration: "7.5s",
                }}
              >
                0
              </span>
              <span
                className="font-code text-accent/40 absolute top-12 animate-drip-long"
                style={{
                  right: "35%",
                  fontSize: "11px",
                  animationDelay: "4.5s",
                  animationDuration: "8.2s",
                }}
              >
                1
              </span>
            </div>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-md flex items-center justify-center w-14 h-14">
                {edu.logo ? (
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} Logo`}
                    width={40}
                    height={40}
                    className="object-contain h-8 w-8"
                  />
                ) : (
                  <GraduationCap className="h-8 w-8 text-accent" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl font-headline">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {edu.institution}
                    </CardDescription>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-foreground/80">
                    {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
