import PersonAvatar from "./person-avatar";

const Speakers = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
                <div>
                    <PersonAvatar
                        name="Marco Pavone"
                        image="/marco_pavone.jpeg"
                        affiliation="Stanford University"
                        link="https://web.stanford.edu/~pavone/"
                    />
                </div>
                
                <div>
                    <PersonAvatar
                        name="Siheng Chen"
                        image="/siheng_chen.jpg"
                        affiliation="Shanghai Jiao Tong University"
                        link="https://siheng-chen.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Zsolt Kira"
                        image="/zsolt_kira.jpg"
                        affiliation="Georgia Institute of Technology"
                        link="https://faculty.cc.gatech.edu/~zk15/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Hongyang Li"
                        image="/hongyang_li.jpeg"
                        affiliation="The University of Hong Kong"
                        link="https://datascience.hku.hk/people/hongyang-li/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Enze Xie"
                        image="/enze_xie.png"
                        affiliation="Nvidia"
                        link="https://xieenze.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Jeannette Bohg"
                        image="/jeannette_bohg.png"
                        affiliation="Stanford University"
                        link="https://web.stanford.edu/~bohg/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Hao Zhao"
                        image="/hao_zhao.jpg"
                        affiliation="Tsinghua University"
                        link="https://sites.google.com/view/fromandto"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Jiachen Li"
                        image="/jiachen_li.jpg"
                        affiliation="University of California Riverside"
                        link="https://jiachenli94.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Guillaume Sartoretti"
                        image="/guillaume_sartoretti.jpg"
                        affiliation="National University of Singapore"
                        link="https://www.marmotlab.org/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Henny Admoni"
                        image="/henny_admoni.jpg"
                        affiliation="Carnegie Mellon University"
                        link="http://www.hennyadmoni.com/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Javier Alonso-Mora"
                        image="/javier_formal.jpg"
                        affiliation="Delft University of Technology"
                        link="https://autonomousrobots.nl/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Deepak Pathak"
                        image="/deepak_pathak.jpeg"
                        affiliation="Co-founder of Skild AI & Carnegie Mellon University"
                        link="https://www.cs.cmu.edu/~dpathak/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Sergey Levine"
                        image="/sergey_levine.png"
                        affiliation="Co-founder of Physical Intelligence & UC Berkeley"
                        link="https://people.eecs.berkeley.edu/~svlevine/"
                    />
                </div>
            </div>
            <p className="text-pretty mt-6">
                <span className="font-bold">Note: </span>We are currently extending invitations to other eminent research scholars, so please stay tuned for updates.
            </p>
        </div>
    );
};

export default Speakers;
