/* File: App.js */
import React from 'react';

import Footer from './componants/Footer'
import NewNavbar from './componants/NewNavbar.jsx';
import Carousel from './componants/Carousel.jsx';
import AboutSection from './componants/AboutSection.jsx';
import PEBSection from './componants/PEBSection.jsx';
import BenefitsSection from './componants/BenefitsSection.jsx';
import ServicesSection from './componants/ServicesSection.jsx';
import WorkProcess from './componants/WorkProcess.jsx';
import IndustriesWeServe from './componants/IndustriesWeServe.jsx';
import OurProjects from './componants/OurProjects.jsx';
import ConsultationForm from './componants/ConsultationForm.jsx';
import StatsSection from './componants/tatsSection.jsx';
import ContactCard from './componants/ContactCard.jsx';
import WhyChooseUs from './componants/WhyChooseUs.jsx';


const App = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <NewNavbar/>
      <Carousel/>
      <AboutSection/>
      <PEBSection/>
      <BenefitsSection/>
      <ServicesSection/>
      <WorkProcess/>
      <IndustriesWeServe/>
      <OurProjects/>
      <WhyChooseUs/>
      <ContactCard/>
      <ConsultationForm/>
      <StatsSection/>
    
    
      <Footer />
    </div>
  );
};

export default App;