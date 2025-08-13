import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type NavbarProviderContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const NavbarContext = createContext<NavbarProviderContextType | undefined>(undefined);

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <NavbarContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useMobileMenu must be used within MobileMenuProvider");
  }
  return context;
};
