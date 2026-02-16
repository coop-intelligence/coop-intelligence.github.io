const SectionCard = ({ id, title, children, variant = "default" }) => {
  const variants = {
    default: "py-8",
    compact: "py-6",
    spacious: "py-12",
  };

  return (
    <section
      id={id}
      className={`w-full ${variants[variant] || variants.default} border-b border-sky-200/50 last:border-b-0`}
    >
      <div className="w-full px-6 sm:px-10">
        {title && (
          <h2 className="text-xl sm:text-2xl font-bold text-sky-900 mb-4 sm:mb-6 tracking-tight">
            {title}
          </h2>
        )}
        <div className="text-sm sm:text-base leading-relaxed text-slate-800">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionCard;

