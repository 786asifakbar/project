import { useState } from 'react';

const HiringRequestForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file upload
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with the following details:');
    console.log('Selected file:', selectedFile);
    // Handle form submission (e.g., send the data to an API)
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100 rounded-lg shadow-xl">
      {/* Form Title */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Hiring Request Form</h1>
        <p className="text-lg text-gray-600">
          If you are looking to hire talented individuals, fill out the form below with your requirements and preferences.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Job Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Job Title"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
              required
            />
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
              <span className="text-lg text-gray-800">Remote Position?</span>
            </label>
          </div>
        </div>

        {/* Candidate Requirements */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Candidate Requirements</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <input
                type="text"
                placeholder="Required Skills (e.g., JavaScript, React)"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Years of Experience (e.g., 3+ years)"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Required Education Level (e.g., Bachelor's Degree)"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Other Qualifications (optional)"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
              />
            </li>
          </ul>
        </div>

        {/* Job Description */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Description</h2>
          <textarea
            placeholder="Describe the role, responsibilities, and key deliverables"
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
            rows={4}
            required
          />
        </div>

        {/* Compensation & Benefits */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compensation and Benefits</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <input
                type="text"
                placeholder="Salary Range (e.g., $50,000 - $70,000)"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Benefits (e.g., Health, Dental, Vision)"
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
              />
            </li>
          </ul>
        </div>

        {/* Upload Company Info or Job Posting */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Upload Job Posting or Additional Information (optional)</h3>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 border rounded-lg p-3"
          />
          {selectedFile && <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFile.name}</p>}
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg px-6 py-3 font-semibold text-lg shadow-lg transform transition duration-300 hover:bg-indigo-700 hover:scale-105"
          >
            Submit Request
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="text-center text-gray-600 mt-6">
        <p>If you have any questions, feel free to contact us.</p>
      </div>
    </div>
  );
};

export default HiringRequestForm;
