const Health = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-[30vh] md:h-[30vh] bg-cover bg-center" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="flex items-center justify-center h-fullbg-opacity-60">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold z-10 text-center drop-shadow-lg">
            Your Health, Our Priority
          </h1>
        </div>
      </div>

      {/* Healthcare Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Comprehensive Healthcare Services</h2>
          <p className="text-base md:text-lg text-gray-600 mt-4">
            Dedicated to improving community health through a range of medical services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* First Service */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url('/health1.jpg')` }}>
              <h3 className="text-white text-xl font-bold absolute bottom-4 left-4">Medical Check-ups</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Regular medical check-ups to monitor and maintain your health.
              </p>
            </div>
          </div>

          {/* Second Service */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url('/health.jpg')` }}>
              <h3 className="text-white text-xl font-bold absolute bottom-4 left-4">Chronic Disease Care</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Comprehensive care for chronic diseases to ensure long-term health.
              </p>
            </div>
          </div>

          {/* Third Service */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: `url('/health3.jpg')` }}>
              <h3 className="text-white text-xl font-bold absolute bottom-4 left-4">Emergency Services</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Immediate medical attention for urgent health concerns.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-10">What Our Patients Say</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 italic">"The care I received was exceptional, and the staff made me feel safe and comfortable."</p>
              <p className="mt-4 text-gray-900 font-bold">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 italic">"Thanks to the wonderful doctors, I’m back on my feet and healthier than ever!"</p>
              <p className="mt-4 text-gray-900 font-bold">- Jane Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 italic">"This program saved my life. I can't thank the team enough for their care."</p>
              <p className="mt-4 text-gray-900 font-bold">- Alex Johnson</p>
            </div>
          </div>
        </div>
      </div>

      {/* Donations Impact Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <img src="/health4.jpg" alt="Health Impact" className="w-full rounded-lg shadow-lg"/>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h3 className="text-2xl font-bold text-gray-800">Your Donations Make a Difference</h3>
              <p className="text-gray-700 mt-4">
                Your generous donations help us provide life-saving medical services to those in need. 
                Every dollar contributes to better healthcare and brighter futures for our communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Join Us in Our Mission</h2>
        <p className="text-base sm:text-lg text-black mb-6">
          Your contributions can provide essential healthcare services to underserved communities. \
          Help us create a healthier world.
        </p>
        <a href="/DonationForm">
          <button className="bg-red-500 hover:bg-red-600 text-black font-bold py-3 px-6
           rounded-lg shadow-lg transition duration-300">
            Donate Now
          </button>
        </a>
      </div>
    </>
  );
};

export default Health;
