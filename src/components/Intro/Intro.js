import React from "react";
import Logo from "../../assets/logo2.png";
import "./Intro.css";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div className="intro-section">
      <img src={Logo} alt="" />
      <div></div>
      <p>
        هل انتهيت من تأليف كتابك و تريد تجهيزه بأفخم المستويات ، هل تحلم بأن
        يكون لك خط تسويق كامل يجعلك تقف على أرض صلبة بين كبار الشخصيات الأدبية..
        اذا انت في المكان المناسب . ماذا تنتظر ذ؟ اتصل بنا على الفور، فالحياة
        مراهنات و الذكي هو الذي يراهن مع الناجح .
      </p>

      <div className="intro-icons">
        <Link to="#">
          <img src={facebook} alt="" />
        </Link>
        <Link to="#">
          <img src={instagram} alt="" />
        </Link>
        <Link to="#">
          <img src={twitter} alt="" />
        </Link>
        <Link to="#">
          <img src={youtube} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
