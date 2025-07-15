export default function BatimentFormStep5({ data, onChange, onSubmit, onBack }) {
    const handleChange = (e) =>
      onChange({ ...data, [e.target.name]: e.target.value });
  
    return (
      <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-bold text-[#1D4E89] mb-4">5. Déchets générés</h2>
  
        <div className="space-y-3">
          <input
            type="number"
            name="dechets_total"
            placeholder="Quantité annuelle (kg)"
            className="border p-3 rounded w-full text-sm"
            value={data.dechets_total || ""}
            onChange={handleChange}
          />
          <select
            name="tri_selectif"
            className="border p-3 rounded w-full text-sm"
            value={data.tri_selectif || ""}
            onChange={handleChange}
          >
            <option value="">Tri sélectif en place ?</option>
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
            onClick={onSubmit}
          >
            Valider
          </button>
        </div>
      </div>
    );
  }
  