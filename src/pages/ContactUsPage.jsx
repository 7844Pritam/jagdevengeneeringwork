import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-10 px-6 text-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">Contact Us</h1>
          <p className="text-lg text-gray-600">We’d love to hear from you. Let’s work together to build something great.</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold shadow"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <p>Jagdev Engneering Works Pvt. Ltd.</p>
          <p>1/844 Vardan Khand, Sector-1</p>
          <p>Gomti Nagar Extension, U.P 226010, India</p>
          <p>Email: jewanilyadav@gmail.com</p>
          <p>Phone: +91 8319950529</p>
          <p>Working Hours: Mon - Fri, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
          <div className="mt-16 w-full">
            <div className="max-w-7xl mx-auto w-full rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.0244678044703!2d81.00402985628789!3d26.838395807765625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3b392eefb69%3A0x42b82060e5a9eb23!2sJagdev%20Engineering%20Works%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1749225370229!5m2!1sen!2sin " className='w-full' height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

      {/* FAQ Section */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">How soon can I expect a reply?</h3>
              <p className="text-gray-600">We usually respond within 1–2 business days.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Can I schedule a meeting in person?</h3>
              <p className="text-gray-600">Absolutely! Just drop a message with your availability and preferred location.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Where are you located?</h3>
              <p className="text-gray-600">Our head office is in Lucknow, with regional offices across Lucknow.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-orange-500">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Er. Pradeep Kumar", role: "Pucrhcase Head", phone: "+91 9264928486", email: "amit@xyz.com" },
            { name: "Mrs. Pragya Kumari", role: "Sales Executive", phone: "+91 90000 22222", email: "riya@xyz.com" },
            { name: "Mrs. Sakshi Pandey", role: "HR Department", phone: "+91 90000 33333", email: "sanjay@xyz.com" }
          ].map((person, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-600">{person.role}</p>
              <p className="text-sm mt-2">📞 {person.phone}</p>
              <p className="text-sm">✉️ {person.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-gray-100 py-10 text-center">
        <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
          <a href="#" className="text-sky-500 hover:text-sky-700">Twitter</a>
          <a href="#" className="text-pink-600 hover:text-pink-800">Instagram</a>
          <a href="#" className="text-blue-700 hover:text-blue-900">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
