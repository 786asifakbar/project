const members = [
  {
    id: 1,
    name: 'Ghulam Mehmood',
    designation: 'Chairman',
    community: 'Center Executive',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Allama Mohammad Tahir',
    designation: 'President',
    community: 'Center Executive',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Umair Paracha',
    designation: 'General Security',
    community: 'Center Executive',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'Saifullah Paracha',
    designation: 'Joined Security',
    community: 'Center Executive',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

const CenterExecutiveCommunityMember = () => {
  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Center Executive Community Members</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-52 rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.designation}</p>
                  <p className="text-gray-500">{member.community}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterExecutiveCommunityMember;
