import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const govData = [
  { name: "Transparence", valeur: 95 },
  { name: "Audit", valeur: 3 },
  { name: "Éthique", valeur: 100 },
  { name: "Réclamations", valeur: 2 },
  { name: "Parité CA", valeur: 40 },
  { name: "Comité ESG", valeur: 1 },
];

export default function Gouvernance() {
  const [year] = useState("2024");

  return (
    <main className="p-4 sm:p-6 bg-white font-archivo space-y-10">
      <header className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1D4E89]">
          🏛 Volet Gouvernance
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Données et indicateurs liés à la gouvernance d’entreprise pour {year}.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {govData.map((item, index) => (
          <div
            key={index}
            className="bg-[#f4f7fa] rounded-xl border shadow-sm p-4 flex flex-col justify-between"
          >
            <h3 className="text-[#1D4E89] text-sm font-medium mb-2">{item.name}</h3>
            <div className="text-2xl font-bold text-[#1D4E89]">{item.valeur}</div>
            <span className="text-xs text-gray-500 mt-1">Valeur annuelle</span>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-[#1D4E89]">Évolution des indicateurs</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={govData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="valeur" fill="#00B2CA" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={govData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="valeur" stroke="#1D4E89" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </section>

      <section className="bg-[#f9f9f9] p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-[#1D4E89] mb-3">
          Notes supplémentaires sur la gouvernance
        </h2>
        <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600">
          <li>Les audits sont réalisés deux fois par an.</li>
          <li>Le comité ESG s’est réuni 6 fois cette année.</li>
          <li>Les indicateurs de parité sont en amélioration constante.</li>
          <li>Aucune infraction éthique déclarée sur les 12 derniers mois.</li>
        </ul>
      </section>
    </main>
  );
}
