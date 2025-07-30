import { useState } from "react";
import Dropdown from "../components/Dropdown";
import DateDropdown from "../components/DateDropdown";

export default function SocialEquityInclusionForm() {
  const initial = {
    totalEmployees: "",
    startDateTime: "",
    endDateTime: "",
    employeesIdentifyingAsVisibleMinority: "",
    employeesIdentifyingAsPersonWithDisabilities: "",
    employeesIdentifyingAsOther: "",
    employeesIdentifyingAsMen: "",
    employeesIdentifyingAsWomen: "",
    employeesIdentifyingAsMenInManagement: "",
    employeesIdentifyingAsWomenInManagement: "",
    employeesIdentifyingAsVisibleMinorityInManagement: "",
    employeesIdentifyingAsPersonWithDisabilitiesInManagement: "",
    employeesIdentifyingAsOtherInManagement: "",
    discriminationHarassmentIncidentsCount: "",
    facultativeGeneralAdditionalInformation: "",
    equityDiversityInclusionInitiatives: "",
    facultativeInitiativeAdditionalInformation: "",
    formalizedEquityDiversityInclusionPolicy: "",
    facultativePolicyAdditionalInformation: "",
  };

  const optionsInitiatives = {
    "Yes, through specific programs": "Oui, par des programmes spécifiques",
    "Yes, informally": "Oui, de manière informelle",
    "No": "Non",
  };

  const optionsPolicy = {
    Yes: "Oui",
    InProgress: "En cours",
    No: "Non",
  };

  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    const t = Number(form.totalEmployees) || 0;
    const men = Number(form.employeesIdentifyingAsMen) || 0;
    const women = Number(form.employeesIdentifyingAsWomen) || 0;
    if (men + women !== t) {
      e.sumMenAndWomen = "La somme des hommes et des femmes doit être égale au nombre total d'employés";
    }
    // example: men in management <= men
    if (Number(form.employeesIdentifyingAsMenInManagement) > men) {
      e.menInManagement = "Le nombre d'hommes en direction doit être inférieur ou égal au nombre total d'hommes";
    }
    if (Number(form.employeesIdentifyingAsWomenInManagement) > women) {
      e.womenInManagement = "Le nombre de femmes en direction doit être inférieur ou égal au nombre total de femmes";
    }
    // others analogous...
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log("Submit", form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo'] space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">Équité diversité et inclusion</h2>
      <DateDropdown
        label="Quelle est la date de début ?"
        value={form.startDateTime}
        onChange={val => setForm(prev => ({ ...prev, startDateTime: val }))}
      />
      <DateDropdown
        label="Quelle est la date de fin ?"
        value={form.endDateTime}
        onChange={val => setForm(prev => ({ ...prev, endDateTime: val }))}
      />
      {errors.sumMenAndWomen && <div className="text-red-600 text-sm">{errors.sumMenAndWomen}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Quel est le nombre total d'employés ?
          </label>
          <input type="number" name="totalEmployees" value={form.totalEmployees} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Combien d'employés s'identifient comme hommes ?
          </label>
          <input type="number" name="employeesIdentifyingAsMen" value={form.employeesIdentifyingAsMen} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Combien d'employés s'identifient comme femmes ?
          </label>
          <input type="number" name="employeesIdentifyingAsWomen" value={form.employeesIdentifyingAsWomen} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Combien d'employés s'identifient comme un genre autre ?
          </label>
          <input type="number" name="employeesIdentifyingAsOther" value={form.employeesIdentifyingAsOther} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Combien d'employés s'identifient comme minorité visible ?
          </label>
          <input type="number" name="employeesIdentifyingAsVisibleMinority" value={form.employeesIdentifyingAsVisibleMinority} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Combien d'employés s'identifient comme personnes handicapées ?
          </label>
          <input type="number" name="employeesIdentifyingAsPersonWithDisabilities" value={form.employeesIdentifyingAsPersonWithDisabilities} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
      </div>

      {/* management */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/** autres champs analogues */}
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Combien d'hommes occupent des postes de direction ?
          </label>
          <input type="number" name="employeesIdentifyingAsMenInManagement" value={form.employeesIdentifyingAsMenInManagement} onChange={handleChange} className="w-full border rounded p-2" />
          {errors.menInManagement && <div className="text-red-600 text-xs">{errors.menInManagement}</div>}
        </div>
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Combien de femmes occupent des postes de direction ?
          </label>
          <input type="number" name="employeesIdentifyingAsWomenInManagement" value={form.employeesIdentifyingAsWomenInManagement} onChange={handleChange} className="w-full border rounded p-2" />
          {errors.womenInManagement && <div className="text-red-600 text-xs">{errors.womenInManagement}</div>}
        </div>
        {/* ajouter les autres validations similaires */}
      </div>

      <div>
        <label className="text-sm font-medium text-[#1D4E89]">
          Quel est le nombre d'incidents de discrimination ou de harcèlement ?
        </label>
        <input type="number" name="discriminationHarassmentIncidentsCount" value={form.discriminationHarassmentIncidentsCount} onChange={handleChange} className="w-full border rounded p-2" />
      </div>

      <Dropdown
        label="Avez vous des initiatives pour l'équité, la diversité et l'inclusion sont mises en place ?"
        options={optionsInitiatives}
        value={form.equityDiversityInclusionInitiatives}
        onChange={val => setForm(prev => ({ ...prev, equityDiversityInclusionInitiatives: val }))}
      />
      {form.equityDiversityInclusionInitiatives && form.equityDiversityInclusionInitiatives !== "No" && (
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Veuillez lister les différentes initiatives que votre entreprise met en œuvre pour promouvoir l’EDI telles que les formations, les analyses d’écart de rémunération, les implications dans divers organismes..etc
          </label>
          <textarea name="facultativeInitiativeAdditionalInformation" rows="3" value={form.facultativeInitiativeAdditionalInformation} onChange={handleChange} className="w-full border rounded p-2"></textarea>
        </div>
      )}

      <Dropdown
        label="Existe-t-il une politique formalisée d'équité, diversité et inclusion ?"
        options={optionsPolicy}
        value={form.formalizedEquityDiversityInclusionPolicy}
        onChange={val => setForm(prev => ({ ...prev, formalizedEquityDiversityInclusionPolicy: val }))}
      />
      {form.formalizedEquityDiversityInclusionPolicy && form.formalizedEquityDiversityInclusionPolicy !== "No" && (
        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Avez-vous des informations supplémentaires sur la politique formalisée d'équité, diversité et inclusion ?
          </label>
          <textarea name="facultativePolicyAdditionalInformation" rows="3" value={form.facultativePolicyAdditionalInformation} onChange={handleChange} className="w-full border rounded p-2"></textarea>
        </div>
      )}

      <div className="flex justify-end">
        <button onClick={handleSubmit} className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded-md text-sm">
          Soumettre
        </button>
      </div>
    </div>
  );
}
