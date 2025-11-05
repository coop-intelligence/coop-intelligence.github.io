import PersonAvatar from "./person-avatar";

const Speakers = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
                <div>
                    <PersonAvatar
                        name="Xiaopeng (Shaw) Li"
                        image="/xiaopeng_li.png"
                        affiliation="University of Wisconsin-Madison"
                        link="https://engineering.wisc.edu/directory/profile/xiaopeng-li/"
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
                        name="Henry Liu"
                        image="/henry_liu.png"
                        affiliation="University of Michigan, Ann Arbor"
                        link="https://traffic.engin.umich.edu/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Bernadette Bucher"
                        image="/Bernadette_Bucher.png"
                        affiliation="University of Michigan, Ann Arbor"
                        link="https://bucherb.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Jiachen Li"
                        image="/jiachen_li.jpg"
                        affiliation="University of California, Riverside"
                        link="https://jiachenli94.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Angela Dai"
                        image="/angela_dai.png"
                        affiliation="Technical University of Munich"
                        link="https://www.3dunderstanding.org/team.html"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Bolei Zhou"
                        image="/bolei_zhou.png"
                        affiliation="University of California, Los Angeles"
                        link="https://boleizhou.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Marco Pavone"
                        image="/marco_pavone.jpeg"
                        affiliation="Stanford University"
                        link="https://research.nvidia.com/person/marco-pavone"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Enze Xie"
                        image="/enze_xie.png"
                        affiliation="NVIDIA"
                        link="https://xieenze.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Kun Zhan"
                        image="/kun_zhan.png"
                        affiliation="Li Auto"
                        link="https://zhankunliauto.github.io/"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Manabu Tsukada"
                        image="/manabu_tsukada.png"
                        affiliation="The University of Tokyo"
                        link="https://tlab.hongo.wide.ad.jp/People/manabu-tsukada/"
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
