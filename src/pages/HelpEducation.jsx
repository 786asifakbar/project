const HelpEducation = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] bg-cover bg-center" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="flex items-center justify-center h-full bg-opacity-50">
          <h1 className="text-black text-6xl md:text-6xl font-bold z-10 text-center drop-shadow-lg">
            Empower the Future through Education
          </h1>
        </div>
      </div>

      {/* Education Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Free Education for Everyone</h2>
          <p className="text-lg text-gray-700 mt-4">
            Help Human Rights Organization is working towards providing equal education opportunities for all, promoting a brighter future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img src="/education.jpg" alt="Education" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center">
              <p className="text-white text-2xl font-bold">Accessible Learning for All</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Education Matters?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Education is the foundation of any prosperous community. By offering free educational resources, we are helping to build a more informed and empowered society.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>Free educational programs for children, youth, and adults.</li>
              <li>Volunteer educators and experts providing their skills and knowledge.</li>
              <li>Utilizing online platforms to make education accessible to everyone.</li>
              <li>Courses available in multiple languages for diverse learners.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white text-black py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-10">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">"Thanks to this program, I can now pursue my dreams and make a positive impact in my community!"</p>
              <p className="mt-4 text-gray-900 font-bold">- Sarah Khan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">"The learning platform is easy to use, and the volunteer teachers are simply amazing!"</p>
              <p className="mt-4 text-gray-900 font-bold">- Ahmed Ali</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">"This initiative has given me a chance to continue my education despite financial hardships."</p>
              <p className="mt-4 text-gray-900 font-bold">- Aisha Malik</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16 text-center text-black">
        <h2 className="text-3xl font-bold mb-6">Help Us Spread Education</h2>
        <p className="text-lg mb-8">
          Your support can bring education to those who need it the most. Help us make a lasting difference by donating today.
        </p>
        <a href="/DonationForm">
          <button className="bg-red-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg 
          hover:bg-red-600 transition duration-300">
            Donate Now
          </button>
        </a>
      </section>
    </>
  );
};

export default HelpEducation;
