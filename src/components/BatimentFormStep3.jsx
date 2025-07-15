// src/components/BatimentFormStep3.jsx
export default function BatimentFormStep3({ data, onChange, onNext, onBack }) {
    const handleChange = (e) =>
      onChange({ ...data, [e.target.name]: e.target.value });
  
    return (
      <div className="max-w-xl">
        <h2 className="text-xl font-bold text-[#1D4E89] mb-4">Consommation d’eau</h2>
  
        <div className="grid grid-cols-1 gap-4">
          <input
            type="number"
            name="conso_eau"
            placeholder="Consommation annuelle (m³)"
            className="border p-2 rounded"
            value={data.conso_eau || ""}
            onChange={handleChange}
          />
          <input
            type="number"
            name="facture_eau"
            placeholder="Montant facturé (€)"
            className="border p-2 rounded"
            value={data.facture_eau || ""}
            onChange={handleChange}
          />
          <select
            name="eau_facturee"
            className="border p-2 rounded"
            value={data.eau_facturee || ""}
            onChange={handleChange}
          >
            <option value="">Facturation directe ?</option>
            <option value="oui">Oui</option>
            <option value="non">Non</option>
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
  