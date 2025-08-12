import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Company Title */}
      <h1 className="text-4xl font-bold mb-6 text-center text-lime-700">
        About Coconut Creates Co.
      </h1>

      {/* Company Description */}
      <p className="text-lg text-gray-700 mb-6 text-center">
        At Coconut Creates, we turn old coconut shells into beautiful, handmade
        art for your home decoration .We love taking something discarded and
        giving it a new life. Every piece we make is carefully cleaned, shaped,
        and designed to show off the natural beauty of the coconut. From bowls
        to unique decorations, our creations add an exotic, eco-friendly touch
        to any room. When you buy from us, you're getting a unique, handcrafted
        item and helping us celebrate recycled nature!
      </p>

      {/* Mission Section */}
      <div className="bg-lime-50 p-6 rounded-xl shadow mb-10">
        <h2 className="text-2xl font-semibold text-lime-600 mb-3">
          Our Mission
        </h2>
        <p className="text-gray-700">
          To transform coconut shell waste into eco-friendly, fashionable, and
          functional products that make a difference — for people and the
          planet.
        </p>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-2xl font-semibold text-lime-600 mb-6 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Omkar", role: "Founder & CEO" },
            { name: "Sejal", role: "Chief Operating Officer" },
            { name: "Sakshi", role: "Chief Technology Officer" },
            { name: "Aaliya", role: "Chief Financial Officer" },
            { name: "Saili", role: "Chief Marketing Officer" },
            { name: "Tanushree", role: "Customer Service Officer" },
            { name: "Shrishti", role: "Chief Inventory Manager" },
            { name: "Ajit", role: "Chief Inventory Manager" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
