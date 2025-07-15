export default function BatimentFormStep1({ data, onChange, onNext, onBack }) {
    const handleChange = (e) =>
      onChange({ ...data, [e.target.name]: e.target.value });
  
    return (
      <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow-sm">
        <h2 className="text-lg font-bold text-[#1D4E89] mb-4">1. Informations générales</h2>
  
        <div className="space-y-3">
          <input
            className="border p-3 rounded w-full text-sm"
            placeholder="Nom du bâtiment"
            name="nom"
            value={data.nom}
            onChange={handleChange}
          />
          <input
            className="border p-3 rounded w-full text-sm"
            placeholder="Adresse"
            name="adresse"
            value={data.adresse}
            onChange={handleChange}
          />
          <input
            className="border p-3 rounded w-full text-sm"
            placeholder="Ville"
            name="ville"
            value={data.ville}
            onChange={handleChange}
          />
          <input
            className="border p-3 rounded w-full text-sm"
            placeholder="Pays"
            name="pays"
            value={data.pays}
            onChange={handleChange}
          />
          <select
            name="propriete"
            className="border p-3 rounded w-full text-sm"
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
            Suivant
          </button>
        </div>
      </div>
    );
  }
  