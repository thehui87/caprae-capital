import React from "react";

const FooterHR = () => {
  return (
    <footer className="bg-gray-600 text-white py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul>
            <li className="mb-2">
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Support</h4>
          <ul>
            <li className="mb-2">
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Legal</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Caprae Capital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterHR;
