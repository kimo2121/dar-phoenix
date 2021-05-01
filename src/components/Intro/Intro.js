import React from "react";
import Logo from "../../assets/logo.png";
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
        هل انتهيت من تأليف كتابك و تريد تجهيزه بأفخم المستويات و طباعته بأحود
        الأنواع .. هل تحلم ان يكون لك خط تسويق كامل يجعلك تقف على أرضية صلبة بين
        كبار شخصيات الأدبية ؟ اذا انت في المكان المناسب .
      </p>
      <p>
        في خطوة جادة لإثراء الساحة الأدبية بالأقلام الإبداعية ، تعلن دار نشر Dar
        Phoniex For P.D.T : عن فتح باب استقبال أعمالكم على الإيميل المخصص لإدارة
        النشر:
      </p>
      <p>
        ماذا تنتظر .. اتصل ببنا و تعرف اكثر على نظام النشر معنا .. و تذكر عزيزي
        الكاتب هذا الطريق يحتاج ان تستثمره بشكل ذكي .. و مع ناشر الصح ..، ادعم
        موهبتك و آمن بقلمك اولا .. حتى يسخر الله لك كل الدعم المطلوب الحياة
        مراهنات .. و لكن الذكي الذي يراهن مع الناجحين 😊
      </p>
      <p>( ملاحظة: لمزيد من تفاصيل ، شاهد الافيديو الذي في اعلى الصفحة 👍)</p>
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
