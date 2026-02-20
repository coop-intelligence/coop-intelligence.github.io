const SectionCard = ({ id, title, children, variant = "default" }) => {
  const variants = {
    default: "py-2",
    compact: "py-1.5",
    spacious: "py-2.5",
  };

  return (
    <section
      id={id}
      className={`w-full ${variants[variant] || variants.default} border-b border-sky-100 last:border-b-0`}
    >
      <div className="w-full px-4 sm:px-8">
        {title && (
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-1 h-4 rounded-full bg-gradient-to-b from-sky-500 to-cyan-400" />
            <h2 className="text-base sm:text-lg font-extrabold text-sky-900 tracking-tight">
              {title}
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-sky-200 to-transparent" />
          </div>
        )}
        <div className="text-xs sm:text-sm leading-snug text-slate-800">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
