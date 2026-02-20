import SectionCard from "./SectionCard";

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

const ProgramCommittee = () => {
    return (
        <SectionCard id="sos-program-committee" title="Program Committee" variant="compact">
            <div className="flex flex-wrap gap-x-3 gap-y-0 mt-0.5">
                {pcMembers.map((name, i) => (
                    <span key={name} className="text-[10px] text-slate-700">
                        {name}{i < pcMembers.length - 1 ? "," : ""}
                    </span>
                ))}
            </div>
        </SectionCard>
    );
};

export default ProgramCommittee;
