import { useState, useEffect } from "react";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsOpen(true);

  // Function to close the modal
  const closeModal = () => setIsOpen(false);

  // Redirection functions for payment methods
  const handleJazzCash = () => {
    window.location.href = "https://www.jazzcash.com.pk/";
  };

  const handleEasypaisa = () => {
    window.location.href = "https://www.easypaisa.com.pk/";
  };

  const handleBankTransfer = () => {
    window.location.href = "https://www.yourbankwebsite.com/transfer";
  };

  // Function to open popup at different intervals
  useEffect(() => {
    const timeouts = [10000, 30000, 60000]; // Delays in milliseconds
    let timeoutIndex = 0;

    const intervalId = setInterval(() => {
      if (timeoutIndex < timeouts.length) {
        setTimeout(() => {
          openModal();
        }, timeouts[timeoutIndex]);
        timeoutIndex += 1;
      } else {
        clearInterval(intervalId); // Clear the interval when all timeouts are done
      }
    }, 0); // Start immediately with the first timeout

    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 pt-24"
        >
          <div className="bg-gray-800 text-white rounded-lg w-full max-w-xs sm:max-w-lg p-4 sm:p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">Thank You for Your Support!</h2>
              <button
                onClick={closeModal}
                className="text-white text-3xl sm:text-4xl font-bold hover:text-gray-400 transition duration-300"
              >
                &times;
              </button>
            </div>

            <div className="mt-4 sm:mt-6">
              <p className="text-base sm:text-lg text-white">
                Your donation helps make a significant impact on the lives of poor and underserved communities.
                <br />
                Here’s how your contribution can help:
              </p>
            </div>

            {/* Messages */}
            <div className="mt-4 sm:mt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base sm:text-lg text-white">
                  <strong>Providing Clean Water:</strong> Your donation ensures access to clean and safe drinking water for families in need.
                </li>
                <li className="text-base sm:text-lg text-white">
                  <strong>Education for Children:</strong> Help bring education to children who lack the resources to go to school.
                </li>
                <li className="text-base sm:text-lg text-white">
                  <strong>Health and Nutrition:</strong> Support health programs that provide essential medical care and nutrition to malnourished children.
                </li>
                <li className="text-base sm:text-lg text-white">
                  <strong>Empowering Women:</strong> Your contribution helps women gain financial independence through skill development and micro-loans.
                </li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="mt-4 sm:mt-6 flex justify-center gap-4 flex-wrap">
              <button
                onClick={handleJazzCash}
                className="px-4 sm:px-6 py-2 mb-4 sm:mb-0 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
              >
                JazzCash
              </button>

              <button
                onClick={handleEasypaisa}
                className="px-4 sm:px-6 py-2 mb-4 sm:mb-0 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
              >
                Easypaisa
              </button>

              <button
                onClick={handleBankTransfer}
                className="px-4 sm:px-6 py-2 mb-4 sm:mb-0 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
              >
                Bank Transfer
              </button>
            </div>

            {/* Closing Instructions */}
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-sm sm:text-base text-white">
                After making the payment, please notify us for confirmation of your donation.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
