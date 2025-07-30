import { useState } from "react";
import Tooltip from "../components/Tooltip";
import Dropdown from "../components/Dropdown";

// Mocks de bâtiments fictifs
const mockedBuildings = [
  { id: "b1", buildingName: "Siège Social" },
  { id: "b2", buildingName: "Usine de Production" },
  { id: "b3", buildingName: "Entrepôt Sud" },
];

export default function BuildingWasteForm() {
  const [form, setForm] = useState({
    buildingId: "b1",
    startDate: "",
    endDate: "",
    recyclable: "",
    dangerous: "",
    dangerousRecyclable: "",
    other: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.startDate) e.startDate = "Date de début requise";
    if (!form.endDate) e.endDate = "Date de fin requise";
    const anyVal = ["recyclable", "dangerous", "dangerousRecyclable", "other"].some(k => form[k]);
    if (!anyVal) e.quantity = "Au moins un champ de quantité est requis";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    const payload = {
      buildingId: form.buildingId,
      startDate: form.startDate,
      endDate: form.endDate,
      wastes: [
        { type: "recyclable", quantity: parseFloat(form.recyclable || "0") },
        { type: "dangerous", quantity: parseFloat(form.dangerous || "0") },
        { type: "dangerousRecyclable", quantity: parseFloat(form.dangerousRecyclable || "0") },
        { type: "other", quantity: parseFloat(form.other || "0") },
      ].filter(w => w.quantity > 0),
    };
    console.log("Payload à soumettre:", payload);
  };

  const buildingOptions = Object.fromEntries(mockedBuildings.map(b => [b.id, b.buildingName]));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto font-['Archivo'] space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">
        🗑️ Déchets générés du bâtiment
      </h2>

      <Dropdown
        label="Bâtiment"
        value={form.buildingId}
        options={buildingOptions}
        onChange={val => handleChange("buildingId", val)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-[#1D4E89] font-medium">Date de début</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={form.startDate}
            onChange={e => handleChange("startDate", e.target.value)}
          />
          {errors.startDate && <div className="text-xs text-red-600">{errors.startDate}</div>}
        </div>
        <div>
          <label className="text-sm text-[#1D4E89] font-medium">Date de fin</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={form.endDate}
            onChange={e => handleChange("endDate", e.target.value)}
          />
          {errors.endDate && <div className="text-xs text-red-600">{errors.endDate}</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-[#1D4E89] font-medium flex items-center gap-1">
            Déchets recyclés (tonnes)
            <Tooltip text="Déchets triés envoyés au recyclage." />
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={form.recyclable}
            onChange={e => handleChange("recyclable", e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-[#1D4E89] font-medium flex items-center gap-1">
            Déchets dangereux (tonnes)
            <Tooltip text="Produits chimiques, batteries, déchets médicaux..." />
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={form.dangerous}
            onChange={e => handleChange("dangerous", e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-[#1D4E89] font-medium flex items-center gap-1">
            Déchets dangereux recyclés (tonnes)
            <Tooltip text="Déchets dangereux envoyés à des installations de recyclage." />
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={form.dangerousRecyclable}
            onChange={e => handleChange("dangerousRecyclable", e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-[#1D4E89] font-medium flex items-center gap-1">
            Autres déchets (tonnes)
            <Tooltip text="Ordures ménagères, déchets verts non recyclés ni dangereux." />
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={form.other}
            onChange={e => handleChange("other", e.target.value)}
          />
        </div>
      </div>

      {errors.quantity && <div className="text-xs text-red-600">{errors.quantity}</div>}

      <div className="flex justify-end">
        <button
          onClick={submit}
          className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded text-sm"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}
