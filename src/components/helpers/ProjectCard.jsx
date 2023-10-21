import { arrow_right } from "../../assets";

function ProjectCard({ name, product, sector, desc, proj_link }) {
  return (
    <div className="p-4 border border-white/60 rounded-xl">
      <div className="flex items-center justify-between text-[0.9375rem]">
        <p>{sector}</p>
        <p>{product}</p>
      </div>
      <h1 className="text-[2rem] font-semibold text-white mt-10 ">{name}</h1>
      <p className="mt-2">{desc}</p>
      <a
        href={proj_link}
        className="flex items-center gap-2 cursor-pointer mt-2"
      >
        <p className="text-white font-semibold text-xs">View Case Study</p>
        <img src={arrow_right} alt="arrow" className="w-7 h-7" />
      </a>
    </div>
  );
}

export default ProjectCard;
