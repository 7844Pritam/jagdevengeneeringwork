import React from "react";
import shed1 from "../../assets/crane2.jpg";
import single1 from "../../assets/single1.jpg";
import shed2 from "../../assets/crane1.jpg";
import single2 from "../../assets/single2.jpg";
import double2 from "../../assets/double2.jpg";

const IndustrialShedPage = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-6">
          EOT Crane Manufacturing
        </h1>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <img
            src={shed1}
            alt="EOT Crane"
            className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
          />
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-sm text-gray-900 text-justify">
              An Electric Overhead Traveling (EOT) Crane is a highly efficient
              lifting solution widely used in warehouses, factories, and
              industrial plants. Designed for heavy material handling, it offers
              smooth operation, high load capacity, and precision in movement,
              ensuring safe and reliable performance for various industrial
              applications. This unique configuration boasts a single girder or
              cross beam, ingeniously flipped upside-down. The gantry beam
              suspends against the shed structure, while the LT end carriage
              dangles from it, seamlessly connected below the end carriage. Our
              underslung EOT crane ranges up to 12.5 tons with an impressive
              25-meter span. All three meticulously crafted modular design
              adheres to rigorous international standards – FEM, ISO, and IS –
              offering precision and excellence. A circular variant in the same
              category further amplifies your choices. Discover unparalleled
              material handling precision with our EOT Cranes, revolutionizing
              overhead lifting across all axes. We offer a diverse range,
              including Single Girder, Double Girder, Underslung EOT Cranes, and
              Crane Kits, tailored to your specific needs.
            </p>
          </div>
        </div>

        {/* Single Girder EOT Crane Section */}
        <h3 className="text-2xl font-bold text-orange-400 mb-4 text-left">
          Single Girder EOT Crane
        </h3>
        <div className="flex flex-col md:flex-col-reverse gap-6 mb-10">
          {/* Images side by side */}
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={single1}
              alt="Single Girder EOT Crane 1"
              className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
            />
            <img
              src={single2}
              alt="Single Girder EOT Crane 2"
              className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
            />
          </div>

          {/* Text content below the images */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-900 text-justify">
              A Single Girder EOT Crane is a cost-effective and reliable
              material handling solution designed for medium-duty applications.
              It consists of a single bridge girder supported on end trucks,
              with a hoist and trolley running on the bottom flange. Our Single
              Girder EOT Cranes are ideal for workshops, warehouses, fabrication
              units, and small to medium-scale industries where lifting
              requirements are up to 25 tons. These cranes ensure smooth
              operation, reduced dead weight, low maintenance cost, and easy
              installation.
            </p>
            <p className="text-sm text-gray-900 text-justify mt-4">
              Our selection of bespoke single girder EOT cranes is ideal for
              lifting requirements as light as 250kg or 15T and up to 30 meters
              span. Additionally, we design and manufacture our cranes with
              adequate safety guidelines in mind, and our products can be
              designed to match the requirements of both new and existing
              buildings. To learn about our service or to schedule an
              appointment with our consultants, contact us today!
            </p>
          </div>
        </div>

        {/* Technical Specifications - Single Girder */}
        <div className="bg-white rounded-xl shadow p-6 mb-12">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            TECHNICAL SPECIFICATION
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-300 px-4 py-2 w-12">#</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Specification
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Capacity (t)</td>
                  <td className="border px-4 py-2">(0.5 - 20)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Span (m)</td>
                  <td className="border px-4 py-2">(3 - 50)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">Height of Lift (m)</td>
                  <td className="border px-4 py-2">(3 - 100)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2">4</td>
                  <td className="border px-4 py-2">Speed (m/min)</td>
                  <td className="border px-4 py-2">
                    Hoisting: 0.5–20 | Cross Travel: 5–40 | Long Travel: 5–40
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">5</td>
                  <td className="border px-4 py-2">Power Supply</td>
                  <td className="border px-4 py-2">3 Phase, 415V, 50Hz</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2">6</td>
                  <td className="border px-4 py-2">Duty Class</td>
                  <td className="border px-4 py-2">
                    IS 3177 / IS 807 (Class II, III, IV)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Double Girder EOT Crane Section */}
        <h3 className="text-2xl font-bold text-orange-400 mb-4 text-left">
          Double Girder EOT Crane
        </h3>
        <div className="flex flex-col md:flex-col-reverse gap-6 mb-10">
          {/* Images side by side */}
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={shed2}
              alt="Double Girder EOT Crane 1"
              className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
            />
            <img
              src={double2}
              alt="Double Girder EOT Crane 2"
              className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
            />
          </div>

          {/* Text content below the images */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-900 text-justify">
              ElectroMech’s Double Girder EOT Cranes are rugged in Construction and are deployed for a wide range of hoisting capacities and applications. Our cranes combine high speed and high hooks for steel, metal and various other sectors which need heavy service.With SWLs ranging from 3.2 to more than 500t, our cranes incorporate either standard ABUS crabs for up to 100t SWL or fully customised open winch type crabs. ElectroMech’s fully customised double girder cranes are suitable for varied duty cycles for a large range of spans, heights of lift and customizable speeds. They are provided with multiple hoisting trolleys running on the same bridge or auxiliary hoisting mechanisms on the main trolley. Precise control of all motions is achieved through variable frequency drives.
            </p>
            <p className="text-sm text-gray-900 text-justify mt-4">
              Our Double Girder EOT Cranes can handle capacities up to 200 tons
              with spans up to 50 meters. Built with precision engineering and
              in compliance with IS/FEM standards, these cranes ensure maximum
              safety, reliability, and smooth performance under challenging
              working conditions.
            </p>
          </div>
        </div>

        {/* Technical Specifications - Double Girder */}
        <div className="bg-white rounded-xl shadow p-6 mb-12">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            TECHNICAL SPECIFICATION
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-300 px-4 py-2 w-12">#</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Specification
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-900">
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Capacity (t)</td>
                  <td className="border px-4 py-2">(3.2 - 500)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Span (m)</td>
                  <td className="border px-4 py-2">(3 - 60)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">Height of Lift (m)</td>
                  <td className="border px-4 py-2">(3 - 300)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2">4</td>
                  <td className="border px-4 py-2">Location</td>
                  <td className="border px-4 py-2">Indoor & Outdoor</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">5</td>
                  <td className="border px-4 py-2">Ambient Temperature (°C)</td>
                  <td className="border px-4 py-2">Upto 50</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2">6</td>
                  <td className="border px-4 py-2">Motions (m/min)</td>
                  <td className="border px-4 py-2">
                    Main Hoist Speed - (1 - 10) <br />
                    Cross Travel Speed - (5 - 60) <br />
                    Long Travel Speed - (5 - 100)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">7</td>
                  <td className="border px-4 py-2">Crane Control</td>
                  <td className="border px-4 py-2">
                    Pendant <br /> Radio Remote Control
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border px-4 py-2">8</td>
                  <td className="border px-4 py-2">Operator Cabin</td>
                  <td className="border px-4 py-2">(Open/Closed/AC Cabin)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">9</td>
                  <td className="border px-4 py-2">Power Source</td>
                  <td className="border px-4 py-2">
                    Shrouded DSL, MS Angle DSL, Drag Chain
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="md:w-1/2 flex flex-col justify-center space-y-2 text-gray-900">
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-orange-400">
                  Manufacturing:
                </span>{" "}
                Assembly lines, machinery housing.
              </li>
              <li>
                <span className="font-semibold text-orange-400">
                  Warehousing:
                </span>{" "}
                Bulk storage and distribution centers.
              </li>
              <li>
                <span className="font-semibold text-orange-400">
                  Cold Storage:
                </span>{" "}
                Food processing and temperature-controlled units.
              </li>
              <li>
                <span className="font-semibold text-orange-400">Power:</span>{" "}
                Generator and transformer housing.
              </li>
              <li>
                <span className="font-semibold text-orange-400">
                  Recycling:
                </span>{" "}
                Waste management plants.
              </li>
              <li>
                <span className="font-semibold text-orange-400">
                  Agriculture:
                </span>{" "}
                Grains, equipment, and cattle sheds.
              </li>
            </ul>
          </div>
          <img
            src={shed2}
            alt="Industrial Shed"
            className="w-full md:w-1/2 max-h-[400px] object-cover rounded-xl shadow"
          />
        </div>

        {/* Features */}
        <h2 className="text-2xl font-bold text-orange-400 mb-4">ADVANTAGES</h2>
        <ul className="list-disc list-inside text-gray-900 space-y-2">
          <li>Safe & Smooth operation with several inbuilt features.</li>
          <li>Robust design ensuring long service intervals</li>
          <li>Easy access to all major components for ease of servicing .</li>
          <li>Higher Space Utilisation in work area.</li>
          <li>Optimum use of floor space is possible due to shorter end clearance</li>
          <li>Easy access to all major components for ease of servicing.</li>
          <li>Optimum structure to ensure smaller headroom & Shed Design.</li>
          <li>Proven reliability.</li>
        </ul>
      </div>
    </div>
  );
};

export default IndustrialShedPage;
