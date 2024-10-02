const Footer = () => {
  return (
    <footer className="bg-red-600 text-white pt-40 py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="flex flex-col">
          <h6 className="mb-4 font-bold text-lg">About Us</h6>
          <p className="mb-4">
            We are dedicated to supporting human rights organizations worldwide. By offering logistical, financial, and emotional support, we help these organizations continue their work in advocating for equality and justice.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h6 className="mb-4 font-bold text-lg">Quick Links</h6>
          <ul>
            <li className="mb-2">
              <a href="/" className="text-gray-300 hover:text-white">Home</a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-gray-300 hover:text-white">About Us</a>
            </li>
            <li className="mb-2">
              <a href="/DonationForm" className="text-gray-300 hover:text-white">Donate</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h6 className="mb-4 font-bold text-lg">Contact Us</h6>
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M3 9h18M3 15h18M3 21h18" />
            </svg>
            <a href="mailto:helphumanrightofficial@gmail.com" className="text-gray-300 hover:text-white">
              <span>helphumanrightofficial@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M3 9h18M3 15h18M3 21h18" />
            </svg>
            <a href="tel:+923335081913" className="text-gray-300 hover:text-white">
              <span>+92 333 508 1913</span>
            </a>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.youtube.com/@helphumanrights" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.49 8.96l-3.5 2.24a1 1 0 000 1.76l3.5 2.24a1 1 0 001.51-.86V9.82a1 1 0 00-1.51-.86z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.5 12A9.5 9.5 0 1112 3.5 9.5 9.5 0 0121.5 12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/officialhrop/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM12 8.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM17.65 6.35a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM4.5 12A7.5 7.5 0 1112 4.5 7.5 7.5 0 014.5 12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/helphuman-right-8821b2288/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.453 20.453H17.688V14.59c0-1.57-.028-3.591-2.182-3.591-2.194 0-2.528 1.711-2.528 3.49v5.963H9.547V9h3.15v1.5h.044c.438-.834 1.506-1.668 3.096-1.668 3.306 0 3.913 2.173 3.913 5.015v5.606zM3 3h18M3 9h18M3 15h18M3 21h18" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-10 pt-5 text-center">
        <span className="text-gray-400">
          © {new Date().getFullYear()} Help Human Right Organization Of Pakistan. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;