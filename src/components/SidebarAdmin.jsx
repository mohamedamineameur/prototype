import { NavLink } from "react-router-dom";
import {
  Users,
  FileText,
  BookOpen,
  LogOut,
  Layers3,
  Settings,
  Building2,
  Fuel,
  Flashlight,
  CircleHelp,
  BadgeCheck,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const SidebarAdmin = () => {
  return (
    <div className="bg-[#1D4E89] text-white w-64 min-h-screen overflow-y-auto font-['Archivo'] flex flex-col justify-between">
      <div>
        <img src={`${BASE}logo-white.png`} alt="Logo" className="w-32 mx-auto mt-4" />
        <nav className="flex flex-col mt-4 gap-2 px-4">
          <SidebarItem icon={<Users size={18} />} label="Comptes" to="admin/account-management" />
          <SidebarItem icon={<FileText size={18} />} label="Types de documents" to="admin/page-en-construction1" />
          <SidebarItem icon={<Fuel size={18} />} label="Facteurs carburant" to="admin/page-en-construction2" />
          <SidebarItem icon={<Flashlight size={18} />} label="Facteurs électricité" to="admin/page-en-construction3" />
          <SidebarItem icon={<Building2 size={18} />} label="Secteurs NAICS" to="admin/page-en-construction4" />
          <SidebarItem icon={<BadgeCheck size={18} />} label="Back Office" to="admin/page-en-construction5" />
          <SidebarItem icon={<Layers3 size={18} />} label="Prompts" to="admin/page-en-construction6" />
          <SidebarItem icon={<BookOpen size={18} />} label="Questions environnement" to="admin/page-en-construction7" />
        </nav>
      </div>

      <div className="px-4 pb-12 border-t border-white/20 mt-6">
        <div className="flex flex-col gap-2 text-sm mt-4">
          <SidebarItem icon={<CircleHelp size={16} />} label="Aide" to="/aide" small />
          <SidebarItem icon={<Settings size={16} />} label="Paramètres" to="/settings" small />
        </div>

        <div className="mt-6 text-sm mb-3">
          <div className="mb-2">Assistant de saisie</div>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-1">
            <div className="bg-[#00B2CA] h-full w-[20%]" />
          </div>
          <span className="text-xs text-white/80">20 %</span>
          <div className="mt-4">Sébastien Dubois</div>
          <button
            onClick={() => alert("Déconnexion fictive")}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-white hover:bg-white/10 text-sm pl-2 w-full transition-colors"
          >
            <LogOut size={16} />
            <span>Se déconnecter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, to, small }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors ${
          isActive
            ? "bg-white text-[#1D4E89] font-semibold"
            : "hover:bg-white/10 text-white"
        } ${small ? "text-sm pl-2" : ""}`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarAdmin;