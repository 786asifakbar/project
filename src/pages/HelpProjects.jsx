// Data for the services
const services = [
  { name: "Free Children Hospital", icon: "🏥", link: "/ChildrenHospital" },
  { name: "Orphanage Home", icon: "🏠", link: "/Orphans" },
  { name: "Old Age Home", icon: "👴👵", link: "/OldAgeHome" },
  { name: "Ration Distribution", icon: "🍞", link: "/FoodAid" },
  { name: "Marriage Support", icon: "💍", link: "/ShadiMubark" },
  { name: "Free Education", icon: "📚", link: "/HelpEducation" },
  { name: "Legal Aid Support", icon: "⚖️", link: "/LegalAid" },
  { name: "Help Job Bank", icon: "💼", link: "/HelpJobBank" },  
  { name: "Water Plant", icon: "💧", link: "/WaterPlant" },
];

const HelpProjects = () => {
  return (
    <> 
      <div className="bg-gray-50 py-12">
        {/* Title Section */}
        <h1 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-12">
          Help Human Rights Projects
        </h1>

        {/* Services Grid */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white border-2 border-gray-200 hover:border-red-600 hover:bg-red-50 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105"
              >
                {/* Icon */}
                <span className="text-5xl mb-4">{service.icon}</span>

                {/* Service Name */}
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                  {service.name}
                </h3>

                {/* More Details Button */}
                <a
                  href={service.link}
                  className="bg-red-600 text-white px-5 py-2 rounded-full mt-auto transition duration-300 hover:bg-red-700"
                >
                  More Details
                </a>
              </div>
            ))}        
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpProjects;