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
    // You can handle the form submission here (e.g., send the data to an API)
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Form Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Hiring Request Form</h1>
        <p className="text-lg">
          If you are looking to hire people, please fill out the form below and let us know your requirements.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Job Title & Employment Type */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Job Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Job Title"
              className="border rounded-lg p-2 w-full"
              required
            />
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>Remote Position?</span>
            </label>
          </div>
        </div>

        {/* Job Requirements */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Candidate Requirements</h2>
          <ul className="list-disc list-inside text-lg">
            <li>
              <input
                type="text"
                placeholder="Required Skills (e.g., JavaScript, React)"
                className="border rounded-lg p-2 w-full"
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Years of Experience (e.g., 3+ years)"
                className="border rounded-lg p-2 w-full"
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Required Education Level (e.g., Bachelor's Degree)"
                className="border rounded-lg p-2 w-full"
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Other Qualifications (optional)"
                className="border rounded-lg p-2 w-full"
              />
            </li>
          </ul>
        </div>

        {/* Job Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <textarea
            placeholder="Describe the role, responsibilities, and key deliverables"
            className="border rounded-lg p-2 w-full"
            rows={4}
            required
          />
        </div>

        {/* Compensation & Benefits */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Compensation and Benefits</h2>
          <ul className="list-disc list-inside text-lg">
            <li>
              <input
                type="text"
                placeholder="Salary Range (e.g., $50,000 - $70,000)"
                className="border rounded-lg p-2 w-full"
                required
              />
            </li>
            <li>
              <input
                type="text"
                placeholder="Benefits (e.g., Health, Dental, Vision)"
                className="border rounded-lg p-2 w-full"
              />
            </li>
          </ul>
        </div>

        {/* Upload Company Info or Job Posting (optional) */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Upload Job Posting or Additional Information (optional)</h3>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 border rounded-lg p-2"
          />
          {selectedFile && <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFile.name}</p>}
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border rounded-lg p-2 w-full"
              required
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              className="border rounded-lg p-2 w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600">
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