import { useState } from "react";
import { Globe } from "lucide-react";

export default function ChangeLanguage() {
  const [language, setLanguage] = useState("fr");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Langue sélectionnée :", language);
    // ici tu pourrais appeler une API ou modifier le contexte global
  };

  return (
    <div className="p-4 sm:p-6 font-archivo bg-white space-y-8">
      <form
        onSubmit={handleSubmit}
        className="bg-[#F0F7FF] p-4 rounded-xl shadow space-y-4 max-w-xl mx-auto"
      >
        <label className="block text-sm font-medium text-[#1D4E89] mb-1">Langue</label>
        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm bg-white">
          <Globe className="text-gray-400 mr-2" size={18} />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full outline-none text-sm bg-transparent"
          >
            <option value="fr">Français</option>
            <option value="en">Anglais</option>
            <option value="es">Espagnol</option>
            <option value="de">Allemand</option>
            <option value="it">Italien</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-[#00B2CA] hover:bg-[#0098ad] text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Enregistrer la langue
        </button>
      </form>
    </div>
  );
}
