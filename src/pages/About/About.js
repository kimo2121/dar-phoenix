import React from "react";
import Banner from "../../components/Banner/Banner";
import PageHeader from "../../components/Page-Header/PageHeader";
import "./About.css";
import { Sponsors, AboutVideos } from "./Data";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <PageHeader Children={"من نحن"} />
      <div className="about-continer">
        <div className="about-first">
          <span>١. دع العنقاء تكون رفيق رحلتك :</span>
          <p>
            هل انتهيت من تاليف كتابك و تريد نشره دار العنقاء للنشر و توزيع و
            الترجمة ستكون رفيقتك المخلصة في هذه الرحلة ، و ستقوم بنيابة عنك بكل
            الخطوات النشر المرهقة من الف للياء .. بل اكثر ، فنحن نعتني بكتابك
            جيدا و انت في منزلك .. و نوصله الى اي مكان في العالم .. و كل هذا
            بسعر مميز جدا لن تجده في اي مكان آخر لتجد كتابك خلال فترة وجيزة
            بحوار اشهر كتب شاهد الخطة التسويقية الخاصة بكتابنا الأعزاء
          </p>
        </div>
        <div className="about-second">
          <span>
            ٢. شاهد بنفسك صوت وصورة توصيات عملائنا الكرام بعد أن سمحوا للعنقاء
            ان تجدد حياتهم بالف لون ولون .
          </span>
          <Banner Data={AboutVideos} />
        </div>
        <div className="about-third">
          <span>٣. تعرف على شركائنا :</span>
          <p>
            نحن فخورين بأن ننضم الى أكبر الشركات العربية و العالمية التي تعتني
            بالإبداع ..
            <br /> ( جملون - جرير - عبيكان الكترونية- نيل وفيات- جوجل بوكس -
            قارئ جرجير )
            <div className="sponsors-container">
              {Sponsors.map((item, indx) => (
                <div key={indx} className="sponsors-iamge">
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </p>
        </div>
        <div>
          <span>٤. اتصل بنا : </span>
          <p>
            ماذا تنتظر ؟ انتهز هذه الفرصة فور .. و استثمر معنا .. لتصدح روحك
            بأغنية الولادة من جديد ..
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
            <Link to="#">
              <img src={whatsapp} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
