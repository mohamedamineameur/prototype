import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Tooltip from "../components/Tooltip";

const labels = {
  title: "🏭 Consommation de carburant du bâtiment",
  selectBuilding: "Sélectionnez un bâtiment",
  fuelType: "Type de carburant",
  consumption: "Consommation (litres)",
  startDate: "Date de début",
  endDate: "Date de fin",
  save: "Enregistrer",
  text: "Cette consommation est issue de la combustion de combustibles fossiles dans des installations fixes (chaufferie, génératrice…).",
  fuelTooltip: "Vous pouvez trouver cette valeur dans vos factures de carburant."
};

const fakeBuildings = [
  { id: "b1", buildingName: "Siège social - Paris", country: "FR" },
  { id: "b2", buildingName: "Centre logistique - Lyon", country: "FR" },
  { id: "b3", buildingName: "Atelier - Marseille", country: "FR" }
];

const fakeFuels = ["Gaz naturel", "Fioul domestique", "Propane", "Charbon"];

export default function BuildingFuelConsumptionForm({ buildings = fakeBuildings, fuels = fakeFuels, onSubmit }) {
  const initial = {
    buildingId: "",
    fuelType: "",
    consumption: "",
    startDate: "",
    endDate: ""
  };

  const [form, setForm] = useState(initial);
  const [selected, setSelected] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (name, val) => setForm(prev => ({ ...prev, [name]: val }));
  const handleBuildingSelect = id => {
    const b = buildings.find(b => b.id === id) || null;
    setSelected(b);
    setForm(prev => ({ ...initial, buildingId: id }));
  };

  const validate = () => {
    const e = {};
    if (!form.buildingId) e.building = "Sélection du bâtiment requise";
    if (!form.startDate) e.startDate = "Date de début requise";
    if (!form.endDate) e.endDate = "Date de fin requise";
    if (!form.fuelType) e.fuelType = "Type de carburant requis";
    if (!form.consumption) e.consumption = "Consommation requise";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    onSubmit({
      buildingId: form.buildingId,
      fuelType: form.fuelType,
      consumption: parseFloat(form.consumption),
      startDate: form.startDate,
      endDate: form.endDate
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo'] space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">{labels.title}</h2>
      <div className="text-sm text-gray-700">{labels.text}</div>

      <Dropdown
        label={labels.selectBuilding}
        options={buildings.reduce((acc, b) => ({ ...acc, [b.id]: b.buildingName }), {})}
        value={form.buildingId}
        onChange={handleBuildingSelect}
      />
      {errors.building && <div className="text-xs text-red-600">{errors.building}</div>}

      {selected && (
        <>
          <Dropdown
            label={labels.fuelType}
            options={fuels.reduce((acc, f) => ({ ...acc, [f]: f }), {})}
            value={form.fuelType}
            onChange={val => handleChange("fuelType", val)}
          />
          {errors.fuelType && <div className="text-xs text-red-600">{errors.fuelType}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1D4E89]">{labels.startDate}</label>
              <input
                type="date"
                value={form.startDate}
                onChange={e => handleChange("startDate", e.target.value)}
                className="w-full border rounded p-2"
              />
              {errors.startDate && <div className="text-xs text-red-600">{errors.startDate}</div>}
            </div>
            <div>
              <label className="text-sm font-medium text-[#1D4E89]">{labels.endDate}</label>
              <input
                type="date"
                value={form.endDate}
                onChange={e => handleChange("endDate", e.target.value)}
                className="w-full border rounded p-2"
              />
              {errors.endDate && <div className="text-xs text-red-600">{errors.endDate}</div>}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-[#1D4E89] flex items-center gap-2">
              {labels.consumption}
              <Tooltip text={labels.fuelTooltip} />
            </label>
            <input
              type="number"
              step="any"
              value={form.consumption}
              onChange={e => handleChange("consumption", e.target.value)}
              className="w-full border rounded p-2"
            />
            {errors.consumption && <div className="text-xs text-red-600">{errors.consumption}</div>}
          </div>
        </>
      )}

      <div className="flex justify-end">
        <button
          onClick={submit}
          className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded-md text-sm"
        >
          {labels.save}
        </button>
      </div>
    </div>
  );
}
