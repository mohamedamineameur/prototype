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
  X,
} from "lucide-react";
import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

const SidebarAdminMobile = ({ onClose }) => {
  return (
    <div className="bg-[#1D4E89] text-white w-64 h-screen font-['Archivo'] overflow-y-auto pb-12 relative">
      {/* Bouton de fermeture */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-white hover:text-[#00B2CA] z-50"
      >
        <X size={20} />
      </button>

      <div className="flex flex-col justify-between min-h-full">
        {/* Navigation principale */}
        <nav className="flex flex-col mt-12 gap-2 px-4">
          <SidebarItem icon={<Users size={18} />} label="Comptes" to="admin/account-management" onClick={onClose}/>
          <SidebarItem icon={<FileText size={18} />} label="Types de documents" to="admin/page-en-construction1" onClick={onClose} />
          <SidebarItem icon={<Fuel size={18} />} label="Facteurs carburant" to="admin/page-en-construction2" onClick={onClose} />
          <SidebarItem icon={<Flashlight size={18} />} label="Facteurs électricité" to="admin/page-en-construction3" onClick={onClose} />
          <SidebarItem icon={<Building2 size={18} />} label="Secteurs NAICS" to="admin/page-en-construction4" onClick={onClose} />
          <SidebarItem icon={<BadgeCheck size={18} />} label="Back Office" to="admin/page-en-construction5" onClick={onClose} />
          <SidebarItem icon={<Layers3 size={18} />} label="Prompts" to="admin/page-en-construction6" onClick={onClose} />
          <SidebarItem icon={<BookOpen size={18} />} label="Questions environnement" to="admin/page-en-construction7" onClick={onClose} />
        </nav>

        {/* Bas de menu */}
        <div className="px-4 pb-12 border-t border-white/20 mt-6">
          <div className="flex flex-col gap-2 text-sm mt-4">
            <SidebarItem icon={<CircleHelp size={16} />} label="Aide" to="/aide" small onClick={onClose} />
            <SidebarItem icon={<Settings size={16} />} label="Paramètres" to="/settings" small onClick={onClose} />
          </div>

          <div className="mt-6 text-sm mb-3">
            <div className="mb-2">Assistant de saisie</div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-1">
              <div className="bg-[#00B2CA] h-full w-[20%]" />
            </div>
            <span className="text-xs text-white/80">20 %</span>
            <div className="mt-4">Sébastien Dubois</div>
            <button
              onClick={() => (window.location.href = `${BASE}landing`)}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-white hover:bg-white/10 text-sm pl-2 w-full transition-colors"
            >
              <LogOut size={16} />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, to, small, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
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

export default SidebarAdminMobile;
