
import PassPro from './PassPro';
import LeftPro from './LeftPro';

const Health = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] bg-cover bg-center" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="flex items-center justify-center h-full">
          <h1 className="text-black text-5xl md:text-5xl font-bold z-10 text-center">
            Care Your Health
          </h1>
        </div>
      </div>
      {/* Healthcare Information Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <PassPro 
          backImgsrc=""
          secImg="/health4.jpg"
          title=""
          p={`At Help Human Rights, we are committed to providing essential healthcare services to underserved communities. 
          Our Healthcare Support program focuses on delivering comprehensive medical care to individuals who lack access to basic health services. 
          We offer a range of services, including medical check-ups, treatment for chronic conditions, emergency care, and preventive health programs. 
          Our goal is to improve health outcomes, prevent disease, and promote overall well-being. We operate clinics and partner with healthcare professionals 
          to ensure that quality medical care is available to those who need it most. By addressing both immediate health needs and long-term care, 
          we aim to reduce health disparities and support a healthier, more resilient community.`}
        />
      </div>

      {/* Donations Impact Section */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 text-black">
          <LeftPro 
            imgsrc="/health3.jpg"
            heading="Your Donations Help Us Create This Impact"
            pera={`Donations are crucial in enabling us to provide high-quality healthcare services. 
            Your contributions directly support the cost of medical supplies, equipment, and medications needed for patient care. 
            With your help, we can ensure that our clinics are well-stocked and equipped to handle a wide range of medical conditions. 
            Financial support also allows us to fund essential services such as health screenings, vaccinations, and treatment for chronic diseases. 
            These services are vital for preventing illness and managing health conditions, ultimately improving the quality of life for individuals in our care.`}
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Your support can provide essential healthcare services to those in need. Together, we can create a healthier community.
          </p>
          <a href="/DonationForm">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 
            px-6 rounded-lg shadow-lg transition duration-300">
              Donate Now
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Health;