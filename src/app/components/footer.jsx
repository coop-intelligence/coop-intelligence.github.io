import Image from "next/image";
const Footer = () => {
    return (
        <footer className="h-auto py-4 relative overflow-hidden">
            {/* Decorative accent line at top */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />
        </footer>
    );
}
export default Footer;
