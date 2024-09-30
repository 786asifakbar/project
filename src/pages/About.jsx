
import AboutImg2 from '/bg2.jpg';  // Ensure these paths point to your public directory
import AboutImg from '/bg3.jpg';   // For Vercel or similar deployments

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <div className="bg-cover bg-center py-20" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="w-screen-lg mx-auto text-center px-4 md:px-8">
          <h1 className="text-5xl md:text-5xl font-bold text-black mb-6">About Us</h1>
        </div>
        
      </div>

      {/* Main Content Section */}
      <div className="w-screen mx-auto p-10 md:px-8">
        {/* Section 1: Image Left, Text Right */}
        <p className="text-lg md:text-xl text-black leading-relaxed max-w-screen mx-24 justify-content-center">
            At Help Human Right Organization of Pakistan, we are committed to standing by human rights organizations 
            as they tirelessly work to uphold justice, equality, and dignity for all. We provide comprehensive support 
            to ensure their voices are heard and their missions fulfilled. Through logistical, financial, and emotional 
            assistance, we empower these organizations to focus on their advocacy work for human rights.
          </p>
        <div className="flex flex-col md:flex-row-reverse items-center my-10">
          {/* Right Content */}
          <div className="md:w-1/2 p-5">
            <h4 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Championing Universal Freedom and Dignity for All
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Help Human Right Organization of Pakistan, we believe that freedom and dignity are fundamental rights 
              that belong to every individual, regardless of their background or circumstances. Our mission is to support 
              those who tirelessly advocate for these essential values, standing alongside human rights defenders who 
              dedicate their lives to protecting the vulnerable and marginalized.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              We are committed to ensuring that the voices of the oppressed are heard, and their rights are upheld. By 
              partnering with organizations and individuals who share our passion for justice, we help build a world 
              where every person is treated with the dignity they deserve and has the freedom to live without fear or discrimination.
            </p>
          </div>

          {/* Left Image */}
          <div className="md:w-1/2 p-5">
            <img
              src={AboutImg2}
              alt="Justice and Equality"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>

        {/* Section 2: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center my-10">
          {/* Left Content */}
          <div className="md:w-1/2 p-5">
            <h4 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Creating a Better Future Together
            </h4>
            <p className="text-gray-700 text-lg leading-relaxed">
              We believe that building a better future starts with standing up for human rights. By supporting those 
              who champion equality, justice, and dignity, we can create lasting change in the world.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Every action counts—whether it’s through volunteering, making donations, or forming partnerships, your 
              contribution plays a vital role in helping human rights organizations continue their critical work. Let’s 
              build a brighter, more just future, one step at a time.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 p-5">
            <img
              src={AboutImg}
              alt="Join the Movement"
              className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;