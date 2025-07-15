import { useState } from "react";
import Stepper from "../components/Stepper";
import BatimentFormStep1 from "../components/BatimentFormStep1";
import BatimentFormStep2 from "../components/BatimentFormStep2";
import BatimentFormStep3 from "../components/BatimentFormStep3";
import BatimentFormStep4 from "../components/BatimentFormStep4";
import BatimentFormStep5 from "../components/BatimentFormStep5";

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
      adresse: "10 Rue des Énergies, Lyon",
      pays: "France",
      propriete: "Propre",
      surface: 1200,
    },
    {
      nom: "Centre logistique Nord",
      adresse: "ZAC du Canal, Lille",
      pays: "France",
      propriete: "Loué",
      surface: 2500,
    },
    {
      nom: "Bureau Montréal",
      adresse: "5150 Saint-Laurent, Montréal",
      pays: "Canada",
      propriete: "Propre",
      surface: 900,
    },
  ]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Données finales :", formData);
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
    <main className="flex-1 p-8 bg-white font-archivo">
      {!showForm ? (
        <div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#1D4E89] mb-1">Bâtiments</h1>
              <p className="text-gray-600">Gérez les bâtiments de votre organisation.</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-4 py-2 rounded-md text-sm"
            >
              + Ajouter un bâtiment
            </button>
          </div>

          {batiments.length > 0 ? (
            <div className="overflow-x-auto border rounded-xl shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-[#F0F4F8] text-[#1D4E89]">
                  <tr>
                    <th className="text-left p-4">Nom</th>
                    <th className="text-left p-4">Adresse</th>
                    <th className="text-left p-4">Pays</th>
                    <th className="text-left p-4">Propriété</th>
                    <th className="text-left p-4">Surface (m²)</th>
                  </tr>
                </thead>
                <tbody>
                  {batiments.map((b, i) => (
                    <tr key={i} className="border-t hover:bg-gray-50">
                      <td className="p-4">{b.nom}</td>
                      <td className="p-4">{b.adresse}</td>
                      <td className="p-4">{b.pays}</td>
                      <td className="p-4">{b.propriete}</td>
                      <td className="p-4">{b.surface || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="border rounded-xl p-4 shadow-sm text-sm text-gray-500 text-center">
              Aucun bâtiment enregistré.
            </div>
          )}
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
