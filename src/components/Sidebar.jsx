import { NavLink } from "react-router-dom";
import { Home, FileText, Building, Car, Users, Landmark } from "lucide-react";

const BASE = import.meta.env.BASE_URL; // base dynamique

const Sidebar = () => {
  return (
    <div className="bg-[#1D4E89] text-white w-64 h-screen flex flex-col justify-between font-['Archivo']">
      <div>
        <img src={`${BASE}logo-white.png`} alt="Logo" className="w-32 mx-auto mt-4" />
        <nav className="flex flex-col mt-4 gap-2 px-4">
          <SidebarItem icon={<Home size={18} />} label="Tableaux de bord" to={`${BASE}`} />
          <SidebarItem icon={<FileText size={18} />} label="Rapports ESG" to={`${BASE}rapports`} />
          <SidebarItem icon={<Building size={18} />} label="Bâtiments" to={`${BASE}batiments`} />
          <SidebarItem icon={<Car size={18} />} label="Véhicules" to={`${BASE}vehicules`} />
          <SidebarItem icon={<Users size={18} />} label="Données sociales" to={`${BASE}donnees-sociales`} />
          <SidebarItem icon={<Landmark size={18} />} label="Gouvernance" to={`${BASE}gouvernances`} />
        </nav>
      </div>

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

const SidebarItem = ({ icon, label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
        isActive ? "bg-white text-[#1D4E89] font-semibold" : "hover:bg-white/10 text-white"
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default Sidebar;
