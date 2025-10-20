import PersonAvatar from "./person-avatar";

const Organizers = ()=>{
    return <div className="text-justify"> 
         
        <div className="grid sm:grid-cols-4 grid-cols-2 mt-4 gap-y-6">
            <PersonAvatar name="Haibao Yu" image="/haibao_yu.jpg" affiliation={"The University of Hong Kong & Tsinghua University"} link={"https://www.linkedin.com/in/haibao-yu-152221118"}/>
            <PersonAvatar name="Jianing Qiu" image="/jianing_qiu.jpeg" affiliation={"Chinese University of Hong Kong"} link={"https://www.linkedin.com/in/jianing-qiu-91a802224/"} />
            <PersonAvatar name="Yao Mu" image="/yao_mu.jpg" affiliation={"The University of Hong Kong"} link={"https://yaomarkmu.github.io/"}/>
            <PersonAvatar name="Jiankai Sun" image="/jiankai_sun.png" affiliation={"Stanford University"} link={"http://web.stanford.edu/~jksun/"}/>
            <PersonAvatar name="Li Chen" image="/li_chen.png" affiliation={"Shanghai AI Lab"} link={"https://scholar.google.com/citations?hl=en\&user=ulZxvY0AAAAJ"}/>
            <PersonAvatar name="Walter Zimmer" image="/walter_zimmer.jpeg" affiliation={"Technical University of Munich"} link={"https://walzimmer.github.io/website/"}/>
            <PersonAvatar name="Jiaru Zhong" image="/jiaru_zhong.jpg" affiliation={"The Hong Kong Polytechnic University"} link={"https://scholar.google.com/citations?hl=zh-CN&authuser=1&user=Q9KMoxkAAAAJ"}/>
            <PersonAvatar name="Dandan Zhang" image="/dandan_zhang.jpg" affiliation={"Imperial College London"} link={"https://www.intelligentrobotics-acrossscales.com/"}/>
            <PersonAvatar name="Fei Gao" image="/fei_gao.jpg" affiliation={"Zhejiang University"} link={"http://zju-fast.com/research-group/fei-gao/"}/>
            <PersonAvatar name="Shanghang Zhang" image="/shanghang_zhang.jpg" affiliation={"Peking University"} link={"https://www.shanghangzhang.com/"}/>
            <PersonAvatar name="Mac Schwager" image="/mac_schwager.jpg" affiliation={"Stanford University"} link={"https://web.stanford.edu/~schwager/"}/>
            <PersonAvatar name="Ping Luo" image="/ping_luo.jpg" affiliation={"The University of Hong Kong"} link={"http://luoping.me/"}/>
            <PersonAvatar name="Zaiqing Nie" image="/zaiqing_nie.jpg" affiliation={"Tsinghua University"} link={"https://air.tsinghua.edu.cn/en/info/1046/1192.htm"}/>
        </div>

        <br/>
        <p>
            <span className="font-bold">Contact: </span>If you have any questions, please contact us at: <span className="text-blue-500"> coop-intelligence@googlegroups.com</span> or <span className="text-blue-500"> yuhaibao94@gmail.com</span>.
        </p>
       
    </div>
}
export default Organizers;
