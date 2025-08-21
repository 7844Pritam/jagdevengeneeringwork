import React from "react";
import img from '../../assets/collageimg.jpg';
import img2 from '../../assets/collagesmall.avif';
import { Helmet } from "react-helmet";

const CompanyProfile = () => {
  return (
    <>
      <Helmet>
        <title>About JEW Steel Pvt. Ltd. | Company Profile & PEB Expertise</title>
        <meta
          name="description"
          content="Learn about JEW Steel Pvt. Ltd., a trusted manufacturer of Pre-Engineered Buildings, Roofing Sheets, GI Sheets, and steel structures. Our company profile highlights our expertise, quality, and customer satisfaction."
        />
        <meta
          name="keywords"
          content="JEW Steel, About JEW Steel, Company Profile, PEB Manufacturer India, Roofing Sheet Supplier, GI Sheet, Industrial Steel Structures"
        />
        <meta property="og:title" content="About JEW Steel Pvt. Ltd. | Company Profile" />
        <meta
          property="og:description"
          content="JEW Steel Pvt. Ltd. specializes in Pre-Engineered Buildings, Roofing Sheets, and industrial steel solutions with a customer-first approach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jewsteel.com/about" />
        <meta property="og:image" content="https://www.jewsteel.com/your-about-image.jpg" />
      </Helmet>

    <div className="bg-white-50 flex justify-center ">
      <div className="max-w-7xl  py-12 ">

      <div className="flex flex-col md:flex-row gap-16   items-center justify-center">
        <div className="w-full border rounded-2xl border-gray-200 p-4 relative flex justify-center md:w-1/2">
          <img
      
            src={img}
            alt="BA Production Line"
            className="rounded-lg w-[400px]  shadow object-cover"
          />
          <div className="absolute -bottom-15 -right-0">

          <img
      
            src={img2}
            alt="BA Production Line"
            className="rounded-lg w-[200px]  shadow object-cover"
          />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h4 className="text-orange-400 font-semibold text-sm mb-2 uppercase">
            About Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-left md:text-left">
            Company Profile
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            JEW Steel Pvt. Ltd. is a leading name in the field of Pre-Engineered Buildings (PEB), Roofing Solutions, and Steel Structures. With years of expertise and innovation, we specialize in delivering high-quality, cost-effective, and sustainable building solutions tailored to diverse industrial, commercial, and residential needs.Our product portfolio includes Pre-Engineered Building Systems, Primary & Secondary Framing Systems, and Roll Forming Machines. Every product is manufactured using premium-grade raw materials and advanced technology, ensuring durability, precision, and long-lasting performance.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            From industrial sheds, warehouses, factories, multi-storey steel buildings, to customized roofing and cladding systems, we provide end-to-end solutions—from design and manufacturing to on-site installation.With a strong presence in Lucknow and across India, JEW Steel Pvt. Ltd. has established itself as a trusted partner for businesses looking for reliable, fast, and economical construction solutions.Our Vision: To be recognized as a leader in sustainable steel building solutions, contributing to the growth of modern infrastructure in India.Our Mission: To deliver innovative, durable, and cost-effective PEB and roofing solutions while ensuring customer satisfaction and fostering long-term partnerships.
          </p>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default CompanyProfile;
