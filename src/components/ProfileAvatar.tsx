import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ProfileAvatarProps {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}

export const ProfileAvatar = ({ src, alt, fallback, className }: ProfileAvatarProps) => {
  return (
    <Avatar className={cn("w-24 h-24 border-4 border-background", className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};