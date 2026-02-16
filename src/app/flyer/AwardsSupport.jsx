import SectionCard from "./SectionCard";

const AwardsSupport = () => {
  return (
    <SectionCard id="sos-awards" title="Awards & Support">
      <ul className="list-disc list-inside space-y-2">
        <li>
          <span className="font-semibold">MEIS Best Paper Award</span>{" "}
          sponsored by Qualcomm, with monetary prizes.
        </li>
        <li>
          <span className="font-semibold">Travel support</span> for selected
          in-person presenters (subject to availability).
        </li>
      </ul>
    </SectionCard>
  );
};

export default AwardsSupport;


