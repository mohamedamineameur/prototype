import { useState } from "react";
import DateDropdown from "../components/DateDropdown";
import Dropdown from "../components/Dropdown";

export default function GovernanceEsgStrategyLeadershipForm() {
  const [form, setForm] = useState({
    startDateTime: "",
    endDateTime: "",
    impactIntegratedInMission: "",
    impactIntegratedInMissionText: "",
    formalEsgPolicy: "",
    formalEsgPolicyText: "",
    esgReportPublishedRegularly: "",
    esgReportPublishedRegularlyText: "",
    dedicatedEsgCommitteeOrPerson: "",
    dedicatedEsgCommitteeOrPersonText: "",
    numberOfEmployeesTrainedInEsg: "",
    numberOfEmployeesTrainedInEsgText: "",
    totalEmployees: "",
  });

  const [errors, setErrors] = useState({});

  const options = {
    Yes: "Oui",
    No: "Non",
    "In progress": "En cours",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const e = {};
    if (
      Number(form.numberOfEmployeesTrainedInEsg) >
      Number(form.totalEmployees)
    ) {
      e.trained = "Le nombre d'employés formés aux pratiques ESG ne peut pas être supérieur au nombre total d'employés.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log("Soumission :", form);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo'] space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">📘 Stratégie et leadership ESG</h2>

      <DateDropdown
        label="Date de début"
        value={form.startDateTime}
        onChange={(val) => setForm((prev) => ({ ...prev, startDateTime: val }))}
      />
      <DateDropdown
        label="Date de fin"
        value={form.endDateTime}
        onChange={(val) => setForm((prev) => ({ ...prev, endDateTime: val }))}
      />

      <Dropdown
        label="Votre organisation intègre-t-elle explicitement l’impact social et environnemental dans sa mission et ses statuts ?"
        options={options}
        value={form.impactIntegratedInMission}
        onChange={(val) => setForm((prev) => ({ ...prev, impactIntegratedInMission: val }))}
      />
      <div>
        <label className="text-sm font-medium text-[#1D4E89]">
          Veuillez décrire comment l’impact social et environnemental est intégré.
        </label>
        <textarea
          name="impactIntegratedInMissionText"
          value={form.impactIntegratedInMissionText}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows="3"
        />
      </div>

      <Dropdown
        label="Avez-vous formalisé une politique ESG ou de développement durable ?"
        options={options}
        value={form.formalEsgPolicy}
        onChange={(val) => setForm((prev) => ({ ...prev, formalEsgPolicy: val }))}
      />
      <div>
        <label className="text-sm font-medium text-[#1D4E89]">
          Veuillez décrire votre politique ESG ou de développement durable.
        </label>
        <textarea
          name="formalEsgPolicyText"
          value={form.formalEsgPolicyText}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows="3"
        />
      </div>

      <Dropdown
        label="Publiez-vous un rapport ESG sur une base régulière ?"
        options={options}
        value={form.esgReportPublishedRegularly}
        onChange={(val) => setForm((prev) => ({ ...prev, esgReportPublishedRegularly: val }))}
      />
      <div>
        <label className="text-sm font-medium text-[#1D4E89]">
          Veuillez fournir des détails sur vos rapports ESG.
        </label>
        <textarea
          name="esgReportPublishedRegularlyText"
          value={form.esgReportPublishedRegularlyText}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows="3"
        />
      </div>

      <Dropdown
        label="Avez-vous désigné une personne ou un comité responsable des pratiques ESG ?"
        options={options}
        value={form.dedicatedEsgCommitteeOrPerson}
        onChange={(val) => setForm((prev) => ({ ...prev, dedicatedEsgCommitteeOrPerson: val }))}
      />
      <div>
        <label className="text-sm font-medium text-[#1D4E89]">
          Veuillez décrire la personne ou le comité responsable des pratiques ESG.
        </label>
        <textarea
          name="dedicatedEsgCommitteeOrPersonText"
          value={form.dedicatedEsgCommitteeOrPersonText}
          onChange={handleChange}
          className="w-full border rounded p-2"
          rows="3"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Quel est le nombre d’employés ayant suivi une formation ou ayant été sensibilisés aux pratiques ESG ?
          </label>
          <input
            type="number"
            name="numberOfEmployeesTrainedInEsg"
            value={form.numberOfEmployeesTrainedInEsg}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          {errors.trained && <div className="text-sm text-red-600">{errors.trained}</div>}
        </div>
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Nombre total d’employés (pour validation)
          </label>
          <input
            type="number"
            name="totalEmployees"
            value={form.totalEmployees}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-[#1D4E89]">
          Veuillez décrire les formations ou ateliers organisés.
        </label>
        <textarea
          name="numberOfEmployeesTrainedInEsgText"
          rows="3"
          value={form.numberOfEmployeesTrainedInEsgText}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded-md text-sm"
        >
          Soumettre
        </button>
      </div>
    </div>
  );
}
