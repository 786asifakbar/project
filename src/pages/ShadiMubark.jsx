import React from 'react';

const ShadiMubarak = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10 text-center">
          Married Ceremony of Poor People
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Section */}
          <div className="md:w-1/2 p-5">
            <img 
              src="/hall.jpg" 
              alt="Marriage Ceremony Hall" 
              className="rounded-lg shadow-lg w-full h-auto transition-transform transform hover:scale-105 duration-300" 
            />
          </div>
          
          {/* Text Section */}
          <div className="md:w-1/2 p-5 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Supporting Wedding Ceremonies for the Needy
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Our program is committed to helping poor individuals overcome financial obstacles related to marriage. 
              We provide essential support to ensure they can afford the costs associated with wedding ceremonies 
              and related functions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              By offering financial aid, we ensure that these special moments are celebrated with dignity and joy, 
              without the stress of financial burdens.
            </p>
            <p className="text-lg leading-relaxed">
              Join us in our mission to ease the burden on those in need and help them celebrate their special moments 
              with grace and happiness.
            </p>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto text-center text-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us in Supporting a Worthy Cause</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Be a part of this noble mission by contributing to the wedding ceremonies of those in need. 
            Your support can make a significant difference in their lives.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
            Donate Now
          </button>
        </div>
      </div>
    </>
  );
}

export default ShadiMubarak;