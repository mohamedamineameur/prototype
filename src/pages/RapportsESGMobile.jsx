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
      <main className="p-4 font-archivo bg-white min-h-screen">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-[#1D4E89] mb-1">Rapports ESG</h1>
          <p className="text-sm text-gray-600">
            Historique de vos rapports ESG disponibles au téléchargement.
          </p>
        </header>
  
        <div className="space-y-4">
          {rapports.map((r, i) => (
            <div
              key={i}
              className="bg-gray-50 border rounded-lg p-4 shadow-sm flex flex-col gap-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[#1D4E89]">{r.titre}</span>
                <span className="text-xs bg-[#00B2CA] text-white px-2 py-0.5 rounded">
                  {r.type}
                </span>
              </div>
              <div className="text-sm text-gray-600">{r.date}</div>
              <div className="text-sm text-gray-500">Par {r.auteur}</div>
              <button className="mt-2 text-sm text-[#00B2CA] font-medium underline">
                Télécharger
              </button>
            </div>
          ))}
        </div>
      </main>
    );
  }
  