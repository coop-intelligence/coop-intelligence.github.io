import SectionCard from "./SectionCard";

const pcMembers = [
    { name: "Xiangbo Gao", link: "https://www.xiangbogao.com/" },
    { name: "Yuheng Wu", link: "https://wyhallenwu.github.io/" },
    { name: "Pardis Taghavi", link: "https://pardistaghavi.github.io/" },
    { name: "Jiaru Zhong", link: "https://scholar.google.com/citations?user=Q9KMoxkAAAAJ&hl=zh-CN" },
    { name: "Jiahao Wang", link: "https://jiahaoplus.github.io/" },
    { name: "Abhishek Dharmaratnakar", link: "https://scholar.google.com/citations?user=bsyOWJgAAAAJ&hl=en" },
    { name: "Xiukun Huang", link: "https://scholar.google.com/citations?user=34i3PdoAAAAJ&hl=en" },
    { name: "Zhengzhong Tu", link: "https://vztu.github.io/" },
];

const ProgramCommittee = () => {
    return (
        <SectionCard id="sos-program-committee" title="Program Committee" variant="compact">
            <div className="flex flex-wrap gap-x-3 gap-y-0 mt-0.5">
                {pcMembers.map((member, i) => (
                    <span key={member.name} className="text-[10px] text-slate-700">
                        <a href={member.link} target="_blank" className="hover:underline hover:text-blue-600">{member.name}</a>{i < pcMembers.length - 1 ? "," : ""}
                    </span>
                ))}
            </div>
        </SectionCard>
    );
};

export default ProgramCommittee;
