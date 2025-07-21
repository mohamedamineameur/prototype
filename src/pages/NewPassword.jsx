import { useState } from "react";
import { Lock, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const NewPassword = () => {
  const [form, setForm] = useState({
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
    match: form.password && form.password === form.confirmPassword,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(isValid).every(Boolean)) {
      alert("Veuillez remplir tous les critères de mot de passe.");
      return;
    }
    // logique de mise à jour du mot de passe ici
    console.log(form);
  };

  const Criterion = ({ label, isValid }) => (
    <div className={`flex items-center text-sm ${isValid ? "text-green-600" : "text-red-500"}`}>
      {isValid ? <CheckCircle size={16} className="mr-1" /> : <XCircle size={16} className="mr-1" />}
      {label}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1D4E89] font-['Archivo'] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">
        <div className="flex flex-col items-center">
          <img src={`${BASE}logo-white.png`} alt="Logo" className="w-24 mb-2" />
          <h2 className="text-2xl font-bold text-[#1D4E89] text-center">Définir un nouveau mot de passe</h2>
          <p className="text-gray-500 text-sm text-center">
            Créez un mot de passe sécurisé pour accéder à votre compte.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
            <Lock className="text-gray-400 mr-2" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Nouveau mot de passe"
              className="w-full outline-none text-sm"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="text-gray-400 ml-2"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Afficher le mot de passe"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
      {form.password && (
          <div className="space-y-1 pl-1">
            <Criterion label="Au moins 12 caractères" isValid={isValid.length} />
            <Criterion label="Une majuscule" isValid={isValid.upper} />
            <Criterion label="Une minuscule" isValid={isValid.lower} />
            <Criterion label="Un chiffre" isValid={isValid.number} />
            <Criterion label="Un caractère spécial" isValid={isValid.special} />
          </div>
        )}

          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
            <Lock className="text-gray-400 mr-2" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirmer le mot de passe"
              className="w-full outline-none text-sm"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="pl-1 text-sm">
            {form.confirmPassword && (
              <div className={isValid.match ? "text-green-600 flex items-center" : "text-red-500 flex items-center"}>
                {isValid.match ? <CheckCircle size={16} className="mr-1" /> : <XCircle size={16} className="mr-1" />}
                Les mots de passe {isValid.match ? "correspondent" : "ne correspondent pas"}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#00B2CA] hover:bg-[#0092a9] text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Réinitialiser le mot de passe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;