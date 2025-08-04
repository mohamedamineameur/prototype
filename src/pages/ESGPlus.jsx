import { useState } from "react";
import {
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { CheckCircle, XCircle, Mail, UserPlus } from "lucide-react";
import Environnement from "./Environnement";

const initialSubs = [
  { id:1, name:"GreenCorp", email:"contact@greencorp.com", status:"accepté", scoreE:78, scoreS:65, scoreG:82 },
  { id:2, name:"EcoTech", email:"info@ecotech.com", status:"accepté", scoreE:60, scoreS:70, scoreG:55 },
  { id:3, name:"BlueServices", email:"blue@services.com", status:"accepté", scoreE:85, scoreS:80, scoreG:90 },
  { id:4, name:"UrbanLogix", email:"urban@logix.com", status:"en attente", scoreE:null, scoreS:null, scoreG:null },
];

const myScores = { scoreE: 55, scoreS:55, scoreG:88 };

export default function ESGplus() {
  const [subs, setSubs] = useState(initialSubs);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleInvite = (e) => {
    e.preventDefault();
    if (!email || !name) return;
    setSubs((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        email,
        status: "en attente",
        scoreE: null,
        scoreS: null,
        scoreG: null,
      },
    ]);
    setEmail("");
    setName("");
  };

  const scoreColors = ["bg-[#1D4E89]", "bg-[#00B2CA]", "bg-[#FBA834]", "bg-[#00C49A]"];
  const accepted = subs.filter(s => s.status === "accepté");

  const avg = {
    scoreE: Math.round(accepted.reduce((a,s)=>a+s.scoreE,0)/accepted.length),
    scoreS: Math.round(accepted.reduce((a,s)=>a+s.scoreS,0)/accepted.length),
    scoreG: Math.round(accepted.reduce((a,s)=>a+s.scoreG,0)/accepted.length),
  };

  const radarData = [
    { subject:"Environnement", Avg:avg.scoreE, Moi:myScores.scoreE },
    { subject:"Social", Avg:avg.scoreS, Moi:myScores.scoreS },
    { subject:"Gouvernance", Avg:avg.scoreG, Moi:myScores.scoreG },
  ];

  const barData = accepted.map(s => ({
    name: s.name,
    Environnement: s.scoreE,
    Social: s.scoreS,
    Gouvernance: s.scoreG,
    global: Math.round((s.scoreE + s.scoreS + s.scoreG)/3)
  }));
  barData.push({ name:"Moyenne", Environnement: avg.scoreE, Social: avg.scoreS, Gouvernance: avg.scoreG, global: Math.round((avg.scoreE+avg.scoreS+avg.scoreG)/3) });

  return (
    <div className="p-4 sm:p-6 font-archivo bg-white space-y-8">
      <header>
        <h2 className="text-2xl font-bold text-[#1D4E89] mb-2">Inviter un sous-traitant</h2>
        <p className="text-sm text-gray-600">Envoyez une invitation pour passer le test ESG.</p>
      </header>

      <form
        onSubmit={handleInvite}
        className="bg-[#F0F7FF] p-4 rounded-xl shadow flex flex-col sm:flex-row gap-4 items-start sm:items-end"
      >
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-[#1D4E89] mb-1">Nom</label>
          <input
            type="text"
            className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
            placeholder="Nom du sous-traitant"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-[#1D4E89] mb-1">Email</label>
          <input
            type="email"
            className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
            placeholder="contact@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-[#00B2CA] text-white px-4 py-2 rounded-lg hover:bg-[#0098ad] flex items-center gap-2"
        >
          <UserPlus size={16} />
          Envoyer
        </button>
      </form>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-4">
        {subs.map((s) => (
          <div key={s.id} className="bg-[#F0F7FF] p-4 rounded-xl shadow space-y-2">
            <div className="text-[#1D4E89] font-semibold">{s.name}</div>
            <div className="text-sm text-gray-600">{s.email}</div>
            <div className="flex items-center gap-2 text-sm">
              {s.status === "accepté" ? (
                <span className="flex items-center text-[#00B2CA] font-medium">
                  <CheckCircle size={16} className="mr-1" />
                  Accepté
                </span>
              ) : s.status === "refusé" ? (
                <span className="flex items-center text-[#FF5C5C] font-medium">
                  <XCircle size={16} className="mr-1" />
                  Refusé
                </span>
              ) : (
                <span className="flex items-center text-[#FFA500] font-medium">
                  <Mail size={16} className="mr-1" />
                  En attente
                </span>
              )}
            </div>
            {s.status === "accepté" && (
              <div className="space-y-2">
                {["Environnement", "Social", "Gouvernance", "Global"].map((label, i) => {
                  const val = [s.scoreE, s.scoreS, s.scoreG, Math.round((s.scoreE + s.scoreS + s.scoreG)/3)][i];
                  return (
                    <div key={label}>
                      <div className="flex justify-between text-xs font-medium text-gray-700 mb-1">
                        <span>{label}</span>
                        <span>{val ?? "-"}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${scoreColors[i]} h-2 rounded-full`}
                          style={{ width: `${val ?? 0}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block bg-white shadow rounded-xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-[#1D4E89] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Nom</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-center">Statut</th>
              <th className="px-4 py-2 text-center">E</th>
              <th className="px-4 py-2 text-center">S</th>
              <th className="px-4 py-2 text-center">G</th>
              <th className="px-4 py-2 text-center">Global</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {subs.map((s) => (
              <tr key={s.id} className="hover:bg-[#F0F7FF]">
                <td className="px-4 py-2">{s.name}</td>
                <td className="px-4 py-2">{s.email}</td>
                <td className="px-4 py-2 text-center">
                  {s.status === "accepté" ? (
                    <span className="inline-flex items-center text-[#00B2CA] font-medium">
                      <CheckCircle size={16} className="mr-1" />
                      Accepté
                    </span>
                  ) : s.status === "refusé" ? (
                    <span className="inline-flex items-center text-[#FF5C5C] font-medium">
                      <XCircle size={16} className="mr-1" />
                      Refusé
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-[#FFA500] font-medium">
                      <Mail size={16} className="mr-1" />
                      En attente
                    </span>
                  )}
                </td>
                {[s.scoreE, s.scoreS, s.scoreG, Math.round((s.scoreE + s.scoreS + s.scoreG)/3)].map((val, i) => (
                  <td key={i} className="px-4 py-2 text-center">
                    <div className="mb-1 text-xs font-semibold text-[#1D4E89]">
                      {val != null ? `${val}%` : "-"}
                    </div>
                    <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className={`${scoreColors[i]} h-2`} style={{ width: `${val ?? 0}%` }} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-[#F0F7FF] p-6 rounded-xl shadow space-y-6">
        <h3 className="text-2xl font-bold text-[#1D4E89]">Comparaisons visuelles</h3>

        <div className="space-y-4">
  <h4 className="text-lg font-semibold text-[#00B2CA]">Radar ESG</h4>
  <div className="w-full overflow-x-auto">
    <div className="w-full h-[300px] sm:max-w-3xl mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={[
          { subject: "E", Avg: avg.scoreE, Moi: myScores.scoreE },
          { subject: "S", Avg: avg.scoreS, Moi: myScores.scoreS },
          { subject: "G", Avg: avg.scoreG, Moi: myScores.scoreG },
        ]}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar name="Moyenne des mes collaborateurs" dataKey="Avg" stroke="#1D4E89" fill="#1D4E89" fillOpacity={0.3} />
          <Radar name="Mon organisation" dataKey="Moi" stroke="#00C49A" fill="#00C49A" fillOpacity={0.3} />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  </div>

  {/* Légende explicative */}
  <div className="text-sm text-gray-600 sm:text-center space-y-1">
    <div><strong>E</strong> = Environnement</div>
    <div><strong>S</strong> = Social</div>
    <div><strong>G</strong> = Gouvernance</div>
  </div>
</div>


        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#00B2CA]">Barres par pilier</h4>
          <div className="w-full overflow-x-auto">
          <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis domain={[0,100]} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip formatter={val => `${val}%`} />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="Environnement" fill="#1D4E89" />
                  <Bar dataKey="Social" fill="#00B2CA" />
                  <Bar dataKey="Gouvernance" fill="#FBA834" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
