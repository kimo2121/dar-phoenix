import React from "react";
import { Link } from "react-router-dom";
import MarketingData from "./MarketingData.js";
import "./Marketing.css";
const Marketing = () => {
  return (
    <div class="marketing-container">
      <p className="marketing-intro-container">
        . إنَّ أهمَّ عواملِ نجاح أيِّ استثمارٍ هوَ وجودُ أمرانِ في غايةِ
        الأهميَّة : الإدارة القويَّة خط الدعايةِ والتَّسويقِ القويِّ وفي العنقاء
        للنَّشر والتَّوزيع والتَّرجمة ، نحنُ نمتلكُ بفضلِ الله كلتيهما ، فنحنُ
        دائمًا في سعي مستمرٍ ؛ لتطويرِ خطوطِ الدعايةِ والتَّسويقِ لديْنا ..،
        والتي شملتِ أنواعَ الدعايةِ : المسموعةَ والمرئيَّة والبصريَّة بفرعيها :
        الافتراضيِّ والواقعيِّ .. والدَّليلُ أكبرُ برهانٍ ، انظرْ بنفسكَ.
      </p>
      {MarketingData.map((item, indx) => (
        <div key={indx} className={item.name}>
          <Link to={item.to}>{item.text}</Link>
        </div>
      ))}
    </div>
  );
};

export default Marketing;
