import PassPro from './PassPro';
import AboutImg2 from '/bg2.jpg';
import AboutImg from '/bg3.jpg';

const About = () => {
  return (
    <>
      <PassPro
        backImgsrc="/Web-Icon.png"
        secImg="/bg1.jpg"
        title="About Us"
        p="At Help Human Right Organization of Pakistan, we are committed to standing by human rights organizations as they tirelessly work to uphold justice, equality, and dignity for all. We understand the challenges they face, and that’s why we provide comprehensive support to ensure their voices are heard and their missions are fulfilled. Through logistical, financial, and emotional support, we empower these organizations to remain focused on their critical advocacy for human rights. Whether organizing grassroots campaigns, offering legal assistance, or providing emotional care to activists, we ensure that these defenders of justice can continue their invaluable work without hindrance. Together, we strive for a world where equality prevails and every individual’s rights are protected. Our support is a testament to our belief that everyone deserves to live free from oppression and discrimination."
        rep=""
      />

      <div className="max-w-screen-lg mx-auto py-10">
        {/* Section 2: Image Left, Text Right */}
        <div className="flex flex-col md:flex-row-reverse items-center my-10">
          {/* Right Content */}
          <div className="md:w-1/2 p-5">
            <h4 className="text-3xl font-bold mb-4">
              Championing Universal Freedom and Dignity for All
            </h4>
            <p className="text-gray-700">
              At Help Human Right Organization of Pakistan, we believe that freedom and dignity
              are fundamental rights that belong to every individual, regardless of their background or
              circumstances. Our mission is to support those who tirelessly
              advocate for these essential values, standing alongside human rights defenders who
              dedicate their lives to protecting the vulnerable and marginalized.
              We are committed to ensuring that the voices of the oppressed are heard, and their rights
              are upheld. By partnering with organizations and individuals who share our passion
              for justice, we help build a world where every person is treated with the dignity they
              deserve and has the freedom to live without fear or discrimination.
            </p>
          </div>

          {/* Left Image */}
          <div className="md:w-1/2 p-5">
            <img
              src={AboutImg2}
              alt="Justice and Equality"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Section 3: Text Left, Image Right */}
        <div className="flex flex-col md:flex-row items-center my-10">
          {/* Left Content */}
          <div className="md:w-1/2 p-5">
            <h4 className="text-3xl font-bold mb-4">
              Creating a Better Future Together
            </h4>
            <p className="text-gray-700">
              We believe that building a better future starts with standing up for human rights. By supporting those who champion equality, justice, and dignity, we can create lasting change in the world. Every action counts—whether it’s through volunteering, making donations, or forming partnerships, your contribution plays a vital role in helping human rights organizations continue their critical work. Together, we have the power to uplift communities, protect the vulnerable, and ensure that everyone's rights are respected and upheld. Join us in making a difference. Let’s build a brighter, more just future, one step at a time.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 p-5">
            <img
              src={AboutImg}
              alt="Join the Movement"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
