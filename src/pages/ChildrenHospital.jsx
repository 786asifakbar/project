const ChildrenHospital = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-[30vh] bg-cover bg-center text-black"
        style={{ backgroundImage: `url('/Web-Icon.png')` }}
      >
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            Welcome to Children's Hospital
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Compassionate care for every child, every day.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto p-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Why Children's Hospitals Matter
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Children's hospitals are dedicated to providing specialized care and support for our youngest patients. They face unique challenges and require a comprehensive approach to ensure every child receives the best care possible.
        </p>
        
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src="/Specialized-Care.jpg" // Replace with your image path
              alt="Specialized Care"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              Specialized Care
            </h3>
            <p className="text-white">
              Tailored medical services to meet the unique needs of children.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-gradient-to-r from-green-400 to-teal-500 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src="/supportive-environment.jpg" // Replace with your image path
              alt="Supportive Environment"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              Supportive Environment
            </h3>
            <p className="text-white">
              Creating a nurturing space that promotes healing and comfort.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-gradient-to-r from-red-400 to-orange-500 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src="/community-outreach.jpg" // Replace with your image path
              alt="Community Outreach"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              Community Outreach
            </h3>
            <p className="text-white">
              Engaging with communities to provide necessary health services.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-gradient-to-r from-indigo-400 to-purple-500 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <img
              src="/emergency-services.jpg" // Replace with your image path
              alt="Emergency Services"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">
              Emergency Services
            </h3>
            <p className="text-white">
              24/7 emergency care for urgent health concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6">
        {/* Left Side - Video */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Watch Our Story
          </h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-80 rounded-lg shadow-lg"
              src="/hospital.mp4"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Join Us in Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We are dedicated to building a safe and healthy environment for children. Our commitment extends beyond healthcare; we strive to provide holistic support, including mental health services, nutrition programs, and educational initiatives.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Together, we can make a difference. Join us in our mission to ensure that every child has access to the care and support they need to thrive.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-12 bg-white text-center text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Make a Difference Today
        </h2>
        <p className="text-lg mb-6">
          Your support can transform the lives of children in need. Whether through donations,
           volunteering, or spreading awareness, every little action counts.
        </p>
        <a href="/DonationForm">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6
           rounded-lg transition-all duration-300">
            Donate Now
          </button>
        </a>
      </div>
    </>
  );
};

export default ChildrenHospital;