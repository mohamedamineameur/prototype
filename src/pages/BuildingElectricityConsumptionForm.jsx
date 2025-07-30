import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Tooltip from "../components/Tooltip";

const labels = {
  title: "⚡ Consommation d'électricité du bâtiment",
  building: "Sélectionnez un bâtiment",
  startDate: "Date de début",
  endDate: "Date de fin",
  consumption: "Consommation (kWh)",
  tooltip: "Valeur à reporter depuis vos factures d'électricité.",
  isTenant: "L'organisation est-elle facturée pour l'électricité ?",
  submit: "Soumettre"
};

const fakeBuildings = [
  { id: "b1", buildingName: "Siège - Paris", country: "FR" },
  { id: "b2", buildingName: "Annexe - Lyon", country: "FR" },
  { id: "b3", buildingName: "Atelier - Lille", country: "FR" }
];

export default function BuildingElectricityConsumptionForm({ buildings = fakeBuildings, onSubmit }) {
  const initial = {
    buildingId: "",
    startDate: "",
    endDate: "",
    consumption: "",
    isTenantCharged: false
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
    if (!form.buildingId) e.building = "Bâtiment requis";
    if (!form.startDate) e.startDate = "Date de début requise";
    if (!form.endDate) e.endDate = "Date de fin requise";
    if (!form.consumption) e.consumption = "Consommation requise";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    onSubmit({
      buildingId: form.buildingId,
      startDate: form.startDate,
      endDate: form.endDate,
      consumption: parseFloat(form.consumption),
      isTenantCharged: form.isTenantCharged
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo'] space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">{labels.title}</h2>

      <Dropdown
        label={labels.building}
        options={buildings.reduce((acc, b) => ({ ...acc, [b.id]: b.buildingName }), {})}
        value={form.buildingId}
        onChange={handleBuildingSelect}
      />
      {errors.building && <div className="text-xs text-red-600">{errors.building}</div>}

      {selected && (
        <>
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
              <Tooltip text={labels.tooltip} />
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

          <div className="flex items-center gap-2">
            <input
              id="isTenant"
              type="checkbox"
              checked={form.isTenantCharged}
              onChange={e => handleChange("isTenantCharged", e.target.checked)}
              className="accent-[#1D4E89]"
            />
            <label htmlFor="isTenant" className="text-sm text-[#1D4E89] font-medium">
              {labels.isTenant}
            </label>
          </div>
        </>
      )}

      <div className="flex justify-end">
        <button
          onClick={submit}
          className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded-md text-sm"
        >
          {labels.submit}
        </button>
      </div>
    </div>
  );
}
