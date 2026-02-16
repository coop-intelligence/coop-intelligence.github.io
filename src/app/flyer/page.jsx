import Hero from "./Hero";
import Overview from "./Overview";
import CallForPapers from "./CallForPapers";
import ImportantDates from "./ImportantDates";
import AwardsSupport from "./AwardsSupport";
import InvitedSpeakers from "./InvitedSpeakers";
import OrganizingCommittee from "./OrganizingCommittee";
import ContactSponsors from "./ContactSponsors";
import HeaderHider from "./HeaderHider";

export const metadata = {
  title: "3rd MEIS Workshop @ CVPR 2026",
};

export default function SenseOfSpacePage() {
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center pb-10 bg-gradient-to-b from-sky-50 via-sky-100 to-sky-200 overflow-x-hidden">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-sky-100/80 blur-3xl" />
      </div>
      <HeaderHider />
      <div className="relative z-10 w-full">
        <Hero />
        <Overview />
        {/* <CallForPapers /> */}
        <ImportantDates />
        {/* <AwardsSupport /> */}
        <InvitedSpeakers />
        <OrganizingCommittee />
        <ContactSponsors />
      </div>
    </main>
  );
}
