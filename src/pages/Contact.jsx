const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row p-8">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">Contact us at:</p>
        <p className="mb-2">Phone: (123) 456-7890</p>
        <p className="mb-2">Email: contact@example.com</p>
        <p className="mb-4">Address: 123 Main Street, City, Country</p>
        
        {/* Google Map API Integration */}
        <div className="h-64 w-full">
          <iframe
            className="w-full h-full"
            title="Google Map"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=123+Main+Street,City,Country`}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-4">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
