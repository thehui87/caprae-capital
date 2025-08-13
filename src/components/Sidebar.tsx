import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  House,
  HandHeart,
  Handshake,
  MessageSquare,
  Brain,
  UserRoundPen,
  Settings,
  LogOut,
  UserRound,
  X,
} from "lucide-react";
import { logOut } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavbar } from "../context/navbarContext";

interface SidebarProps {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedItem, setSelectedItem }) => {
  const dispatch = useDispatch();
  const { isOpen, toggleMenu } = useNavbar();
  const [role, setRole] = useState<string | null>(null);

  const baseNavItems = [
    { name: "Dashboard", path: "/dashboard", icon: <House /> },
    { name: "Matches", path: "/matches", icon: <HandHeart /> },
    { name: "Deals", path: "/deals", icon: <Handshake /> },
    { name: "Messages", path: "/messages", icon: <MessageSquare /> },
    { name: "AI Insights", path: "/insights", icon: <Brain /> },
    // { name: "Profile", path: "/profile", icon: <UserRoundPen /> },
  ];

  // Conditionally add the role-specific profile item
  const roleSpecificProfile =
    role === "buyer"
      ? { name: "Seller Profile", path: "/seller-profile", icon: <UserRound /> }
      : { name: "Buyer Profile", path: "/buyer-profile", icon: <UserRound /> };

  // Combine all navigation items
  const navItems = role
    ? [
        ...baseNavItems,
        roleSpecificProfile,
        { name: "Settings", path: "/settings", icon: <Settings /> },
      ]
    : baseNavItems;

  useEffect(() => {
    // Load saved role & onboarding state
    const savedRole = localStorage.getItem("role");

    setRole(savedRole);
  }, []);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-60 bg-gray-800 text-white flex flex-col justify-between p-4 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static lg:block
        `}
        style={{ display: "flex" }}
      >
        <div>
          {/* Logo - hidden on mobile because we have it above */}
          <h2 className="text-2xl font-bold mb-6 hidden lg:block">Caprae Capital</h2>
          <ul>
            {navItems.map(item => (
              <li key={item.name} className="mb-2">
                <Link
                  to={item.path}
                  className={`
                    block px-4 py-2 rounded-lg transition-colors duration-200 
                    ${
                      selectedItem === item.name
                        ? "bg-gray-500 text-white font-semibold"
                        : "text-white hover:bg-white-700 hover:text-mint"
                    }
                  `}
                  onClick={() => {
                    setSelectedItem(item.name);
                    toggleMenu(); // close on mobile after navigation
                  }}
                >
                  <div className="flex flex-row gap-2 items-center">
                    {item.icon}
                    {item.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button
            className="block px-4 py-2 rounded-lg transition-colors duration-200 text-white hover:bg-navy-700 hover:text-mint"
            onClick={() => dispatch(logOut())}
          >
            <div className="flex flex-row gap-2">
              <LogOut />
              Logout
            </div>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
