import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImpactMenuOpen, setIsImpactMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleImpactToggle = () => {
    setIsImpactMenuOpen(!isImpactMenuOpen);
  };

  return (
    <nav className="bg-red-600 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="hy-34 wx-20 rounded-lg" />
          <span className="text-white text-2xl font-bold ml-2"></span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={handleMenuToggle}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <div className="relative">
            <button
              onClick={handleImpactToggle}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              Our Impact
            </button>
            {isImpactMenuOpen && (
              <div className="absolute bg-white rounded shadow-lg mt-2 w-48">
                <Link
                  to="/shadiMubark"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => setIsImpactMenuOpen(false)}
                >
                  Marriage Ceremony
                </Link>
                <Link
                  to="/FoodAid"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => setIsImpactMenuOpen(false)}
                >
                  Food Aid
                </Link>
                <Link
                  to="/HelpEducation"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => setIsImpactMenuOpen(false)}
                >
                  Education
                </Link>
                <Link
                  to="/Health"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => setIsImpactMenuOpen(false)}
                >
                  Health
                </Link>
                {/* Add more links as needed */}
              </div>
            )}
          </div>
          <Link to="/OurMember" className="text-white hover:text-gray-200">
            Our Members
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
          <Link
            to="/DonationForm"
            className="bg-white text-red-600 px-4 py-2 rounded shadow-lg hover:bg-gray-100"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded mt-2 px-4 py-2 space-y-2">
          <Link
            to="/"
            className="block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
            onClick={handleMenuToggle}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
            onClick={handleMenuToggle}
          >
            About
          </Link>
          <div>
            <button
              className="w-full text-left text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
              onClick={handleImpactToggle}
            >
              Our Impact
            </button>
            {isImpactMenuOpen && (
              <div className="pl-4">
                <Link
                  to="/shadiMubark"
                  className="block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
                  onClick={handleMenuToggle}
                >
                  Marriage Ceremony
                </Link>
                <Link
                  to="/FoodAid"
                  className="block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
                  onClick={handleMenuToggle}
                >
                  Food Aid
                </Link>
                <Link
                  to="/HelpEducation"
                  className="block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
                  onClick={handleMenuToggle}
                >
                  Education
                </Link>
                <Link
                  to="/Health"
                  className="block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
                  onClick={handleMenuToggle}
                >
                  Health
                </Link>
                {/* Add more sub-links */}
              </div>
            )}
          </div>
          <Link
            to="/OurMember"
            className="block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
            onClick={handleMenuToggle}
          >
            Our Members
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:bg-gray-100 px-4 py-2 rounded"
            onClick={handleMenuToggle}
          >
            Contact
          </Link>
          <Link
            to="/DonationForm"
            className="block bg-red-600 text-white px-4 py-2 rounded shadow-lg hover:bg-red-700"
            onClick={handleMenuToggle}
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;