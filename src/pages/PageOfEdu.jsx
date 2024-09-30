
import LeftPro from './leftPro';
import imgsrc from '/edu5.jpg'; // Ensure this path is correct
import { NavLink } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-[20vh] flex items-center justify-center bg-cover bg-center"
        
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10 text-center">
          Education for All
        </h1>
      </div>

      {/* Educational Information Section */}
      <div className="max-w-6xl mx-auto py-5 px-6 text-black">
        <LeftPro
          imgsrc={imgsrc}
          heading="Education Must Be for Everyone"
          pera={`Education is a fundamental right, yet many students around the world face significant financial barriers that prevent them from accessing the learning opportunities they deserve. If you are one of these students, know that your dreams and aspirations are incredibly valuable, and your determination can open doors that may seem closed. Remember, there are numerous resources available, such as scholarships, grants, community programs, and online courses, designed to support individuals like you. Keep believing in yourself and stay persistent in your pursuit of knowledge. Reach out to mentors, educators, and organizations dedicated to helping students overcome financial challenges. Your passion for learning is your greatest asset, and with perseverance, you can achieve your goals and make a meaningful impact on the world. Providing support services such as tutoring, mentorship, and counseling to help students succeed. Advocating for policies that promote free and equitable access to education globally. At Help Human Rights Organization, we are committed to breaking down barriers to education and fostering a future where everyone has the opportunity to learn and thrive. Join us in our mission to make free education a reality for all.`}
        />
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto text-center text-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission for Education</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Your involvement can make a real difference in the lives of countless students. Together, we can break down barriers and make education accessible to everyone.
          </p>
          {/* Link to donation or volunteer page */}
          <NavLink to="/DonationForm">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-100">
              Join Us
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MainLayout;