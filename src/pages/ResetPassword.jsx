import { useState } from "react";
import { Mail } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    // logique de réinitialisation ici
    console.log({ email });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1D4E89] font-['Archivo'] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">
        <div className="flex flex-col items-center">
          <img src={`${BASE}logo-white.png`} alt="Logo" className="w-24 mb-2" />
          <h2 className="text-2xl font-bold text-[#1D4E89] text-center">Réinitialisation du mot de passe</h2>
          <p className="text-gray-500 text-sm text-center">
            Entrez votre adresse email pour recevoir un lien de réinitialisation.
          </p>
        </div>

        {submitted ? (
          <div className="text-center text-green-600 font-medium">
            Un lien de réinitialisation a été envoyé à votre adresse email.
          </div>
        ) : (
          <form onSubmit={handleReset} className="space-y-4">
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

            <button
              type="submit"
              className="w-full bg-[#00B2CA] hover:bg-[#0092a9] text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              Réinitialiser le mot de passe
            </button>
          </form>
        )}

        <div className="text-center text-sm text-gray-500">
          <a href={`${BASE}login`}className="text-[#1D4E89] font-medium hover:underline">
            Retour à la connexion
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
