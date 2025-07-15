// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { Home, FileText, Building, Car, Users, Landmark, X } from "lucide-react";

const Sidebar = ({ onClose }) => {
  return (
    <div className="h-full w-64 bg-[#1D4E89] text-white flex flex-col justify-between font-['Archivo'] shadow-lg">
      {/* Header avec bouton de fermeture en mobile */}
      <div>
        <div className="flex items-center justify-between p-4 md:justify-center">
          <img src="/logo-white.png" alt="Logo" className="w-28" />
          <button onClick={onClose} className="md:hidden">
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col mt-4 gap-1 px-4">
          <SidebarItem icon={<Home size={18} />} label="Tableaux de bord" to="/" />
          <SidebarItem icon={<FileText size={18} />} label="Rapports ESG" to="/rapports" />
          <SidebarItem icon={<Building size={18} />} label="Bâtiments" to="/batiments" />
          <SidebarItem icon={<Car size={18} />} label="Véhicules" to="/vehicules" />
          <SidebarItem icon={<Users size={18} />} label="Données sociales" to="/donnees-sociales" />
          <SidebarItem icon={<Landmark size={18} />} label="Gouvernance" to="/gouvernances" />
        </nav>
      </div>

      {/* Bas de la sidebar */}
      <div className="p-4 border-t border-white/20">
        <div className="text-sm mb-2">Assistant de saisie</div>
        <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-1">
          <div className="bg-[#00B2CA] h-full w-[20%]" />
        </div>
        <span className="text-xs text-white/80">20 %</span>
        <div className="mt-4 text-sm">Sébastien Dubois</div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
          isActive
            ? "bg-white text-[#1D4E89] font-semibold"
            : "hover:bg-white/10 text-white"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;
