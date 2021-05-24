import React from "react";
import Logo from "../../assets/logo3.png";
import "./Intro.css";
import IconsForContact from "../IconsForContact/IconsForContact";
const Intro = () => {
  return (
    <div className="intro-section">
      <img src={Logo} alt="" />
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
