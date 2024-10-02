const members = [
  {
    id: 1,
    name: 'Asif Akbar',
    designation: 'MERN Stack Developer',
    community: 'IT Department',
    image: '/asif.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Asif Akbar',
    designation: 'MERN Stack Developer',
    community: 'IT Department',
    image: '/asif.jpg', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Asif Akbar',
    designation: 'MERN Stack Developer',
    community: 'IT Department',
    image: '/asif.jpg', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'Asif Akbar',
    designation: 'MERN Stack Developer',
    community: 'IT Department',
    image: '/asif.jpg', // Replace with actual image URL
  },
];

const ITDepartmentMember = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-4xl lg:text-6xl font-extrabold text-center mb-12 text-black">
          IT Department Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-extrabold text-black mb-3 hover:text-blue-600 transition duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-800 text-lg mb-3">{member.designation}</p>
                <p className="text-gray-600 text-md">{member.community}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITDepartmentMember;
