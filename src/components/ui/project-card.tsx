import Image from "next/image";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { GitHubButton } from "@/components/ui/github-button";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-200">
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
            <Badge key={tag} variant="secondary" className="font-code">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <CardFooter className="grid grid-cols-2 gap-4">
        <DialogTrigger asChild>
          <Button variant="secondary">View Details</Button>
        </DialogTrigger>
        <GitHubButton githubUrl={project.github} />
      </CardFooter>
    </Card>
  );
};
