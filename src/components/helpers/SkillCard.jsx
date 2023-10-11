function SkillCard({ icon, title, description }) {
  return (
    <div className="flex flex-col rounded-3xl shadow bg-[#0F2153] pt-9 px-7 pb-16">
      <img src={icon} alt="" className="w-[3.75rem] h-[3.75rem]" />
      <h3 className="font-semibold text-2xl leading-[142.9%] text-white mt-7">
        {title}
      </h3>
      <p className="text-base leading-[142.9%] mt-6">{description}</p>
    </div>
  );
}

export default SkillCard;
