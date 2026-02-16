import SectionCard from "./SectionCard";

const ContactSponsors = () => {
  return (
    <SectionCard id="sos-contact" title="Sponsors & Contact" variant="spacious">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Left column: Sponsor */}
        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-lg p-6 sm:p-8">
          <p className="font-bold text-lg mb-4 text-sky-900">Best Paper Award Sponsor</p>
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/Qualcomm-Logo.wine.png"
              alt="Qualcomm"
              className="w-28 sm:w-36 h-auto drop-shadow-lg"
            />
            {/* <p className="text-sm sm:text-base text-center text-slate-700">
              The MEIS Best Paper Award is generously sponsored by Qualcomm.
            </p> */}
          </div>
        </div>
        
        {/* Right column: Contact */}
        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-lg p-6 sm:p-8">
          <p className="font-bold text-lg mb-4 text-sky-900">Contact</p>
          <p className="text-sm sm:text-base leading-relaxed">
            If you have any questions, please contact us at:{" "}
            <span className="text-sky-600 font-medium">meis-cvpr-2026@googlegroups.com</span>{" "}
            or{" "}
            <span className="text-sky-600 font-medium">xiangbog@tamu.edu</span>.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default ContactSponsors;


