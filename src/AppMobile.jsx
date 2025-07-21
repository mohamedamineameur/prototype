import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/DashboardMobile";
import RapportsESG from "./pages/RapportsESGMobile";
import Batiments from "./pages/BatimentsMobile";
import { Menu } from "lucide-react";
import Vehicules from "./pages/Voitures";
import DonneesSociales from './pages/Social';
import Gouvernance from './pages/Gouvernance';
import Accueil from './pages/Acceuil';
import LoginForm from "./pages/Login";
import RegisterForm from './pages/Inscription';
import ResetPassword from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";
import OTPPage from "./pages/OTPPage";
import Utilisateurs from "./components/Utilisateurs";
import Documentation from "./pages/Documentation";
import AideSupport from "./pages/AideSupport";
import Parametres from "./pages/Parametres";
import Environnement from "./pages/Environnement";

const base = import.meta.env.BASE_URL;

function LayoutMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const noSidebarRoutes = [
    "/login",
    "/register",
    "/reset-password",
    "/new-password",
    "/otp"
  ];

  const hideSidebar = noSidebarRoutes.includes(location.pathname);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className="flex h-screen font-archivo overflow-hidden relative">
      {/* Sidebar */}
      {!hideSidebar && (
        <>
          <div
            className={`fixed z-40 inset-y-0 left-0 w-64 bg-[#1D4E89] transform transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Sidebar onClose={() => setMenuOpen(false)} />
          </div>

          {menuOpen && (
            <div
              className="fixed inset-0 z-30 bg-black bg-opacity-40"
              onClick={() => setMenuOpen(false)}
            ></div>
          )}
        </>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-white relative z-10">
        {/* Topbar */}
        {!hideSidebar && (
          <div className="flex items-center justify-between px-4 py-3 border-b shadow-sm">
            <button onClick={() => setMenuOpen(true)}>
              <Menu size={24} className="text-[#1D4E89]" />
            </button>
            <img src={`${base}logo-blue.png`} alt="Logo" className="w-32" />
          </div>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rapports" element={<RapportsESG />} />
          <Route path="/batiments" element={<Batiments />} />
          <Route path="/vehicules" element={<Vehicules />} />
          <Route path="/donnees-sociales" element={<DonneesSociales />} />
          <Route path="/gouvernances" element={<Gouvernance />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/otp" element={<OTPPage />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/aide" element={<AideSupport />} />
          <Route path="/settings" element={<Parametres />} />
          <Route path="/environnement" element={<Environnement />} />
        </Routes>
      </div>
    </div>
  );
}

function AppMobile() {
  return (
    <Router basename={base}>
      <LayoutMobile />
    </Router>
  );
}

export default AppMobile;
