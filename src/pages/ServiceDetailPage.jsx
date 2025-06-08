import React from 'react';

const ServiceDetailPage = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-500 mb-6">Dummy Service Title</h1>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.45.28%20PM.jpeg?alt=media&token=c1fc909c-ad05-4565-898d-315d1a74ce6d"
            alt="Dummy Service"
            className="w-full md:w-1/2 h-[400px] object-cover rounded-xl shadow"
          />
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              This is a sample introduction paragraph about the dummy service. It explains what the service is and what benefits it offers to the users.
              The dummy service helps users to streamline their processes and boost productivity across various departments and platforms.
              It's designed with flexibility in mind and can be adapted to a wide range of industries and workflows.
              Users report increased satisfaction and better results after integrating this service into their daily operations.
              Additionally, the service offers exceptional support and customization capabilities.
            </p>
            <p>
              Whether you're in construction, IT, or education, this service provides tools that match your needs.
              It’s affordable, user-friendly, and backed by a team of professionals.
              This section continues with more in-depth details about real-world usage, adoption rate, and compatibility with common software tools.
              Businesses of all sizes—from startups to enterprises—can benefit from its robust infrastructure and forward-thinking features.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Here's another section of the dummy description that could further detail the use, target audience, or how the service works.
              The dummy service includes real-time analytics, cloud integration, and a mobile-first interface.
              Its seamless setup process makes it ideal for teams looking to migrate quickly and efficiently.
              Customers value the transparency, affordability, and frequent updates.
              Feedback mechanisms built into the system allow users to shape the direction of future features.
            </p>
            <p>
              Moreover, its modular design lets you choose only the components you need.
              Whether you're managing tasks, analyzing data, or collaborating across teams, it keeps you connected and efficient.
              This text wraps up by highlighting the long-term benefits and future enhancements planned.
              It's not just a tool, it's a complete solution ready to scale with your business.
            </p>
          </div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/perdaycoaching.appspot.com/o/ajagdev%2FWhatsApp%20Image%202025-05-20%20at%209.45.28%20PM.jpeg?alt=media&token=c1fc909c-ad05-4565-898d-315d1a74ce6d"
            alt="Dummy Service"
            className="w-full md:w-1/2 h-[400px] object-cover rounded-xl shadow"
          />
        </div>

        <h1 className="text-4xl font-bold text-orange-500 mb-6">Key Features</h1>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          <li>Feature one of the dummy service explained briefly.</li>
          <li>Another feature showcasing the benefits.</li>
          <li>A third point to highlight an advantage.</li>
          <li>Point four detailing another part of the service.</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
