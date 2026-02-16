import SectionCard from "./SectionCard";

const ImportantDates = () => {
  const dates = [
    {
      label: "Paper submission Deadline",
      date: "15 Apr, 2026",
    },
    {
      label: "Notification of acceptance",
      date: "27 May, 2026",
    },
    {
      label: "Workshop date",
      date: "June 3, 2026",
    },
  ];

  return (
    <SectionCard id="sos-dates" title="Important Dates">
      <div className="divide-y divide-slate-700">
        {dates.map((item) => (
          <div
            key={item.label}
            className="flex flex-col sm:flex-row sm:items-center justify-between py-2"
          >
            <span className="text-sm sm:text-base">{item.label}</span>
            <span className="mt-1 sm:mt-0 text-sm font-semibold text-amber-300">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default ImportantDates;


