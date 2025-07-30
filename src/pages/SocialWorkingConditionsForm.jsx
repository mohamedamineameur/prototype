import { useState } from "react";
import DateDropdown from "../components/DateDropdown";

export default function SocialWorkingConditionsForm() {
  const [form, setForm] = useState({
    startDateTime: "",
    endDateTime: "",
    numberOfEmployeesWithPermanentContractAtTheEndOfThePeriod: "",
    numberOfEmployeesCoveredByGroupInsurance: "",
    numberOfEmployeesCoveredByRetirementPlan: "",
    numberOfEmployeesCoveredByParentalLeave: "",
    numberOfEmployeesCoveredByVacationLeave: "",
    facultativeAdditionalInformation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Formulaire soumis:", form);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo']">
      <h2 className="text-2xl font-bold text-[#1D4E89] mb-6">🏢 Conditions de travail</h2>

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

        <div>
          <label className="text-sm text-[#1D4E89] font-medium">
            Quel est le nombre d'employés ayant un contrat permanent à la fin de la période ?
          </label>
          <input
            type="number"
            name="numberOfEmployeesWithPermanentContractAtTheEndOfThePeriod"
            value={form.numberOfEmployeesWithPermanentContractAtTheEndOfThePeriod}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm text-[#1D4E89] font-medium">
            Combien d'employés sont couverts par une assurance collective ?
          </label>
          <input
            type="number"
            name="numberOfEmployeesCoveredByGroupInsurance"
            value={form.numberOfEmployeesCoveredByGroupInsurance}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm text-[#1D4E89] font-medium">
            Combien d'employés sont couverts par un régime de retraite ?
          </label>
          <input
            type="number"
            name="numberOfEmployeesCoveredByRetirementPlan"
            value={form.numberOfEmployeesCoveredByRetirementPlan}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm text-[#1D4E89] font-medium">
            Combien d'employés bénéficient d'un congé parental ?
          </label>
          <input
            type="number"
            name="numberOfEmployeesCoveredByParentalLeave"
            value={form.numberOfEmployeesCoveredByParentalLeave}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm text-[#1D4E89] font-medium">
            Combien d'employés bénéficient d'un congé de vacances ?
          </label>
          <input
            type="number"
            name="numberOfEmployeesCoveredByVacationLeave"
            value={form.numberOfEmployeesCoveredByVacationLeave}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="text-sm text-[#1D4E89] font-medium">
            Avez-vous des informations supplémentaires facultatives à fournir ?
          </label>
          <textarea
            name="facultativeAdditionalInformation"
            value={form.facultativeAdditionalInformation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={() => setForm({})} className="text-sm text-[#1D4E89] underline">
          Annuler
        </button>
        <button
          onClick={handleSubmit}
          className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded-md text-sm"
        >
          SOUMETTRE
        </button>
      </div>
    </div>
  );
}
