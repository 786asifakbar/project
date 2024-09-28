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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Job Seeker Application Form</h1>

      <form onSubmit={handleSubmit}>
        {/* Position and Employment Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 font-semibold">Position Applying For</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Employment Type</label>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 font-semibold">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Nationality</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 font-semibold">Address</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Date of Birth</label>
            <input type="date" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 font-semibold">Phone</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="font-semibold">Driving License</label>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Years of Work Experience</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" />
          </div>
        </div>

        {/* Upload CV */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Upload Your CV</h2>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
          {selectedFile && <p className="mt-2 text-sm text-gray-600">Selected file: {selectedFile.name}</p>}
        </div>

        {/* Educational Background */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Educational Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Degree/Course" />
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="University/Institute" />
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Year of Graduation" />
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Grade" />
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="City" />
          </div>
        </div>

        {/* Employment History */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Employment History</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Company" />
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Position" />
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Year" />
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Reason for Leaving" />
          </div>
        </div>

        {/* Skills & Training */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills & Training</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Skill/Training Achievement" />
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Level" />
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Year" />
            <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Institute" />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg">Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default JobSeekerForm;
