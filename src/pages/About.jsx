
import AboutImg2 from '/bg2.jpg';  // Ensure these paths point to your public directory
import AboutImg from '/bg4.jpg';   // For Vercel or similar deployments

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <div className="relative w-full h-[30vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="absolute inset-0 opacity-50"></div>
        <h1 className="relative text-black  text-4xl md:text-4xl lg:text-6xl font-bold text-center">
          About Us 
        </h1>
      </div>

      {/* Summary Section */}
      <div className="container mx-auto p-10">
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Help Human Rights Organization, our mission is to champion human rights, provide education, and support those in need.
            We strive to empower individuals and communities through various programs aimed at promoting equality and justice.
          </p>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Key Programs:</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>Free Education Initiatives: Offering educational resources and scholarships to underprivileged children.</li>
            <li>Marriage Support Program: Assisting financially disadvantaged individuals in conducting wedding ceremonies.</li>
            <li>Health Awareness Campaigns: Promoting health and well-being through community outreach and education.</li>
          </ul>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto p-10">
        {/* Section 1: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row-reverse items-center my-10 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Right Content */}
          <div className="md:w-1/2 p-5">
            <h4 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Championing Universal Freedom and Dignity for All
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Help Human Rights Organization of Pakistan, we believe that freedom and dignity are fundamental rights 
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
        <div className="flex flex-col md:flex-row items-center my-10 bg-white rounded-lg shadow-lg overflow-hidden">
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

        {/* Call to Action Section */}
        <div className="bg-gray-200 py-10 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Join the Movement</h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Together, we can make a difference. Your support helps us continue our mission to promote human rights and dignity for all.
            </p>
            <a href="/DonationForm" className="bg-red-500 hover:bg-red-600 
                 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md">
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
