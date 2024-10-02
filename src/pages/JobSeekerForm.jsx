import { useState } from 'react';

const JobSeekerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-500 via-blue-500 to-teal-400 p-10 rounded-3xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">
        Job Seeker Application Form
      </h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column (Personal Info) */}
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-white">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-lg font-semibold text-white">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label htmlFor="dob" className="block text-lg font-semibold text-white">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              required
            />
          </div>
        </div>

        {/* Right column (Additional Info) */}
        <div className="space-y-6">
          <div>
            <label htmlFor="address" className="block text-lg font-semibold text-white">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter your address"
              required
            />
          </div>

          <div>
            <label htmlFor="education" className="block text-lg font-semibold text-white">
              Education
            </label>
            <input
              type="text"
              id="education"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter your highest qualification"
              required
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-lg font-semibold text-white">
              Work Experience (Years)
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter years of experience"
            />
          </div>

          <div>
            <label htmlFor="skills" className="block text-lg font-semibold text-white">
              Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
              placeholder="Enter your key skills"
            />
          </div>

          <div>
            <label htmlFor="file" className="block text-lg font-semibold text-white">
              Upload Your CV (PDF, DOCX)
            </label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              className="w-full px-5 py-3 border border-white rounded-lg text-black focus:ring-2 focus:ring-white transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="col-span-2 flex justify-center mt-8">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-black to-gray-800 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 transform"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobSeekerForm;
