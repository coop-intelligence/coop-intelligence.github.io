import SectionCard from "./SectionCard";

const ContactSponsors = () => {
  return (
    <SectionCard id="sos-contact" title="Sponsors">
      <div className="space-y-6">
        <div>
          <p className="font-semibold mb-3">Best Paper Award Sponsor</p>
          <div className="flex flex-col items-center space-y-3">
            <img
              src="/Qualcomm-Logo.wine.png"
              alt="Qualcomm"
              className="w-56 sm:w-72 h-auto drop-shadow-lg"
            />
            <p className="text-sm text-center">
              The MEIS Best Paper Award is generously sponsored by Qualcomm.
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default ContactSponsors;


