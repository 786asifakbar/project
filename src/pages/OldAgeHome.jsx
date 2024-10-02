
import { NavLink } from "react-router-dom"; // Import NavLink from React Router

const OldAgeHome = () => {
  return (
    <>
      <div
        className="relative flex items-center justify-center h-[30vh] bg-cover bg-center text-black"
        style={{ backgroundImage: `url('/Web-Icon.png')` }}
      >
        <div className="absolute inset-0 opacity-50"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold drop-shadow-lg">
            Old Age Home
          </h1>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
        {/* Header Section */}
        <section className="flex flex-col lg:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden mb-12 transform transition duration-500 hover:shadow-xl">
          {/* Text Section */}
          <div className="lg:w-1/2 p-10 lg:p-16 text-center lg:text-left">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
              Old People
            </h1>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              When a human rights organization establishes an old age home, it
              signifies a profound commitment to the welfare and dignity of
              elderly individuals. This initiative addresses the needs of senior
              citizens who may be vulnerable due to age-related challenges, social
              isolation, or lack of family support.
            </p>
            <p className="text-gray-700 text-lg">
              Help the Human Rights Organization of Pakistan create a nurturing
              environment for elderly individuals, ensuring their dignity,
              security, and care.
            </p>
            <div className="mt-8">
              <NavLink
                to="/DonationForm" // Use NavLink for navigation
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:bg-red-700"
              >
                Get Involved
              </NavLink>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="/oldage.jfif"
              alt="Old Age Home"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </section>

        {/* Feature Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition duration-500 hover:shadow-2xl">
            <img
              src="/oldagee.jpeg"
              alt="Old Age Care"
              className="w-full h-64 object-cover"
            />
            <div className="p-10">
              <h2 className="text-4xl font-bold text-black mb-6">
                Comprehensive Care
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                The old age home provides round-the-clock care, including medical
                attention, nutritional support, and assistance with daily living
                activities. Trained caregivers and medical professionals are on-site to
                address the health and personal needs of residents.
              </p>

              <h2 className="text-4xl font-bold text-black mb-6">
                Dignified Living
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Emphasizing respect and dignity, the facility offers a comfortable
                and secure living environment. Residents have access to
                personalized care plans and are encouraged to maintain their
                autonomy and self-worth.
              </p>

              <h2 className="text-4xl font-bold text-black mb-6">
                Emotional and Social Support
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                The old age home fosters a sense of community through social
                activities, recreational programs, and counseling services. These
                initiatives combat loneliness and promote emotional well-being.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-2xl rounded-3xl p-10 transform hover:scale-105 transition duration-500 hover:shadow-2xl">
            <h2 className="text-4xl font-bold text-black mb-6">
              Advocacy and Impact
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              The Human Rights Organization uses the old age home as a platform to
              raise awareness about the rights of the elderly and advocate for
              policy changes. They address systemic issues affecting senior
              citizens and promote a culture of respect and protection.
            </p>

            <p className="text-gray-700 mb-6 text-lg">
              By establishing this old age home, the organization addresses
              critical gaps in care and support available to senior citizens. This
              initiative serves as a model for promoting the rights and
              well-being of seniors across the community.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <h2 className="text-5xl font-extrabold text-black mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Become a part of this impactful journey to support the elderly and
            ensure their rights and dignity.
          </p>
          <NavLink
            to="/DonationForm" // NavLink for donation page
            className="inline-block px-12 py-4 bg-red-600 text-white font-bold rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:bg-red-700"
          >
            Donate Now
          </NavLink>
        </section>
      </div>
    </>
  );
};

export default OldAgeHome;
