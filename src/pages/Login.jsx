import { useState } from "react";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // logique d'authentification ici
    window.location.href = `${BASE}`; // redirection vers le tableau de bord
  };

  return (
<div className="bg-[#1D4E89] font-['Archivo'] px-4 flex items-center justify-center overflow-y-auto py-8 pt-[15rem] md:pt-8 h-[100dvh]">
<div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Section logo à gauche */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-white p-8 border-r md:border-r border-b md:border-b-0">
            <img src={`${BASE}symbole_couleur.png`} alt="Logo" className="w-32" />
          
        </div>

        {/* Section formulaire à droite */}
        <div className="p-8 space-y-6  w-full">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#1D4E89] text-center">Ravi de vous retrouvez!</h2>
            <p className="text-gray-500 text-sm text-center">Connectez-vous à un compte existant pour continuer:</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
              <Mail className="text-gray-400 mr-2" size={18} />
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm">
                <Lock className="text-gray-400 mr-2" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mot de passe"
                  className="w-full outline-none text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <div className="text-right mt-1">
                <a href={`${BASE}reset-password`} className="text-sm text-[#00B2CA] hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1D4E89] hover:bg-[#0092a9] text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Se connecter
            </button>
          </form>

          <div className="text-center text-sm text-gray-500">
            Vous n'avez pas de compte ?{" "}
            <a href={`${BASE}register`} className="text-[#1D4E89] font-medium">
              Inscription
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
