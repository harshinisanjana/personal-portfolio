import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarComponent";
import { Navbar } from "../components/NavBar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow x-hidden">
     <ThemeToggle />

     <StarBackground />

     <Navbar />
     <main>
        <HomeSection />
        <AboutSection />
        <SkillSection/>
        <ProjectsSection />
        <ContactSection />
     </main>
    </div>
  );
};
