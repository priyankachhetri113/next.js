import React from "react";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "John Carter",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Sophia Williams",
      role: "UI/UX Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Michael Brown",
      role: "Backend Developer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      name: "Emma Johnson",
      role: "Project Manager",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 py-20 px-6">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Meet Our <span className="text-blue-600">Team</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our talented team of developers, designers, and innovators work
            together to create amazing digital experiences.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
            >
              
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h2>

                <p className="text-blue-600 font-medium mt-2">
                  {member.role}
                </p>

                {/* Social Buttons */}
                <div className="flex justify-center gap-4 mt-5">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Profile
                  </button>

                  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;