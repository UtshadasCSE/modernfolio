import EducationCard from "@/components/EducationCard";
import ExpertiseCard from "@/components/ExpertiseCard";
import Footer from "@/components/Footer";
import IconCard from "@/components/IconCard";
import ProfileCard from "@/components/ProfileCard";
import ProjectCard from "@/components/ProjectCard";
import TitleCard from "@/components/TitleCard";
import WorkCard from "@/components/WorkCard";

export default function Home() {
  return (
    <div className="lg:flex lg:gap-5 py-2" suppressHydrationWarning>
      {/* left content  */}
      <div className="lg:w-1/3">
        <ProfileCard />
      </div>
      {/* right content  */}
      <div className="lg:w-2/3 max-sm:my-3 md:my-3">
        <div>
          <TitleCard title="Tech Stack" />
          <IconCard />
          <TitleCard title="Specialize In" />
          <ExpertiseCard />
          <TitleCard title="Previous Client Projects" />
          <ProjectCard />
          <TitleCard title=" Work History" />
          <WorkCard />
          <TitleCard title=" Work History" />
          <EducationCard />
          <Footer />
        </div>
      </div>
    </div>
  );
}
