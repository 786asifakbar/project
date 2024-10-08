const members = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Fund Raising Community Member',
    community: 'Fund Raising',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'John Doe',
    designation: 'Fund Raising Community Member',
    community: 'Fund Raising',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'John Doe',
    designation: 'Fund Raising Community Member',
    community: 'Fund Raising',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'John Doe',
    designation: 'Fund Raising Community Member',
    community: 'Fund Raising',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const FundRaisingCommunityMember = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-4xl lg:text-6xl font-extrabold text-center mb-12 text-black">
          Fund Raising Community Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-extrabold text-black mb-2">{member.name}</h3>
                <p className="text-gray-600 text-lg mb-2">{member.designation}</p>
                <p className="text-gray-500 text-sm">{member.community}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FundRaisingCommunityMember;