import Input from "../helpers/Input";
import SectionHeader from "../helpers/SectionHeader";

function Contact() {
  return (
    <section id="contact" className="min-h-screen">
      <div className="flex items-center justify-center flex-col w-full h-full">
        {/* section header */}
        <SectionHeader
          num="4"
          title="Contact"
          gradient="lightyellow-gradient"
          text_clip="lightyellow-text-clip"
        />
        {/* message */}
        <p className="text-center max-w-[63.0625rem] font-bold text-white mt-14">
          I&apos;m interested in freelance opportunities -- especially ambitious
          or large projects. However, if you have other request or question,
          don&apos;t hesitate to use the form.
        </p>
        {/* inputs */}
        <div className="mt-[6.63rem] flex flex-col items-center gap-[0.94rem]">
          <div className="flex gap-[0.94rem]">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
          </div>
          <Input placeholder="Subject" />
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Message"
            className="w-full bg-[#0F2153] rounded-[0.3125rem] px-4 py-4 outline-none text-white focus:ring-1  ring-slate-100/30"
          ></textarea>
        </div>
        <button className="px-8 py-3 mt-7 border rounded-md border-[#FDE631]  text-[#FDE92A] text-base mb-40 hover:scale-105 active:bg-white/10 transition-colors duration-300 ease-out">
          Send Message
        </button>
      </div>
    </section>
  );
}

export default Contact;
