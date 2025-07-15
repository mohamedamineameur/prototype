// src/pages/DonneesSociales.jsx
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const donneesSociales = {
  cartes: [
    { label: "Taux de diversité", valeur: "62%", note: "Objectif: 70%" },
    { label: "Femmes en management", valeur: "35%", note: "+5% depuis 2023" },
    { label: "Taux de satisfaction", valeur: "88%", note: "En hausse" },
    { label: "Taux de formation", valeur: "91%", note: "Excellent" },
    { label: "Télétravail autorisé", valeur: "76%", note: "Équilibre vie pro/perso" },
    { label: "Accidents de travail", valeur: "1.1%", note: "En baisse" },
    { label: "Absentéisme", valeur: "3.7%", note: "Stable" },
    { label: "Employés permanents", valeur: "94%", note: "Majorité stable" },
  ],
  graphique: [
    { mois: "Jan", satisfaction: 82, formation: 88 },
    { mois: "Fév", satisfaction: 85, formation: 89 },
    { mois: "Mar", satisfaction: 87, formation: 90 },
    { mois: "Avr", satisfaction: 86, formation: 92 },
    { mois: "Mai", satisfaction: 88, formation: 91 },
    { mois: "Juin", satisfaction: 89, formation: 93 },
  ],
};

export default function DonneesSociales() {
  return (
    <main className="p-4 sm:p-6 bg-white font-archivo space-y-8">
      <header className="mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1D4E89]">
          Données Sociales
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Suivez vos performances sociales : diversité, satisfaction, santé au travail.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {donneesSociales.cartes.map((card, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-sm text-[#1D4E89] font-medium mb-1">
              {card.label}
            </h3>
            <div className="text-2xl font-bold text-[#1D4E89]">{card.valeur}</div>
            <div className="text-xs text-gray-500 mt-1">{card.note}</div>
          </div>
        ))}
      </section>

      <section className="bg-gray-50 p-4 rounded-xl shadow-inner">
        <h2 className="text-lg font-semibold text-[#1D4E89] mb-4">
          Évolution satisfaction & formation
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={donneesSociales.graphique}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="satisfaction"
              stroke="#00B2CA"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="formation"
              stroke="#1D4E89"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </main>
  );
}
