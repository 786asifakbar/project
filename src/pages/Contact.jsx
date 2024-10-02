const Contact = () => {
  return (
    <> 
     <div className="relative w-full h-[30vh] md:h-[30vh] bg-cover bg-center" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="flex items-center justify-center h-full bg-opacity-60">
          <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center drop-shadow-lg">
         Contact Us 
          </h1>
        </div>
      </div>
   
    <div className="flex flex-col md:flex-row p-6 lg:p-12">
      {/* Left Side: Get in Touch */}
      <div className="w-full md:w-1/2 p-6 bg-white shadow-lg rounded-lg mb-6 md:mb-0 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Get in Touch
        </h2>
        <p className="text-center text-lg mb-6 text-gray-600">
          We would love to hear from you! Reach out to us through any of the following channels.
        </p>

        <div className="space-y-4 text-center">
          <div className="flex items-center justify-center space-x-3">
            <span className="text-2xl font-medium text-gray-800">📞</span>
            <span className="text-lg font-medium text-gray-800">Phone: (+92) 333 5081913 </span>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <span className="text-2xl font-medium text-gray-800">✉️</span>
            <span className="text-lg font-medium text-gray-800">Email:helphumanrights@gmail.com</span>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <span className="text-2xl font-medium text-gray-800">🏢</span>
            <span className="text-lg font-medium text-gray-800">
              Address: FC Building, Main University Rd, 
              near Askari Park,
               Eissa Nagri,Karachi,75270, Sindh , Pakistan.
            </span>
          </div>
        </div>

        {/* Google Map Integration */}
        <div className="mt-6 h-64 w-full rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300">
          <iframe
            className="w-full h-full"
            title="Google Map"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0567626221177!2d67.06078377620808!3d24.896045377906194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f74156c5323%3A0x257f1b15998551b7!2sHelp%20Human%20Rights%20Organization%20Of%20Pakistan!5e0!3m2!1sen!2s!4v1727783729949!5m2!1sen!2s`}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
          Contact Us
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-gray-800" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
