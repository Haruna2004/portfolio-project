import SectionHeader from "../helpers/SectionHeader";

function About() {
  return (
    <section id="about" className="min-h-screen">
      <div className="flex items-center justify-center flex-col w-full h-full px-5">
        {/* section header */}
        <SectionHeader
          num="3"
          title="About"
          gradient="lightblue-gradient"
          text_clip="lightblue-text-clip"
        />
        {/* background-info */}
        <p className="text-center text-white/90 font-bold max-w-[63.0625rem] text-xl mt-16">
          I&apos;m a Front-End Developer located in Poland. I have a serious
          passion for UI effects, animations and creating intuitive, dynamic
          user experiences.Well-organised person, problem solver, independent
          employee with high attention to detail.
          <br />
          <br />
          Fan of MMA, outdoor activities, TV series and English literature. A
          family person and father of two fractious boys, Interested in the
          entire frontend spectrum and working on ambitious projects with
          positive people.
        </p>
        <p className="text-center font-bold text-xl lightblue-text-clip mt-14 mb-40">
          Let&apos;s make something special.
        </p>
      </div>
    </section>
  );
}

export default About;
