import { useState } from "react";
import { Mail, Lock, User, Building, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const RegisterForm = () => {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    confirmPassword: "",
    entreprise: "",
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

  const handleRegister = (e) => {
    e.preventDefault();
    if (!Object.values(isValid).every(Boolean)) {
      alert("Veuillez remplir tous les critères de mot de passe.");
      return;
    }
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
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Section logo à gauche */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-white p-8 border-r md:border-r border-b md:border-b-0">
          <img src={`${BASE}symbole_couleur.png`} alt="Logo" className="w-32" />
        </div>

        {/* Section formulaire à droite */}
        <div className="p-8 space-y-6 w-full ">
        <div className="flex flex-col items-start">
  <h2 className="text-2xl font-bold text-[#1D4E89] text-left">Bienvenue!</h2>
  <p className="text-gray-500 text-sm text-left">
    Créez votre compte pour continuer:
  </p>
</div>


          <form onSubmit={handleRegister} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
              <User className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                className="w-full outline-none text-sm"
                value={form.nom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
              <User className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                className="w-full outline-none text-sm"
                value={form.prenom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
              <Mail className="text-gray-400 mr-2" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full outline-none text-sm"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
              <Building className="text-gray-400 mr-2" size={18} />
              <input
                type="text"
                name="entreprise"
                placeholder="Nom de l'entreprise"
                className="w-full outline-none text-sm"
                value={form.entreprise}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
              <Lock className="text-gray-400 mr-2" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Mot de passe"
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
                <div
                  className={
                    isValid.match
                      ? "text-green-600 flex items-center"
                      : "text-red-500 flex items-center"
                  }
                >
                  {isValid.match ? <CheckCircle size={16} className="mr-1" /> : <XCircle size={16} className="mr-1" />}
                  Les mots de passe {isValid.match ? "correspondent" : "ne correspondent pas"}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#1D4E89] hover:bg-[#0092a9] text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              S'inscrire
            </button>
          </form>

          <div className="text-center text-sm text-gray-500">
            Déjà inscrit ?{" "}
            <a href={`${BASE}login`} className="text-[#1D4E89] font-medium">
              Connexion
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
