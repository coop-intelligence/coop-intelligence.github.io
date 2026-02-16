import SectionCard from "./SectionCard";

const committee = [
  { name: "Xiangbo Gao", affiliation: "Texas A&M University" },
  { name: "Yuheng Wu", affiliation: "KAIST" },
  { name: "Dongman Lee", affiliation: "KAIST" },
  { name: "Haibao Yu", affiliation: "University of Hong Kong" },
  { name: "Walter Zimmer", affiliation: "Technical University of Munich" },
  { name: "Ross Greer", affiliation: "Technical University of Munich" },
  { name: "Bernadette Bucher", affiliation: "University of Michigan" },
  { name: "Zilin Huang", affiliation: "University of Wisconsin–Madison" },
  { name: "Yue Hu", affiliation: "University of Michigan" },
  { name: "Can Cui", affiliation: "Purdue University" },
  { name: "Yuping Wang", affiliation: "University of Michigan" },
  { name: "Zhiwen Fan", affiliation: "Texas A&M University" },
  { name: "Jiachen Li", affiliation: "University of California, Riverside" },
  { name: "Ziran Wang", affiliation: "Purdue University" },
  { name: "Yang Zhou", affiliation: "Texas A&M University" },
  { name: "Hao Yang", affiliation: "Johns Hopkins University" },
  { name: "Rui Song", affiliation: "UCLA" },
  { name: "Fangzhou Lin", affiliation: "Texas A&M University" },
  { name: "Zhengzhong Tu", affiliation: "Texas A&M University" },
];

const OrganizingCommittee = () => {
  return (
    <SectionCard id="sos-organizers" title="Organizing Committee">
      <p className="mt-4 text-sm sm:text-base leading-relaxed text-justify">
        {committee.map((member, idx) => (
          <span key={member.name}>
            <span className="font-semibold">{member.name}</span>
            {" "}
            <span className="text-slate-600">
              ({member.affiliation})
            </span>
            {idx < committee.length - 1 && <span>{"; "}</span>}
          </span>
        ))}
      </p>
    </SectionCard>
  );
};

export default OrganizingCommittee;


