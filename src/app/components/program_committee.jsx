// Xiangbo Gao xiangbog@tamu.edu
// Yuheng Wu yuhengwu@kaist.ac.kr
// Pardis Taghavi ptgh@tamu.edu
// Jiaru Zhong zhong.jiaru@outlook.com
// Zhengzhong Tu tzz@tamu.edu
// Jiahao Wang wjh22@mails.tsinghua.edu.cn
// Abhishek Dharmaratnakar dharmaratnakar@google.com
// Xiukun Huang xiukunhg@gmail.com

const ProgramCommittee = ()=>{
    const pcMembers = [
        "Xiangbo Gao", 
        "Yuheng Wu",
        "Pardis Taghavi",
        "Jiaru Zhong",
        "Jiahao Wang",
        "Abhishek Dharmaratnakar",
        "Xiukun Huang",
        "Zhengzhong Tu",
    ];

    return <div className="text-justify mt-2"> 
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 mt-2">
            {pcMembers.map((name) => (
                <div key={name} className="bg-white rounded px-2 py-1 text-sm leading-snug shadow-sm border border-gray-100">
                    {name}
                </div>
            ))}
        </div>
        {/* <div className="grid sm:grid-cols-5 grid-cols-2 mt-4">
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
            <CommitteeAvatar name="Yue Hu" affiliation="Shanghai Jiao Tong University" link="https://phyllish.github.io/"/>
            <CommitteeAvatar name="Yunshuang Yuan" affiliation="Leibniz University Hannover"/>
            <CommitteeAvatar name="Xuting Duan" affiliation="Beihang University" link="https://shi.buaa.edu.cn/duanxuting/zh_CN/index.htm"/>
            <CommitteeAvatar name="Deyuan Qu" affiliation="University of North Texas"/>
            <CommitteeAvatar name="Minh David Thao Chan" affiliation="Tsinghua University"/>
            <CommitteeAvatar name="Hyunchul Bae" affiliation="Korea Advanced Institute of Science and Technology"/>
            <CommitteeAvatar name="Alberto Justo" affiliation="Tecnalia Research & Innovation" link="www.linkedin.com/in/alberto-justo96"/>
            <CommitteeAvatar name="Je-Seok Ham" affiliation="Electronics and Telecommunications Research Institute"/>
            <CommitteeAvatar name="Hao Wei" affiliation="The Chinese University of Hong Kong"/>
            <CommitteeAvatar name="Carlos Plou" affiliation="University of Zaragoza"/>
            <CommitteeAvatar name="Xiaosong Jia" affiliation="Shanghai Jiao Tong University" link="https://jiaxiaosong1002.github.io/"/>
            <CommitteeAvatar name="Guoyu Zhang" affiliation="Tongji University"/>
            <CommitteeAvatar name="Tianxing Chen" affiliation="The University of Hong Kong"/>
        </div> */}

        <br/>
       
    </div>
}
export default ProgramCommittee;
