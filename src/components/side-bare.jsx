import { NavLink } from "react-router-dom";
import { Home, FileText, Building, Car, Users, Landmark, LayoutDashboard, ChevronDown, ChevronUp, HelpCircle, Settings, BookOpen, LogOut } from "lucide-react";
import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

const Sidebar = () => {
  const [envOpen, setEnvOpen] = useState(false);

  return (
    <div className="bg-[#1D4E89] text-white w-64 h-screen flex flex-col justify-between font-['Archivo']">
      <div>
        <img src={`${BASE}logo-white.png`} alt="Logo" className="w-32 mx-auto mt-4" />
        <nav className="flex flex-col mt-4 gap-2 px-4">
          <SidebarItem icon={<Home size={18} />} label="Accueil" to="/" />
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Tableaux de bord" to="/dashboard" />
          <SidebarItem icon={<FileText size={18} />} label="Rapports ESG" to="/rapports" />

          {/* Environnement avec sous-menu */}
          <div>
            <button
              onClick={() => setEnvOpen(!envOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-md w-full transition-colors hover:bg-white/10"
            >
              {envOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              <span>Environnement</span>
            </button>
            {envOpen && (
              <div className="ml-6 flex flex-col gap-2 mt-1">
                <SidebarItem icon={<Building size={16} />} label="Bâtiments" to="/batiments" small />
                <SidebarItem icon={<Car size={16} />} label="Véhicules" to="/vehicules" small />
              </div>
            )}
          </div>

          <SidebarItem icon={<Users size={18} />} label="Données sociales" to="/donnees-sociales" />
          <SidebarItem icon={<Landmark size={18} />} label="Gouvernance" to="/gouvernances" />
        </nav>
      </div>

      {/* Section bas de sidebar */}
      <div className="px-4 pb-12 border-t border-white/20">
        <div className="flex flex-col gap-2 text-sm mt-4">
          <SidebarItem icon={<HelpCircle size={16} />} label="Aide" to="/aide" small />
          <SidebarItem icon={<Settings size={16} />} label="Paramètres" to="/settings" small />
          <SidebarItem icon={<BookOpen size={16} />} label="Documentation" to="/documentation" small />
        </div>

        {/* Progress bar & utilisateur */}
        <div className="mt-6 text-sm mb-3" >
          <div className="mb-2">Assistant de saisie</div>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-1">
            <div className="bg-[#00B2CA] h-full w-[20%]" />
          </div>
          <span className="text-xs text-white/80">20 %</span>
          <div className="mt-4">Sébastien Dubois</div>
          <button
  onClick={() => window.location.href = `${BASE}landing`}
  className="flex items-center gap-2 px-3 py-2 rounded-md text-white hover:bg-white/10 text-sm pl-2 w-full transition-colors"
>
  <LogOut size={16} />
  <span>Déconnexion</span>
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

export default Sidebar;
