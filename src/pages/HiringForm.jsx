import { useState } from 'react';

const JobRequirementForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    jobDescription: '',
    requiredSkills: '',
    experience: '',
    location: '',
    salary: '',
    jobType: '',
    contactEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Requirement Data:', formData);
    alert('Job Requirement Form Submitted Successfully!');
  };

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-green-400 via-blue-400 to-teal-500 p-10 rounded-3xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">
        Job Requirement Form
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column (Company Info and Position) */}
        <div className="space-y-6">
          <div>
            <label htmlFor="companyName" className="block text-lg font-semibold text-white">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter your company name"
              required
            />
          </div>

          <div>
            <label htmlFor="position" className="block text-lg font-semibold text-white">
              Job Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter the job position"
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-lg font-semibold text-white">
              Job Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter job location"
              required
            />
          </div>

          <div>
            <label htmlFor="salary" className="block text-lg font-semibold text-white">
              Expected Salary
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter expected salary range"
            />
          </div>

          <div>
            <label htmlFor="contactEmail" className="block text-lg font-semibold text-white">
              Contact Email
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter your contact email"
              required
            />
          </div>
        </div>

        {/* Right column (Job Description and Requirements) */}
        <div className="space-y-6">
          <div>
            <label htmlFor="jobDescription" className="block text-lg font-semibold text-white">
              Job Description
            </label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Describe the job role and responsibilities"
              rows="5"
              required
            />
          </div>

          <div>
            <label htmlFor="requiredSkills" className="block text-lg font-semibold text-white">
              Required Skills
            </label>
            <input
              type="text"
              id="requiredSkills"
              name="requiredSkills"
              value={formData.requiredSkills}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter required skills (comma separated)"
              required
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-lg font-semibold text-white">
              Experience (in years)
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter required years of experience"
              required
            />
          </div>

          <div>
            <label htmlFor="jobType" className="block text-lg font-semibold text-white">
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              required
            >
              <option value="">Select job type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="remote">Remote</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-2 flex justify-center mt-8">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform"
          >
            Submit Job Requirement
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobRequirementForm;