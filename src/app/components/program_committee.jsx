import CommitteeAvatar from "./program-avatar";

const ProgramCommittee = ()=>{
    return <div className="text-justify mt-4"> 
        <div className="grid sm:grid-cols-5 grid-cols-2 mt-4">
            <CommitteeAvatar name="Jiahao Wang" affiliation="Tsinghua University"/>
            <CommitteeAvatar name="Jiahui Xu" affiliation="Beijing Institute of Technology"/>
            <CommitteeAvatar name="Haoyu Li" affiliation="Beijing Institute of Technology"/>
            <CommitteeAvatar name="Ruiyang Hao" affiliation="Tsinghua University" link="https://ry-hao.top/"/>
            <CommitteeAvatar name="Siqi Fan" affiliation="Tsinghua University" link="https://leofansq.github.io/"/>
            <CommitteeAvatar name="Wenxian Yang" affiliation="Tsinghua University"/>
            <CommitteeAvatar name="Yuexin Ma" affiliation="ShanghaiTech University" link="https://yuexinma.me/"/>
            <CommitteeAvatar name="Yang Liu" affiliation="Tsinghua University" link="https://sites.google.com/site/yangliuveronica/"/>
            <CommitteeAvatar name="Yan Wang" affiliation="Tsinghua University" link="https://yanwang202199.github.io/"/>
            <CommitteeAvatar name="Guangliang Cheng" affiliation="University of Liverpool" link="https://sites.google.com/view/guangliangcheng"/>
            <CommitteeAvatar name="Jirui Yuan" affiliation="Tsinghua University" link="https://air.tsinghua.edu.cn/en/info/1012/1219.htm"/>
            <CommitteeAvatar name="Mingyu Ding" affiliation="UNC-Chapel Hill" link="https://dingmyu.github.io/"/>
            <CommitteeAvatar name="Lipeng Chen" affiliation="Tencent Robotics X" link="https://ieeexplore.ieee.org/author/37086579788"/>
            <CommitteeAvatar name="Lin Li" affiliation="King’s College London" link="https://www.kcl.ac.uk/people/lin-li"/>
        </div>

        <br/>
       
    </div>
}
export default ProgramCommittee;
