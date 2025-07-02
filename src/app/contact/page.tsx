
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const contactMethods = [
  {
    icon: faEnvelope,
    title: "Email",
    value: "josuasiregar0103@gmail.com",
    href: "mailto:josuasiregar0103@gmail.com",
    cta: "Send an Email"
  },
  {
    icon: faLinkedin,
    title: "LinkedIn",
    value: "/in/josua-siregar",
    href: "https://www.linkedin.com/in/josua-siregar/",
    cta: "Connect on LinkedIn"
  },
  {
    icon: faGithub,
    title: "GitHub",
    value: "/srgjo27",
    href: "https://github.com/srgjo27",
    cta: "View on GitHub"
  }
];

export default function ContactPage() {
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight font-headline">Get In Touch</h2>
      </div>
      <p className="text-lg text-muted-foreground">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map((method, index) => (
          <Card key={index} className="flex flex-col justify-between text-center transition-all hover:shadow-lg hover:shadow-accent/10">
            <CardHeader>
              <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit">
                <FontAwesomeIcon icon={method.icon} className="h-10 w-10 text-accent" />
              </div>
              <CardTitle className="font-headline mt-4">{method.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="font-code text-muted-foreground">{method.value}</p>
            </CardContent>
            <div className="p-6 pt-0">
               <Button asChild variant="outline">
                 <Link href={method.href} target="_blank">
                   {method.cta}
                 </Link>
               </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
