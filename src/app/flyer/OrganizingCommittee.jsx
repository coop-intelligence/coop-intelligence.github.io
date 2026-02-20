import SectionCard from "./SectionCard";
import PersonAvatar from "../components/person-avatar";

const OrganizingCommittee = () => {
  return (
    <SectionCard id="sos-organizers" title="Organizers" variant="compact">
      <div className="grid grid-cols-10 mt-1 gap-y-1 gap-x-0.5">
        <PersonAvatar name="Xiangbo Gao" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/xiangbo_gao.png" affiliation="Texas A&M" link="https://www.xiangbogao.com/" />
        <PersonAvatar name="Yuheng Wu" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/yuheng_wu.png" affiliation="KAIST" link="https://wyhallenwu.github.io/" />
        <PersonAvatar name="Dongman Lee" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/dongman_lee.png" affiliation="KAIST" link="https://cds.kaist.ac.kr/people/dongmanlee" />
        <PersonAvatar name="Haibao Yu" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/haibao_yu.jpg" affiliation="HKU" link="https://www.linkedin.com/in/haibao-yu-152221118" />
        <PersonAvatar name="Walter Zimmer" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/walter_zimmer.jpeg" affiliation="TU Munich" link="https://walzimmer.github.io/website/" />
        <PersonAvatar name="Ross Greer" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/ross.png" affiliation="TU Munich" link="https://www.rossgreer.com/" />
        <PersonAvatar name="B. Bucher" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/Bernadette_Bucher.png" affiliation="UMich" link="https://bucherb.github.io/" />
        <PersonAvatar name="Zilin Huang" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/zilin_huang.png" affiliation="UW-Madison" link="https://www.huang-zilin.com/" />
        <PersonAvatar name="Yue Hu" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/yue_hu.png" affiliation="UMich" link="https://phyllish.github.io/" />
        <PersonAvatar name="Can Cui" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/can_cui.png" affiliation="Purdue" link="https://cancui19.github.io/" />
        <PersonAvatar name="Yuping Wang" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/yuping_wang.png" affiliation="UMich" link="https://www.linkedin.com/in/yuping-wang-5a7178185/" />
        <PersonAvatar name="Zhiwen Fan" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/zhiwen_fan.png" affiliation="Texas A&M" link="https://zhiwenfan.github.io/" />
        <PersonAvatar name="Jiachen Li" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/jiachen_li.jpg" affiliation="UC Riverside" link="https://jiachenli94.github.io/" />
        <PersonAvatar name="Ziran Wang" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/ziran_wang.png" affiliation="Purdue" link="https://ziranw.github.io/" />
        <PersonAvatar name="Yang Zhou" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/yang_zhou.png" affiliation="Texas A&M" link="https://sites.google.com/view/yangzhouwebsite" />
        <PersonAvatar name="Hao Yang" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/hao_yang.png" affiliation="JHU" link="https://www.haofrankyang.net/" />
        <PersonAvatar name="Rui Song" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/song_rui.png" affiliation="UCLA" link="https://rruisong.github.io/" />
        <PersonAvatar name="Fangzhou Lin" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/lin_fangzhou.png" affiliation="Texas A&M" link="https://ark1234.github.io/" />
        <PersonAvatar name="Zhengzhong Tu" nameClass="text-[8px]" affilClass="text-[7px]" imageClass="w-[3em] h-[3em]" image="/zhengzhong_tu.png" affiliation="Texas A&M" link="https://vztu.github.io/" />
      </div>
    </SectionCard>
  );
};

export default OrganizingCommittee;
