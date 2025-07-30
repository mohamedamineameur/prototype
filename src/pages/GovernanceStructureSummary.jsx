import { Users, ShieldCheck, Briefcase, Info } from "lucide-react";

const RatioLine = ({ label, value, total }) => {
  const percent = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm space-y-1">
      <div className="flex justify-between text-sm font-medium text-[#1D4E89]">
        <span>{label}</span>
        <span className="text-gray-600">{value} / {total}</span>
      </div>
      <div className="w-full bg-gray-100 h-2 rounded-full">
        <div
          className="h-full bg-[#00B2CA] transition-all duration-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
};

const GovernanceStructureSummary = () => {
  const data = {
    oversightCommittee: "Yes",
    totalCommitteeMembers: 10,
    independentCommitteeMembers: 6,
    femaleCommitteeMembers: 4,
    governanceStructureDescription:
      "Le comité se réunit trimestriellement pour superviser la stratégie, valider le budget et assurer la conformité ESG.",
    committeeDiversityDescription:
      "La diversité du comité (genre, âge et compétences) permet d’avoir des regards variés sur les décisions stratégiques.",
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-8 font-['Archivo']">
      <h2 className="text-3xl font-bold text-[#1D4E89]">
        🏛 Résumé - Structure de gouvernance
      </h2>

      {data.oversightCommittee === "Yes" ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <RatioLine
              label="Membres indépendants"
              value={data.independentCommitteeMembers}
              total={data.totalCommitteeMembers}
            />
            <RatioLine
              label="Femmes au sein du comité"
              value={data.femaleCommitteeMembers}
              total={data.totalCommitteeMembers}
            />
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm space-y-2 text-sm text-gray-700">
            <h3 className="text-lg font-semibold text-[#1D4E89]">
              Structure de gouvernance décrite
            </h3>
            <p>{data.governanceStructureDescription}</p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm space-y-2 text-sm text-gray-700">
            <h3 className="text-lg font-semibold text-[#1D4E89]">
              Diversité du comité
            </h3>
            <p>{data.committeeDiversityDescription}</p>
          </div>
        </>
      ) : (
        <div className="bg-white p-4 rounded-xl shadow-sm text-gray-700 border">
          <Users size={20} className="text-[#1D4E89] mb-2" />
          <p className="text-sm">Aucun comité de surveillance déclaré.</p>
        </div>
      )}

      <p className="text-xs text-gray-500">
        Chaque barre indique la proportion : ex. « 6 sur 10 » membres indépendants.
      </p>
    </div>
  );
};

export default GovernanceStructureSummary;
