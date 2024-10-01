const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row p-8">
      {/* Left Side */}
      <div className="w-full md:w-1/2 p-4 text-black">
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
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0567626221177!2d67.06078377620808!3d24.896045377906194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f74156c5323%3A0x257f1b15998551b7!2sHelp%20Human%20Rights%20Organization%20Of%20Pakistan!5e0!3m2!1sen!2s!4v1727783729949!5m2!1sen!2s`}
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
