// AboutPage.tsx
import React from "react";
import FooterHR from "../components/FooterHR";
// Define a consistent color palette
const COLORS = {
  primary: "#4B3F72",
  secondary: "#6A5ACD",
  background: "#F7F7F7",
  card: "#FFFFFF",
  text: "#333333",
  lightText: "#666666",
};

// Define team member data
const teamMembers = [
  {
    name: "Jane Doe",
    title: "Co-Founder & CEO",
    bio: "Jane is a visionary leader with over 15 years of experience in the tech industry, driving product innovation and strategic growth.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "John Smith",
    title: "Co-Founder & CTO",
    bio: "With a background in software engineering, John is the architect behind our robust and scalable technological solutions.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2576&auto=format&fit=crop",
  },
  {
    name: "Emily Chen",
    title: "Head of Marketing",
    bio: "Emily is a creative strategist, passionate about building brand identity and connecting with our community through compelling stories.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop",
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-background min-h-screen font-sans">
      {/* Hero-style image with text */}
      <section
        className="relative h-[40vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1504384308090-c894fd241d81?q=80&w=2670&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Our journey is built on a foundation of innovation and a commitment to excellence.
          </p>
        </div>
      </section>

      {/* About the Company */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-lightText leading-relaxed mb-6">
            We are dedicated to building a platform that empowers businesses and individuals to
            achieve their goals. Our mission is to provide intuitive, powerful, and reliable
            solutions that simplify complex challenges and foster growth. We believe in the power of
            technology to connect, innovate, and create a better future for everyone.
          </p>
          <p className="text-lightText leading-relaxed">
            Founded in 2023, our company has been at the forefront of providing exceptional service
            and cutting-edge technology to our clients worldwide.
          </p>
        </div>
      </section>

      {/* About the People */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Meet the Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold text-primary">{member.name}</h3>
              <p className="text-sm text-secondary mb-2">{member.title}</p>
              <p className="text-lightText text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <FooterHR />
    </div>
  );
};

export default About;
