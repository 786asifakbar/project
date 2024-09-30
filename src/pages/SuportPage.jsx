import Carousel from "./Carousel";
import PassPro from "./PassPro";
import LeftPro from "./leftPro";
import HelpProjects from "./HelpProjects";


const SuportPage = () => {
  return (
    <>
      <PassPro 
        backImgsrc="/Web-Icon.png"
        secImg="/bg4.jpg"
        title="Our Work"
        p={`At Help Human Rights Organization of Pakistan, we are profoundly dedicated to supporting human rights organizations in 
        their unwavering quest to secure justice, equality, and dignity for every individual. Our commitment goes beyond
         words—it's about action, solidarity, and the belief that together, we can make a difference. We understand that human
          rights are not privileges granted by a few, but inalienable entitlements belonging to all, and we take pride in 
          standing side by side with those who lead the fight for these fundamental freedoms.
          We envision a world where every individual, regardless of their race, gender, religion, nationality, or background,
           lives free from discrimination, oppression, and fear. A world where the dignity of all people is upheld, where the
            marginalized are not forgotten, and where justice is not a distant dream but a lived reality. In pursuit of this
             vision, we stand united with human rights defenders who dedicate their lives to the protection and 
             promotion of these values, often in the face of great adversity
    
           `}
        rep={`Human rights organizations operate on the frontlines of global change, often working in hostile or resource-scarce environments where the stakes are incredibly high. Whether they are advocating for the rights of the oppressed, fighting against state-sponsored violence, or bringing attention to systemic injustices, their efforts are critical in shaping a just society. At Help Human Rights Organization of Pakistan, we have made it our mission to amplify these voices and bolster their initiatives through a wide range of support mechanisms.

Our Support: Comprehensive and Holistic
We recognize that no two challenges are alike, and that’s why our support is tailored to meet the specific needs of each organization. Whether it's offering logistical support—such as arranging safe transport, securing necessary equipment, or coordinating advocacy campaigns—or providing legal guidance to navigate complex international laws, we are here to lighten the load. We also offer technological resources to empower human rights groups with cutting-edge tools for communication, data protection, and outreach. Additionally, through financial assistance, we ensure that lack of funds does not become a barrier to impactful work. Every penny we provide helps to sustain efforts that would otherwise struggle to survive, particularly in conflict zones or under oppressive regimes.`}
      />

    <HelpProjects />

      <LeftPro 
        imgsrc="/bg3.jpg"
        heading="Empowering Human Rights Organizations: Standing Together for Change"
        pera={`
        Logistical Support: We assist in organizing campaigns, protests, and relief efforts, ensuring that human rights organizations can operate effectively on the ground.
        Financial Aid: By offering grants and funding opportunities, we empower these organizations to expand their reach and impact, addressing more issues that matter.
        Technological Solutions: In today’s digital age, we provide human rights defenders with the tools and platforms to raise awareness, mobilize supporters, and protect sensitive data.
        Legal and Advocacy Services: We offer legal counsel and advocacy support to protect the rights of activists and victims, ensuring justice is served.
        Psychological and Emotional Support: Defending human rights can take a toll on individuals and communities. We offer mental health services and emotional support for activists, ensuring they have the strength to continue their work.
        Standing for Freedom, Equality, and Dignity
        We believe that human rights are universal and non-negotiable. Whether it’s advocating for freedom of speech, fighting against gender-based violence, or ensuring access to education, we are driven by the core belief that everyone deserves to live a life free from oppression. Our work is guided by these principles, and we are honored to play a role in supporting those who defend human dignity at every turn.
        Join Us in the Fight for Human Rights
        There has never been a more important time to stand up for human rights. As injustices continue to unfold across the globe, we must act now to support the organizations that are fighting for a better world. Together, we can amplify their voices, fuel their movements, and ensure that their efforts lead to meaningful change.
        We invite you to join us in this critical mission—whether as a volunteer, donor, or partner. Together, we can make a difference and help build a world where everyone’s rights are upheld and protected.


               `}
      />
      <Carousel />
    </>
  );
}

export default SuportPage;