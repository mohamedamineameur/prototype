import { useState } from "react";
import { Trash2, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
const BASE = import.meta.env.BASE_URL;

const initialAccounts = [
  { id: 1, name: "Gicleur", language: "Français" },
  { id: 2, name: "RBC", language: "Anglais" },
];

export default function AccountManagement() {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("Français");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name) return;
    setAccounts((prev) => [
      ...prev,
      { id: Date.now(), name, language },
    ]);
    setName("");
    setLanguage("Français");
  };

  const handleDelete = (id) => {
    setAccounts((prev) => prev.filter((acc) => acc.id !== id));
  };

  return (
    <div className="p-4 sm:p-6 font-archivo bg-white space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-[#1D4E89]">Gestion des comptes</h1>
        <p className="text-sm text-gray-600">Ajoutez, consultez ou supprimez vos comptes.</p>
      </header>

      <form
        onSubmit={handleAdd}
        className="bg-[#F0F7FF] p-4 rounded-xl shadow flex flex-col sm:flex-row gap-4 items-start sm:items-end"
      >
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-[#1D4E89] mb-1">
            Nom du compte
          </label>
          <input
            type="text"
            className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
            placeholder="Nom du compte"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1D4E89] mb-1">Langue</label>
          <select
            className="rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>Français</option>
            <option>Anglais</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-[#00B2CA] text-white px-4 py-2 rounded-lg hover:bg-[#0098ad]"
        >
          Ajouter le compte
        </button>
      </form>

      {/* Version Mobile */}
      <div className="sm:hidden space-y-4">
        {accounts.map((acc) => (
          <div key={acc.id} className="bg-[#F0F7FF] p-4 rounded-xl shadow space-y-2">
            <div className="font-semibold text-[#1D4E89] text-lg">{acc.name}</div>
            <div className="text-sm text-gray-700">Langue : {acc.language}</div>
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => handleDelete(acc.id)}
                className="text-[#FF5C5C] hover:text-red-600 flex items-center gap-1 text-sm"
              >
                <Trash2 size={16} /> Supprimer
              </button>
              <NavLink to={`account-with-users`} className="text-[#1D4E89] hover:text-[#00B2CA]">
  <Settings size={18} />
</NavLink>

            </div>
          </div>
        ))}
      </div>

      {/* Version Desktop */}
      <div className="hidden sm:block bg-white shadow rounded-xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-[#1D4E89] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Nom</th>
              <th className="px-4 py-2">Langue</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {accounts.map((acc) => (
              <tr key={acc.id} className="hover:bg-[#F0F7FF]">
                <td className="px-4 py-2">{acc.name}</td>
                <td className="px-4 py-2 text-center">{acc.language}</td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  <button
                    onClick={() => handleDelete(acc.id)}
                    className="text-[#FF5C5C] hover:text-red-600"
                    title="Supprimer"
                  >
                    <Trash2 size={18} />
                  </button>
                  <NavLink to={`account-with-users`} className="text-[#1D4E89] hover:text-[#00B2CA]">
  <Settings size={18} />
</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
