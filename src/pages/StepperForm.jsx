import { useState, useEffect } from "react";
import { CheckCircle, Circle } from "lucide-react";

import CompanyForm from "./CompanyForm";
import VehicleForm from "./VehicleForm";
import VehicleConsumptionForm from "./VehicleConsumptionForm";
import BuildingForm from "./BuildingForm";
import BuildingFuelConsumptionForm from "./BuildingFuelConsumptionForm";
import BuildingElectricityConsumptionForm from "./BuildingElectricityConsumptionForm";
import BuildingWaterConsumptionForm from "./BuildingWaterConsumptionForm";
import BuildingWasteForm from "./BuildingWasteForm";

const steps = [
  { id: "company", label: "Entreprise", component: CompanyForm },
  { id: "vehicle", label: "Véhicules", component: VehicleForm },
  { id: "vehicle-consumption", label: "Conso Véhicule", component: VehicleConsumptionForm },
  { id: "building", label: "Bâtiments", component: BuildingForm },
  { id: "building-fuel", label: "Conso Carburant", component: BuildingFuelConsumptionForm },
  { id: "building-electricity", label: "Conso Électricité", component: BuildingElectricityConsumptionForm },
  { id: "building-water", label: "Conso Eau", component: BuildingWaterConsumptionForm },
  { id: "building-waste", label: "Déchets", component: BuildingWasteForm },
];

export default function StepperForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const CurrentComponent = steps[currentStep].component;
  const progress = ((currentStep + 1) / steps.length) * 100;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 font-['Archivo'] space-y-6">
      {/* Barre de progression */}
      <div className="relative w-full h-8 mt-6">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full -translate-y-1/2 z-0">
          <div
            className="h-full bg-[#00B2CA] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {steps.map((step, index) => {
          const left = (index / (steps.length - 1)) * 100;
          return (
            <div
              key={step.id}
              className="absolute w-6 h-6 rounded-full flex items-center justify-center bg-white border border-[#1D4E89] z-10"
              style={{ left: `${left}%`, top: "50%", transform: "translate(-50%, -50%)" }}
            >
              {index < currentStep ? (
                <CheckCircle size={14} className="text-[#00B2CA]" />
              ) : index === currentStep ? (
                <Circle size={14} className="text-[#1D4E89]" />
              ) : (
                <Circle size={14} className="text-gray-300" />
              )}
            </div>
          );
        })}
      </div>

      {/* Titre d'étape */}
    

      {/* Contenu du formulaire */}
        <CurrentComponent />
      

      {/* Navigation */}
      <div className="flex justify-between mt-6 gap-2">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          disabled={currentStep === 0}
          className="flex-1 py-2 rounded text-sm font-medium border border-[#1D4E89] text-[#1D4E89] hover:bg-[#1D4E89]/10 disabled:opacity-40"
        >
          ⬅ Précédent
        </button>

        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
            className="flex-1 py-2 rounded text-sm font-medium bg-[#00B2CA] text-white hover:bg-[#1D4E89] disabled:opacity-40"
          >
            Suivant ➡
          </button>
        ) : (
          <button
            onClick={() => alert("Formulaire terminé 🎉")}
            className="flex-1 py-2 rounded text-sm font-medium bg-[#00B2CA] text-white hover:bg-[#1D4E89]"
          >
            Terminer ✅
          </button>
        )}
      </div>
    </div>
  );
}
