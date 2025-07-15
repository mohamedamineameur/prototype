// src/components/BatimentFormStep5.jsx
export default function BatimentFormStep5({ data, onChange, onSubmit, onBack }) {
    const handleChange = (e) =>
      onChange({ ...data, [e.target.name]: e.target.value });
  
    return (
      <div className="max-w-xl">
        <h2 className="text-xl font-bold text-[#1D4E89] mb-4">Déchets générés</h2>
  
        <div className="grid grid-cols-1 gap-4">
          <input
            type="number"
            name="dechets_total"
            placeholder="Quantité annuelle (kg)"
            className="border p-2 rounded"
            value={data.dechets_total || ""}
            onChange={handleChange}
          />
          <select
            name="tri_selectif"
            className="border p-2 rounded"
            value={data.tri_selectif || ""}
            onChange={handleChange}
          >
            <option value="">Tri sélectif en place ?</option>
            <option value="oui">Oui</option>
            <option value="non">Non</option>
          </select>
        </div>
  
        <div className="flex justify-between mt-6">
          <button className="bg-gray-200 text-sm px-4 py-2 rounded-md" onClick={onBack}>
            Retour
          </button>
          <button className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-4 py-2 rounded-md text-sm" onClick={onSubmit}>
            Valider
          </button>
        </div>
      </div>
    );
  }
  