import { useState } from "react";
import Dropdown from "../components/Dropdown";
import DateDropdown from "../components/DateDropdown";

export default function GovernanceRiskResilienceForm() {
  const [form, setForm] = useState({
    startDateTime: "",
    endDateTime: "",
    cyberThreatProtectionMeasures: "",
    cyberThreatProtectionMeasuresText: "",
    privacyProtectionCompliance: "",
    privacyProtectionComplianceText: "",
    supplyChainSustainability: "",
    supplyChainSustainabilityText: "",
    financialResilienceMeasures: "",
    financialResilienceMeasuresText: "",
    climateRiskAssessment: "",
    climateRiskAssessmentText: "",
  });

  const options = {
    Yes: "Oui",
    No: "Non",
    "In progress": "En cours",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Formulaire soumis :", form);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo'] space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">🏛 Gestion des risques et résilience</h2>

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

      {/* Cyber */}
      <Dropdown
        label="Avez-vous pris des mesures pour protéger vos systèmes d’information et vos données contre les cybermenaces ?"
        options={options}
        value={form.cyberThreatProtectionMeasures}
        onChange={(val) => setForm((prev) => ({ ...prev, cyberThreatProtectionMeasures: val }))}
      />
      <div>
        <label className="text-sm font-medium text-[#1D4E89]">Décrivez ces mesures.</label>
        <textarea
          name="cyberThreatProtectionMeasuresText"
          rows="3"
          value={form.cyberThreatProtectionMeasuresText}
          onChange={handleChange}
          className="w-full border rounded p-2"
        ></textarea>
      </div>

      {/* Privacy */}
      <Dropdown
        label="Avez-vous pris des mesures pour vous conformer aux lois en matière de protection des renseignements personnels ?"
        options={options}
        value={form.privacyProtectionCompliance}
        onChange={(val) => setForm((prev) => ({ ...prev, privacyProtectionCompliance: val }))}
      />
      <div>
        <label className="text-sm font-medium text-[#1D4E89]">Décrivez ces mesures.</label>
        <textarea
          name="privacyProtectionComplianceText"
          rows="3"
          value={form.privacyProtectionComplianceText}
          onChange={handleChange}
          className="w-full border rounded p-2"
        ></textarea>
      </div>

      {/* Supply Chain */}
      <Dropdown
        label="Avez-vous pris des mesures pour assurer la durabilité et la responsabilité sociale de votre chaîne de valeur ?"
        options={options}
        value={form.supplyChainSustainability}
        onChange={(val) => setForm((prev) => ({ ...prev, supplyChainSustainability: val }))}
      />
      <div>
        <label className="text-sm font-medium text-[#1D4E89]">Décrivez ces mesures.</label>
        <textarea
          name="supplyChainSustainabilityText"
          rows="3"
          value={form.supplyChainSustainabilityText}
          onChange={handleChange}
          className="w-full border rounded p-2"
        ></textarea>
      </div>

      {/* Financial Resilience */}
      <Dropdown
        label="Avez-vous mis en place des mesures pour assurer la résilience financière de votre organisation (gestion des risques, diversification, tests de résistance, conseils financiers, etc.) ?"
        options={options}
        value={form.financialResilienceMeasures}
        onChange={(val) => setForm((prev) => ({ ...prev, financialResilienceMeasures: val }))}
      />
      <div>
        <label className="text-sm font-medium text-[#1D4E89]">Décrivez ces mesures.</label>
        <textarea
          name="financialResilienceMeasuresText"
          rows="3"
          value={form.financialResilienceMeasuresText}
          onChange={handleChange}
          className="w-full border rounded p-2"
        ></textarea>
      </div>

      {/* Climate Risk */}
      <Dropdown
        label="Avez-vous évalué les risques climatiques auxquels fait face votre organisation (risques physiques et de transition) ?"
        options={options}
        value={form.climateRiskAssessment}
        onChange={(val) => setForm((prev) => ({ ...prev, climateRiskAssessment: val }))}
      />
      <div>
        <label className="text-sm font-medium text-[#1D4E89]">Décrivez votre démarche.</label>
        <textarea
          name="climateRiskAssessmentText"
          rows="3"
          value={form.climateRiskAssessmentText}
          onChange={handleChange}
          className="w-full border rounded p-2"
        ></textarea>
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
