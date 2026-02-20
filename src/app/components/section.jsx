const Section = ({ title, body, className, id }) => {
    return (
        <div id={id} className={" sm:w-[65em] w-full mb-10 " + className}>
            {title && (
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[#01305f] to-sky-400" />
                    <div className="text-black relative font-extrabold text-[2em] tracking-tight">
                        {title}
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-sky-200 to-transparent" />
                </div>
            )}
            <div>{body}</div>
        </div>
    )
}
export default Section;