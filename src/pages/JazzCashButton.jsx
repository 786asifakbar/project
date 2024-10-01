import jazzcashIcon from '/jazzcash-icon.jpg'; // Replace with your actual icon path

const JazzCashButton = () => {
  const redirectToJazzCash = () => {
    window.open('https://www.jazzcash.com.pk/', '_blank'); // Redirect to JazzCash account
  };

  return (
    <button
      onClick={redirectToJazzCash}
      className="flex items-center bg-yellow-400 text-white font-semibold py-2 p-4 rounded-lg
       shadow-md transition-transform transform hover:scale-105 focus:outline-none"
    >
      <img src={jazzcashIcon} alt="JazzCash" className="w-6 h-6 mr-2" />
    </button>
  );
};

export default JazzCashButton;