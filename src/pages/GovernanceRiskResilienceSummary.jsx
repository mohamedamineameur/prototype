import {
    CheckCircle,
    XCircle,
    LoaderCircle,
    ShieldCheck,
    Lock,
    Globe,
    Euro,
    Cloud,
    Info,
  } from "lucide-react";
  
  const GovernanceRiskResilienceSummary = () => {
    const data = {
      cyberThreatProtectionMeasures: "Oui",
      cyberThreatProtectionMeasuresText:
        "Mise en place d’un pare-feu de nouvelle génération, formations régulières au phishing, et audits de sécurité trimestriels.",
      privacyProtectionCompliance: "En cours",
      privacyProtectionComplianceText:
        "Révision en cours des politiques internes pour alignement avec le RGPD. Nomination d’un DPO prévue.",
      supplyChainSustainability: "Non",
      supplyChainSustainabilityText: "",
      financialResilienceMeasures: "Oui",
      financialResilienceMeasuresText:
        "Stress tests trimestriels, diversification des sources de revenus, comité de suivi des risques financiers.",
      climateRiskAssessment: "Oui",
      climateRiskAssessmentText:
        "Évaluation des risques physiques pour les infrastructures et scénarios de transition énergétique modélisés.",
    };
  
    const Status = ({ value }) => {
      const base = "flex items-center gap-2 text-sm px-3 py-1 rounded-full font-medium w-fit";
      if (value === "Oui")
        return <span className={`${base} bg-green-100 text-green-800`}><CheckCircle size={16} /> Oui</span>;
      if (value === "Non")
        return <span className={`${base} bg-red-100 text-red-800`}><XCircle size={16} /> Non</span>;
      return <span className={`${base} bg-yellow-100 text-yellow-800`}><LoaderCircle size={16} /> En cours</span>;
    };
  
    const InfoBlock = ({ icon, label, value, text }) => (
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center text-[#1D4E89] font-medium text-sm">
            {icon} <span>{label}</span>
          </div>
          <Status value={value} />
        </div>
        {text && (
          <div className="text-sm text-gray-700 border-t pt-2">{text}</div>
        )}
      </div>
    );
  
    return (
      <div className="max-w-5xl mx-auto p-4 space-y-6 font-['Archivo']">
        <h2 className="text-3xl font-bold text-[#1D4E89]">🛡️ Résumé - Gestion des risques et résilience</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoBlock
            icon={<ShieldCheck size={18} />}
            label="Protection contre les cybermenaces"
            value={data.cyberThreatProtectionMeasures}
            text={data.cyberThreatProtectionMeasuresText}
          />
          <InfoBlock
            icon={<Lock size={18} />}
            label="Protection des renseignements personnels"
            value={data.privacyProtectionCompliance}
            text={data.privacyProtectionComplianceText}
          />
          <InfoBlock
            icon={<Globe size={18} />}
            label="Durabilité de la chaîne de valeur"
            value={data.supplyChainSustainability}
            text={data.supplyChainSustainabilityText}
          />
          <InfoBlock
            icon={<Euro size={18} />}
            label="Résilience financière"
            value={data.financialResilienceMeasures}
            text={data.financialResilienceMeasuresText}
          />
          <InfoBlock
            icon={<Cloud size={18} />}
            label="Évaluation des risques climatiques"
            value={data.climateRiskAssessment}
            text={data.climateRiskAssessmentText}
          />
        </div>
      </div>
    );
  };
  
  export default GovernanceRiskResilienceSummary;
  