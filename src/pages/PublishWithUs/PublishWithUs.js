import React from "react";
import Data from "./PublishData";
import "./PublishWithUs.css";

const PublishWithUs = () => {
  return (
    <div>
      <p className="publish-intro-container">
        هل انتهيت من تأليف كتابك و تريد تجهيزه بأفخم المستويات ، هل تحلم بأن
        يكون لك خط تسويق كامل يجعلك تقف على أرض صلبة بين كبار الشخصيات الأدبية..
        اذا انت في المكان المناسب .
        <br />
        اقرأ جيدا نظام النشر لدينا من الف للياء .
      </p>

      <ul className="publish-with-us">
        {Data.map((item, indx) => (
          <li key={indx} className="numeric-li">
            <div key={indx} className="each-service">
              <img src={item.img} alt="" />
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="publish-intro-container">
        ماذا تنتظر ؟ اتصل بنا على الفور، فالحياة مراهنات و الذكي هو الذي يراهن
        مع الناجح ..
      </p>
    </div>
  );
};

export default PublishWithUs;
