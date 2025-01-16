import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProfileBanner } from "@/components/ProfileBanner";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Mail, MapPin, Phone, Briefcase, Calendar, Globe } from "lucide-react";

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

            <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 hover:bg-secondary/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Email</span>
                    <span className="text-sm font-medium">anurag@zalient.me</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:bg-secondary/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Phone</span>
                    <span className="text-sm font-medium">+977981695795</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:bg-secondary/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Location</span>
                    <span className="text-sm font-medium">Kathmandu, Nepal</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:bg-secondary/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Role</span>
                    <span className="text-sm font-medium">Software Engineer</span>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:bg-secondary/10 transition-colors sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Globe className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Website</span>
                    <span className="text-sm font-medium">www.anuragsubedi.com.np</span>
                  </div>
                </div>
              </Card>
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