import { useState } from "react";
import Dropdown from "../components/Dropdown";
import DateDropdown from "../components/DateDropdown";

export default function GovernanceStructureForm() {
  const initial = {
    startDateTime: "",
    endDateTime: "",
    oversightCommittee: "",
    totalCommitteeMembers: "",
    independentCommitteeMembers: "",
    femaleCommitteeMembers: "",
    governanceStructureDescription: "",
    committeeDiversityDescription: "",
  };
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  const options = {
    Yes: "Oui",
    No: "Non",
    "In progress": "En cours",
  };

  const validate = () => {
    const e = {};
    const total = Number(form.totalCommitteeMembers) || 0;
    if (Number(form.independentCommitteeMembers) > total) {
      e.independentError =
        "Le nombre de membres indépendants ne peut pas être supérieur au nombre total de membres.";
    }
    if (Number(form.femaleCommitteeMembers) > total) {
      e.femaleError =
        "Le nombre de femmes ne peut pas être supérieur au nombre total de membres.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    console.log("Formulaire soumis :", form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md space-y-6 font-['Archivo']">
      <h2 className="text-2xl font-bold text-[#1D4E89]">
        Structure de gouvernance
      </h2>

      <DateDropdown
        label="Date de début"
        value={form.startDateTime}
        onChange={(val) =>
          setForm((prev) => ({ ...prev, startDateTime: val }))
        }
      />
      <DateDropdown
        label="Date de fin"
        value={form.endDateTime}
        onChange={(val) =>
          setForm((prev) => ({ ...prev, endDateTime: val }))
        }
      />

      <Dropdown
        label="Avez-vous mis en place un comité de surveillance/conseil d’administration ?"
        options={options}
        value={form.oversightCommittee}
        onChange={(val) =>
          setForm((prev) => ({ ...prev, oversightCommittee: val }))
        }
      />

      {form.oversightCommittee === "Yes" && (
        <>
          <div>
            <label className="text-sm font-medium text-[#1D4E89]">
              Quel est le nombre total de personnes qui siègent sur ce comité ?
            </label>
            <input
              type="number"
              name="totalCommitteeMembers"
              value={form.totalCommitteeMembers}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#1D4E89]">
              Quel est le nombre de membres indépendants sur ce comité ? (un
              membre indépendant n’a pas de relation avec l’entreprise en tant
              qu’employé, actionnaire ou autre)
            </label>
            <input
              type="number"
              name="independentCommitteeMembers"
              value={form.independentCommitteeMembers}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.independentError && (
              <div className="text-red-600 text-xs mt-1">
                {errors.independentError}
              </div>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-[#1D4E89]">
              Quel est le nombre de femmes sur ce comité ?
            </label>
            <input
              type="number"
              name="femaleCommitteeMembers"
              value={form.femaleCommitteeMembers}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.femaleError && (
              <div className="text-red-600 text-xs mt-1">
                {errors.femaleError}
              </div>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-[#1D4E89]">
              Décrivez la structure de gouvernance mise en place incluant les
              responsabilités des membres, la fréquence et le déroulement des
              réunions…etc.
            </label>
            <textarea
              name="governanceStructureDescription"
              rows="3"
              value={form.governanceStructureDescription}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#1D4E89]">
              Décrivez comment les membres du comité se complètent et comment
              leur diversité aide l’entreprise à prendre les meilleures
              décisions (diversité de genre, compétence, âge….etc).
            </label>
            <textarea
              name="committeeDiversityDescription"
              rows="3"
              value={form.committeeDiversityDescription}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        </>
      )}

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
