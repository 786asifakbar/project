

import SupportPage from './SuportPage';

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <SupportPage />
    </>
  );
};

export default HeroSection;
