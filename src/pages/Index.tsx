import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProfileBanner } from "@/components/ProfileBanner";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Mail, MapPin, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto overflow-hidden">
        <ProfileBanner />
        
        <div className="relative px-4 pb-8">
          <div className="flex flex-col items-center -mt-12">
            <ProfileAvatar
              src="/placeholder.svg"
              alt="Profile"
              fallback="AS"
            />
            
            <div className="mt-4 text-center">
              <h1 className="text-2xl font-bold">Anurag Subedi</h1>
              <p className="text-muted-foreground">Software Engineer</p>
            </div>

            <div className="mt-6">
              <SocialLinks />
            </div>

            <div className="w-full mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">anurag@zalient.me</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+977981695795</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>
            </div>

            <div className="w-full mt-8">
              <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
              <ContactForm />
            </div>

            <div className="w-full mt-8 text-center">
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-2">
                  Want to add this profile to your phone?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Save Anurag Subedi's contact information directly to your phone's address book
                </p>
                <Button variant="secondary">
                  Add to Contacts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;