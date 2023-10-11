import { skills } from "../../constants";
import SectionHeader from "../helpers/SectionHeader";
import SkillCard from "../helpers/SkillCard";

function Skills() {
  return (
    <section id="skills" className="min-h-screen h-fit">
      <div className="flex items-center justify-center flex-col w-full h-full">
        <SectionHeader
          num="2"
          title="Skills"
          gradient="yellow-gradient"
          text_clip="yellow-text-clip"
        />
        {/* background info */}
        <p className="text-center max-w-[63.0625rem] text-xl leading-[142.9%] mt-8">
          Since beginning my journey as a freelance developer nearly 10 years
          ago, I&apos;ve done remote work for agencies, consulted for startups,
          and collaborated with talented people to create web products for both
          business and consumer use.
          <br />
          <br />
          <br />I create successful responsive websites that are fast, easy to
          use, and built with best practices. The main area of my expertise is
          front-end development, HTML, CSS, JS, building small and medium web
          apps, custom plugins, features, animations, and coding interactive
          layouts.
        </p>
        {/* Skill cards */}
        <div className="mt-32 grid grid-cols-3 gap-x-5 gap-y-6 w-full px-24 mb-40">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
