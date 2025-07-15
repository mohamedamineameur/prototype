// src/pages/Batiments.jsx
import { useState } from "react";
import Stepper from "../components/StepperMobile";
import BatimentFormStep1 from "../components/BatimentFormStep1Mobile";
import BatimentFormStep2 from "../components/BatimentFormStep2Mobile";
import BatimentFormStep3 from "../components/BatimentFormStep3Mobile";
import BatimentFormStep4 from "../components/BatimentFormStep4Mobile";
import BatimentFormStep5 from "../components/BatimentFormStep5Mobile";

export default function Batiments() {
  const [step, setStep] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    adresse: "",
    ville: "",
    pays: "",
    propriete: "",
  });

  const [batiments, setBatiments] = useState([
    {
      nom: "Siège Social",
      adresse: "10 Rue des Énergies",
      ville: "Lyon",
      pays: "France",
      propriete: "Propre",
      surface: 1200,
    },
    {
      nom: "Centre logistique",
      adresse: "ZAC du Canal",
      ville: "Lille",
      pays: "France",
      propriete: "Loué",
      surface: 2500,
    },
  ]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    setBatiments((prev) => [...prev, formData]);
    setFormData({
      nom: "",
      adresse: "",
      ville: "",
      pays: "",
      propriete: "",
    });
    setStep(1);
    setShowForm(false);
  };

  return (
    <main className="p-4 font-archivo bg-white min-h-screen">
      {!showForm ? (
        <div>
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-[#1D4E89] mb-1">Bâtiments</h1>
            <p className="text-sm text-gray-600">
              Liste de vos bâtiments enregistrés.
            </p>
          </header>

          <button
            onClick={() => setShowForm(true)}
            className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white w-full py-2 rounded-md text-sm font-medium mb-6"
          >
            + Ajouter un bâtiment
          </button>

          <div className="space-y-4">
            {batiments.length > 0 ? (
              batiments.map((b, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 shadow-sm bg-gray-50"
                >
                  <div className="font-semibold text-[#1D4E89]">{b.nom}</div>
                  <div className="text-sm text-gray-600">
                    {b.adresse}, {b.ville} ({b.pays})
                  </div>
                  <div className="text-sm text-gray-500">
                    {b.propriete} • {b.surface} m²
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 text-sm py-10">
                Aucun bâtiment enregistré.
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <Stepper currentStep={step} totalSteps={5} />

          <div className="mt-6">
            {step === 1 && (
              <BatimentFormStep1
                data={formData}
                onChange={setFormData}
                onNext={handleNext}
                onBack={() => setShowForm(false)}
              />
            )}
            {step === 2 && (
              <BatimentFormStep2
                data={formData}
                onChange={setFormData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 3 && (
              <BatimentFormStep3
                data={formData}
                onChange={setFormData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 4 && (
              <BatimentFormStep4
                data={formData}
                onChange={setFormData}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
            {step === 5 && (
              <BatimentFormStep5
                data={formData}
                onChange={setFormData}
                onSubmit={handleSubmit}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
}
