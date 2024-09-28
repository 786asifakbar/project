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
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">IT Department Member</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.designation}</p>
                <p className="text-gray-500">{member.community}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITDepartmentMember;