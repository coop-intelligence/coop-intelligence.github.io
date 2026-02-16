import PersonAvatar from "./person-avatar";

const Organizers = ()=>{
    return <div className="text-justify">
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
            <PersonAvatar name="Xiangbo Gao" image="/xiangbo_gao.png" affiliation={"Texas A&M University"} link={"https://www.xiangbogao.com/"}/>
            <PersonAvatar name="Yuheng Wu" image="/yuheng_wu.png" affiliation={"KAIST"} link={"https://wyhallenwu.github.io/"}/>
            <PersonAvatar name="Dongman Lee" image="/dongman_lee.png" affiliation={"KAIST"} link={"https://cds.kaist.ac.kr/people/dongmanlee"}/>
            <PersonAvatar name="Haibao Yu" image="/haibao_yu.jpg" affiliation={"University of Hong Kong"} link={"https://www.linkedin.com/in/haibao-yu-152221118"}/>
            <PersonAvatar name="Walter Zimmer" image="/walter_zimmer.jpeg" affiliation={"Technical University of Munich"} link={"https://walzimmer.github.io/website/"}/>
            <PersonAvatar name="Ross Greer" image="/ross.png" affiliation={"Technical University of Munich"} link={"https://www.rossgreer.com/"}/>
            <PersonAvatar name="Bernadette Bucher" image="/Bernadette_Bucher.png" affiliation={"University of Michigan"} link={"https://bucherb.github.io/"}/>
            <PersonAvatar name="Zilin Huang" image="/zilin_huang.png" affiliation={"University of Wisconsin–Madison"} link={"https://www.huang-zilin.com/"}/>
            <PersonAvatar name="Yue Hu" image="/yue_hu.png" affiliation={"University of Michigan"} link={"https://phyllish.github.io/"}/>
            <PersonAvatar name="Can Cui" image="/can_cui.png" affiliation={"Purdue University"} link={"https://cancui19.github.io/"}/>
            <PersonAvatar name="Yuping Wang" image="/yuping_wang.png" affiliation={"University of Michigan"} link={"https://www.linkedin.com/in/yuping-wang-5a7178185/"}/>
            <PersonAvatar name="Zhiwen Fan" image="/zhiwen_fan.png" affiliation={"Texas A&M University"} link={"https://zhiwenfan.github.io/"}/>
            <PersonAvatar name="Jiachen Li" image="/jiachen_li.jpg" affiliation={"University of California, Riverside"} link={"https://jiachenli94.github.io/"}/>
            <PersonAvatar name="Ziran Wang" image="/ziran_wang.png" affiliation={"Purdue University"} link={"https://ziranw.github.io/"}/>
            <PersonAvatar name="Yang Zhou" image="/yang_zhou.png" affiliation={"Texas A&M University"} link={"https://sites.google.com/view/yangzhouwebsite"}/>
            <PersonAvatar name="Hao Yang" image="/hao_yang.png" affiliation={"Johns Hopkins University"} link={"https://www.haofrankyang.net/"}/>
            <PersonAvatar name="Rui Song" image="/song_rui.png" affiliation={"UCLA"} link={"https://rruisong.github.io/"}/>
            <PersonAvatar name="Fangzhou Lin" image="/lin_fangzhou.png" affiliation={"Texas A&M University"} link={"https://ark1234.github.io/"}/>
            <PersonAvatar name="Zhengzhong Tu" image="/zhengzhong_tu.png" affiliation={"Texas A&M University"} link={"https://vztu.github.io/"}/>
        </div>

        <br/>
        <p>
            <span className="font-bold">Contact: </span>If you have any questions, please contact us at: <span className="text-blue-500"> meis-cvpr-2026@googlegroups.com </span> or <span className="text-blue-500"> xiangbog@tamu.edu </span>.
        </p>
       
    </div>
}
export default Organizers;
