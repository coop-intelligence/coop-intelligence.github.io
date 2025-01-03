import PersonAvatar from "./person-avatar";

const Speakers = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
                <div>
                    <PersonAvatar
                        name="Jiachen Li"
                        image="/jiachen_li.jpg"
                        affiliation="University of California Riverside, USA"
                        link="https://jiachenli94.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Siheng Chen"
                        image="/siheng_chen.jpg"
                        affiliation="Shanghai Jiao Tong University, China"
                        link="https://siheng-chen.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Marco Pavone"
                        image="/marco_pavone.jpeg"
                        affiliation="Stanford University, USA"
                        link="https://web.stanford.edu/~pavone/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Enze Xie"
                        image="/enze_xie.png"
                        affiliation="Nvidia, USA"
                        link="https://xieenze.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Hongyang Li"
                        image="/hongyang_li.jpeg"
                        affiliation="The University of Hong Kong, China"
                        link="https://datascience.hku.hk/people/hongyang-li/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Jeannette Bohg"
                        image="/jeannette_bohg.png"
                        affiliation="Stanford University, USA"
                        link="https://web.stanford.edu/~bohg/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Hao Zhao"
                        image="/hao_zhao.jpg"
                        affiliation="Tsinghua University, China"
                        link="https://sites.google.com/view/fromandto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Speakers;
