import React from "react";

import "./ContactForm.css";
const ContactForm = ({ contactPage }) => {
  const data = [
    { text: "الاسم", classname: "fullname-field" },
    { text: "البريد الالكتروني", classname: "email-field" },
    { text: "الدولة", classname: "email-field" },
    { text: "رقم الهاتف", classname: "email-field" },
    { text: "الاستفسار عن", classname: "email-field" },
  ];
  return (
    <div className="slider-contact-component">
      <div className="name-phone-fields fullname-email">
        {data.map((item, indx) => (
          <div
            key={indx}
            className={
              !contactPage
                ? "fields-label-input"
                : "fields-label-input contactPage"
            }
          >
            <label>{item.text}</label>
            <input
              className={item.classname}
              type="text"
              placeholder={item.text}
            />
          </div>
        ))}
      </div>

      <button
        className={!contactPage ? "submit-form" : "submit-form contactPage"}
      >
        ارسال
      </button>
    </div>
  );
};

export default ContactForm;
