import { arrow_right } from "../../assets";

function ProjectCard() {
  return (
    <div className="p-4 border border-white/60 rounded-xl">
      <div className="flex items-center justify-between text-[0.9375rem]">
        <p>Ecommerce</p>
        <p>Website</p>
      </div>
      <h1 className="text-[2rem] font-semibold text-white mt-10 ">Jumia</h1>
      <p className="mt-2">
        technology has the potential to transform everyday life in Africa, for
        the better.
      </p>
      <div className="flex items-center gap-2 cursor-pointer mt-2">
        <p className="text-white font-semibold text-xs">View Case Study</p>
        <img src={arrow_right} alt="arrow" className="w-7 h-7" />
      </div>
    </div>
  );
}

export default ProjectCard;
