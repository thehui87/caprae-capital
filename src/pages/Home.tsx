// HomePage.tsx
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

const Home: React.FC = () => {
  return (
    <div className="bg-background min-h-screen font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2670&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
            Unlock Your Potential
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover a new way to grow your business with our innovative solutions.
          </p>
          <button className="bg-secondary hover:bg-opacity-80 transition duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Alternating Vertical Cards Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          How It Works
        </h2>
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8 bg-card p-6 rounded-lg shadow-lg">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop"
                alt="Collaboration"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-primary mb-4">Seamless Collaboration</h3>
              <p className="text-lightText">
                Our platform is built to bring teams together. Share ideas, track progress, and
                achieve your goals faster with a unified workspace designed for efficiency.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-8 bg-card p-6 rounded-lg shadow-lg">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2671&auto=format&fit=crop"
                alt="Innovation"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-primary mb-4">Drive Innovation</h3>
              <p className="text-lightText">
                Access a suite of powerful tools and resources to help you innovate. From data
                analytics to creative design, everything you need is at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section (basic static example) */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Our Latest Projects
        </h2>
        <div className="max-w-6xl mx-auto overflow-hidden relative">
          <div className="flex transition-transform duration-500 ease-in-out">
            {/* Carousel Items */}
            <div className="min-w-full flex-shrink-0 p-4">
              <img
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2670&auto=format&fit=crop"
                alt="Project 1"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="min-w-full flex-shrink-0 p-4">
              <img
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2671&auto=format&fit=crop"
                alt="Project 2"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            {/* Add more items here... */}
          </div>
          {/* In a real app, you would add prev/next buttons and state management */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-card p-6 rounded-lg shadow-lg text-center">
            <p className="text-lightText mb-4 italic">
              &quot;The platform has completely transformed our workflow. We&apos;re more efficient
              and our team loves the new tools.&quot;
            </p>
            <p className="font-bold text-primary">Jane Doe</p>
            <p className="text-sm text-gray-400">CEO, Tech Innovators</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-card p-6 rounded-lg shadow-lg text-center">
            <p className="text-lightText mb-4 italic">
              &quot;Incredible support and a user-friendly interface. It has helped us scale our
              business faster than we ever thought possible.&quot;
            </p>
            <p className="font-bold text-primary">John Smith</p>
            <p className="text-sm text-gray-400">Founder, Creative Solutions</p>
          </div>
        </div>
      </section>

      <FooterHR />
    </div>
  );
};

export default Home;
