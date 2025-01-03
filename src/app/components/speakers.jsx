import PersonAvatar from "./person-avatar";

const Speakers = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
                <div>
                    <PersonAvatar
                        name="Jiachen Li"
                        image="/avatar.jpg"
                        affiliation="University of California Riverside, USA"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Siheng Chen"
                        image="/avatar.jpg"
                        affiliation="Shanghai Jiao Tong University, China"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Marco Pavone"
                        image="/avatar.jpg"
                        affiliation="Stanford University, USA"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Enze Xie"
                        image="/avatar.jpg"
                        affiliation="Nvidia, USA"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Hongyang Li"
                        image="/avatar.jpg"
                        affiliation="The University of Hong Kong, China"
                    />
                </div>

                <div>
                    <PersonAvatar
                        name="Jeannette Bohg"
                        image="/avatar.jpg"
                        affiliation="Stanford University, USA"
                    />
                </div>
            </div>
        </div>
    );
};

export default Speakers;
