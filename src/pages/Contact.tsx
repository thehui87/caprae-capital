// ContactPage.tsx
import React, { useState } from "react";
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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-background min-h-[calc(100vh-64px)] font-sans py-16">
      <div className="max-w-6xl mx-auto px-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-4">Contact Us</h1>
        <p className="text-lg text-center text-lightText mb-12 max-w-2xl mx-auto">
          We'd love to hear from you. Please reach out to us with any questions or feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Information</h2>
              <div className="space-y-4 text-lightText">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary flex-shrink-0 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-text">Address</h3>
                    <p>123 Business Rd, Suite 456</p>
                    <p>Metropolis, 12345</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary flex-shrink-0 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-text">Email</h3>
                    <p>support@company.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-secondary flex-shrink-0 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-text">Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring-secondary sm:text-sm py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:ring-secondary sm:text-sm"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md font-semibold text-white bg-gray-700 hover:bg-gray-900 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterHR />
    </div>
  );
};

export default Contact;
