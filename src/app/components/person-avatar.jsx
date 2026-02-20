import { getAssetPath } from "../../utils/path.js";

const PersonAvatar = ({ image, name, affiliation, link, imageClass = "w-[8em] h-[8em]", nameClass = "text-[1.2em]", affilClass = "text-[1em]" }) => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <img src={getAssetPath(image)} alt={name} className={`rounded-full object-cover ${imageClass}`} />
                {link ? (
                    <div className={`font-bold text-center ${nameClass}`}>
                        <a href={link} className="text-blue-500">{name}</a>
                    </div>
                ) : (
                    <div className={`font-bold text-center ${nameClass}`}>
                        {name}
                    </div>
                )}
                <div className={`text-center ${affilClass} text-slate-700 leading-tight`}>{affiliation}</div>
            </div>
        </div>
    )
}
export default PersonAvatar;