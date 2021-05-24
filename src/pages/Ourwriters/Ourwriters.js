import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../components/Page-Header/PageHeader";
import * as AiIcons from "react-icons/ai";
import "./Ourwriters.css";
import { countriesdata, WritersData } from "./WritersData";
// import { FaFacebookF } from "react-icons/fa";
const Ourwriters = () => {
  // const [writers, setWriter] = useState({
  //   chosenC: "egypt",
  //   countries: countriesdata,
  // });
  // const onClickFilter = (country) => {
  //   setWriter({ ...writers, chosenC: country });
  //   console.log(writers);
  // };
  const [writers, setWriters] = useState({
    currentWriter: {},
    all: WritersData,
  });
  const [more, setMore] = useState(false);
  const showMore = (indx) => {
    setMore(!more);
    setWriters({ ...writers, currentWriter: writers.all[indx] });
    // setBio(writers.filter((_, i) => i === indx));
  };
  // const [navlink, setNavlink] = useState("home");
  // const onLinkHandler = (name) => {
  //   setNavlink(name);
  // };
  return (
    <div className="ourwriters-page">
      <PageHeader Children={"كتّاب الدار"} />
      {/* <div className="countries-filter">
        {writers.countries.map((item, indx) => (
          <button
            onClick={() => onClickFilter(item.country)}
            className={writers.chosenC === item.country && "filter-btns-active"}
            key={indx}
          >
            {item.name}
          </button>
        ))}
      </div> */}
      <p className="publish-intro-container">
        تعرَّف على كُتَّابِ الدَّار ، هؤلاءِ المبدعون قرَّروا أنْ يصبحوا (
        العنقاء ) وأنْ تتجدَّد فيهم الحياةُ بألفِ لونٍ ولون ..
        <br />
        تنفَّسْ بعمقٍ ولا تخفْ منَ الموتِ ، ففي كلٍّ انبعاثٌ منَ الرَّمادِ ..
        هناكَ ولادةٌ من الجديد . دعْنا نلوِّنكَ بألوانِ الطَّيف السبعةِ .. أبرقْ
        وأزهِرْ معنا .. لتكنْ أنتَ ( العنقاءُ ) القادمُ .
      </p>
      <div className="writers-intro">
        {writers.all.map((item, indx) => (
          <div key={indx} className="each-writer-intro">
            <div className="image-circle">
              <img className="image" src={item.img} alt="" />
            </div>
            <p>الاسم: {item.name}</p>
            <p>البلد: {item.country}</p>
            <div className="divider2"></div>
            <p className="writer-bio">
              {item.books.slice(0, 90)}...{" "}
              <span className="read-more" onClick={() => showMore(indx)}>
                اقرا المزيد
              </span>
            </p>
          </div>
        ))}
        {more && (
          <div className="more-details-container">
            <AiIcons.AiOutlineClose
              onClick={showMore}
              className={"close-details active"}
              size="30"
            />
            <div className="more-details each-writer-intro">
              <div className="image-circle image-circle-more">
                <img
                  className="image image-more"
                  src={writers.currentWriter.img}
                  alt=""
                />
              </div>
              <p>{writers.currentWriter.name}</p>
              <div className="divider2"></div>
              <p className="writer-bio more-bio">
                {writers.currentWriter.books}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ourwriters;
