import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [impactEl, setImpactEl] = useState(null);
  const isMobile = window.innerWidth <= 768; // Check if the screen is mobile width

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleImpactClick = (event) => {
    setImpactEl(event.currentTarget);
  };

  const handleImpactClose = () => {
    setImpactEl(null);
  };

  return (
    <nav className="bg-red-600 sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo2.jpg" alt="Logo" className="h-22 w-20 rounded-lg" />
          <div className="text-white text-2xl font-bold"></div>
        </div>

        {isMobile ? (
          <>
            <button
              className="text-white"
              onClick={handleMenuClick}
              aria-label="menu"
            >
              Menu
            </button>

            {anchorEl && (
              <div className="absolute bg-white rounded shadow-md mt-2">
                <Link to="/" onClick={handleMenuClose} className="block px-4 py-2 text-blue-600">Home</Link>
                <Link to="/about" onClick={handleMenuClose} className="block px-4 py-2 text-blue-600">About</Link>
                <div>
                  <button
                    className="block w-full text-left px-4 py-2 text-white"
                    onClick={handleImpactClick}
                    aria-haspopup="true"
                  >
                    Our Impact
                  </button>
                  {impactEl && (
                    <div className="absolute bg-white rounded shadow-md mt-2">
                      <Link to="/shadiMubark" onClick={handleImpactClose} className="block px-4 py-2 text-black">Marriage Ceremony</Link>
                      <Link to="/FoodAid" onClick={handleImpactClose} className="block px-4 py-2 text-black">Food Aid</Link>
                      <Link to="/HelpEducation" onClick={handleImpactClose} className="block px-4 py-2 text-black">Education</Link>
                      <Link to="/Health" onClick={handleImpactClose} className="block px-4 py-2 text-black">Health</Link>
                      <Link to="/WaterPlant" onClick={handleImpactClose} className="block px-4 py-2 text-black">Water Plant</Link>
                      <Link to="/ChildrenHospital" onClick={handleImpactClose} className="block px-4 py-2 text-black">Children Hospital</Link>
                      <Link to="/MedicineCharity" onClick={handleImpactClose} className="block px-4 py-2 text-black">Medicine Charity</Link>
                      <Link to="/HelpJobBank" onClick={handleImpactClose} className="block px-4 py-2 text-black">Help Job Bank</Link>
                      <Link to="/LegalAid" onClick={handleImpactClose} className="block px-4 py-2 text-black">Legal Aid</Link>
                      <Link to="/OldAgeHome" onClick={handleImpactClose} className="block px-4 py-2 text-black">Old Age Home</Link>
                      <Link to="/Orphans" onClick={handleImpactClose} className="block px-4 py-2 text-black">Orphans</Link>
                    </div>
                  )}
                </div>
                <Link to="/OurMember" onClick={handleMenuClose} className="block px-4 py-2 text-blue-600">Our Members</Link>
                <Link to="/contact" onClick={handleMenuClose} className="block px-4 py-2 text-blue-600">Contact</Link>
                <Link to="/DonationForm" onClick={handleMenuClose} className="block px-4 py-2 text-blue-600">Donate Now</Link>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white">Home</Link>
            <Link to="/about" className="text-white">About</Link>
            <div>
              <button
                onClick={handleImpactClick}
                className="text-white"
              >
                Our Impact
              </button>
              {impactEl && (
                <div className="absolute bg-white rounded shadow-md mt-2">
                  <Link to="/shadiMubark" onClick={handleImpactClose} className="block px-4 py-2 text-black">Marriage Ceremony</Link>
                  <Link to="/FoodAid" onClick={handleImpactClose} className="block px-4 py-2 text-black">Food Aid</Link>
                  <Link to="/HelpEducation" onClick={handleImpactClose} className="block px-4 py-2 text-black">Education</Link>
                  <Link to="/Health" onClick={handleImpactClose} className="block px-4 py-2 text-black">Health</Link>
                  <Link to="/WaterPlant" onClick={handleImpactClose} className="block px-4 py-2 text-black">Water Plant</Link>
                  <Link to="/ChildrenHospital" onClick={handleImpactClose} className="block px-4 py-2 text-black">Children Hospital</Link>
                  <Link to="/MedicineCharity" onClick={handleImpactClose} className="block px-4 py-2 text-black">Medicine Charity</Link>
                  <Link to="/HelpJobBank" onClick={handleImpactClose} className="block px-4 py-2 text-black">Help Job Bank</Link>
                  <Link to="/LegalAid" onClick={handleImpactClose} className="block px-4 py-2 text-black">Legal Aid</Link>
                  <Link to="/OldAgeHome" onClick={handleImpactClose} className="block px-4 py-2 text-black">Old Age Home</Link>
                  <Link to="/Orphans" onClick={handleImpactClose} className="block px-4 py-2 text-black">Orphans</Link>
                </div>
              )}
            </div>
            <Link to="/OurMember" className="text-white">Our Members</Link>
            <Link to="/contact" className="text-white">Contact</Link>
            <Link to="/DonationForm" className="bg-red-600 text-white px-4 py-2 rounded shadow-lg">Donate Now</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
