import { Bolt, Users, Landmark } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const ScoreCircle = ({ score }) => {
  const radius = 45;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center space-y-2">
      <span className="text-[#1D4E89] font-bold text-sm">ESG Score:</span>
      <div className="w-32 h-32 relative">
        <svg height="100%" width="100%" viewBox="0 0 100 100" className="transform -rotate-90">
          <circle
            r={normalizedRadius}
            cx="50"
            cy="50"
            fill="transparent"
            stroke="#E5E7EB"
            strokeWidth={stroke}
          />
          <circle
            r={normalizedRadius}
            cx="50"
            cy="50"
            fill="transparent"
            stroke="#1D4E89"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#1D4E89] font-extrabold text-4xl">{score}</span>
        </div>
      </div>
    </div>
  );
};


const Accueil = () => {
  const score = 93;

  return (
    <main className="font-['Archivo'] bg-white min-h-screen px-4 py-8 space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1D4E89]">
          Bienvenue sur votre <span className="text-[#00B2CA]">portail ESG</span>
        </h1>
      </header>

      {/* Bloc principal ESG */}
      <section className="flex flex-col sm:flex-row items-center justify-center gap-6">
  {/* Bloc du score avec même largeur que les blocs tags */}
  <div className="w-80 h-80 border-2 border-[#1D4E89] rounded-xl px-6 py-4 flex items-center justify-center">
    <ScoreCircle score={score} />
  </div>

  {/* Bloc des légendes avec même largeur */}
    <div className="w-80 flex flex-col gap-2">
      <button
      className="flex items-center gap-2 bg-[#74C9AF] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#5fbf9a] transition"
      onClick={() => window.location.href = `${BASE}environnement`}
      >
      <Bolt size={16} />
      <span className="text-sm font-medium">Environnement</span>
      </button>
      <button
      className="flex items-center gap-2 bg-[#1D4E89] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#163d6f] transition"
      onClick={() => window.location.href = `${BASE}donnees-sociales`}
      >
      <Users size={16} />
      <span className="text-sm font-medium">Social</span>
      </button>
      <button
      className="flex items-center gap-2 bg-[#F89A5B] text-white px-4 py-2 rounded-md shadow-sm hover:bg-[#e4884d] transition"
      onClick={() => window.location.href = `${BASE}gouvernances`}
      >
      <Landmark size={16} />
      <span className="text-sm font-medium">Gouvernement</span>
      </button>
    </div>
    </section>

      {/* Sections Infos + Actions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Aperçu rapide */}
        <div className="bg-gray-50 rounded-xl shadow p-6 space-y-6 border">
          <h2 className="text-xl font-bold text-[#1D4E89] text-center">Aperçu rapide</h2>
          <div>
            <p className="text-sm">
              <span className="text-[#1D4E89] font-medium">Dernier rapport:</span>{" "}
              <span className="text-gray-700">15 juillet 2025</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-[#1D4E89] font-medium mb-2">Données à compléter:</p>
            <ul className="text-sm text-gray-700 list-disc ml-5 space-y-1">
              <li>Véhicules: 4</li>
              <li>Sociales: 2</li>
            </ul>
          </div>
        </div>

        {/* Actions rapides */}
        <div className="bg-gray-50 rounded-xl shadow p-6 space-y-6 border items-center ">
  <h2 className="text-xl font-bold text-[#1D4E89] text-center">Actions rapides</h2>
  <div className="flex flex-col items-center space-y-3">
    <button className="w-2/3 bg-[#1D4E89] text-white py-2 rounded-md font-semibold hover:bg-[#163d6f] transition">
      Créer un rapport
    </button>
    <button className="w-2/3 bg-[#00B2CA] text-white py-2 rounded-md font-semibold hover:bg-[#0097ab] transition">
      Ajouter un bâtiment
    </button>
    <button className="w-2/3 bg-[#1D4E89] text-white py-2 rounded-md font-semibold hover:bg-[#163d6f] transition">
      Voir la gouvernance
    </button>
  </div>
</div>


      </section>
    </main>
  );
};

export default Accueil;
