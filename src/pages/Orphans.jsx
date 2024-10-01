import { NavLink } from "react-router-dom";

const Orphans = () => {
  return (
    <>
      {/* Hero Section with Banner */}
      <div className="relative w-full h-[30vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="absolute inset-0 opacity-60"></div>
        <h1 className="relative text-black text-4xl md:text-5xl font-bold text-center">
        Help Orphans in Need
        </h1>
      </div>

      {/* Help Orphans Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl sm:text-4xl lg:text-4xl font-extrabold text-gray-800 mb-6">
              Help Orphans
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              At Help Human Rights, we are committed to supporting orphans by providing shelter, education, and care. Your donations make a significant impact in their lives.
            </p>
            <NavLink
              to="/DonationForm"
              className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg"
            >
              Donate Now
            </NavLink>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/orphan.jpg"
              alt="Orphans"
              className="w-full h-auto max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:flex md:items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/orphan1.jpg"
              alt="Donations"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 md:ml-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
              Your Donations Make an Impact
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Donations to Help Human Rights support orphans by providing essential resources such as education, healthcare, and shelter. With your help, we can make a difference.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              We also advocate for children's rights and organize community support programs that empower those in need.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="donate" className="bg-white py-16 text-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold">
            Make a Difference Today
          </h2>
          <p className="mt-4 text-lg font-light mx-auto lg:w-2/3">
            Your donations help orphans access shelter, education, and care. Together, we can provide them with the opportunity for a brighter future.
          </p>
          <NavLink
            to="/DonationForm"
            className="mt-8 inline-block bg-red-500  text-white font-semibold py-3 px-10 rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Donate Now
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Orphans;