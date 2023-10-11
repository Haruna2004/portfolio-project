function Input({ placeholder }) {
  return (
    <div className="bg-[#0F2153] rounded-[0.3125rem] py-4 px-4 w-full  ring-slate-100/30 focus-within:ring-1 transition-colors duration-150 ease-linear">
      <input
        className="bg-transparent placeholder:text-white/60 text-white/90 w-full h-full outline-none"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
