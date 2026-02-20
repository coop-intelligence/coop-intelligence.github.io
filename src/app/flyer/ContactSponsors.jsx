import SectionCard from "./SectionCard";

const ContactSponsors = () => {
  return (
    <SectionCard id="sos-contact" title="Sponsors & Contact" variant="compact">
      <div className="flex items-center gap-4">
        {/* Sponsor logo */}
        <div className="bg-gradient-to-br from-sky-700 via-sky-600 to-cyan-600 rounded-lg px-3 py-1.5 shadow-md flex-shrink-0 ring-1 ring-sky-500/20">
          <img
            src="/sponsor.png"
            alt="AxisRobotics"
            className="w-[120px] h-auto drop-shadow-lg"
          />
        </div>

        {/* Contact info */}
        <div className="bg-gradient-to-r from-slate-50 to-transparent rounded-lg px-3 py-1.5">
          <p className="text-[10px] leading-snug text-slate-700">
            Questions? Contact us at{" "}
            <span className="text-sky-600 font-semibold">meis-cvpr-2026@googlegroups.com</span>{" "}
            or{" "}
            <span className="text-sky-600 font-semibold">xiangbog@tamu.edu</span>.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default ContactSponsors;
