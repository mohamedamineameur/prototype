import { useState } from "react";

const Parametres = () => {
  const [user, setUser] = useState({
    nom: "Sébastien Dubois",
    email: "sebastien@example.com",
    notifEmail: true,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({ ...user, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Paramètres enregistrés:", user);
  };

  return (
    <main className="p-4 sm:p-6 font-['Archivo'] bg-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1D4E89] mb-2">
          Paramètres du compte
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Gérer vos informations personnelles et préférences.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-xl shadow space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-[#1D4E89] mb-1">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              value={user.nom}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1D4E89] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="notifEmail"
              checked={user.notifEmail}
              onChange={handleChange}
              className="accent-[#00B2CA] w-4 h-4"
            />
            <label className="text-sm text-[#1D4E89]">
              Recevoir les notifications par email
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1D4E89] mb-1">
              Thème
            </label>
            <select
              name="theme"
              value={user.theme}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
            >
              <option value="light">Clair</option>
              <option value="dark">Sombre</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#00B2CA] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#0092a8] transition"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </main>
  );
};

export default Parametres;