import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Tooltip from "../components/Tooltip";

const fuelOptions = [
  "jet_fuel",
  "aviation_gasoline",
  "gasoline",
  "on_road_diesel",
  "residual_fuel_oil",
  "liquid_petroleum_gas",
  "compressed_natural_gas",
  "liquefied_natural_gas",
  "ethanol",
  "biodiesel",
  "e85",
  "b20",
  "propane",
  "ethane",
  "butane",
];

export default function VehicleForm({ onSubmit, countryFuelList }) {
  const initial = {
    vehicleName: "",
    vehicleUse: "",
    fuelType: null,
    motorType: "thermique", // default
    consumptionUnit: null,
    consumptionValue: "",
  };

  const [form, setForm] = useState(initial);
  const [isEstimatedConsumption, setIsEstimatedConsumption] = useState(true);
  const [errors, setErrors] = useState({});

  const fuelList = countryFuelList || fuelOptions;

  const handleUnitChange = (unit) =>
    setForm(prev => ({ ...prev, consumptionUnit: unit, consumptionValue: "" }));

  const handleSubmit = () => {
    const errs = {};
    if (!form.vehicleName) errs.vehicleName = "Nom du véhicule requis";
    if (!form.vehicleUse) errs.vehicleUse = "Usage du véhicule requis";
    if (form.motorType === "thermique" && !form.fuelType) errs.fuelType = "Sélection du carburant requise";
    if (isEstimatedConsumption && !form.consumptionUnit) errs.consumptionUnit = "Unité de consommation requise";
    if (isEstimatedConsumption && !form.consumptionValue) errs.consumptionValue = "Valeur de consommation requise";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      onSubmit({
        ...form,
        isHybrid: form.motorType === "hybride",
        isElectric: form.motorType === "electrique",
        consumptionValue: form.consumptionValue ? parseFloat(form.consumptionValue) : null,
        estimated: isEstimatedConsumption
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo'] space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">🚗 Ajout d’un véhicule</h2>

      <div>
        <label className="text-sm font-medium text-[#1D4E89] flex items-center gap-2">
          Nom du véhicule <Tooltip text="Vous pouvez ajouter un véhicule individuel ou un groupe de véhicules similaires." />
        </label>
        <input
          name="vehicleName"
          value={form.vehicleName}
          onChange={e => setForm(prev => ({ ...prev, vehicleName: e.target.value }))}
          className="w-full border rounded p-2"
        />
        {errors.vehicleName && <div className="text-xs text-red-600">{errors.vehicleName}</div>}
      </div>

      <div>
        <label className="text-sm font-medium text-[#1D4E89]">Usage du véhicule</label>
        <input
          name="vehicleUse"
          value={form.vehicleUse}
          onChange={e => setForm(prev => ({ ...prev, vehicleUse: e.target.value }))}
          className="w-full border rounded p-2"
        />
        {errors.vehicleUse && <div className="text-xs text-red-600">{errors.vehicleUse}</div>}
      </div>

      <Dropdown
        label="Type de motorisation"
        value={form.motorType}
        onChange={val => setForm(prev => ({ ...prev, motorType: val }))}
        options={{
          thermique: "Thermique",
          hybride: "Hybride rechargeable",
          electrique: "Électrique"
        }}
      />

      {form.motorType === "thermique" && (
        <Dropdown
          label="Type de carburant"
          value={form.fuelType || ""}
          onChange={(val) => setForm(prev => ({ ...prev, fuelType: val }))}
          options={fuelList.reduce((acc, f) => ({ ...acc, [f]: f }), {})}
        />
      )}
      {errors.fuelType && <div className="text-xs text-red-600">{errors.fuelType}</div>}

      <Dropdown
        label="Type de consommation"
        value={isEstimatedConsumption ? "estimated" : "real"}
        onChange={val => setIsEstimatedConsumption(val === "estimated")}
        options={{ estimated: "Estimation", real: "Réelle" }}
      />

      {isEstimatedConsumption && (
        <Dropdown
          label="Unité de consommation"
          value={form.consumptionUnit || ""}
          onChange={(val) => handleUnitChange(val)}
          options={{ liter_per_100km: "L/100km", mpg: "mpg", kWh_per_100km: "kWh/100km" }}
        />
      )}
      {errors.consumptionUnit && <div className="text-xs text-red-600">{errors.consumptionUnit}</div>}

      {isEstimatedConsumption && (
        <div>
          <label className="text-sm font-medium text-[#1D4E89] flex items-center gap-2">
            Valeur de consommation <Tooltip text="Indique la consommation estimée du véhicule selon l’unité sélectionnée." />
          </label>
          <input
            type="number"
            step="any"
            name="consumptionValue"
            value={form.consumptionValue}
            onChange={e => setForm(prev => ({ ...prev, consumptionValue: e.target.value }))}
            className="w-full border rounded p-2"
          />
          {errors.consumptionValue && <div className="text-xs text-red-600">{errors.consumptionValue}</div>}
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded-md text-sm"
        >
          Soumettre
        </button>
      </div>
    </div>
  );
}
