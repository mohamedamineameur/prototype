import { useState, useRef } from "react";

const BASE = import.meta.env.BASE_URL;

const OTPPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{1,6}$/.test(paste)) {
      const pasteArr = paste.split("");
      const newOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pasteArr[i] || "";
        if (inputsRef.current[i]) {
          inputsRef.current[i].value = pasteArr[i] || "";
        }
      }
      setOtp(newOtp);
      const nextEmpty = pasteArr.findIndex((v) => !v);
      if (nextEmpty !== -1) {
        inputsRef.current[nextEmpty]?.focus();
      } else {
        inputsRef.current[5]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = otp.join("");
    if (fullCode.length !== 6) {
      alert("Veuillez entrer le code complet.");
      return;
    }
    console.log("Code OTP entré :", fullCode);
    // logique de vérification ici
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1D4E89] font-['Archivo'] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">
        <div className="flex flex-col items-center">
          <img src={`${BASE}logo-white.png`} alt="Logo" className="w-24 mb-2" />
          <h2 className="text-2xl font-bold text-[#1D4E89] text-center">Vérification de sécurité</h2>
          <p className="text-gray-500 text-sm text-center">
            Entrez le code de vérification à 6 chiffres envoyé par email.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-2" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputsRef.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength="1"
                className="w-12 h-12 text-center text-xl border rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-[#00B2CA]"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                required
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-[#00B2CA] hover:bg-[#0092a9] text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Vérifier
          </button>

          <div className="text-center text-sm text-gray-500">
            Vous n'avez pas reçu de code ? <a href="#" className="text-[#1D4E89] font-medium hover:underline">Renvoyer</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPPage;
