
import { NavLink } from "react-router-dom";

const WaterPlant = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-black h-[30vh] flex flex-col justify-center items-center">
        <div className="absolute inset-0">
          <img
            src="/Web-Icon.png"
            alt="Water Plant"
            className="object-cover w-full h-full opacity-30"
          />
        </div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-4">
            Water Plant Treatment
          </h1>
        </div>
      </section>

      {/* Water Treatment Information Section */}
      <section id="details" className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex justify-center items-center">
              <img
                src="/waterplant1.jpeg"
                alt="Water Plant"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-black mb-4">
                Water Treatment Process
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A water treatment plant is a facility that processes raw water to make it safe for human consumption,
                industrial use, and environmental discharge. The main stages in water treatment include coagulation,
                sedimentation, filtration, and disinfection. These processes remove contaminants like bacteria, viruses,
                sediments, and chemicals, ensuring the water meets safety standards.
              </p>

              <h3 className="text-2xl font-bold text-blue-600 mb-4">Fixing Issues in Water Treatment Plants</h3>
              <ul className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Assessment and Diagnosis:</strong> Identify problems through inspections, water quality testing, and equipment assessments.
                </li>
                <li>
                  <strong>Maintenance and Upgrades:</strong> Repair or replace faulty equipment, upgrade systems, and implement new technologies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-black mb-4">
                Your Donations Help Us Create This Impact
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Investment in water treatment plants varies widely depending on the plant size, necessary upgrades, and technologies. These investments generally cover:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Infrastructure:</strong> Construction or expansion of facilities.</li>
                <li><strong>Technology:</strong> Advanced treatment technologies and automation systems.</li>
                <li><strong>Training:</strong> Staff development programs for plant operations.</li>
                <li><strong>Compliance:</strong> Ensuring regulatory requirements and environmental sustainability.</li>
              </ul>
              <p className="mt-6 text-lg text-gray-700">
                Typical investment costs for small to medium-sized plants range from a few million to tens of millions of dollars. Large-scale plants can require investments of hundreds of millions or even billions of dollars.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <img
                src="/waterplant.jpeg"
                alt="Water Plant"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-16">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-black mb-4">
            Join Us in Making Clean Water Accessible for All
          </h2>
          <p className="text-lg text-black mb-6">
            Your support and contributions will help us continue improving water quality worldwide. Together, we can make a difference!
          </p>
          <NavLink
            to="/DonationForm"
            className="bg-red-500 text-white font-bold py-3 px-6 rounded-full hover:bg-red-600 transition duration-300"
          >
            Donate Now
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default WaterPlant;
