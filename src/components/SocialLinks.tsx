import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const SocialLinks = () => {
  return (
    <div className="flex gap-2 justify-center">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-secondary/80"
          asChild
        >
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );
};