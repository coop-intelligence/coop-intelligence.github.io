
const Header = ()=>{
    const highlight = "underline font-bold text-white"
    return (
        <div className="header">
            <div className="justify-center flex flex-col sm:text-[2em] text-[1.5em] text-[#f5f5f5]  font-medium ">
                {/* <div className="text-white text-center text-[1.7em]">
                     <span className="text-white tracking-[0.35em] font-semibold">MEIS</span>
                </div> */}
                <div className="text-[1.5em] text-center mt-2">
                    2nd MEIS Workshop @CVPR2025
                </div>
                <div className="text-[0.8em] text-center ">
                    {/* <span className={highlight}>La</span>rge <span className={highlight}>V</span>ision – Language Model Learning and <span className={highlight}>A</span>pplications  */}
                    <span className={highlight}>M</span>ulti-Agent <span className={highlight}>E</span>mbodied <span className={highlight}>I</span>ntelligent <span className={highlight}>S</span>ystems Meet Generative-AI Era: <br />
                    Opportunities, Challenges and Futures
                </div>
                <div className="text-[0.55em]  text-white text-center mt-5">
                    Wed June 11th - Sun June 15th, 2025
                </div>
                <div className="text-[0.55em]  text-white text-center ">
                    the Music City Center, Nashville TN
                </div>
            </div>
           
           
        </div>
    );
}
export default Header;