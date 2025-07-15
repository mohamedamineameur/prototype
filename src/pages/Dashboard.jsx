import { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const dataSets = {
  env: [
    { name: "Énergie", valeur: 45 },
    { name: "Déchets", valeur: 12 },
    { name: "Eau", valeur: 35 },
    { name: "CO₂", valeur: 22 },
    { name: "Recyclage", valeur: 78 },
    { name: "Énergies renouvelables", valeur: 30 },
  ],
  social: [
    { name: "Diversité", valeur: 60 },
    { name: "Accidents", valeur: 1.2 },
    { name: "Télétravail", valeur: 42 },
    { name: "Formation", valeur: 18 },
    { name: "Absentéisme", valeur: 5.5 },
    { name: "Satisfaction", valeur: 82 },
  ],
  gov: [
    { name: "Éthique", valeur: 100 },
    { name: "Audit", valeur: 2 },
    { name: "Réclamations", valeur: 3 },
    { name: "Transparence", valeur: 98 },
    { name: "Comité ESG", valeur: 1 },
    { name: "Parité CA", valeur: 40 },
  ],
};

export default function Dashboard() {
  const [open, setOpen] = useState({ env: true, social: true, gov: true });
  const toggle = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const Section = ({ title, id, data }) => (
    <section className="bg-gray-50 p-4 rounded-xl shadow-inner">
      <div
        className="flex justify-between items-center cursor-pointer mb-4"
        onClick={() => toggle(id)}
      >
        <h2 className="text-xl font-semibold text-[#1D4E89]" style={{ fontSize:"35px"}}>{title}</h2>
        <span className="text-sm text-[#00B2CA]">{open[id] ? "−" : "+"}</span>
      </div>

      {open[id] && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, i) => (
              <div
                key={i}
                className="bg-white border rounded-lg p-4 shadow-sm flex flex-col justify-between"
              >
                <h3 className="text-sm text-[#1D4E89] font-medium mb-1">{item.name}</h3>
                <div className="text-2xl font-bold text-[#1D4E89]">{item.valeur}</div>
                <div className="text-xs text-gray-500 mt-1">Indicateur annuel</div>
              </div>
            ))}
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="valeur" fill="#00B2CA" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="valeur" stroke="#1D4E89" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );

  return (
    <main className="p-4 sm:p-6 bg-white font-archivo space-y-10">
      <header className="mb-6">
        <h1 className="text-4xl sm:text-3xl font-bold text-[#1D4E89]" style={{ fontSize:"45px"}} >Tableaux de bord ESG</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Données fictives sur les performances environnementales, sociales et de gouvernance.
        </p>
      </header>

      <Section title="🌱 Environnement" id="env" data={dataSets.env} />
      <Section title="🧑‍🤝‍🧑 Social" id="social" data={dataSets.social} />
      <Section title="🏛 Gouvernance" id="gov" data={dataSets.gov} />
    </main>
  );
}
