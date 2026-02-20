import SectionCard from "./SectionCard";

const ImportantDates = () => {
  const dates = [
    { label: "Paper submission Deadline", date: "15 Apr, 2026" },
    { label: "Notification of acceptance", date: "13 May, 2026" },
    { label: "Workshop date", date: "June 3, 2026" },
  ];

  return (
    <SectionCard id="sos-dates" title="Important Dates" variant="compact">
      <div className="grid grid-cols-3 gap-2">
        {dates.map((item) => (
          <div
            key={item.label}
            className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded p-1.5 border-l-3 border-sky-500"
          >
            <div className="text-[10px] text-slate-600">{item.label}</div>
            <div className="text-xs font-bold text-sky-700">
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default ImportantDates;
