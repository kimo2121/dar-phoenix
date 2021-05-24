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
            دعِ العنقاءَ تكنْ رفيقَ رحلتكَ : دارُ العنقاء للنَّشر والتَّوزيع
            والتَّرجمة ، دارُ نشرٍ عربيَّة بإدارةٍ عربيَّة ، مركزها الرَّئيس في
            جمهوريَّة مصر العربيَّة - مدينة القاهرة ، وهي انطلاقةٌ حقيقيَّة من
            مبادرتي دعم المواهبِ في إغدراسيل للنَّشر الحرِّ ، وأكون للإبداعِ
            العربيِّ ، كما تسعى الدَّارُ على جميع الأصعدةِ ؛ لإثراءِ السَّاحة
            الأدبيَّة بالأقلامِ الجادَّة منَ المحيطِ إلى الخليجِ ، ولاسيَّما
            تلكَ التي تقبعُ خلفَ العالم الافتراضيِّ.
          </p>
        </div>
        <div className="about-second">
          <span>
            ٢. شاهدْ بنفسكَ صوتَ وصورةَ توصياتِ عملائِنا الكرام بعدَ أنْ سمحوا
            للعنقاءِ أنْ تجدِّدَ حياتَهم بألفِ لونٍ ولون . ان تجدد حياتهم بالف
            لون ولون .
          </span>
          <Banner Data={AboutVideos} />
        </div>
        <div className="about-third">
          <span>٣. تعرَّف على شركائِنا : :</span>
          <p>
            نحنٌ فخورون بأنْ ننضمَّ إلى أكبرِ الشَّركات العربيَّة والعالميَّة
            التي تعتني بالإبداع مثل : ( جملون - جرير - عبيكان الإلكترونيَّة- نيل
            وفيات- جوجل بوكس - قارئ جرجير ) شاهدِ الفيديو :
          </p>
          <Banner Data={AboutVideos2} />
        </div>
        <div className="about-fourth">
          <span>٤. اتصل بنا : </span>
          <p>
            ماذا تنتظرُ ؟ انتهزْ هذهِ الفرصةَ فورًا .. واستثمرْ معنا .. لتصدحَ
            روحُكَ بأغنيةِ الولادةِ منْ جديدٍ ..
          </p>
          <IconsForContact />
        </div>
      </div>
    </div>
  );
};

export default About;
