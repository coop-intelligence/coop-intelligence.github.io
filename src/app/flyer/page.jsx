import Hero from "./Hero";
import Overview from "./Overview";
import CallForPapers from "./CallForPapers";
import ImportantDates from "./ImportantDates";
import AwardsSupport from "./AwardsSupport";
import InvitedSpeakers from "./InvitedSpeakers";
import OrganizingCommittee from "./OrganizingCommittee";
import ProgramCommittee from "./ProgramCommittee";
import ContactSponsors from "./ContactSponsors";
import HeaderHider from "./HeaderHider";

export const metadata = {
  title: "3rd MEIS Workshop @ CVPR 2026",
};

export default function SenseOfSpacePage() {
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center bg-gradient-to-b from-sky-50 via-sky-100 to-white overflow-x-hidden">
      {/* Background image for the whole page */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <img
          src="/bg.png"
          alt="Denver skyline with mountains"
          className="w-full h-full object-cover object-center opacity-30"
        />
      </div>

      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-sky-100/80 blur-3xl" />
      </div>
      <HeaderHider />
      <div className="relative z-10 w-full pb-0">
        {/* Unified poster container */}
        <div className="w-full bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden">
          <Hero />
          <div className="bg-white/95 backdrop-blur-sm">
            <Overview />
            {/* <CallForPapers /> */}
            {/* <ImportantDates /> */}
            {/* <AwardsSupport /> */}
            <InvitedSpeakers />
            <OrganizingCommittee />
            <ProgramCommittee />
            <ContactSponsors />
          </div>
        </div>
      </div>
    </main>
  );
}
