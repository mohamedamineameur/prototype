import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";
import Tooltip from "../components/Tooltip";

const countryCodes = ["US", "CA"];
const countriesAndStates = {
  US: ["CA", "NY", "TX"],
  CA: ["QC", "ON", "BC"]
};

const labels = {
  title: "🏢 Ajouter un bâtiment",
  building_name: "Nom du bâtiment",
  address: "Adresse",
  city: "Ville",
  country: "Pays",
  state: "État ou province",
  is_owned: "Le bâtiment est-il la propriété de l’entreprise ?",
  surface: "Superficie (m²)",
  save: "Enregistrer",
  countries: { US: "États-Unis", CA: "Canada" },
  states: {
    US: { CA: "Californie", NY: "New York", TX: "Texas" },
    CA: { QC: "Québec", ON: "Ontario", BC: "Colombie-Britannique" }
  }
};

export default function BuildingForm({ onSubmit }) {
  const [form, setForm] = useState({
    buildingName: "",
    address: "",
    city: "",
    country: "",
    state: "",
    isOwned: "",
    surface: ""
  });

  const [states, setStates] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (form.country) {
      setStates(countriesAndStates[form.country] || []);
      setForm(prev => ({ ...prev, state: "" }));
    }
  }, [form.country]);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const e = {};
    if (!form.buildingName) e.buildingName = "Champ requis";
    if (!form.address) e.address = "Champ requis";
    if (!form.city) e.city = "Champ requis";
    if (!form.country) e.country = "Champ requis";
    if (!form.state) e.state = "Champ requis";
    if (!form.isOwned) e.isOwned = "Champ requis";
    if (!form.surface) e.surface = "Champ requis";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    onSubmit({
      ...form,
      isOwned: form.isOwned === "Oui",
      surface: parseFloat(form.surface)
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo'] space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">{labels.title}</h2>

      <div>
        <label className="text-sm font-medium text-[#1D4E89]">{labels.building_name}</label>
        <input
          value={form.buildingName}
          onChange={e => handleChange("buildingName", e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.buildingName && <div className="text-xs text-red-600">{errors.buildingName}</div>}
      </div>

      <div>
        <label className="text-sm font-medium text-[#1D4E89]">{labels.address}</label>
        <input
          value={form.address}
          onChange={e => handleChange("address", e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.address && <div className="text-xs text-red-600">{errors.address}</div>}
      </div>

      <div>
        <label className="text-sm font-medium text-[#1D4E89]">{labels.city}</label>
        <input
          value={form.city}
          onChange={e => handleChange("city", e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.city && <div className="text-xs text-red-600">{errors.city}</div>}
      </div>

      <Dropdown
        label={labels.country}
        value={form.country}
        onChange={val => handleChange("country", val)}
        options={countryCodes.reduce((acc, code) => ({ ...acc, [code]: labels.countries[code] }), {})}
      />
      {errors.country && <div className="text-xs text-red-600">{errors.country}</div>}

      {states.length > 0 && (
        <Dropdown
          label={labels.state}
          value={form.state}
          onChange={val => handleChange("state", val)}
          options={states.reduce((acc, code) => ({ ...acc, [code]: labels.states[form.country][code] }), {})}
        />
      )}
      {errors.state && <div className="text-xs text-red-600">{errors.state}</div>}

      <Dropdown
        label={labels.is_owned}
        value={form.isOwned}
        onChange={val => handleChange("isOwned", val)}
        options={{ Oui: "Oui", Non: "Non" }}
      />
      {errors.isOwned && <div className="text-xs text-red-600">{errors.isOwned}</div>}

      <div>
        <label className="text-sm font-medium text-[#1D4E89] flex items-center gap-2">
          {labels.surface} <Tooltip text="Superficie brute du bâtiment en mètres carrés." />
        </label>
        <input
          value={form.surface}
          onChange={e => handleChange("surface", e.target.value.replace(/[^0-9.,]/g, "").replace(",", "."))}
          className="w-full border rounded p-2"
        />
        {errors.surface && <div className="text-xs text-red-600">{errors.surface}</div>}
      </div>

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
