import { CheckCircle, XCircle, LoaderCircle } from "lucide-react";

const GovernanceSummary = () => {
  const data = {
    codeOfConductOrEthics: "Oui",
    percentageOfEmployeesSignedCode: 85,
    supplierCodeOrResponsiblePolicy: "En cours",
    fraudPreventionPolicy: "Non",
    assessedForcedLaborRisks: "Oui",

    codeOfConductOrEthicsText: "Code couvrant l’intégrité, non-discrimination et confidentialité.",
    percentageOfEmployeesSignedCodeText: "Signé électroniquement à l’intégration.",
    supplierCodeOrResponsiblePolicyText: "Charte en validation.",
    fraudPreventionPolicyText: "Aucune politique formelle encore.",
    assessedForcedLaborRisksText: "Évaluation annuelle via questionnaires fournisseurs.",
  };

  const Status = ({ value }) => {
    const base = "flex items-center gap-2 text-sm px-3 py-1 rounded-full font-medium w-fit";
    if (value === "Oui")
      return <span className={`${base} bg-green-100 text-green-800`}><CheckCircle size={16} /> Oui</span>;
    if (value === "Non")
      return <span className={`${base} bg-red-100 text-red-800`}><XCircle size={16} /> Non</span>;
    return <span className={`${base} bg-yellow-100 text-yellow-800`}><LoaderCircle size={16} /> En cours</span>;
  };

  const Bloc = ({ label, status, details }) => (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2 border border-gray-100">
      <h4 className="text-[#1D4E89] font-semibold text-sm">{label}</h4>
      <Status value={status} />
      <p className="text-xs text-gray-600">{details}</p>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6 font-['Archivo']">
      <h2 className="text-3xl font-bold text-[#1D4E89]">🔍 Résumé - Éthique et Gouvernance</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Bloc
          label="Code de conduite ou d’éthique"
          status={data.codeOfConductOrEthics}
          details={data.codeOfConductOrEthicsText}
        />
        <Bloc
          label="Code fournisseur ou achat responsable"
          status={data.supplierCodeOrResponsiblePolicy}
          details={data.supplierCodeOrResponsiblePolicyText}
        />
        <Bloc
          label="Prévention de la fraude ou corruption"
          status={data.fraudPreventionPolicy}
          details={data.fraudPreventionPolicyText}
        />
        <Bloc
          label="Évaluation du travail forcé"
          status={data.assessedForcedLaborRisks}
          details={data.assessedForcedLaborRisksText}
        />
        <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-2 border border-gray-100 col-span-1 sm:col-span-2 lg:col-span-1">
          <h4 className="text-[#1D4E89] font-semibold text-sm">Pourcentage d’employés ayant signé le code</h4>
          <div className="text-3xl font-bold text-[#1D4E89]">{data.percentageOfEmployeesSignedCode}%</div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#00B2CA] transition-all"
              style={{ width: `${data.percentageOfEmployeesSignedCode}%` }}
            />
          </div>
          <p className="text-xs text-gray-600">{data.percentageOfEmployeesSignedCodeText}</p>
        </div>
      </div>
    </div>
  );
};

export default GovernanceSummary;
