import { cn } from "@/lib/utils";

interface ProfileBannerProps {
  className?: string;
}

export const ProfileBanner = ({ className }: ProfileBannerProps) => {
  return (
    <div className={cn("relative w-screen -ml-[50vw] left-1/2", className)}>
      <div className="relative mx-auto w-full sm:w-[70%] h-48 overflow-hidden">
        <div className="absolute inset-0 holographic-banner" />
        <div className="absolute inset-0 profile-gradient" />
      </div>
    </div>
  );
};