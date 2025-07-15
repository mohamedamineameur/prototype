export default function BatimentFormStep3({ data, onChange, onNext, onBack }) {
    const handleChange = (e) =>
      onChange({ ...data, [e.target.name]: e.target.value });
  
    return (
      <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-bold text-[#1D4E89] mb-4">3. Eau</h2>
  
        <div className="space-y-3">
          <input
            type="number"
            name="conso_eau"
            placeholder="Conso annuelle (m³)"
            className="border p-3 rounded w-full text-sm"
            value={data.conso_eau || ""}
            onChange={handleChange}
          />
          <input
            type="number"
            name="facture_eau"
            placeholder="Montant facturé (€)"
            className="border p-3 rounded w-full text-sm"
            value={data.facture_eau || ""}
            onChange={handleChange}
          />
          <select
            name="eau_facturee"
            className="border p-3 rounded w-full text-sm"
            value={data.eau_facturee || ""}
            onChange={handleChange}
          >
            <option value="">Facturation directe ?</option>
            <option value="oui">Oui</option>
            <option value="non">Non</option>
          </select>
        </div>
  
        <div className="flex justify-between mt-6">
          <button
            className="bg-gray-200 text-sm px-4 py-2 rounded-md"
            onClick={onBack}
          >
            Retour
          </button>
          <button
            className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-4 py-2 rounded-md text-sm"
            onClick={onNext}
          >
            Suivant
          </button>
        </div>
      </div>
    );
  }
  