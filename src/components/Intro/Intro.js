import React from "react";
import Logo from "../../assets/logo2.png";
import "./Intro.css";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";
import { Link } from "react-router-dom";
import IconsForContact from "../IconsForContact/IconsForContact";
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

      <IconsForContact />
    </div>
  );
};

export default Intro;
