import React, { useState } from "react";
import ServicesData from "./OurServicesData";
import * as AiIcons from "react-icons/ai";
import "./OurServices.css";
import IconsForContact from "../../components/IconsForContact/IconsForContact";
const OurServices = () => {
  const [topics, setTopics] = useState({
    currentTopic: {},
    all: ServicesData,
  });
  const [seeMore, setSeeMore] = useState(false);

  const showSeeMore = (indx) => {
    setSeeMore(!seeMore);
    setTopics({ ...topics, currentTopic: topics.all[indx] });
  };
  return (
    <div className="our-services-page">
      <div className="our-services-container">
        <p className="ourservices-intro">
          اهلا بك يا صديقي المبدع ، هل انتهيت من تاليف كتابك و تريد نشره ؟<br />{" "}
          اليك خطوات النشر إذن .
        </p>
        {topics.all.map((item, indx) => (
          <li key={indx} className={`each-topic ${item.name}`}>
            <span>{item.title}</span>
            <p className="writer-bio">
              {item.text.slice(0, 65)}...
              <span
                className="read-more read-more-ourservices"
                onClick={() => showSeeMore(indx)}
              >
                اقرا المزيد
              </span>
              <div className="services-contact-icons">
                <IconsForContact />
              </div>
            </p>
          </li>
        ))}
        <p className="ourservices-intro">
          انها خطوات طويلة و مرهقة اليس كذالك ؟
          <br />
          دار العنقاء للنشر و توزيع و الترجمة تقوم بنيابة عنك بكل الخطوات
          السابقة و أكثر ، فنحن نعتني بكتابك جيدا و اانت في منزلك .. و نوصله إلى
          أي مكان في العالم .. و كل هذا بسعر مميز جدا لن تجده في أي مكان آخر.
          <br />
          لتجد كتابك خلال فترة وجيزة بحوار أشهر كتب الأدبية .
        </p>
      </div>
      {seeMore && (
        <div className="more-details-container details-ourservices">
          <AiIcons.AiOutlineClose
            onClick={showSeeMore}
            className={"close-details active"}
            size="30"
          />
          <div className="more-details each-writer-intro">
            <li
              className={`each-topic topic-more-details ${topics.currentTopic.name}`}
            >
              <span>{topics.currentTopic.title}</span>
              <p>{topics.currentTopic.text}</p>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurServices;
