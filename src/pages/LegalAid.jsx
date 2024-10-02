import React from 'react';

const LegalAid = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-[50vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/Web-Icon.png')` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold drop-shadow-2xl leading-tight">
            Legal Aid: Justice for All
          </h1>
          <p className="text-xl md:text-2xl text-white mt-4">
            Offering Free Legal Assistance to Those in Need
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-white p-8">
        {/* Legal Aid Section */}
        <section className="flex flex-col lg:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden mb-16 transform transition duration-500 hover:shadow-2xl">
          {/* Text Section */}
          <div className="lg:w-1/2 p-12 lg:p-16 text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-black mb-6 leading-tight">
              Access to Justice: A Fundamental Right
            </h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              At Help Human Rights, we believe that access to justice is a
              fundamental right. Our Legal Aid services provide free and
              accessible legal assistance to individuals and families who cannot
              afford it. We help navigate complex legal challenges in family law,
              housing disputes, employment rights, and more.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Our dedicated team of professionals works tirelessly to ensure that
              every individual has the opportunity to seek and receive fair
              treatment under the law.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="/LegalAll2.jpg"
              alt="Legal Aid Services"
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </section>

        {/* Impact Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Donation Impact Section */}
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition duration-500 hover:shadow-xl">
            <img
              src="/LegalAll.jpg"
              alt="Legal Support"
              className="w-full h-64 object-cover"
            />
            <div className="p-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Your Donations Create Lasting Impact
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Donations to Help Human Rights make a significant impact on our
                Legal Aid services, enabling us to provide free legal counsel and
                representation to those who need it most. Your support helps us
                reach more people and offer assistance in family law, housing
                disputes, immigration issues, and criminal defense.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                With your help, we can continue to prioritize vulnerable
                populations, such as victims of domestic violence, the elderly,
                and marginalized groups, ensuring their access to justice.
              </p>
            </div>
          </div>

          {/* Outreach and Education Section */}
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition duration-500 hover:shadow-xl">
            <div className="p-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                Empowering Through Outreach and Education
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our outreach programs and workshops inform community members
                about their rights and available resources, empowering them to take
                control of their legal situations. We conduct workshops to educate
                people on important legal matters, ensuring they have the tools to
                protect themselves and their families.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                By prioritizing education and outreach, we strengthen communities
                and ensure everyone has access to the resources they need for a
                brighter future.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center mt-16">
          <h2 className="text-5xl font-extrabold text-black mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Become a part of this impactful journey to ensure that justice is
            accessible to all, regardless of financial circumstances.
          </p>
          <a
            href="#"
            className="inline-block px-12 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-700"
          >
            Donate Now
          </a>
        </section>
      </div>
    </>
  );
};

export default LegalAid;
