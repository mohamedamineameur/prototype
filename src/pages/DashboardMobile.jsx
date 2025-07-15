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
  ],
  social: [
    { name: "Diversité", valeur: 60 },
    { name: "Télétravail", valeur: 42 },
    { name: "Satisfaction", valeur: 82 },
  ],
  gov: [
    { name: "Éthique", valeur: 100 },
    { name: "Audit", valeur: 2 },
    { name: "Transparence", valeur: 98 },
  ],
};

export default function Dashboard() {
  const [open, setOpen] = useState({ env: true, social: true, gov: true });

  const toggle = (key) =>
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const Section = ({ id, title, data }) => (
    <section className="bg-gray-50 p-4 rounded-xl shadow-inner mb-8">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggle(id)}
      >
        <h2 className="text-lg font-bold text-[#1D4E89]">{title}</h2>
        <span className="text-[#00B2CA] text-xl">
          {open[id] ? "−" : "+"}
        </span>
      </div>

      {open[id] && (
        <div className="mt-4 space-y-6">
          <div className="grid grid-cols-1 gap-3">
            {data.map((item, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-md border shadow-sm"
              >
                <div className="text-[#1D4E89] text-sm font-semibold mb-1">
                  {item.name}
                </div>
                <div className="text-2xl font-bold">{item.valeur}</div>
                <div className="text-xs text-gray-500">Indicateur</div>
              </div>
            ))}
          </div>

          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valeur" fill="#00B2CA" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="h-48 sm:h-60">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="valeur" stroke="#1D4E89" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </section>
  );

  return (
    <main className="p-4 font-archivo bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-[#1D4E89] mb-2">Dashboard ESG</h1>
      <p className="text-sm text-gray-600 mb-6">
        Vos indicateurs ESG clés, en un coup d'œil.
      </p>

      <Section id="env" title="🌱 Environnement" data={dataSets.env} />
      <Section id="social" title="👥 Social" data={dataSets.social} />
      <Section id="gov" title="🏛 Gouvernance" data={dataSets.gov} />
    </main>
  );
}
