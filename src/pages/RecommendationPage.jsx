import { useState } from "react";
import { Loader2 } from "lucide-react";

const recommandations = {
  ESG: {
    Environnemental: {
      Plan: "Évaluer l’empreinte carbone actuelle de l’entreprise et définir des objectifs de réduction clairs.",
      Do: "Mettre en œuvre des initiatives d'efficacité énergétique et des politiques de recyclage.",
      Check: "Mesurer les émissions de CO2 périodiquement et suivre les indicateurs environnementaux.",
      Act: "Ajuster les plans d'action en fonction des résultats obtenus et renforcer les mesures les plus efficaces.",
    },
    Social: {
      Plan: "Établir une stratégie d'inclusion, de diversité et de bien-être au travail.",
      Do: "Former les managers à l’égalité des chances et lancer des programmes de bien-être des employés.",
      Check: "Réaliser des enquêtes de satisfaction et analyser les indicateurs RH (absentéisme, turnover).",
      Act: "Mettre à jour les politiques RH et intensifier les actions correctives selon les retours employés.",
    },
    Gouvernance: {
      Plan: "Définir une politique de gouvernance éthique, transparente et conforme aux réglementations.",
      Do: "Mettre en place un code de conduite, former les dirigeants, et structurer les comités de gouvernance.",
      Check: "Auditer régulièrement la conformité et l’éthique des pratiques managériales.",
      Act: "Corriger les écarts identifiés, renforcer les contrôles internes et mettre à jour les règles de gouvernance.",
    },
  },
};

export default function RecommendationPage() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setShow(false);
    setTimeout(() => {
      setLoading(false);
      setShow(true);
    }, 10000);
  };

  return (
    <main className="min-h-screen bg-[#F0F7FF] px-4 py-8 sm:px-10 font-archivo">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-[#1D4E89]">Recommandations ESG</h1>
          <p className="text-gray-600 text-sm">
            Cliquez pour générer des recommandations IA selon le modèle PDCA
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="bg-[#00B2CA] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#009ab0] transition flex items-center gap-2"
          >
            {loading && <Loader2 className="animate-spin" size={18} />}
            {loading ? "Génération en cours..." : "Générer les recommandations"}
          </button>
        </div>

        {show && (
          <>
            {/* Mobile version */}
            <div className="sm:hidden space-y-6">
              {Object.entries(recommandations.ESG).map(([section, values]) => (
                <div key={section} className="bg-white p-4 rounded-2xl shadow space-y-2">
                  <h2 className="text-xl font-semibold text-[#1D4E89]">{section}</h2>
                  {Object.entries(values).map(([step, text]) => (
                    <div key={step}>
                      <div className="font-semibold text-[#00B2CA]">{step}</div>
                      <p className="text-sm text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Desktop version */}
           {/* Desktop version */}
<div className="hidden sm:block bg-white shadow rounded-2xl overflow-auto">
  <table className="w-full text-sm text-left">
    <thead className="bg-[#1D4E89] text-white">
      <tr>
        <th className="p-4">Catégorie</th>
        <th className="p-4">Plan</th>
        <th className="p-4">Do</th>
        <th className="p-4">Check</th>
        <th className="p-4">Act</th>
      </tr>
    </thead>
    <tbody className="text-gray-700 divide-y divide-gray-100 [&>tr:nth-child(odd)]:bg-[#F9FBFC]">
      {Object.entries(recommandations.ESG).map(([section, values]) => (
        <tr key={section} className="hover:bg-[#F0F7FF]">
          <td className="p-4 font-semibold text-[#1D4E89]">{section}</td>
          <td className="p-4">{values.Plan}</td>
          <td className="p-4">{values.Do}</td>
          <td className="p-4">{values.Check}</td>
          <td className="p-4">{values.Act}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          </>
        )}
      </div>
    </main>
  );
}
