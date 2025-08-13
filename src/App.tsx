import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { buyerProfiles } from "./constants/interfaceItems";
import { NavbarProvider } from "./context/navbarContext";
// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const RoleSelectionPage = lazy(() => import("./pages/RoleSelection"));
const OnboardingPage = lazy(() => import("./pages/OnboardingPage"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const LoggedInLayout = lazy(() => import("./layouts/LoggedinLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));
const Deals = lazy(() => import("./pages/Deals"));
const DealRoom = lazy(() => import("./pages/DealRoom"));
const Messages = lazy(() => import("./pages/Messages"));
const Matches = lazy(() => import("./pages/Matches"));
const Insights = lazy(() => import("./pages/Insights"));
const BuyerProfilesDashboard = lazy(() => import("./pages/BuyerProfilesDashboard"));
const SellerProfileDashboard = lazy(() => import("./pages/SellerProfileDashboard"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const NavbarApp = lazy(() => import("./components/NavbarApp"));

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-100 border-solid"></div>
    </div>
  );
}

export default function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  const { onboardingType, matchedBuyer } = useSelector((state: RootState) => state.buyer);

  const [role, setRole] = useState<string | null>(null);
  const [onboarded, setOnboarded] = useState(false);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState("Dashboard");
  const navigate = useNavigate();

  useEffect(() => {
    // Load saved role & onboarding state
    const savedRole = localStorage.getItem("role");
    const savedOnboarded = localStorage.getItem("onboarded") === "true";
    setRole(savedRole);
    setOnboarded(savedOnboarded);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      if (!role) {
        navigate("/role-selection");
      } else if (!onboarded) {
        navigate("/onboarding");
      }
      //     //  else {
      //     //   navigate("/dashboard");
      //     // }
    }
  }, [isLoggedIn, role, onboarded, navigate]);

  const goToDashboard = () => navigate("/dashboard");

  return (
    <>
      <NavbarProvider>
        {!isLoggedIn && <Navbar />}
        <Routes>
          {/* Logged out routes */}
          {!isLoggedIn && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          )}

          {/* Logged in routes */}
          {isLoggedIn && (
            <>
              <Route
                element={
                  <LoggedInLayout
                    role={role}
                    onboarded={onboarded}
                    selectedSidebarItem={selectedSidebarItem}
                    setSelectedSidebarItem={setSelectedSidebarItem}
                  />
                }
              >
                <Route
                  path="/role-selection"
                  element={
                    <RoleSelectionPage
                      onSelectRole={selectedRole => {
                        localStorage.setItem("role", selectedRole);
                        setRole(selectedRole);
                        navigate("/onboarding");
                      }}
                    />
                  }
                />
                <Route
                  path="/onboarding"
                  element={
                    <OnboardingPage
                      role={role || ""}
                      onComplete={() => {
                        localStorage.setItem("onboarded", "true");
                        setOnboarded(true);
                        navigate("/dashboard");
                      }}
                    />
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <Dashboard
                      role={role || ""}
                      onboarded={onboarded}
                      buyerProfiles={buyerProfiles}
                      onAccept={() => {}}
                      onReject={() => {}}
                      onViewProfile={() => {}}
                      onboardingType={onboardingType}
                    />
                  }
                />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/deals" element={<Deals />} />
                <Route
                  path="/deal-room"
                  element={<DealRoom buyer={matchedBuyer} onBackToDashboard={goToDashboard} />}
                />
                <Route path="/messages" element={<Messages />} />
                <Route path="/matches" element={<Matches />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/buyer-profile" element={<BuyerProfilesDashboard />} />
                <Route path="/seller-profile" element={<SellerProfileDashboard />} />
              </Route>
            </>
          )}
        </Routes>
      </NavbarProvider>
    </>
  );
}
