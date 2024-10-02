import { useState } from 'react';
import HiringForm from './HiringForm';
import JobSeekerForm from './JobSeekerForm';

const HelpJobBank = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-br from-gray-100 via-blue-50 to-white">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Join Us: Hiring or Seeking Jobs</h1>

      {/* Two-column layout for the forms */}
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        {/* Job Seeker Form */}
        <div className="w-full md:w-1/2 h-full bg-white p-8 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 flex flex-col">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Job Seeker Form</h2>
          <div className="flex-grow">
            <JobSeekerForm />
          </div>
        </div>

        {/* Hiring Form */}
        <div className="w-full md:w-1/2 h-full bg-white p-8 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 flex flex-col">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Hiring Form</h2>
          <div className="flex-grow">
            <HiringForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpJobBank;
