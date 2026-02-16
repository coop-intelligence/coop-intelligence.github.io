const SectionCard = ({ id, title, children }) => {
  return (
    <section
      id={id}
      className="w-full flex justify-center px-4 sm:px-0 mt-6"
    >
      <div className="w-full sm:w-[65em] rounded-2xl bg-white text-slate-900 shadow-lg border border-sky-200 overflow-hidden">
        {title && (
          <div className="px-6 py-3 bg-sky-50 border-b border-sky-200 text-lg sm:text-xl font-semibold text-sky-900">
            {title}
          </div>
        )}
        <div className="px-6 py-5 text-sm sm:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionCard;


