import { case_studies, projects } from "../../constants";
import Project from "../helpers/Project";
import ProjectCard from "../helpers/ProjectCard";
import SectionHeader from "../helpers/SectionHeader";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="h-fit min-h-screen section-heigh">
      <div className="flex items-center justify-center flex-col w-full h-full">
        <p className="text-base text-white">Explore</p>
        <SectionHeader
          num="2"
          title="Case Studies"
          gradient="blue-gradient"
          text_clip="blue-text-clip"
        />

        {/* projects */}
        <div className="flex flex-col items-center">
          {case_studies.map((case_study) => (
            <Project key={case_study.name} {...case_study} />
          ))}
        </div>

        {/* other projects */}
        <div className="flex items-center gap-5 justify-around my-[15rem] w-full px-10 sm:px-24 flex-col md:flex-row">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
