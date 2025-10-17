import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

interface GitHubButtonProps {
  githubUrl?: string;
  variant?:
    | "outline"
    | "default"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive";
  showText?: boolean;
}

export const GitHubButton = ({
  githubUrl,
  variant = "outline",
  showText = true,
}: GitHubButtonProps) => {
  if (!githubUrl) {
    return (
      <Button variant={variant} disabled>
        <Github className="mr-2 h-4 w-4" />
        {showText ? "GitHub" : "Private Repository"}
      </Button>
    );
  }

  return (
    <Button asChild variant={variant}>
      <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
        <Github className="mr-2 h-4 w-4" />
        {showText ? "GitHub" : "View on GitHub"}
      </Link>
    </Button>
  );
};
