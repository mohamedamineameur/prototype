import {
    CheckCircle,
    XCircle,
    LoaderCircle,
    Flame,
    BookOpenCheck,
    BadgeEuro,
    UserCheck,
    ClipboardList,
    LogOut,
    UserX,
  } from "lucide-react";
  
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
  
  const SocialWellBeingSummary = () => {
    const totalEmployees = 150;
    const data = {
      hasFormalWorkAccidentPreventionPolicy: "Oui",
      numberOfWorkAccidents: 3,
      trainingSessionsCount: 12,
      trainingBudget: 8500,
      employeesTrainedCount: 47,
      employeesReceivingPerformanceReviewAndCareerDevelopmentCount: 40,
      voluntaryEmployeeDeparturesCount: 5,
      involuntaryEmployeeDeparturesCount: 2,
      facultativeAdditionalInformation:
        "Un programme de bien-être mental est en cours de déploiement incluant accès à un psychologue.",
    };
  
    const Status = ({ value }) => {
      const base = "flex items-center gap-2 text-sm px-3 py-1 rounded-full font-medium w-fit";
      if (value === "Oui")
        return <span className={`${base} bg-green-100 text-green-800`}><CheckCircle size={16} /> Oui</span>;
      if (value === "Non")
        return <span className={`${base} bg-red-100 text-red-800`}><XCircle size={16} /> Non</span>;
      return <span className={`${base} bg-yellow-100 text-yellow-800`}><LoaderCircle size={16} /> En cours</span>;
    };
  
    return (
      <div className="max-w-5xl mx-auto p-4 space-y-8 font-['Archivo']">
        <h2 className="text-3xl font-bold text-[#1D4E89]">🧘 Résumé - Bien-être des employés</h2>
  
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-2 border border-gray-100">
          <h4 className="text-[#1D4E89] font-semibold text-sm">Politique de prévention des accidents</h4>
          <Status value={data.hasFormalWorkAccidentPreventionPolicy} />
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm text-[#1D4E89] flex gap-3 items-center border border-gray-100">
            <Flame size={20} />
            <div>
              <div className="text-sm text-gray-500">Accidents de travail</div>
              <div className="text-xl font-bold">{data.numberOfWorkAccidents}</div>
            </div>
          </div>
  
          <div className="bg-white p-4 rounded-xl shadow-sm text-[#1D4E89] flex gap-3 items-center border border-gray-100">
            <BookOpenCheck size={20} />
            <div>
              <div className="text-sm text-gray-500">Sessions de formation</div>
              <div className="text-xl font-bold">{data.trainingSessionsCount}</div>
            </div>
          </div>
  
          <div className="bg-white p-4 rounded-xl shadow-sm text-[#1D4E89] flex gap-3 items-center border border-gray-100">
            <BadgeEuro size={20} />
            <div>
              <div className="text-sm text-gray-500">Budget formation (€)</div>
              <div className="text-xl font-bold">{data.trainingBudget}</div>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RatioLine
            label="Employés formés"
            value={data.employeesTrainedCount}
            total={totalEmployees}
          />
          <RatioLine
            label="Évaluations & carrières"
            value={data.employeesReceivingPerformanceReviewAndCareerDevelopmentCount}
            total={totalEmployees}
          />
          <RatioLine
            label="Départs volontaires"
            value={data.voluntaryEmployeeDeparturesCount}
            total={totalEmployees}
          />
          <RatioLine
            label="Départs involontaires"
            value={data.involuntaryEmployeeDeparturesCount}
            total={totalEmployees}
          />
        </div>
  
        {data.facultativeAdditionalInformation && (
          <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700 border border-gray-200">
            <strong className="text-[#1D4E89]">📝 Informations supplémentaires</strong>
            <p className="mt-2">{data.facultativeAdditionalInformation}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default SocialWellBeingSummary;
  