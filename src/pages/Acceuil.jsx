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
    { icon: <LayoutDashboard size={20} />, label: "Tableaux de bord", to: "/dashboard" },
    { icon: <FileText size={20} />, label: "Rapports ESG", to: "/rapports" },
    { icon: <Building size={20} />, label: "Bâtiments", to: "/batiments" },
    { icon: <Car size={20} />, label: "Véhicules", to: "/vehicules" },
    { icon: <Users size={20} />, label: "Données sociales", to: "/donnees-sociales" },
    { icon: <Landmark size={20} />, label: "Gouvernance", to: "/gouvernances" },
  ];

  return (
    <main className="min-h-screen bg-white font-archivo flex flex-col items-center justify-center p-6 space-y-10 text-center">
      <img src={`${BASE}logo-blue.png`} alt="Logo" className="w-40 mb-4" />

      <h1 className="text-3xl sm:text-4xl font-bold text-[#1D4E89]">
        Bienvenue sur votre plateforme ESG
      </h1>

      <p className="text-gray-600 max-w-xl">
        Visualisez, saisissez et pilotez vos données <span className="font-medium text-[#00B2CA]">environnementales</span>,
        <span className="font-medium text-[#00B2CA]"> sociales</span> et
        <span className="font-medium text-[#00B2CA]"> de gouvernance</span>.
      </p>

      <div className="grid w-full max-w-3xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <AccueilCard icon={<Home size={20} />} label="Accueil" to="/" />
        {links.map((item, index) => (
          <AccueilCard key={index} icon={item.icon} label={item.label} to={item.to} />
        ))}
      </div>

      <footer className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} SF Factor · Tous droits réservés
      </footer>
    </main>
  );
}

function AccueilCard({ icon, label, to }) {
  return (
    <Link
      to={to}
      className="flex items-center justify-center gap-2 px-4 py-3 bg-[#F4F7FA] rounded-xl shadow border border-gray-200 hover:shadow-md text-[#1D4E89] font-medium transition"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
