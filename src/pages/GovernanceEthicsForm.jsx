import { useState } from "react";
import Dropdown from "../components/Dropdown";
import DateDropdown from "../components/DateDropdown";

const options = {
  Oui: "Oui",
  Non: "Non",
  "En cours": "En cours",
};

export default function GovernanceEthicsForm() {
  const [form, setForm] = useState({
    startDateTime: "",
    endDateTime: "",
    codeOfConductOrEthics: "",
    codeOfConductOrEthicsText: "",
    percentageOfEmployeesSignedCode: "",
    percentageOfEmployeesSignedCodeText: "",
    supplierCodeOrResponsiblePolicy: "",
    supplierCodeOrResponsiblePolicyText: "",
    fraudPreventionPolicy: "",
    fraudPreventionPolicyText: "",
    assessedForcedLaborRisks: "",
    assessedForcedLaborRisksText: "",
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
      <h2 className="text-2xl font-bold text-[#1D4E89] mb-6">🏛 Éthique et conduite</h2>

      <div className="grid grid-cols-1 gap-4">
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
          label="Votre organisation a-t-elle un code de conduite ou d’éthique ?"
          value={form.codeOfConductOrEthics}
          options={options}
          onChange={(val) => setForm((prev) => ({ ...prev, codeOfConductOrEthics: val }))}
        />
        <div>
          <label className="text-sm text-[#1D4E89] font-medium">Veuillez fournir des détails sur le code de conduite ou d’éthique.</label>
          <textarea name="codeOfConductOrEthicsText" value={form.codeOfConductOrEthicsText} onChange={handleChange} className="w-full p-2 border rounded" rows="2" />
        </div>

        <div>
          <label className="text-sm text-[#1D4E89] font-medium">Quel est le pourcentage des employés ayant signé ce code de conduite ou d’éthique ?</label>
          <input type="number" name="percentageOfEmployeesSignedCode" value={form.percentageOfEmployeesSignedCode} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="text-sm text-[#1D4E89] font-medium">Veuillez décrire le processus pour signer le code de conduite ou d’éthique.</label>
          <textarea name="percentageOfEmployeesSignedCodeText" value={form.percentageOfEmployeesSignedCodeText} onChange={handleChange} className="w-full p-2 border rounded" rows="2" />
        </div>

        <Dropdown
          label="Avez-vous mis en place un code de conduite des fournisseurs ou une politique d’achat responsable ?"
          value={form.supplierCodeOrResponsiblePolicy}
          options={options}
          onChange={(val) => setForm((prev) => ({ ...prev, supplierCodeOrResponsiblePolicy: val }))}
        />
        <div>
          <label className="text-sm text-[#1D4E89] font-medium">Veuillez fournir des détails sur le code ou la politique d’achat responsable.</label>
          <textarea name="supplierCodeOrResponsiblePolicyText" value={form.supplierCodeOrResponsiblePolicyText} onChange={handleChange} className="w-full p-2 border rounded" rows="2" />
        </div>

        <Dropdown
          label="Avez-vous mis en place une politique de prévention de la fraude ou de la corruption ?"
          value={form.fraudPreventionPolicy}
          options={options}
          onChange={(val) => setForm((prev) => ({ ...prev, fraudPreventionPolicy: val }))}
        />
        <div>
          <label className="text-sm text-[#1D4E89] font-medium">Veuillez fournir des détails sur la politique de prévention de la fraude.</label>
          <textarea name="fraudPreventionPolicyText" value={form.fraudPreventionPolicyText} onChange={handleChange} className="w-full p-2 border rounded" rows="2" />
        </div>

        <Dropdown
          label="Avez-vous pris des mesures pour évaluer les risques de travail forcé dans les chaînes d’approvisionnement ?"
          value={form.assessedForcedLaborRisks}
          options={options}
          onChange={(val) => setForm((prev) => ({ ...prev, assessedForcedLaborRisks: val }))}
        />
        <div>
          <label className="text-sm text-[#1D4E89] font-medium">Veuillez décrire les mesures prises pour évaluer les risques de travail forcé.</label>
          <textarea name="assessedForcedLaborRisksText" value={form.assessedForcedLaborRisksText} onChange={handleChange} className="w-full p-2 border rounded" rows="2" />
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button onClick={handleSubmit} className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded-md text-sm">
          Soumettre
        </button>
      </div>
    </div>
  );
}
