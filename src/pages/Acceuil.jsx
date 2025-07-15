import { Link } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  FileText,
  Building,
  Car,
  Users,
  Landmark,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;

export default function Accueil() {
  const links = [
    { icon: <LayoutDashboard size={26} />, label: "Tableaux de bord", to: "/dashboard" },
    { icon: <FileText size={26} />, label: "Rapports ESG", to: "/rapports" },
    { icon: <Building size={26} />, label: "Bâtiments", to: "/batiments" },
    { icon: <Car size={26} />, label: "Véhicules", to: "/vehicules" },
    { icon: <Users size={26} />, label: "Données sociales", to: "/donnees-sociales" },
    { icon: <Landmark size={26} />, label: "Gouvernance", to: "/gouvernances" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#F2FAFF] to-[#EAF4FC] overflow-y-auto font-archivo">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center">
        {/* Logo */}
        <img src={`${BASE}logo-blue.png`} alt="Logo SF Factor" className="w-36 sm:w-44 mb-4 drop-shadow-md" />

        {/* Welcome */}
        <div className="text-center max-w-2xl mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1D4E89] tracking-tight leading-tight mb-4">
            Bienvenue sur votre <span className="text-[#00B2CA]">portail ESG</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Pilotez vos données environnementales, sociales et de gouvernance à travers une interface fluide, riche, et entièrement responsive.
          </p>
        </div>

        {/* Grid of links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          <AccueilCard icon={<Home />} label="Accueil" to="/" />
          {links.map((item, index) => (
            <AccueilCard key={index} icon={item.icon} label={item.label} to={item.to} />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-sm text-gray-400 mt-12 text-center">
          © {new Date().getFullYear()} SF Factor · Tous droits réservés
        </footer>
      </div>
    </main>
  );
}

function AccueilCard({ icon, label, to }) {
  return (
    <Link
      to={to}
      className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#00B2CA]/10 text-[#00B2CA] mb-3 border border-[#00B2CA]/20 group-hover:bg-[#00B2CA]/20">
        {icon}
      </div>
      <span className="text-[#1D4E89] font-medium text-sm sm:text-base text-center">{label}</span>
    </Link>
  );
}
