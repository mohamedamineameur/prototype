import {
    Users,
    ShieldCheck,
    Landmark,
    Baby,
    Plane,
    Info,
  } from "lucide-react";
  
  const RatioLine = ({ label, value, total }) => {
    const percent = total > 0 ? Math.round((value / total) * 100) : 0;
    return (
      <div className="bg-white p-4 rounded-xl shadow-sm space-y-1 border border-gray-100">
        <div className="flex justify-between text-sm font-medium text-[#1D4E89]">
          <span>{label}</span>
          <span className="text-gray-600">{value} / {total}</span>
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#00B2CA] transition-all duration-300"
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    );
  };
  
  const SocialWorkingConditionsSummary = () => {
    const data = {
      totalEmployees: 150,
      numberOfEmployeesWithPermanentContractAtTheEndOfThePeriod: 120,
      numberOfEmployeesCoveredByGroupInsurance: 115,
      numberOfEmployeesCoveredByRetirementPlan: 100,
      numberOfEmployeesCoveredByParentalLeave: 35,
      numberOfEmployeesCoveredByVacationLeave: 96,
      facultativeAdditionalInformation:
        "Un nouveau programme de retraite sera mis en place l’année prochaine pour améliorer la couverture des employés.",
    };
  
    return (
      <div className="max-w-5xl mx-auto p-4 space-y-8 font-['Archivo']">
        <h2 className="text-3xl font-bold text-[#1D4E89]">🏢 Résumé - Conditions de travail</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RatioLine
            label="Contrats permanents"
            value={data.numberOfEmployeesWithPermanentContractAtTheEndOfThePeriod}
            total={data.totalEmployees}
          />
          <RatioLine
            label="Assurance collective"
            value={data.numberOfEmployeesCoveredByGroupInsurance}
            total={data.totalEmployees}
          />
          <RatioLine
            label="Régime de retraite"
            value={data.numberOfEmployeesCoveredByRetirementPlan}
            total={data.totalEmployees}
          />
          <RatioLine
            label="Congé parental"
            value={data.numberOfEmployeesCoveredByParentalLeave}
            total={data.totalEmployees}
          />
          <RatioLine
            label="Congé vacances"
            value={data.numberOfEmployeesCoveredByVacationLeave}
            total={data.totalEmployees}
          />
        </div>
  
        {data.facultativeAdditionalInformation && (
          <div className="bg-white p-6 rounded-xl border shadow-sm space-y-2 text-sm text-gray-700">
            <h3 className="text-lg font-semibold text-[#1D4E89] flex items-center gap-2">
              <Info size={16} /> Informations supplémentaires
            </h3>
            <p>{data.facultativeAdditionalInformation}</p>
          </div>
        )}
  
        <p className="text-xs text-gray-500">
          Chaque barre indique la proportion d’employés couverts sur le total (150 employés).
        </p>
      </div>
    );
  };
  
  export default SocialWorkingConditionsSummary;
  