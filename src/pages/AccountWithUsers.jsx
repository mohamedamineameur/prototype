import { useState } from "react";
import { Trash2, UserPlus, Settings } from "lucide-react";
import { CheckCircle, XCircle } from "lucide-react";

const PasswordCriteria = ({ label, valid }) => (
  <div className={`flex items-center ${valid ? "text-green-600" : "text-red-500"}`}>
    {valid ? <CheckCircle size={16} className="mr-1" /> : <XCircle size={16} className="mr-1" />}
    {label}
  </div>
);


const initialUsers = [
  { id: 1, nom: "Doe", prenom: "John", email: "john.doe@example.com", test: false },
  { id: 2, nom: "Smith", prenom: "Jane", email: "jane.smith@example.com", test: true },
];

export default function AccountWithUsers() {
  const [accountName, setAccountName] = useState("Gicleur");
  const [language, setLanguage] = useState("Français");
  const [users, setUsers] = useState(initialUsers);
  const [modalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ nom: "", prenom: "", email: "", password: "", confirm: "", test: false });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.nom || !newUser.prenom || !newUser.email) return;
    setUsers(prev => [...prev, {
      id: Date.now(),
      nom: newUser.nom,
      prenom: newUser.prenom,
      email: newUser.email,
      test: newUser.test
    }]);
    setNewUser({ nom:"", prenom:"", email:"", password:"", confirm:"", test:false });
    setModalOpen(false);
  };

  const handleDelete = (id) => setUsers(prev => prev.filter(u => u.id !== id));
  const toggleTest = (id) => setUsers(prev => prev.map(u => u.id === id ? {...u, test: !u.test} : u));

  return (
    <div className="p-4 sm:p-6 font-archivo bg-white space-y-8">
      {/* Entête compte + langue */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
        <div>
          <label className="block text-sm font-medium text-[#1D4E89] mb-1">Compte</label>
          <input
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            className="rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1D4E89] mb-1">Langue</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
          >
            <option>Français</option>
            <option>Anglais</option>
          </select>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="ml-auto bg-[#00B2CA] text-white px-4 py-2 rounded-lg hover:bg-[#0098ad] flex items-center gap-2"
        >
          <UserPlus size={16} /> Ajouter un utilisateur
        </button>
      </div>

      {/* Liste mobile */}
      <div className="sm:hidden space-y-4">
        {users.map(u => (
          <div key={u.id} className="bg-[#F0F7FF] p-4 rounded-xl shadow space-y-2">
            <div className="font-semibold text-[#1D4E89] text-lg">{u.prenom} {u.nom}</div>
            <div className="text-sm text-gray-700">Email : {u.email}</div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Compte de test ?</span>
              <button
                onClick={() => toggleTest(u.id)}
                className={`px-2 py-1 rounded ${u.test ? "bg-[#00B2CA] text-white" : "bg-gray-200"}`}
              >
                {u.test ? "Oui" : "Non"}
              </button>
            </div>
            <div className="flex gap-4 mt-2">
              <button onClick={() => handleDelete(u.id)} className="text-[#FF5C5C] hover:text-red-600 flex items-center gap-1 text-sm">
                <Trash2 size={16} /> Supprimer
              </button>
              <button className="text-[#1D4E89] hover:text-[#00B2CA] flex items-center gap-1 text-sm">
                <Settings size={16} /> Basculer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Liste desktop */}
      <div className="hidden sm:block bg-white shadow rounded-xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-[#1D4E89] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Nom</th>
              <th className="px-4 py-2 text-left">Prénom</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Compte test</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map(u => (
              <tr key={u.id} className="hover:bg-[#F0F7FF]">
                <td className="px-4 py-2">{u.nom}</td>
                <td className="px-4 py-2">{u.prenom}</td>
                <td className="px-4 py-2 text-center">{u.email}</td>
                <td className="px-4 py-2 text-center">
                  <button onClick={() => toggleTest(u.id)} className={`${u.test ? "text-[#00B2CA]" : "text-gray-500"}`}>
                    {u.test ? "Oui" : "Non"}
                  </button>
                </td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  <button onClick={() => handleDelete(u.id)} className="text-[#FF5C5C] hover:text-red-600" title="Supprimer">
                    <Trash2 size={18} />
                  </button>
                  <button className="text-[#1D4E89] hover:text-[#00B2CA]" title="Basculer vers le user">
                    <Settings size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal ajout utilisateur */}
      {modalOpen && (
  <div className="fixed inset-0 bg-[#1D4E89]/90 flex items-center justify-center z-50 px-4 py-8">
    <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">Ajouter un utilisateur</h2>
      <form onSubmit={handleAddUser} className="space-y-4">
        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
          <UserPlus className="text-gray-400 mr-2" size={18} />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            className="w-full outline-none text-sm"
            value={newUser.prenom}
            onChange={(e) => setNewUser({ ...newUser, prenom: e.target.value })}
            required
          />
        </div>

        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
          <UserPlus className="text-gray-400 mr-2" size={18} />
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            className="w-full outline-none text-sm"
            value={newUser.nom}
            onChange={(e) => setNewUser({ ...newUser, nom: e.target.value })}
            required
          />
        </div>

        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
          <Settings className="text-gray-400 mr-2" size={18} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full outline-none text-sm"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
        </div>

        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
          <Settings className="text-gray-400 mr-2" size={18} />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            className="w-full outline-none text-sm"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            required
          />
        </div>

        {newUser.password.length > 0 && (
  <div className="space-y-1 pl-1 text-sm">
    <PasswordCriteria label="Au moins 12 caractères" valid={newUser.password.length >= 12} />
    <PasswordCriteria label="Une majuscule" valid={/[A-Z]/.test(newUser.password)} />
    <PasswordCriteria label="Une minuscule" valid={/[a-z]/.test(newUser.password)} />
    <PasswordCriteria label="Un chiffre" valid={/[0-9]/.test(newUser.password)} />
    <PasswordCriteria label="Un caractère spécial" valid={/[^A-Za-z0-9]/.test(newUser.password)} />
  </div>
)}


        <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
          <Settings className="text-gray-400 mr-2" size={18} />
          <input
            type="password"
            name="confirm"
            placeholder="Confirmer le mot de passe"
            className="w-full outline-none text-sm"
            value={newUser.confirm}
            onChange={(e) => setNewUser({ ...newUser, confirm: e.target.value })}
            required
          />
        </div>

        {newUser.confirm && (
          <div className="pl-1 text-sm">
            <PasswordCriteria
              label="Les mots de passe correspondent"
              valid={newUser.password === newUser.confirm}
            />
          </div>
        )}

        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-700">Compte test ?</label>
          <input
            type="checkbox"
            checked={newUser.test}
            onChange={(e) => setNewUser({ ...newUser, test: e.target.checked })}
            className="h-4 w-4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#00B2CA] text-white py-2 rounded-lg hover:bg-[#0098ad]"
          disabled={
            !(
              newUser.nom &&
              newUser.prenom &&
              newUser.email &&
              newUser.password === newUser.confirm &&
              newUser.password.length >= 12 &&
              /[A-Z]/.test(newUser.password) &&
              /[a-z]/.test(newUser.password) &&
              /[0-9]/.test(newUser.password) &&
              /[^A-Za-z0-9]/.test(newUser.password)
            )
          }
        >
          Ajouter
        </button>
      </form>
      <button onClick={() => setModalOpen(false)} className="mt-2 text-sm text-gray-500">
        Annuler
      </button>
    </div>
  </div>
)}

    </div>
  );
}
