// src/pages/Contact.js
import React from 'react';
import {Footer} from '../../components/Footer/Footer';
import ContactContent from "../../components/MainContent/ContactContent";
import Header from "../../components/Header/Header";

function Contact() {
  return (
      <div>
        <Header/>
        <ContactContent/>
        <Footer/>
      </div>
  );
}

export default Contact;