import { useState } from "react";
import { Switch } from "@headlessui/react";
import { CheckCircle, XCircle, Mail, UserPlus } from "lucide-react";

const initialUsers = [
  { id: 1, email: "alice@example.com", status: "accepté", suspended: false },
  { id: 2, email: "bob@example.com", status: "en attente", suspended: false },
  { id: 3, email: "carol@example.com", status: "refusé", suspended: true },
];

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [email, setEmail] = useState("");

  const handleInvite = (e) => {
    e.preventDefault();
    if (!email) return;
    setUsers((prev) => [
      ...prev,
      { id: Date.now(), email, status: "en attente", suspended: false },
    ]);
    setEmail("");
  };

  const toggleSuspend = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, suspended: !user.suspended } : user
      )
    );
  };

  return (
    <div className="p-4 sm:p-6 font-archivo bg-white space-y-8">
      <header className="mb-4">
        
        <p className="text-sm text-gray-600">
          Invitez et gérez les accès de vos collaborateurs.
        </p>
      </header>

      <form
        onSubmit={handleInvite}
        className="bg-[#F0F7FF] p-4 rounded-xl shadow flex flex-col sm:flex-row gap-4 items-start sm:items-end"
      >
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium text-[#1D4E89] mb-1">
            Adresse e-mail
          </label>
          <input
            type="email"
            className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
            placeholder="nom@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-[#00B2CA] text-white px-4 py-2 rounded-lg hover:bg-[#0098ad] flex items-center gap-2"
        >
          <UserPlus size={16} />
          Envoyer une invitation
        </button>
      </form>

      {/* Mobile version (cards) */}
      <div className="sm:hidden space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-[#F0F7FF] p-4 rounded-xl shadow space-y-2"
          >
            <div className="text-[#1D4E89] font-semibold">{user.email}</div>
            <div className="flex items-center gap-2 text-sm">
              {user.status === "accepté" ? (
                <span className="flex items-center text-[#00B2CA] font-medium">
                  <CheckCircle size={16} className="mr-1" />
                  Accepté
                </span>
              ) : user.status === "refusé" ? (
                <span className="flex items-center text-[#FF5C5C] font-medium">
                  <XCircle size={16} className="mr-1" />
                  Refusé
                </span>
              ) : (
                <span className="flex items-center text-[#FFA500] font-medium">
                  <Mail size={16} className="mr-1" />
                  En attente
                </span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Suspendu :</span>
              <Switch
                checked={user.suspended}
                onChange={() => toggleSuspend(user.id)}
                className={`${
                  user.suspended ? "bg-[#FF5C5C]" : "bg-[#00B2CA]"
                } relative inline-flex h-6 w-11 items-center rounded-full transition`}
              >
                <span
                  className={`${
                    user.suspended ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                />
              </Switch>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop version (table) */}
      <div className="hidden sm:block bg-white shadow rounded-xl overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-[#1D4E89] text-white">
            <tr>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2">Statut</th>
              <th className="px-4 py-2">Suspendu</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-[#F0F7FF]">
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2 text-center">
                  {user.status === "accepté" ? (
                    <span className="inline-flex items-center text-[#00B2CA] font-medium">
                      <CheckCircle size={16} className="mr-1" />
                      Accepté
                    </span>
                  ) : user.status === "refusé" ? (
                    <span className="inline-flex items-center text-[#FF5C5C] font-medium">
                      <XCircle size={16} className="mr-1" />
                      Refusé
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-[#FFA500] font-medium">
                      <Mail size={16} className="mr-1" />
                      En attente
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 text-center">
                  <Switch
                    checked={user.suspended}
                    onChange={() => toggleSuspend(user.id)}
                    className={`${
                      user.suspended ? "bg-[#FF5C5C]" : "bg-[#00B2CA]"
                    } relative inline-flex h-6 w-11 items-center rounded-full transition`}
                  >
                    <span
                      className={`${
                        user.suspended ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform bg-white rounded-full transition`}
                    />
                  </Switch>
                </td>
                <td className="px-4 py-2 text-center text-gray-400 text-xs">—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
