// src/components/BatimentFormStep2.jsx
export default function BatimentFormStep2({ data, onChange, onNext, onBack }) {
    const handleChange = (e) =>
      onChange({ ...data, [e.target.name]: e.target.value });
  
    return (
      <div className="max-w-xl">
        <h2 className="text-xl font-bold text-[#1D4E89] mb-4">Consommation d’électricité</h2>
  
        <div className="grid grid-cols-1 gap-4">
          <input
            type="number"
            name="conso_kwh"
            placeholder="Consommation annuelle (kWh)"
            className="border p-2 rounded"
            value={data.conso_kwh || ""}
            onChange={handleChange}
          />
          <input
            type="number"
            name="facture_elec"
            placeholder="Montant facturé (€)"
            className="border p-2 rounded"
            value={data.facture_elec || ""}
            onChange={handleChange}
          />
          <select
            name="est_facture"
            className="border p-2 rounded"
            value={data.est_facture || ""}
            onChange={handleChange}
          >
            <option value="">Le bâtiment est-il facturé directement ?</option>
            <option value="oui">Oui</option>
            <option value="non">Non (inclus dans le loyer)</option>
          </select>
          <select
            name="type_source"
            className="border p-2 rounded"
            value={data.type_source || ""}
            onChange={handleChange}
          >
            <option value="">Source principale</option>
            <option value="mixte">Mixte</option>
            <option value="renouvelable">100 % renouvelable</option>
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
            Étape suivante
          </button>
        </div>
      </div>
    );
  }
  