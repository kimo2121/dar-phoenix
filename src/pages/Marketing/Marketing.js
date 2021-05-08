import React from "react";
import { Link } from "react-router-dom";
import MarketingData from "./MarketingData.js";
import "./Marketing.css";
const Marketing = () => {
  return (
    <div class="marketing-container">
      <p className="marketing-intro-container">
        إن أهم عوامل نجاح اي استثمار هو وجود هو أمران في غاية الأهمية :
        <br />
        ١. الإدارة القوية .
        <br />
        ٢. خط دعاية و التسويق قوي
        <br />و في العنقاء للنشر و توزيع و الترجمة ، نحن نمتلك بفضل الله ،
        كلتاهما ، فنحن دائما في سغي مستمر لتطوير خطوط الدعاية و التسويق لدينا
        ..، و التي شملت الدعاية المسموعة و المرئية و البصرية بكل فرعيها
        الإفتراضي و الواقعي .. و الدليل اكبر برهان ، انظر بنفسك.
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
