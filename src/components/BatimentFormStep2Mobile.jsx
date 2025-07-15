export default function BatimentFormStep2({ data, onChange, onNext, onBack }) {
    const handleChange = (e) =>
      onChange({ ...data, [e.target.name]: e.target.value });
  
    return (
      <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-bold text-[#1D4E89] mb-4">2. Électricité</h2>
  
        <div className="space-y-3">
          <input
            type="number"
            name="conso_kwh"
            placeholder="Conso annuelle (kWh)"
            className="border p-3 rounded w-full text-sm"
            value={data.conso_kwh || ""}
            onChange={handleChange}
          />
          <input
            type="number"
            name="facture_elec"
            placeholder="Montant facturé (€)"
            className="border p-3 rounded w-full text-sm"
            value={data.facture_elec || ""}
            onChange={handleChange}
          />
          <select
            name="est_facture"
            className="border p-3 rounded w-full text-sm"
            value={data.est_facture || ""}
            onChange={handleChange}
          >
            <option value="">Facturé directement ?</option>
            <option value="oui">Oui</option>
            <option value="non">Non (loyer)</option>
          </select>
          <select
            name="type_source"
            className="border p-3 rounded w-full text-sm"
            value={data.type_source || ""}
            onChange={handleChange}
          >
            <option value="">Source principale</option>
            <option value="mixte">Mixte</option>
            <option value="renouvelable">100% renouvelable</option>
            <option value="classique">Réseau classique</option>
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
  