// LoggedInLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavbarApp from "../components/NavbarApp";
import Footer from "../components/Footer";

interface LoggedInLayoutProps {
  role: string | null;
  onboarded: boolean;
  selectedSidebarItem: string;
  setSelectedSidebarItem: React.Dispatch<React.SetStateAction<string>>;
}

const LoggedInLayout: React.FC<LoggedInLayoutProps> = ({
  role,
  onboarded,
  selectedSidebarItem,
  setSelectedSidebarItem,
}) => {
  return (
    <div className="flex h-screen">
      {role && onboarded && (
        <Sidebar selectedItem={selectedSidebarItem} setSelectedItem={setSelectedSidebarItem} />
      )}
      <div className="flex flex-col flex-1 overflow-hidden">
        <NavbarApp selectedItem={selectedSidebarItem} />
        <main className="flex-1 overflow-auto bg-gray-50">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default LoggedInLayout;
