// src/components/BatimentFormStep1.jsx
export default function BatimentFormStep1({ data, onChange, onNext, onBack }) {
    const handleChange = (e) =>
      onChange({ ...data, [e.target.name]: e.target.value });
  
    return (
      <div className="max-w-xl">
        <h2 className="text-xl font-bold text-[#1D4E89] mb-4">Informations générales</h2>
  
        <div className="grid grid-cols-1 gap-4">
          <input
            className="border p-2 rounded"
            placeholder="Nom du bâtiment"
            name="nom"
            value={data.nom}
            onChange={handleChange}
          />
          <input
            className="border p-2 rounded"
            placeholder="Adresse"
            name="adresse"
            value={data.adresse}
            onChange={handleChange}
          />
          <input
            className="border p-2 rounded"
            placeholder="Ville"
            name="ville"
            value={data.ville}
            onChange={handleChange}
          />
          <input
            className="border p-2 rounded"
            placeholder="Pays"
            name="pays"
            value={data.pays}
            onChange={handleChange}
          />
          <select
            name="propriete"
            className="border p-2 rounded"
            value={data.propriete}
            onChange={handleChange}
          >
            <option value="">Type de propriété</option>
            <option value="Propre">Propre</option>
            <option value="Loué">Loué</option>
          </select>
        </div>
  
        <div className="flex justify-between mt-6">
          <button
            className="text-[#1D4E89] text-sm underline"
            onClick={onBack}
          >
            Annuler
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
  