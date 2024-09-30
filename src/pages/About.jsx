import React from 'react';
import AboutImg2 from '/bg2.jpg';  // Ensure these paths point to your public directory
import AboutImg from '/bg3.jpg';   // For Vercel or similar deployments

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <div className="bg-cover bg-center py-20" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="container mx-auto text-center px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">About Us</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Dedicated to supporting human rights organizations in their fight for justice, equality, and dignity for all.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-10">
        {/* Section 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row-reverse items-center my-10">
          {/* Right Content */}
          <div className="md:w-1/2 p-5">
            <h4 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Championing Universal Freedom and Dignity for All
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Help Human Right Organization of Pakistan, we believe that freedom and dignity are fundamental rights 
              that belong to every individual, regardless of their background or circumstances. Our mission is to support 
              those who tirelessly advocate for these essential values.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              By partnering with organizations and individuals who share our passion for justice, we help build a world 
              where every person is treated with dignity and has the freedom to live without fear or discrimination.
            </p>
          </div>

          {/* Left Image */}
          <div className="md:w-1/2 p-5">
            <img
              src={AboutImg2}
              alt="Justice and Equality"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>

        {/* Section 2: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center my-10">
          {/* Left Content */}
          <div className="md:w-1/2 p-5">
            <h4 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Creating a Better Future Together
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe that building a better future starts with standing up for human rights. By supporting those 
              who champion equality, justice, and dignity, we can create lasting change in the world.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Every action counts—whether it’s through volunteering, donations, or partnerships, your contribution 
              plays a vital role in helping human rights organizations continue their work.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 p-5">
            <img
              src={AboutImg}
              alt="Join the Movement"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;