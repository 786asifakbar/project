// src/components/HeroSection.js
import SuportPage from './SuportPage';
const HeroSection = () => {
  return (
    <>
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-screen
        h-[40vh] lg:max-w-full lg:h-screen md:max-w-full
         md:max-h-full sm:max-w-full sm:h-[40vh] object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <SuportPage/>
    </>
  );
};

export default HeroSection;