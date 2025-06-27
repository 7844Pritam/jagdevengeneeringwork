import React from 'react';
import { useParams } from 'react-router-dom';
import { servicesdata } from '../constants/servicesDatanew';

const ServiceDetailPage = () => {
  const { title } = useParams();
  const service = servicesdata.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, '-') === title.toLowerCase()
  );

  if (!service) return <div className="p-8 text-red-500">Service not found.</div>;

  return (
    <div className="min-h-screen bg-[#f9fafb] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">{service.title}</h1>

        {/* Sections */}
        {service.details.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 mb-10">
            {index % 2 === 0 ? (
              <>
                <img src={section.image} alt="" className="w-full md:w-1/2 h-[400px] object-cover rounded-xl shadow" />
                <p className="text-lg text-gray-700 md:w-1/2">{section.text}</p>
              </>
            ) : (
              <>
                <p className="text-lg text-gray-700 md:w-1/2">{section.text}</p>
                <img src={section.image} alt="" className="w-full md:w-1/2 h-[400px] object-cover rounded-xl shadow" />
              </>
            )}
          </div>
        ))}

        {/* Features */}
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          {service.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
