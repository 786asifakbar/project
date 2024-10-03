import { useState } from 'react';
import HiringForm from './HiringForm';
import JobSeekerForm from './JobSeekerForm';

const HelpJobBank = () => {
  const [isHiring, setIsHiring] = useState(false); // State to toggle between Job Seeker and Hiring

  return (
    <>
       <div className="relative w-full h-[30vh] md:h-[30vh] bg-cover bg-center" style={{ backgroundImage: `url('/Web-Icon.png')` }}>
        <div className="flex items-center justify-center h-full bg-opacity-60">
          <h1 className="text-black text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-center drop-shadow-lg">
          Join Us: Hiring or Seeking Jobs
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pb-96 sm:pb-52 md:pb-38 lg:pb-32 pt-10 bg-white">
        {/* Buttons to toggle between Hiring and Job Seeker forms */}
        <div className="flex space-x-4 mb-10">
          <button
            onClick={() => setIsHiring(false)} // Set to Job Seeker Form
            className={`px-6 py-3 rounded-lg text-white ${
              !isHiring ? 'bg-blue-600' : 'bg-gray-500'
            } hover:bg-blue-700 transition ease-in-out duration-300`}
          >
            Job Seeker
          </button>
          <button
            onClick={() => setIsHiring(true)} // Set to Hiring Form
            className={`px-6 py-3 rounded-lg text-white ${
              isHiring ? 'bg-blue-600' : 'bg-gray-500'
            } hover:bg-blue-700 transition ease-in-out duration-300`}
          >
            Hiring
          </button>
        </div>

        {/* Conditional rendering based on state */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Job Seeker Form */}
          {!isHiring && (
            <div className="w-screen md:w-screen md:h-screen h-screen pb-96 bg-white p-8 rounded-3xl shadow-lg 
                            transform transition duration-500 hover:scale-105 flex flex-col">
              <div className="flex-grow">
                <JobSeekerForm />
              </div>
            </div>
          )}

          {/* Hiring Form */}
          {isHiring && (
            <div className="w-screen md:w-screen md:h-screen lg:h-screen h-screen pb-96
             bg-white p-8 rounded-3xl shadow-lg transform transition duration-500 hover:scale-105 flex flex-col">
              <div className="flex-grow">
                <HiringForm />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='h-[10vh]'></div>
    </>
  );
};

export default HelpJobBank;
