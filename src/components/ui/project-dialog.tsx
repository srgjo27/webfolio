import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { GitHubButton } from "@/components/ui/github-button";
import { Project } from "@/types/project";

interface ProjectDialogProps {
  project: Project;
}

export const ProjectDialog = ({ project }: ProjectDialogProps) => {
  return (
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
          {project.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      <DialogFooter className="sm:justify-start pt-4">
        <GitHubButton githubUrl={project.github} showText={false} />
      </DialogFooter>
    </DialogContent>
  );
};
