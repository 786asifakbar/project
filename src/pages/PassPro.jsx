import { useEffect } from 'react';

const PassPro = (props) => {
  useEffect(() => {
    // Any other effect logic can go here if needed
  }, []);

  return (
    <>
      <div>
        {/* Hero Section */}
        <div className="relative bg-cover bg-no-repeat bg-center min-h-52" 
          style={{ backgroundImage: `url(${props.backImgsrc})` }}>
          {/* Color overlay */}
          <div className="absolute inset-0 bg-gray-40 opacity-50"> </div>
          <div className="lg:w-1/2 lg:pr-8"></div>
          <h1 className="text-7xl font-bold pt-16 text-center text-black">
            {props.title}
          </h1>
        </div>

        {/* Content Section */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between">
          <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row">
            {/* Text Section */}
            <div className="lg:w-1/2 text-black lg:pr-8">
              <h1 className="text-4xl font-bold mb-4"></h1>
              <p className="text-lg px-8 text-justify">
                {props.p}
              </p>
            </div>
            {/* Image Section */}
            <div className="lg:w-1/2 mt-8 lg:mt-0 ml-20">
              <img src={props.secImg} alt="Section" className="min-w-72 min-h-80 rounded-lg shadow-xxl" />
            </div>
          </div>

          {/* Additional Content */}
          <div className="bg-white py-8">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold"></h2>
              <p className="text-black text-justify pl-12 pr-28">
                {props.rep}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassPro;