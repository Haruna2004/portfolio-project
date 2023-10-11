import cn from "classnames";
function SectionHeader({ num, title, text_clip, gradient }) {
  return (
    <div className="flex flex-col items-center">
      <div className={cn("w-[0.07rem] h-[4.37rem] mt-5", gradient)}></div>
      <div
        className={cn(
          "w-10 h-10 rounded-full font-bold text-black text-xl relative",
          gradient
        )}
      >
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {num}
        </p>
      </div>
      <h3
        className={cn(" text-center font-bold text-[2.5rem] mt-3", text_clip)}
      >
        {title}
      </h3>
    </div>
  );
}

export default SectionHeader;
