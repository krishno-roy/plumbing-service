import React from "react";
import TeamImg1 from "../../assets/team.png";

const TeamMemberList = [
  {
    id: 1,
    name: "Vinay Kumar",
    role: "Plumber",
    img: TeamImg1,
  },
  {
    id: 2,
    name: "Vinay Kumar",
    role: "Plumber",
    img: TeamImg1,
  },
  {
    id: 3,
    name: "Vinay Kumar",
    role: "Plumber",
    img: TeamImg1,
  },
];

const OurTeam = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Dedicated Team
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12">
          {TeamMemberList.map((teamMember) => (
            <div key={teamMember.id} className="text-center">
              <img
                src={teamMember.img}
                alt={teamMember.name}
                className=" mx-auto object-cover"
              />
              <div className="bg-[#DD3142] w-fit mx-auto rounded px-6 py-2 text-white">
                <h2 className="text-lg font-semibold">{teamMember.name}</h2>
                <p className="text-sm">{teamMember.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
