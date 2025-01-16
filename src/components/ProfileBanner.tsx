import { cn } from "@/lib/utils";

interface ProfileBannerProps {
  className?: string;
}

export const ProfileBanner = ({ className }: ProfileBannerProps) => {
  return (
    <div className={cn("relative w-full h-48 overflow-hidden rounded-t-xl", className)}>
      <div className="absolute inset-0 holographic-banner" />
      <div className="absolute inset-0 profile-gradient" />
    </div>
  );
};