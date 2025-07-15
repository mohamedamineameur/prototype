import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/DashboardMobile";
import RapportsESG from "./pages/RapportsESGMobile";
import Batiments from "./pages/BatimentsMobile";
import { Menu } from "lucide-react";
import.meta.env.BASE_URL


function AppMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Empêcher scroll en fond quand menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <Router>
      <div className="flex h-screen font-archivo overflow-hidden relative">
        {/* Sidebar mobile drawer */}
        <div
          className={`fixed z-40 inset-y-0 left-0 w-64 bg-[#1D4E89] transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar onClose={() => setMenuOpen(false)} />
        </div>

        {/* Overlay noir */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-y-auto bg-white relative z-10">
          {/* Topbar */}
          <div className="flex items-center justify-between px-4 py-3 border-b shadow-sm">
            <button onClick={() => setMenuOpen(true)}>
              <Menu size={24} className="text-[#1D4E89]" />
            </button>
            <img src={`${import.meta.env.BASE_URL}logo-blue.png`} alt="Logo" className="w-32" />
          </div>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rapports" element={<RapportsESG />} />
            <Route path="/batiments" element={<Batiments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AppMobile;
