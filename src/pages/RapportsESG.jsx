// src/pages/RapportsESG.jsx
export default function RapportsESG() {
    const rapports = [
      {
        titre: "Rapport Environnemental 2024",
        date: "03 juillet 2024",
        type: "PDF",
        auteur: "S. Dubois",
      },
      {
        titre: "Rapport Social – Q1 2024",
        date: "12 avril 2024",
        type: "Excel",
        auteur: "M. Lefèvre",
      },
      {
        titre: "Audit ESG – Groupe Bâtiment",
        date: "29 février 2024",
        type: "PDF",
        auteur: "A. Gauthier",
      },
    ];
  
    return (
      <main className="flex-1 p-8 bg-white font-archivo">
        <h1 className="text-3xl font-bold text-[#1D4E89] mb-2">Rapports ESG</h1>
        <p className="text-gray-600 mb-6">Consultez l’historique de vos rapports ESG, classés par date et domaine.</p>
  
        <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
          <table className="w-full table-auto">
            <thead className="bg-[#F0F4F8] text-[#1D4E89] text-sm">
              <tr>
                <th className="text-left p-4">Nom du rapport</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Format</th>
                <th className="text-left p-4">Auteur</th>
              </tr>
            </thead>
            <tbody>
              {rapports.map((rapport, i) => (
                <tr key={i} className="border-t hover:bg-gray-50 text-sm">
                  <td className="p-4">{rapport.titre}</td>
                  <td className="p-4">{rapport.date}</td>
                  <td className="p-4">
                    <span className="inline-block bg-[#00B2CA] text-white px-2 py-0.5 rounded text-xs">
                      {rapport.type}
                    </span>
                  </td>
                  <td className="p-4">{rapport.auteur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
  