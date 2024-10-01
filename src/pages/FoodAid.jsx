
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation

// FoodAid Component
const FoodAid = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="absolute inset-0 bg-red-500 opacity-50"></div>
        <h1 className="relative text-white text-6xl md:text-5xl font-bold z-10 text-center">
          Food Distribution Program
        </h1>
      </div>

      {/* Food Aid Information Section */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Right Image */}
          <div className="md:w-1/2 p-5">
            <img
              src="/food.jpg"
              alt="Food Distribution"
              className="rounded-lg shadow-lg w-full h-auto transition-transform transform hover:scale-105 duration-300"
            />
          </div>
          
          {/* Left Content */}
          <div className="md:w-1/2 p-5 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Fighting Hunger with Compassion
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              At Help Human Rights, we believe that access to nutritious food is a fundamental human right. Our Food Aid program is dedicated to combating hunger and food insecurity within our community. We provide essential meals and groceries to individuals and families in need, ensuring that no one goes hungry.
            </p>
            <p className="text-lg leading-relaxed">
              From distributing food packages to organizing community kitchens, our efforts are focused on delivering sustenance and hope to those struggling to make ends meet.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left Image */}
            <div className="md:w-1/2 p-5">
              <img
                src="/food4.jpg"
                alt="Donations Helping"
                className="rounded-lg shadow-lg w-full h-auto transition-transform transform hover:scale-105 duration-300"
              />
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 p-5 text-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Your Donations Help Us Make an Impact
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Donations are the lifeline of our Food Aid program. Every contribution helps us purchase food supplies, expand our reach, and improve the quality of our services.
              </p>
              <p className="text-lg leading-relaxed">
                With your support, we can source more nutritious food, ensuring that the meals we provide are balanced and nourishing. Your donations also enable us to increase the frequency and scale of our food distributions, helping us serve more people and locations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto text-center text-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission to Fight Hunger</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            You can make a difference by supporting our cause. Together, we can ensure that no one in our community goes to bed hungry. Your donations make it all possible.
          </p>
          
          {/* NavLink added to the Donate button */}
          <NavLink to="/DonationForm">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-100">
              Donate Now
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default FoodAid;