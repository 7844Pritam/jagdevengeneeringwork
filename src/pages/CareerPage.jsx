import React from "react";
import { Briefcase, Users, HeartHandshake } from "lucide-react";
import img from '../assets/c2.jpg'
const CareersPage = () => {
  return (
    <div className="min-h-screen  text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gray-800 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="mt-2 text-lg">Build your future with us — where passion meets purpose.</p>
      </header>

      {/* Why Join Us */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">Why Join Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <Briefcase className="mx-auto text-orange-400" size={48} />
            <h3 className="mt-4 font-semibold text-xl">Meaningful Work</h3>
            <p className="mt-2 text-gray-600">Make an impact with real projects that shape industries.</p>
          </div>
          <div>
            <Users className="mx-auto text-orange-400" size={48} />
            <h3 className="mt-4 font-semibold text-xl">Collaborative Culture</h3>
            <p className="mt-2 text-gray-600">Work with passionate, supportive, and driven teammates.</p>
          </div>
          <div>
            <HeartHandshake className="mx-auto text-orange-400" size={48} />
            <h3 className="mt-4 font-semibold text-xl">Growth & Balance</h3>
            <p className="mt-2 text-gray-600">We invest in your growth — without compromising your life.</p>
          </div>
        </div>
      </section>

      {/* Application Section with Image */}
      <section className=" py-16 px-6">
        <div className="max-w-9xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Illustration */}
          <img
          src={img}
            alt="c
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            areer1"
            className="w-full h-auto rounded-lg object-cover"
          />

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Apply Now</h2>
            <form className="grid gap-5">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Position Applying For</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Cover Letter</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
              </div>
              <div>
                <label className="block mb-1 font-medium">Upload Resume</label>
                <input
                  type="file"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-400 file:text-white hover:file:bg-orange-500"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-400 text-white font-semibold px-6 py-3 rounded hover:bg-orange-500 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
