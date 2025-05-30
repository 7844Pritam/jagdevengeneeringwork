/* File: App.js */
import React from 'react';

import Footer from '../componants/Footer.jsx'
import NewNavbar from '../componants/NewNavbar.jsx';
import Carousel from '../componants/Carousel.jsx';
import AboutSection from '../componants/AboutSection.jsx';
import PEBSection from '../componants/PEBSection.jsx';
import BenefitsSection from '../componants/BenefitsSection.jsx';
import ServicesSection from '../componants/ServicesSection.jsx';
import WorkProcess from '../componants/WorkProcess.jsx';
import IndustriesWeServe from '../componants/IndustriesWeServe.jsx';
import OurProjects from '../componants/OurProjects.jsx';
import ConsultationForm from '../componants/ConsultationForm.jsx';
import ContactCard from '../componants/ContactCard.jsx';
import WhyChooseUs from '../componants/WhyChooseUs.jsx';
import StatsSection from '../componants/StatsSection.jsx';


const LandingPage = () => {
  return (
    <div className="">
      <Carousel/>
      <AboutSection/>
      <PEBSection/>
      <BenefitsSection/>
      <ServicesSection/>
      <WorkProcess/>
      <IndustriesWeServe/>
      <OurProjects/>
      <WhyChooseUs/>
      <StatsSection/>
      {/* <ContactCard/> */}
      <ConsultationForm/>
    </div>
  );
};

export default LandingPage;