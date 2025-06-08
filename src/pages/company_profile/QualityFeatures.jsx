import React from 'react';
import { CheckCircle } from 'lucide-react'; // Optional for icon
import img from '../../assets/sheet.png'
const QualityFeatures = () => {
  return (
    <section className="bg-white-50   py-16 px-6 md:px-20">
      <div className='container'>

      <div className="  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            GI SHEET SOLUTION
          </h2>
          <p className="text-black text-lg mb-6">
            At any case we never compromise in our quality part of our products and follow strict total quality checks at our testing units. These steps help us to make sure that our products have high durability and fine finishing.
          </p>

          <ul className="space-y-4 text-black-900 font-semibold">
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✅</span> Attractive and functional design with choice of panel and trim colors.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✅</span> Eave heights available to accommodate a wide variety of heights.
            </li>
            <li className="flex items-start gap-2 flex-wrap gap-x-6">
              <span className="flex items-center gap-2">
                <span className="text-orange-500">✅</span> Low maintenance.
              </span>
              <span className="flex items-center gap-2">
                <span className="text-orange-500">✅</span> Easy expended to grow with your need.
              </span>
            </li>
            <li className="flex items-start gap-2 flex-wrap gap-x-6">
              <span className="flex items-center gap-2">
                <span className="text-orange-500">✅</span> Fast erection.
              </span>
              <span className="flex items-center gap-2">
                <span className="text-orange-500">✅</span> Skilled staff.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500">✅</span> High Quality product with modern machine.
            </li>
          </ul>
        </div>

        {/* Image */}
        <div>
          <img
            src={img}// Replace with actual image path
            alt="Metal Sheet"
            className="rounded-lg w-[400px] h-100 shadow object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default QualityFeatures;
