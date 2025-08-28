"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const projectsData = [
  {
    title: "EcoApp",
    period: "-",
    shortDescription:
      "EcoApp adalah aplikasi mobile - Cart Management: Swipe gestures dan quantity controls.",
    details: [
      "Modern Design: Clean dan minimalist interface dengan eco-friendly color scheme.",
      "Responsive Layout: Adaptive design untuk berbagai ukuran layar.",
      "Intuitive Navigation: Bottom navigation bar dan smooth transitions.",
      "Visual Hierarchy: Typography yang jelas dengan Poppins font family.",
      "Interactive Elements: Cards, buttons, dan icons yang responsive.",
      "Product Showcase: Grid layout untuk product listing dengan wishlist functionality.",
      "Search Experience: Real-time search dengan category filtering.",
      "Cart Management: Swipe gestures dan quantity controls.",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "mobile app",
    tags: ["Flutter", "Riverpod", "UI/UX", "REST API"],
    github: "https://github.com/srgjo27/ecoapp",
  },
  {
    title: "Product Recommendation with Algorithms",
    period: "Sep 2023 - Jul 2024",
    shortDescription:
      "A machine learning-powered system providing accurate recommendations, featuring a Laravel front-end and a Python back-end.",
    details: [
      "Developed a front-end using HTML, CSS, JavaScript, and PHP with the Laravel framework, incorporating AJAX for asynchronous data updates.",
      "Utilized MySQL for efficient database management.",
      "Implemented back-end machine learning algorithms in Python, improving product recommendation accuracy by 80%.",
      "Integrated a REST API to connect the front-end and back-end, accelerating data exchange.",
      "Optimized the recommendation model using MAE and RMSE, achieving an error rate below 1.",
      "Deployed the application on a VPS to ensure optimal scalability and performance for high user traffic.",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "recommendation algorithm",
    tags: [
      "Laravel",
      "PHP",
      "Machine Learning",
      "Python",
      "MySQL",
      "AJAX",
      "REST API",
    ],
    github: "https://github.com/srgjo27/ud_anthony",
  },
  {
    title: "DELHUB",
    period: "Jan 2023 - Jun 2024",
    shortDescription:
      "A mobile app to digitize academic administration for students and supervisors, featuring scheduling, grading, and document uploads.",
    details: [
      "Designing and developing DELHUB mobile applications for the digitization of Final Project (TA), Final Project (PA), and Practical Work (KP) administration for students and supervisors.",
      "Build key features, including tutoring schedule management, grade input, and document upload.",
      "Integrate the mobile application (Flutter) with the admin dashboard (Laravel) through REST API, which speeds up the data synchronization process.",
      "Implemented real-time notifications using Firebase Messaging for schedule and status updates, improving system responsiveness.",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "mobile app",
    tags: ["Flutter", "Laravel", "REST API", "Firebase", "Mobile Development"],
  },
  {
    title: "MARKETKU",
    period: "Oct 2022 - Des 2022",
    shortDescription:
      "A JavaFX desktop application for market management, featuring inventory and sales tracking with a MySQL backend.",
    details: [
      "Built advanced desktop applications using Java FX with an OOP approach, ensuring code modularity and scalability.",
      "Designed an interactive and intuitive user interface using FXML, significantly improving user experience.",
      "Integrated MySQL database via JDBC, enabling efficient data handling and ensuring reliable, real-time connectivity.",
      "Implemented key features such as inventory management, sales monitoring, and user productivity.",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "desktop application",
    tags: ["JavaFX", "Java", "MySQL", "JDBC", "Desktop App"],
    github: "https://github.com/srgjo27/MarketKu-Desktop-Web",
  },
];

export default function ProjectsPage() {
  const main = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
      });

      tl.from(".projects-title", { opacity: 0, x: -30 }).from(
        ".project-card",
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
        <h2 className="projects-title text-3xl font-bold tracking-tight font-headline">
          Projects
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <Dialog>
              <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg hover:shadow-primary/10">
                <CardHeader className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </CardHeader>
                <div className="flex flex-col flex-1 p-6">
                  <CardTitle className="font-headline text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {project.shortDescription}
                  </CardDescription>
                  <div className="flex-grow" />
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-code"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardFooter className="grid grid-cols-2 gap-4">
                  <DialogTrigger asChild>
                    <Button variant="secondary">View Details</Button>
                  </DialogTrigger>
                  {project.github ? (
                    <Button asChild variant="outline">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                  )}
                </CardFooter>
              </Card>

              <DialogContent className="max-w-2xl bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl text-primary">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription>{project.period}</DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-2 my-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-code">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-4 text-sm text-foreground/80 max-h-[60vh] overflow-y-auto pr-4">
                  <ul className="list-disc space-y-2 pl-5">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <DialogFooter className="sm:justify-start pt-4">
                  {project.github ? (
                    <Button asChild variant="outline">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      <Github className="mr-2 h-4 w-4" /> Private Repository
                    </Button>
                  )}
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
