// src/pages/Vehicules.jsx
import { useState } from "react";
import { Car, Fuel, GaugeCircle, Leaf } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const vehicules = [
  {
    id: 1,
    nom: "Peugeot e-208",
    type: "Électrique",
    consommation: "15 kWh/100km",
    co2: "0 g/km",
    km: "12 000",
    annee: 2022,
  },
  {
    id: 2,
    nom: "Renault Clio",
    type: "Essence",
    consommation: "5.2 L/100km",
    co2: "120 g/km",
    km: "45 000",
    annee: 2021,
  },
  {
    id: 3,
    nom: "Tesla Model 3",
    type: "Électrique",
    consommation: "14 kWh/100km",
    co2: "0 g/km",
    km: "30 000",
    annee: 2023,
  },
  {
    id: 4,
    nom: "Volkswagen Golf",
    type: "Diesel",
    consommation: "4.7 L/100km",
    co2: "110 g/km",
    km: "60 000",
    annee: 2020,
  },
];

const Vehicules = () => {
  return (
    <main className="p-4 sm:p-6 bg-white font-archivo">
      <h1 className="text-2xl font-bold text-[#1D4E89] mb-2">Gestion des Véhicules</h1>
      <p className="text-gray-600 mb-6 text-sm">
        Visualisez les caractéristiques et les performances environnementales de votre flotte.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {vehicules.map((v) => (
          <div
            key={v.id}
            className="bg-white border rounded-xl shadow-sm p-4 flex flex-col justify-between gap-2"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-[#1D4E89] font-semibold text-lg">{v.nom}</h2>
              <span className="text-xs bg-[#00B2CA] text-white px-2 py-0.5 rounded-md">
                {v.type}
              </span>
            </div>
            <div className="text-sm text-gray-500">Année : {v.annee}</div>
            <div className="flex flex-wrap gap-3 mt-3 text-sm">
              <div className="flex items-center gap-1">
                <Fuel size={16} /> {v.consommation}
              </div>
              <div className="flex items-center gap-1">
                <Leaf size={16} /> {v.co2}
              </div>
              <div className="flex items-center gap-1">
                <GaugeCircle size={16} /> {v.km} km
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-[#1D4E89] mb-4">Émissions de CO₂</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={vehicules} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="nom" />
            <YAxis />
            <Tooltip />
            <Bar dataKey={(entry) => parseInt(entry.co2)} fill="#00B2CA" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default Vehicules;
