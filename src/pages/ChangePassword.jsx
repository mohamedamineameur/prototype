import { useState } from "react";
import { Lock, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

export default function ChangePassword() {
  const [form, setForm] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValid = {
    length: form.password.length >= 12,
    upper: /[A-Z]/.test(form.password),
    lower: /[a-z]/.test(form.password),
    number: /[0-9]/.test(form.password),
    special: /[^A-Za-z0-9]/.test(form.password),
    match: form.password === form.confirmPassword,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(isValid).every(Boolean)) {
      alert("Veuillez remplir tous les critères.");
      return;
    }
    console.log(form);
  };

  const Criterion = ({ label, isValid }) => (
    <div className={`flex items-center text-sm ${isValid ? "text-[#00B2CA]" : "text-red-500"}`}>
      {isValid ? <CheckCircle size={16} className="mr-1" /> : <XCircle size={16} className="mr-1" />}
      {label}
    </div>
  );

  return (
    <div className="p-4 sm:p-6 font-archivo bg-white  space-y-8">
           <form
        onSubmit={handleSubmit}
        className="bg-[#F0F7FF] p-4 rounded-xl shadow space-y-4 max-w-xl mx-auto"
      >
        <div>
          <label className="block text-sm font-medium text-[#1D4E89] mb-1">Mot de passe actuel</label>
          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm bg-white">
            <Lock className="text-gray-400 mr-2" size={18} />
            <input
              type="password"
              name="currentPassword"
              className="w-full outline-none text-sm"
              placeholder="••••••••"
              value={form.currentPassword}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1D4E89] mb-1">Nouveau mot de passe</label>
          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm bg-white">
            <Lock className="text-gray-400 mr-2" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full outline-none text-sm"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="text-gray-400 ml-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {form.password && (
            <div className="mt-2 space-y-1 pl-1">
              <Criterion label="Au moins 12 caractères" isValid={isValid.length} />
              <Criterion label="Une majuscule" isValid={isValid.upper} />
              <Criterion label="Une minuscule" isValid={isValid.lower} />
              <Criterion label="Un chiffre" isValid={isValid.number} />
              <Criterion label="Un caractère spécial" isValid={isValid.special} />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#1D4E89] mb-1">Confirmation</label>
          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm bg-white">
            <Lock className="text-gray-400 mr-2" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              className="w-full outline-none text-sm"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {form.confirmPassword && (
            <div className="mt-2 pl-1 text-sm flex items-center">
              {isValid.match ? (
                <span className="text-[#00B2CA] flex items-center">
                  <CheckCircle size={16} className="mr-1" />
                  Les mots de passe correspondent
                </span>
              ) : (
                <span className="text-red-500 flex items-center">
                  <XCircle size={16} className="mr-1" />
                  Les mots de passe ne correspondent pas
                </span>
              )}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#00B2CA] hover:bg-[#0098ad] text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          Modifier le mot de passe
        </button>
      </form>
    </div>
  );
}
