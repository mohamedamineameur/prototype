import {
    Globe2,
    ScrollText,
    FileText,
    Users,
    Landmark,
    Info,
    CheckCircle,
    XCircle,
    LoaderCircle,
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
  
  const Status = ({ value }) => {
    const base = "flex items-center gap-2 text-sm px-3 py-1 rounded-full font-medium w-fit";
    if (value === "Oui") return <span className={`${base} bg-green-100 text-green-800`}><CheckCircle size={16} /> Oui</span>;
    if (value === "Non") return <span className={`${base} bg-red-100 text-red-800`}><XCircle size={16} /> Non</span>;
    return <span className={`${base} bg-yellow-100 text-yellow-800`}><LoaderCircle size={16} /> En cours</span>;
  };
  
  const InfoBlock = ({ icon, label, status, text }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center text-[#1D4E89] font-medium text-sm">
          {icon} <span>{label}</span>
        </div>
        <Status value={status} />
      </div>
      {text && <div className="text-sm text-gray-700 border-t pt-2">{text}</div>}
    </div>
  );
  
  const GovernanceEsgStrategyLeadershipSummary = () => {
    const data = {
      impactIntegratedInMission: "Oui",
      impactIntegratedInMissionText: "La mission officielle de l’organisation inclut la durabilité et l’impact social comme principes fondateurs.",
      formalEsgPolicy: "Oui",
      formalEsgPolicyText: "Une politique ESG a été formalisée en 2022, avec un suivi trimestriel des objectifs.",
      esgReportPublishedRegularly: "Non",
      esgReportPublishedRegularlyText: "",
      dedicatedEsgCommitteeOrPerson: "En cours",
      dedicatedEsgCommitteeOrPersonText: "Un comité ESG est en cours de formation.",
      numberOfEmployeesTrainedInEsg: 47,
      totalEmployees: 150,
      numberOfEmployeesTrainedInEsgText: "Sensibilisation via deux ateliers internes sur les enjeux ESG et les ODD.",
    };
  
    return (
      <div className="max-w-5xl mx-auto p-4 space-y-8 font-['Archivo']">
        <h2 className="text-3xl font-bold text-[#1D4E89]">📘 Résumé - Stratégie et leadership ESG</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoBlock
            icon={<Globe2 size={18} />}
            label="Impact intégré à la mission"
            status={data.impactIntegratedInMission}
            text={data.impactIntegratedInMissionText}
          />
          <InfoBlock
            icon={<ScrollText size={18} />}
            label="Politique ESG formalisée"
            status={data.formalEsgPolicy}
            text={data.formalEsgPolicyText}
          />
          <InfoBlock
            icon={<FileText size={18} />}
            label="Rapport ESG régulier"
            status={data.esgReportPublishedRegularly}
            text={data.esgReportPublishedRegularlyText}
          />
          <InfoBlock
            icon={<Landmark size={18} />}
            label="Responsable ou comité ESG"
            status={data.dedicatedEsgCommitteeOrPerson}
            text={data.dedicatedEsgCommitteeOrPersonText}
          />
        </div>
  
        <RatioLine
          label="Employés formés aux pratiques ESG"
          value={data.numberOfEmployeesTrainedInEsg}
          total={data.totalEmployees}
        />
  
        {data.numberOfEmployeesTrainedInEsgText && (
          <div className="bg-white p-6 rounded-xl border shadow-sm space-y-2 text-sm text-gray-700">
            <h3 className="text-lg font-semibold text-[#1D4E89] flex items-center gap-2">
              <Users size={16} /> Détail des formations ESG
            </h3>
            <p>{data.numberOfEmployeesTrainedInEsgText}</p>
          </div>
        )}
  
        
      </div>
    );
  };
  
  export default GovernanceEsgStrategyLeadershipSummary;
  