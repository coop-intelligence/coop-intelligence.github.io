import SectionCard from "./SectionCard";

const ImportantDates = () => {
  const dates = [
    {
      label: "Paper submission Deadline",
      date: "15 Apr, 2026",
    },
    {
      label: "Notification of acceptance",
      date: "13 May, 2026",
    },
    {
      label: "Workshop date",
      date: "June 3, 2026",
    },
  ];

  return (
    <SectionCard id="sos-dates" title="Important Dates" variant="compact">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {dates.map((item) => (
          <div
            key={item.label}
            className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-lg p-4 border-l-4 border-sky-500"
          >
            <div className="text-xs sm:text-sm text-slate-600 mb-2">{item.label}</div>
            <div className="text-lg sm:text-xl font-bold text-sky-700">
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default ImportantDates;


