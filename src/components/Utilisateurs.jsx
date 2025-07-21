import { useState } from "react";
import { Mail } from "lucide-react";

export default function Utilisateurs() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([
    { email: "marie.durand@exemple.com", accepted: true, active: true },
    { email: "paul.lefebvre@exemple.com", accepted: false, active: false },
    { email: "alice.moreau@exemple.com", accepted: true, active: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setUsers((prev) => [...prev, { email, accepted: false, active: false }]);
      setEmail("");
      setShowForm(false);
    }
  };

  const toggleActive = (index) => {
    setUsers((prev) =>
      prev.map((user, i) =>
        i === index ? { ...user, active: !user.active } : user
      )
    );
  };

  const getToggleColor = (user) => {
    if (!user.accepted) return "bg-red-300";
    if (user.active) return "bg-[#00B2CA]";
    return "bg-gray-300";
  };

  return (
    <main className="flex-1 p-4 sm:p-8 bg-white font-archivo">
      {!showForm ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#1D4E89] mb-1">Utilisateurs</h1>
              <p className="text-gray-600">Gérez les accès des membres de votre organisation.</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-4 py-2 rounded-md text-sm"
            >
              + Inviter un utilisateur
            </button>
          </div>

          {/* Tableau desktop */}
          <div className="hidden sm:block overflow-x-auto border rounded-xl shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-[#F0F4F8] text-[#1D4E89]">
                <tr>
                  <th className="text-left p-4">Email</th>
                  <th className="text-left p-4">Invitation acceptée</th>
                  <th className="text-left p-4">Statut</th>
                  <th className="text-left p-4">Actif</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i} className="border-t hover:bg-gray-50">
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.accepted ? "Oui" : "Non"}</td>
                    <td className="p-4">
                      {user.accepted ? (user.active ? "Actif" : "Inactif") : "En attente"}
                    </td>
                    <td className="p-4">
                      <label className="inline-flex items-center cursor-pointer">
                        <div
                          className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${getToggleColor(user)} ${!user.accepted ? "cursor-not-allowed" : ""}`}
                          onClick={() => user.accepted && toggleActive(i)}
                        >
                          <div
                            className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${
                              user.active ? "translate-x-5" : "translate-x-0"
                            }`}
                          />
                        </div>
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cartes mobile */}
          <div className="sm:hidden space-y-4">
            {users.map((user, i) => (
              <div key={i} className="border rounded-xl p-4 shadow-sm">
                <div className="mb-2 text-sm"><strong>Email :</strong> {user.email}</div>
                <div className="mb-2 text-sm">
                  <strong>Invitation :</strong> {user.accepted ? "Oui" : "Non"}
                </div>
                <div className="mb-2 text-sm">
                  <strong>Statut :</strong> {user.accepted ? (user.active ? "Actif" : "Inactif") : "En attente"}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-medium">Actif :</span>
                  <label className="inline-flex items-center cursor-pointer">
                    <div
                      className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-300 ${getToggleColor(user)} ${!user.accepted ? "cursor-not-allowed" : ""}`}
                      onClick={() => user.accepted && toggleActive(i)}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${
                          user.active ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-xl">
          <h2 className="text-xl font-bold text-[#1D4E89] mb-4">Inviter un nouvel utilisateur</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
              <Mail className="text-gray-400 mr-2" size={18} />
              <input
                type="email"
                placeholder="Adresse email"
                className="w-full outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="text-[#1D4E89] text-sm underline"
                onClick={() => setShowForm(false)}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-4 py-2 rounded-md text-sm"
              >
                Envoyer l'invitation
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}
