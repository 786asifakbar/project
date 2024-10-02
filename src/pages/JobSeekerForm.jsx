import { useState } from 'react';

const JobSeekerForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handler for file input
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', selectedFile);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Job Seeker Application Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Position and Employment Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-lg font-semibold mb-2">Position Applying For</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" required />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-semibold">Employment Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Full-Time
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Part-Time
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Contract
              </label>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-lg font-semibold mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" required />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Nationality</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-lg font-semibold mb-2">Address</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" required />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Date of Birth</label>
            <input type="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-lg font-semibold mb-2">Phone</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" required />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="font-semibold">Driving License</label>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">Years of Work Experience</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" />
          </div>
        </div>

        {/* Upload CV */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload Your CV</h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 border rounded-lg p-3 cursor-pointer focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          {selectedFile && <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFile.name}</p>}
        </div>

        {/* Educational Background */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Educational Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-4">
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Degree/Course" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="University/Institute" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Year of Graduation" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Grade" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="City" />
          </div>
        </div>

        {/* Employment History */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Employment History</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Company" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Position" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Year" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Reason for Leaving" />
          </div>
        </div>

        {/* Skills & Training */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Skills & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Skill/Training Achievement" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Level" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Year" />
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition" placeholder="Institute" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mb-8">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition ease-in-out duration-300">Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default JobSeekerForm;