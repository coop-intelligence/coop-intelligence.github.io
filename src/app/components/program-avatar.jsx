const CommitteeAvatar = ({ name, affiliation, link }) => {
    return (
        <div>
            <div className="bg-white p-1 md:p-2 shadow-sm border border-gray-100 rounded-lg text-center h-full flex flex-col justify-center">
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                        <p className="font-semibold text-xs hover:text-blue-600 transition-colors">{name}</p>
                    </a>
                ) : (
                    <p className="font-semibold text-xs">{name}</p>
                )}
                <p className="text-[10px] text-gray-600 leading-tight">{affiliation}</p>
            </div>
        </div>
    );
};
export default CommitteeAvatar;