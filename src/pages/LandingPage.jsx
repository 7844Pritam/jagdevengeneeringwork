/* File: App.js */
import React from "react";

import Footer from "../componants/Footer.jsx";
import NewNavbar from "../componants/NewNavbar.jsx";
import Carousel from "../componants/Carousel.jsx";
import AboutSection from "../componants/AboutSection.jsx";
import PEBSection from "../componants/PEBSection.jsx";
import BenefitsSection from "../componants/BenefitsSection.jsx";
import ServicesSection from "../componants/ServicesSection.jsx";
import WorkProcess from "../componants/WorkProcess.jsx";
import IndustriesWeServe from "../componants/IndustriesWeServe.jsx";
import OurProjects from "../componants/OurProjects.jsx";
import ConsultationForm from "../componants/ConsultationForm.jsx";
import ContactCard from "../componants/ContactCard.jsx";
import WhyChooseUs from "../componants/WhyChooseUs.jsx";
import StatsSection from "../componants/StatsSection.jsx";

import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const LandingPage = () => {
  // Functions
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918319950259", "_blank"); 
    // Replace with your WhatsApp number
  };

  const handleCallClick = () => {
    window.open("tel:+918319950259"); 
    // Replace with your phone number
  };

  return (
    <div className="relative">
  
      <Carousel />
      <AboutSection />
      <PEBSection />
      <BenefitsSection />
      <ServicesSection />
      <WorkProcess />
      <OurProjects />
      <WhyChooseUs />
      <StatsSection />
      {/* <ContactCard/> */}
      <ConsultationForm />

      {/* Google Map */}
      <div className="mt-16 w-full">
        <div className="max-w-7xl mx-auto w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.0244678044703!2d81.00402985628789!3d26.838395807765625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3b392eefb69%3A0x42b82060e5a9eb23!2sJagdev%20Engineering%20Works%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1749225370229!5m2!1sen!2sin"
            className="w-full"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
