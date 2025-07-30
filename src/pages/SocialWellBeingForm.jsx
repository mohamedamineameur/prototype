import { useState } from "react";
import Dropdown from "../components/Dropdown";
import DateDropdown from "../components/DateDropdown";

const yesNoOptions = {
  Oui: "Oui",
  Non: "Non",
  "En cours": "En cours",
};

export default function SocialWellBeingForm() {
  const [form, setForm] = useState({
    startDateTime: "",
    endDateTime: "",
    hasFormalWorkAccidentPreventionPolicy: "",
    numberOfWorkAccidents: "",
    trainingSessionsCount: "",
    trainingBudget: "",
    employeesTrainedCount: "",
    employeesReceivingPerformanceReviewAndCareerDevelopmentCount: "",
    voluntaryEmployeeDeparturesCountCount: "",
    involuntaryEmployeeDeparturesCountCount: "",
    facultativeAdditionalInformation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Formulaire soumis :", form);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo']">
      <h2 className="text-2xl font-bold text-[#1D4E89] mb-6">🧘 Bien-être des employés</h2>

      <div className="grid grid-cols-1 gap-4">
        <DateDropdown
          label="Quelle est la date de début ?"
          value={form.startDateTime}
          onChange={(val) => setForm((prev) => ({ ...prev, startDateTime: val }))}
        />
        <DateDropdown
          label="Quelle est la date de fin ?"
          value={form.endDateTime}
          onChange={(val) => setForm((prev) => ({ ...prev, endDateTime: val }))}
        />

        <Dropdown
          label="Existe-t-il une politique formelle de prévention des accidents du travail ?"
          value={form.hasFormalWorkAccidentPreventionPolicy}
          options={yesNoOptions}
          onChange={(val) => setForm((prev) => ({ ...prev, hasFormalWorkAccidentPreventionPolicy: val }))}
        />

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Quel est le nombre d'accidents du travail ?</label>
          <input type="number" name="numberOfWorkAccidents" value={form.numberOfWorkAccidents} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Combien de sessions de formation ont été organisées ?</label>
          <input type="number" name="trainingSessionsCount" value={form.trainingSessionsCount} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Quel est le budget consacré aux formations ?</label>
          <input type="number" name="trainingBudget" value={form.trainingBudget} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Combien d'employés ont été formés ?</label>
          <input type="number" name="employeesTrainedCount" value={form.employeesTrainedCount} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Combien d'employés ont bénéficié d'évaluations et d'un plan de carrière ?</label>
          <input type="number" name="employeesReceivingPerformanceReviewAndCareerDevelopmentCount" value={form.employeesReceivingPerformanceReviewAndCareerDevelopmentCount} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Combien de départs volontaires ont eu lieu ?</label>
          <input type="number" name="voluntaryEmployeeDeparturesCountCount" value={form.voluntaryEmployeeDeparturesCountCount} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Combien de départs involontaires ont eu lieu ?</label>
          <input type="number" name="involuntaryEmployeeDeparturesCountCount" value={form.involuntaryEmployeeDeparturesCountCount} onChange={handleChange} className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Avez-vous des informations supplémentaires facultatives à fournir ?</label>
          <textarea name="facultativeAdditionalInformation" value={form.facultativeAdditionalInformation} onChange={handleChange} className="w-full border rounded p-2" rows="3" />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={() => setForm({})} className="text-sm text-[#1D4E89] underline">Annuler</button>
        <button onClick={handleSubmit} className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded-md text-sm">Soumettre</button>
      </div>
    </div>
  );
}
