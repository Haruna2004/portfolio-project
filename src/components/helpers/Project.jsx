function Project({ name, description, image1, image2, image3 }) {
  return (
    <div className="flex flex-col items-center gap-3 mt-24">
      <h1 className="font-bold text-5xl text-center text-white">{name}</h1>
      <p className="leading-[142.9%] text-[1.125rem] text-center max-w-[36.375rem]">
        {description}
      </p>
      <div className="mt-10 flex flex-col items-center gap-5">
        <img
          src={image1}
          alt="proj-img"
          className="max-w-[61.75rem] max-h-[41.625rem]"
        />
        <div className="flex w-full items-center justify-between">
          <img
            src={image2}
            alt="proj-img"
            className="max-w-[30.25rem] max-h-[23.75rem]"
          />
          <img
            src={image3}
            alt="proj-img"
            className="max-w-[30.25rem] max-h-[23.75rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
