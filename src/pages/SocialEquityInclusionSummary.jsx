import {
    Users,
    Eye,
    
    Briefcase,
    Info,
  } from "lucide-react";
  
  const RatioLine = ({ label, value, total }) => {
    const percent = total > 0 ? Math.round((value / total) * 100) : 0;
    return (
      <div className="bg-white p-4 rounded-xl border shadow-sm space-y-1">
        <div className="flex justify-between text-sm font-medium text-[#1D4E89]">
          <span>{label}</span>
          <span className="text-gray-600">{value} / {total}</span>
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#00B2CA] transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    );
  };
  
  const Section = ({ title, icon, children }) => (
    <section className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-bold text-[#1D4E89]">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </section>
  );
  
  const SocialEquityInclusionSummary = () => {
    const data = {
      totalEmployees: 150,
      employeesIdentifyingAsMen: 70,
      employeesIdentifyingAsWomen: 72,
      employeesIdentifyingAsOther: 8,
      employeesIdentifyingAsVisibleMinority: 40,
      employeesIdentifyingAsPersonWithDisabilities: 15,
      employeesIdentifyingAsMenInManagement: 30,
      employeesIdentifyingAsWomenInManagement: 25,
      employeesIdentifyingAsOtherInManagement: 2,
      employeesIdentifyingAsVisibleMinorityInManagement: 10,
      employeesIdentifyingAsPersonWithDisabilitiesInManagement: 3,
      discriminationHarassmentIncidentsCount: 4,
      equityDiversityInclusionInitiatives: "Yes, through specific programs",
      facultativeInitiativeAdditionalInformation:
        "Formation sur les biais inconscients et analyse des écarts de rémunération.",
      formalizedEquityDiversityInclusionPolicy: "In progress",
      facultativePolicyAdditionalInformation:
        "Une charte est en cours de rédaction avec des représentants syndicaux.",
      facultativeGeneralAdditionalInformation: null,
    };
  
    return (
      <div className="max-w-5xl mx-auto p-4 space-y-10 font-['Archivo']">
        <h2 className="text-3xl font-bold text-[#1D4E89]">
          🧑‍🤝‍🧑 Résumé - Équité, Diversité et Inclusion
        </h2>
  
        <Section title="Répartition de genre" icon={<Users size={20} />}>
          <RatioLine label="Hommes" value={data.employeesIdentifyingAsMen} total={data.totalEmployees} />
          <RatioLine label="Femmes" value={data.employeesIdentifyingAsWomen} total={data.totalEmployees} />
          <RatioLine label="Autre genre" value={data.employeesIdentifyingAsOther} total={data.totalEmployees} />
        </Section>
  
        <Section title="Diversité (tout le personnel)" icon={<Eye size={20} />}>
          <RatioLine label="Minorités visibles" value={data.employeesIdentifyingAsVisibleMinority} total={data.totalEmployees} />
          <RatioLine label="Personnes handicapées" value={data.employeesIdentifyingAsPersonWithDisabilities} total={data.totalEmployees} />
        </Section>
  
        <Section title="Répartition en direction" icon={<Briefcase size={20} />}>
          <RatioLine label="Hommes en direction" value={data.employeesIdentifyingAsMenInManagement} total={data.employeesIdentifyingAsMen} />
          <RatioLine label="Femmes en direction" value={data.employeesIdentifyingAsWomenInManagement} total={data.employeesIdentifyingAsWomen} />
          <RatioLine label="Autre genre en direction" value={data.employeesIdentifyingAsOtherInManagement} total={data.employeesIdentifyingAsOther} />
          <RatioLine label="Minorités visibles en direction" value={data.employeesIdentifyingAsVisibleMinorityInManagement} total={data.employeesIdentifyingAsVisibleMinority} />
          <RatioLine label="Handicapés en direction" value={data.employeesIdentifyingAsPersonWithDisabilitiesInManagement} total={data.employeesIdentifyingAsPersonWithDisabilities} />
        </Section>
  
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow border border-gray-100">
            <div className="text-sm text-[#1D4E89] font-semibold mb-1">Incidents signalés</div>
            <div className="text-2xl font-bold text-[#1D4E89]">
              {data.discriminationHarassmentIncidentsCount}
            </div>
          </div>
  
          <div className="bg-white p-4 rounded-xl border shadow">
            <div className="text-sm font-semibold text-[#1D4E89] mb-1">
              Initiatives EDI
            </div>
            <p className="text-sm text-gray-700">
              {data.equityDiversityInclusionInitiatives}
            </p>
            {data.facultativeInitiativeAdditionalInformation && (
              <p className="mt-2 text-sm text-gray-600">
                {data.facultativeInitiativeAdditionalInformation}
              </p>
            )}
          </div>
  
          <div className="bg-white p-4 rounded-xl border shadow">
            <div className="text-sm font-semibold text-[#1D4E89] mb-1">
              Politique EDI formalisée
            </div>
            <p className="text-sm text-gray-700">
              {data.formalizedEquityDiversityInclusionPolicy}
            </p>
            {data.facultativePolicyAdditionalInformation && (
              <p className="mt-2 text-sm text-gray-600">
                {data.facultativePolicyAdditionalInformation}
              </p>
            )}
          </div>
        </div>
  
        {data.facultativeGeneralAdditionalInformation && (
          <div className="bg-gray-50 p-4 rounded-xl border text-sm text-gray-700">
            <strong className="text-[#1D4E89] flex items-center gap-2">
              <Info size={16} /> Informations générales supplémentaires
            </strong>
            <p className="mt-2">{data.facultativeGeneralAdditionalInformation}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default SocialEquityInclusionSummary;
  