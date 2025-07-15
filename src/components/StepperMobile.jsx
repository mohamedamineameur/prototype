export default function Stepper({ currentStep, totalSteps }) {
    const progress = (currentStep / totalSteps) * 100;
  
    return (
      <div className="w-full mb-4 px-2 sm:px-0">
        <div className="text-xs sm:text-sm text-[#1D4E89] font-semibold mb-1 text-center sm:text-left">
          Étape {currentStep} sur {totalSteps}
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#00B2CA] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  }
  