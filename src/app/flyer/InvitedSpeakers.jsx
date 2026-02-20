import SectionCard from "./SectionCard";
import PersonAvatar from "../components/person-avatar";

const InvitedSpeakers = () => {
  return (
    <SectionCard id="sos-speakers" title="Invited Speakers" variant="default">
      <div>
        <div className="grid grid-cols-5 gap-2">
          <PersonAvatar imageClass="w-[4.5em] h-[4.5em]" nameClass="text-[11px]" affilClass="text-[9px]" name="Xiaopeng (Shaw) Li" image="/xiaopeng_li.png" affiliation="UW-Madison" link="https://engineering.wisc.edu/directory/profile/xiaopeng-li/" />
          <PersonAvatar imageClass="w-[4.5em] h-[4.5em]" nameClass="text-[11px]" affilClass="text-[9px]" name="Siheng Chen" image="/siheng_chen.jpg" affiliation="SJTU" link="https://siheng-chen.github.io/" />
          <PersonAvatar imageClass="w-[4.5em] h-[4.5em]" nameClass="text-[11px]" affilClass="text-[9px]" name="Henry Liu" image="/henry_liu.png" affiliation="UMich" link="https://traffic.engin.umich.edu/" />
          <PersonAvatar imageClass="w-[4.5em] h-[4.5em]" nameClass="text-[11px]" affilClass="text-[9px]" name="Bernadette Bucher" image="/Bernadette_Bucher.png" affiliation="UMich" link="https://bucherb.github.io/" />
          <PersonAvatar imageClass="w-[4.5em] h-[4.5em]" nameClass="text-[11px]" affilClass="text-[9px]" name="Jiachen Li" image="/jiachen_li.jpg" affiliation="UC Riverside" link="https://jiachenli94.github.io/" />
          <PersonAvatar imageClass="w-[4.5em] h-[4.5em]" nameClass="text-[11px]" affilClass="text-[9px]" name="Angela Dai" image="/angela_dai.png" affiliation="TU Munich" link="https://www.3dunderstanding.org/team.html" />
          <PersonAvatar imageClass="w-[4.5em] h-[4.5em]" nameClass="text-[11px]" affilClass="text-[9px]" name="Bolei Zhou" image="/bolei_zhou.png" affiliation="UCLA" link="https://boleizhou.github.io/" />
          <PersonAvatar imageClass="w-[4.5em] h-[4.5em]" nameClass="text-[11px]" affilClass="text-[9px]" name="Marco Pavone" image="/marco_pavone.jpeg" affiliation="Stanford" link="https://research.nvidia.com/person/marco-pavone" />
          <PersonAvatar imageClass="w-[4.5em] h-[4.5em]" nameClass="text-[11px]" affilClass="text-[9px]" name="Kun Zhan" image="/kun_zhan.png" affiliation="Li Auto" link="https://zhankunliauto.github.io/" />
          <PersonAvatar imageClass="w-[4.5em] h-[4.5em]" nameClass="text-[11px]" affilClass="text-[9px]" name="Manabu Tsukada" image="/manabu_tsukada.png" affiliation="U of Tokyo" link="https://tlab.hongo.wide.ad.jp/People/manabu-tsukada/" />
        </div>
      </div>
    </SectionCard>
  );
};

export default InvitedSpeakers;
