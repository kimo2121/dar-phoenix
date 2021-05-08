import React from "react";
import Banner from "../../components/Banner/Banner";
import PageHeader from "../../components/Page-Header/PageHeader";
import "./About.css";
import { AboutVideos, AboutVideos2 } from "./Data";

import { Link } from "react-router-dom";
import IconsForContact from "../../components/IconsForContact/IconsForContact";
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
            بالإبداع .. ( جملون - جرير - عبيكان الكترونية- نيل وفيات- جوجل بوكس
            - قارئ جرجير )
          </p>
          <Banner Data={AboutVideos2} />
        </div>
        <div className="about-fourth">
          <span>٤. اتصل بنا : </span>
          <p>
            ماذا تنتظر ؟ انتهز هذه الفرصة فور .. و استثمر معنا .. لتصدح روحك
            بأغنية الولادة من جديد ..
          </p>
          <IconsForContact />
        </div>
      </div>
    </div>
  );
};

export default About;
