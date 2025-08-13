import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Menu, X } from "lucide-react";
import { useNavbar } from "../context/navbarContext";

interface NavbarAppProps {
  selectedItem: string; // Add prop for selected item
}

const NavbarApp: React.FC<NavbarAppProps> = ({ selectedItem }) => {
  const [username, setUsername] = useState<string>("");
  const email = useSelector((state: RootState) => state.auth.email);
  const [role, setRole] = useState<string | null>(null);
  const { isOpen, toggleMenu } = useNavbar();

  useEffect(() => {
    if (email != "") {
      setUsername(email.split("@")[0]);
    }
  }, [email]);

  useEffect(() => {
    // Load saved role & onboarding state
    const savedRole = localStorage.getItem("role");

    setRole(savedRole);
  }, []);

  return (
    <nav className="bg-beige text-navy shadow-md p-4">
      <div className="max-w-full px-4 py-3 flex justify-between items-center">
        <div className="flex flex-row gap-4">
          <button className={`lg:hidden`} onClick={() => toggleMenu()}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <h1 className="text-2xl font-bold text-navy">{selectedItem}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span
            className={`rounded-md px-2 text-white ${
              role == "buyer" ? "bg-purple-600" : "bg-green-400"
            }`}
          >
            {role}
          </span>
          <span className="text-navy">Hello {username}!</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
