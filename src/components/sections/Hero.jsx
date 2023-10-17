function Hero() {
  return (
    <section id="#home" className="text-white h-screen">
      <div className="flex flex-col items-center justify-center w-full h-5/6 sm:px-10 md:px-40 xl:px-96">
        <h1 className="text-white font-bold text-[4rem] text-center">
          Hi, I&apos;m Daniel
        </h1>
        <h3 className="text-center font-semibold text-4xl blue-text-clip px-2">
          I create visual designs and layouts for websites.
        </h3>
        <button className="inline-flex mt-7 px-10 py-[0.94rem] border border-textPrimary rounded-[0.31rem] text-center text-white font-bold text-[0.94rem]">
          Contact me
        </button>
      </div>
    </section>
  );
}

export default Hero;
