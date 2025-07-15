// src/components/BatimentFormStep4.jsx
export default function BatimentFormStep4({ data, onChange, onNext, onBack }) {
    const handleChange = (e) =>
      onChange({ ...data, [e.target.name]: e.target.value });
  
    return (
      <div className="max-w-xl">
        <h2 className="text-xl font-bold text-[#1D4E89] mb-4">Utilisation de carburants</h2>
  
        <div className="grid grid-cols-1 gap-4">
          <input
            type="number"
            name="conso_gaz"
            placeholder="Gaz naturel (kWh)"
            className="border p-2 rounded"
            value={data.conso_gaz || ""}
            onChange={handleChange}
          />
          <input
            type="number"
            name="conso_fioul"
            placeholder="Fioul domestique (L)"
            className="border p-2 rounded"
            value={data.conso_fioul || ""}
            onChange={handleChange}
          />
          <select
            name="chauffage_type"
            className="border p-2 rounded"
            value={data.chauffage_type || ""}
            onChange={handleChange}
          >
            <option value="">Type de chauffage</option>
            <option value="gaz">Gaz</option>
            <option value="fioul">Fioul</option>
            <option value="electrique">Électrique</option>
            <option value="mixte">Mixte</option>
          </select>
        </div>
  
        <div className="flex justify-between mt-6">
          <button className="bg-gray-200 text-sm px-4 py-2 rounded-md" onClick={onBack}>
            Retour
          </button>
          <button className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-4 py-2 rounded-md text-sm" onClick={onNext}>
            Étape suivante
          </button>
        </div>
      </div>
    );
  }
  