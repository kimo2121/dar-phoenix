import React from "react";
import PageHeader from "../../components/Page-Header/PageHeader";

import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";
const Contact = () => {
  return (
    <div className="contact-page">
      <PageHeader Children="الاتصال" />
      <div className="contact-info-container">
        <ContactForm contactPage />
      </div>
    </div>
  );
};

export default Contact;
