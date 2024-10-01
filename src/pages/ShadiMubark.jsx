

const ShadiMubarak = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="absolute inset-0 bg-red-500 opacity-50"></div>
        <h1 className="relative text-white text-6xl md:text-5xl font-bold z-10 text-center">
        Married Ceremony of Poor People
        </h1>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-16 px-6">
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
          <div className="md:w-1/2 p-5 text-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Supporting Wedding Ceremonies for the Needy
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Our program is dedicated to helping poor individuals overcome financial obstacles related to marriage. 
              We provide essential support to ensure they can afford the costs associated with wedding ceremonies 
              and related functions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              By offering financial aid, we ensure that these special moments are celebrated with dignity and joy, 
              without the stress of financial burdens.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Join us in our mission to ease the burden on those in need and help them celebrate their special moments 
              with grace and happiness.
            </p>
          </div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-white py-10 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us in Supporting a Worthy Cause</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Be a part of this noble mission by contributing to the wedding ceremonies of those in need. 
            Your support can make a significant difference in their lives.
          </p>
          <a href="/donate">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 
            px-8 rounded-lg shadow-lg transition-all duration-300">
              Donate Now
            </button>
          </a>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-10 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">What Our Beneficiaries Say</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs transition-transform transform hover:scale-105 duration-300">
              <p className="italic text-gray-600 mb-4">"Thanks to this program, I was able to celebrate my wedding with dignity. I can't express how grateful I am!"</p>
              <p className="font-bold">- Aisha Khan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs transition-transform transform hover:scale-105 duration-300">
              <p className="italic text-gray-600 mb-4">"The support we received made our wedding day truly special. Thank you for your kindness!"</p>
              <p className="font-bold">- Ali Ahmed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xs transition-transform transform hover:scale-105 duration-300">
              <p className="italic text-gray-600 mb-4">"This initiative changed our lives and made our wedding day memorable." </p>
              <p className="font-bold">- Sara Malik</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShadiMubarak;
