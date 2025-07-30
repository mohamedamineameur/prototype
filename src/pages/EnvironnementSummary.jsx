import { useState } from "react";
import {
  Flashlight,
  Leaf,
  Droplet,
  Trash2,
  Car,
  Gauge,
  BatteryCharging,
  Circle,
  Building2,
  ArrowDown,
} from "lucide-react";

const colors = ["#00B2CA", "#1D4E89", "#FFC107", "#8BC34A"];

const InfoCard = ({ icon, label, value, unit }) => (
  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
    <div className="text-[#00B2CA]">{icon}</div>
    <div>
      <div className="text-sm text-[#1D4E89] font-semibold">{label}</div>
      <div className="text-2xl font-bold text-[#1D4E89]">
        {value.toLocaleString()} {unit}
      </div>
    </div>
  </div>
);

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div
        className="p-4 cursor-pointer flex justify-between items-center text-[#1D4E89]"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold">{title}</span>
        <ArrowDown className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </div>
      {open && <div className="p-4 border-t space-y-2">{children}</div>}
    </div>
  );
};

const BarSVG = ({ data, max, color }) => (
  <div className="space-y-2">
    {data.map((d, i) => (
      <div key={i} className="text-sm">
        <div className="text-[#1D4E89] font-medium mb-1">{d.label}</div>
        <div className="bg-gray-100 rounded-full h-4 w-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${(d.value / max) * 100}%`, backgroundColor: color }}
          ></div>
        </div>
        <div className="text-xs text-gray-600 mt-1">{d.value.toLocaleString()}</div>
      </div>
    ))}
  </div>
);

const PieSVG = ({ data, radius = 60 }) => {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let cumulative = 0;
  return (
    <svg width={radius * 2} height={radius * 2} viewBox={`0 0 ${radius * 2} ${radius * 2}`} className="mx-auto">
      {data.map((slice, i) => {
        const [startX, startY] = [
          radius + radius * Math.cos(2 * Math.PI * cumulative / total),
          radius + radius * Math.sin(2 * Math.PI * cumulative / total),
        ];
        cumulative += slice.value;
        const [endX, endY] = [
          radius + radius * Math.cos(2 * Math.PI * cumulative / total),
          radius + radius * Math.sin(2 * Math.PI * cumulative / total),
        ];
        const largeArc = slice.value / total > 0.5 ? 1 : 0;
        return (
          <path
            key={i}
            d={`M${radius},${radius} L${startX},${startY} A${radius},${radius} 0 ${largeArc} 1 ${endX},${endY} Z`}
            fill={colors[i % colors.length]}
          />
        );
      })}
    </svg>
  );
};

export default function EnvironnementSummaryFull() {
  const buildings = [
    {
      name: "Siège Paris",
      electricity: 9200,
      water: 480,
      fuel: 1300,
      waste: {
        recyclable: 1.8,
        dangerous: 0.5,
        dangerousRecyclable: 0.2,
        other: 0.9,
      },
    },
    {
      name: "Logistique Lyon",
      electricity: 6100,
      water: 360,
      fuel: 1750,
      waste: {
        recyclable: 2.4,
        dangerous: 0.8,
        dangerousRecyclable: 0.3,
        other: 1.2,
      },
    },
  ];

  const vehicles = [
    {
      name: "Renault Clio",
      fuelConsumption: 450,
      electricConsumption: null,
      emissions: 98,
    },
    {
      name: "Toyota Prius",
      fuelConsumption: 260,
      electricConsumption: 120,
      emissions: 70,
    },
    {
      name: "Tesla Model 3",
      fuelConsumption: null,
      electricConsumption: 310,
      emissions: 45,
    },
  ];

  const totals = {
    electricity: buildings.reduce((sum, b) => sum + b.electricity, 0),
    fuel: buildings.reduce((sum, b) => sum + b.fuel, 0) + vehicles.reduce((sum, v) => sum + (v.fuelConsumption || 0), 0),
    water: buildings.reduce((sum, b) => sum + b.water, 0),
    waste: buildings.reduce(
      (sum, b) => {
        Object.keys(b.waste).forEach((k) => (sum[k] += b.waste[k]));
        return sum;
      },
      { recyclable: 0, dangerous: 0, dangerousRecyclable: 0, other: 0 }
    ),
  };

  const scopes = { s1: 270, s2: 190, s3: 360 };

  const pieWaste = Object.entries(totals.waste).map(([label, value]) => ({ label, value }));

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8 font-['Archivo']">
      <h2 className="text-3xl font-bold text-[#1D4E89]">🌍 Bilan Environnemental</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard icon={<Building2 size={20} />} label="Bâtiments suivis" value={buildings.length} unit="" />
        <InfoCard icon={<Car size={20} />} label="Véhicules suivis" value={vehicles.length} unit="" />
        <InfoCard icon={<Flashlight size={20} />} label="Électricité totale" value={totals.electricity} unit="kWh" />
        <InfoCard icon={<Leaf size={20} />} label="Carburant total" value={totals.fuel} unit="L" />
        <InfoCard icon={<Droplet size={20} />} label="Eau totale" value={totals.water} unit="m³" />
      </div>

      <Accordion title="🏢 Bâtiments">
        {buildings.map((b, i) => (
          <div key={i} className="mb-6">
            <h4 className="font-semibold text-[#1D4E89]">{b.name}</h4>
            <BarSVG
              data={[
                { label: "Electricité (kWh)", value: b.electricity },
                { label: "Eau (m³)", value: b.water },
                { label: "Carburant (L)", value: b.fuel },
                { label: "Déchets recyclables (t)", value: b.waste.recyclable },
                { label: "Déchets dangereux (t)", value: b.waste.dangerous },
                { label: "Dang. recyclés (t)", value: b.waste.dangerousRecyclable },
                { label: "Autres déchets (t)", value: b.waste.other },
              ]}
              max={10000}
              color="#00B2CA"
            />
          </div>
        ))}
      </Accordion>

      <Accordion title="🚗 Véhicules">
        {vehicles.map((v, i) => (
          <div key={i} className="mb-6">
            <h4 className="font-semibold text-[#1D4E89]">{v.name}</h4>
            <BarSVG
              data={[
                v.fuelConsumption && { label: "Carburant (L)", value: v.fuelConsumption },
                v.electricConsumption && { label: "Électricité (kWh)", value: v.electricConsumption },
                { label: "Émissions (tCO₂e)", value: v.emissions },
              ].filter(Boolean)}
              max={500}
              color="#1D4E89"
            />
          </div>
        ))}
      </Accordion>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-[#1D4E89] text-center">🗑️ Répartition des déchets</h3>
        <div className="flex flex-col items-center mt-4">
          <PieSVG data={pieWaste} />
          <ul className="mt-4 space-y-1 text-sm">
            {pieWaste.map((p, i) => (
              <li key={i} className="flex items-center gap-2">
                <Circle size={12} color={colors[i % colors.length]} />
                {p.label} : {p.value.toFixed(1)} t
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InfoCard icon={<Gauge size={20} />} label="Scope 1" value={scopes.s1} unit="tCO₂e" />
        <InfoCard icon={<Gauge size={20} />} label="Scope 2" value={scopes.s2} unit="tCO₂e" />
        <InfoCard icon={<Gauge size={20} />} label="Scope 3" value={scopes.s3} unit="tCO₂e" />
        <InfoCard icon={<Gauge size={20} />} label="Total" value={scopes.s1 + scopes.s2 + scopes.s3} unit="tCO₂e" />
      </div>
    </div>
  );
}