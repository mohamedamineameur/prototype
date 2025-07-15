// src/components/Stepper.jsx
export default function Stepper({ currentStep, totalSteps }) {
    const progress = (currentStep / totalSteps) * 100;
  
    return (
      <div className="w-full">
        <div className="text-sm text-[#1D4E89] font-semibold mb-1">
          Étape {currentStep} sur {totalSteps}
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#00B2CA] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  }
  