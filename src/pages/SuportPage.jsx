
import HelpProjects from './HelpProjects';
import Carousel from './Carousel';

const SupportPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="py-20 bg-red-400 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Our Work
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
          At Help Human Rights Organization of Pakistan, we are profoundly
          dedicated to supporting human rights organizations in their quest to
          secure justice, equality, and dignity for every individual. Our
          commitment goes beyond words—it's about action, solidarity, and the
          belief that together, we can make a difference.
        </p>
      </div>

      {/* First Section (Image on the Right) */}
      <div className="py-16 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 border-b-4 border-red-500 pb-2 transition-colors duration-300 hover:text-red-500">
              Our Comprehensive Support for Human Rights
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              Human rights organizations operate on the frontlines of global
              change, often working in hostile or resource-scarce environments.
              We offer tailored support such as:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
              <li>Logistical Support for organizing campaigns and protests</li>
              <li>Financial Aid for expanding reach and impact</li>
              <li>Technological Solutions to mobilize supporters securely</li>
              <li>Legal Guidance for navigating complex international laws</li>
              <li>Emotional Support for activists facing personal challenges</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/bg4.jpg"
              alt="Supporting Human Rights"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-110 duration-300"
            />
          </div>
        </div>
      </div>
<HelpProjects />
      {/* Second Section (Image on the Left) */}
      <div className="py-16 bg-gray-100 shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <img
              src="/bg3.jpg"
              alt="Empowering Organizations"
              className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-110 duration-300"
            />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 border-b-4 border-red-500 pb-2 transition-colors duration-300 hover:text-red-500">
              Empowering Human Rights Organizations
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
              We offer a range of support mechanisms:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-lg space-y-2">
              <li>
                Logistical support to assist in organizing relief efforts and
                protests
              </li>
              <li>
                Financial aid through grants and funding opportunities to expand
                outreach
              </li>
              <li>
                Technological tools and platforms for awareness and data
                protection
              </li>
              <li>
                Legal and advocacy services to protect the rights of activists
              </li>
              <li>
                Psychological and emotional support for human rights defenders
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="py-16 bg-white text-black text-center px-6">
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Join Us in the Fight for Human Rights
        </h3>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-8">
          Whether as a volunteer, donor, or partner, you can make a difference.
          Together, we can help build a world where everyone's rights are upheld
          and protected. Join us today in this critical mission.
        </p>
        <a href="/DonationForm">
          <button className="mt-4 bg-red-500 text-white font-bold 
          py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300">
            Get Involved
          </button>
        </a>
      </div>
<Carousel />
    </>
  );
};

export default SupportPage;
