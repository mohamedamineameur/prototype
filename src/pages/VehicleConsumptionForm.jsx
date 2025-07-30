import { useState } from "react";
import Dropdown from "../components/Dropdown";
import Tooltip from "../components/Tooltip";

const mockVehicles = [
  {
    id: "1",
    vehicleName: "Renault Clio - Essence",
    isElectric: false,
    isHybrid: false,
    consumptionUnit: "liter_per_100km"
  },
  {
    id: "2",
    vehicleName: "Toyota Prius - Hybride",
    isElectric: false,
    isHybrid: true,
    consumptionUnit: "liter_per_100km"
  },
  {
    id: "3",
    vehicleName: "Tesla Model 3",
    isElectric: true,
    isHybrid: false,
    consumptionUnit: "kWh_per_100km"
  },
  {
    id: "4",
    vehicleName: "Fiat 500 - Données estimées",
    isElectric: false,
    isHybrid: false,
    consumptionUnit: null
  }
];

export default function VehicleConsumptionForm({ onSubmit }) {
  const initial = {
    vehicleId: "",
    distanceUnit: null,
    distanceValue: "",
    fuelConsumption: "",
    electricityConsumption: "",
    startDate: "",
    endDate: ""
  };

  const [form, setForm] = useState(initial);
  const [selected, setSelected] = useState(null);
  const [errors, setErrors] = useState({});

  const units = { km: "Kilomètres", miles: "Miles" };

  const handleChange = (name, val) => setForm(prev => ({ ...prev, [name]: val }));

  const handleVehicleSelect = id => {
    const vehicle = mockVehicles.find(v => v.id === id) || null;
    setForm(prev => ({
      ...prev,
      vehicleId: id,
      distanceUnit: vehicle?.consumptionUnit ? null : prev.distanceUnit,
      distanceValue: vehicle?.consumptionUnit ? "" : prev.distanceValue,
      fuelConsumption: vehicle?.consumptionUnit ? prev.fuelConsumption : "",
      electricityConsumption: vehicle?.consumptionUnit ? prev.electricityConsumption : ""
    }));
    setSelected(vehicle);
  };

  const validate = () => {
    const e = {};
    if (!form.vehicleId) e.vehicle = "Sélection du véhicule requise";
    if (!form.startDate) e.startDate = "Date de début requise";
    if (!form.endDate) e.endDate = "Date de fin requise";
    if (selected?.consumptionUnit !== null) {
      if (!form.fuelConsumption && !form.electricityConsumption) {
        e.consumption = "Au moins une consommation requise";
      }
    } else {
      if (!form.distanceUnit) e.distanceUnit = "Unité de distance requise";
      if (!form.distanceValue) e.distanceValue = "Distance parcourue requise";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    onSubmit({
      vehicleId: form.vehicleId,
      startDate: form.startDate,
      endDate: form.endDate,
      distanceUnit: selected?.consumptionUnit === null ? form.distanceUnit : null,
      distanceValue: selected?.consumptionUnit === null ? parseFloat(form.distanceValue) : null,
      fuelConsumption: form.fuelConsumption ? parseFloat(form.fuelConsumption) : null,
      electricityConsumption: form.electricityConsumption ? parseFloat(form.electricityConsumption) : null
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo'] space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">🔋 Consommation énergétique pour vehicule</h2>

      <Dropdown
        label="Sélectionnez un véhicule"
        options={mockVehicles.reduce((acc, v) => ({ ...acc, [v.id]: v.vehicleName }), {})}
        value={form.vehicleId}
        onChange={handleVehicleSelect}
      />
      {errors.vehicle && <div className="text-xs text-red-600">{errors.vehicle}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Date de début</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={e => handleChange("startDate", e.target.value)}
            className="w-full border rounded p-2"
          />
          {errors.startDate && <div className="text-xs text-red-600">{errors.startDate}</div>}
        </div>
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Date de fin</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={e => handleChange("endDate", e.target.value)}
            className="w-full border rounded p-2"
          />
          {errors.endDate && <div className="text-xs text-red-600">{errors.endDate}</div>}
        </div>
      </div>

      {selected?.consumptionUnit === null ? (
        <>
          <Dropdown
            label="Unité de distance"
            options={units}
            value={form.distanceUnit || ""}
            onChange={val => handleChange("distanceUnit", val)}
          />
          {errors.distanceUnit && <div className="text-xs text-red-600">{errors.distanceUnit}</div>}

          <div>
            <label className="text-sm font-medium text-[#1D4E89] flex items-center gap-2">
              Distance parcourue <Tooltip text="Distance totale parcourue pendant la période sélectionnée." />
            </label>
            <input
              type="number"
              name="distanceValue"
              step="any"
              value={form.distanceValue}
              onChange={e => handleChange("distanceValue", e.target.value)}
              className="w-full border rounded p-2"
            />
            {errors.distanceValue && <div className="text-xs text-red-600">{errors.distanceValue}</div>}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {!selected?.isElectric && (
            <div>
              <label className="text-sm font-medium text-[#1D4E89] flex items-center gap-2">
                Consommation de carburant (L) <Tooltip text="Entrer la consommation totale en litres." />
              </label>
              <input
                type="number"
                step="any"
                name="fuelConsumption"
                value={form.fuelConsumption}
                onChange={e => handleChange("fuelConsumption", e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
          )}
          {(selected?.isElectric || selected?.isHybrid) && (
            <div>
              <label className="text-sm font-medium text-[#1D4E89] flex items-center gap-2">
                Consommation électrique (kWh) <Tooltip text="Entrer la consommation totale en kWh." />
              </label>
              <input
                type="number"
                step="any"
                name="electricityConsumption"
                value={form.electricityConsumption}
                onChange={e => handleChange("electricityConsumption", e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
          )}
          {errors.consumption && <div className="text-xs text-red-600">{errors.consumption}</div>}
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={submit}
          className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded-md text-sm"
        >
          Soumettre
        </button>
      </div>
    </div>
  );
}
