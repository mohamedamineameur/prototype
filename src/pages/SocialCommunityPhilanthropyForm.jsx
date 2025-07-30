import { useState } from "react";
import DateDropdown from "../components/DateDropdown";

export default function SocialCommunityPhilanthropyForm() {
  const [form, setForm] = useState({
    startDateTime: "",
    endDateTime: "",
    numberOfVolunteerHours: "",
    cashDonations: "",
    volunteerAndCommunityEngagementInitiativesDescription: "",
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
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo'] space-y-6">
      <h2 className="text-2xl font-bold text-[#1D4E89]">🌍 Activités communautaires et philanthropiques</h2>

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
          <label className="text-sm font-medium text-[#1D4E89]">Quel est le nombre d'heures de bénévolat ?</label>
          <input
            type="number"
            name="numberOfVolunteerHours"
            value={form.numberOfVolunteerHours}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Quel est le montant des dons en argent ?</label>
          <input
            type="number"
            name="cashDonations"
            value={form.cashDonations}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Décrivez les initiatives de bénévolat et d'engagement communautaire.
          </label>
          <textarea
            name="volunteerAndCommunityEngagementInitiativesDescription"
            value={form.volunteerAndCommunityEngagementInitiativesDescription}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="4"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Avez-vous des informations supplémentaires facultatives à fournir ?
          </label>
          <textarea
            name="facultativeAdditionalInformation"
            value={form.facultativeAdditionalInformation}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="3"
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
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
