import { useState } from "react";
import Dropdown from "../components/Dropdown";
import DateDropdown from "../components/DateDropdown";

const countries = {
  US: "États-Unis",
  CA: "Canada",
};

const states = {
  US: {
    CA: "Californie",
    NY: "New York",
    TX: "Texas",
    FL: "Floride",
    IL: "Illinois",
  },
  CA: {
    QC: "Québec",
    ON: "Ontario",
    BC: "Colombie-Britannique",
    AB: "Alberta",
    NS: "Nouvelle-Écosse",
  },
};

const employeeRanges = {
  "1_10": "1 à 10 employés",
  "11_50": "11 à 50 employés",
  "51_200": "51 à 200 employés",
  "201_500": "201 à 500 employés",
  "501_plus": "501+ employés",
};





export default function CompanyFormFr() {
  const [form, setForm] = useState({
    startDateTime: "",
    endDateTime: "",
    organizationName: "",
    country: "",
    state: "",
    employeeCountRange: "",
    mission: "",
    activities: "",
    client: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Données soumises :", form);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-md font-['Archivo']">
              <h2 className="text-2xl font-bold text-[#1D4E89]"> Ajout d’une entreprise</h2>

      <p className="text-sm text-gray-600 mb-6">
        Pour quelle période voulez-vous saisir vos informations ESG ? (Habituellement, la périodicité du rapport ESG coïncide avec votre année fiscale. Cela permet d'aligner les données ESG sur vos rapports financiers et de faciliter la cohérence et la comparabilité des informations)
      </p>

      <div className="grid grid-cols-1 gap-4">
        <DateDropdown
          label="Date de début de la période"
          value={form.startDateTime}
          onChange={(val) => setForm((prev) => ({ ...prev, startDateTime: val }))}
        />

        <DateDropdown
          label="Date de fin de la période"
          value={form.endDateTime}
          onChange={(val) => setForm((prev) => ({ ...prev, endDateTime: val }))}
        />

        <hr className="my-4" />
        <h2 className="text-lg font-semibold text-[#1D4E89]">Veuillez saisir quelques données sur votre organisation</h2>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Nom de l'organisation</label>
          <input
            type="text"
            name="organizationName"
            value={form.organizationName}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <Dropdown
          label="Sélectionner un pays"
          value={form.country}
          options={countries}
          onChange={(val) => setForm((prev) => ({ ...prev, country: val, state: "" }))}
        />

        {form.country && (
          <Dropdown
            label="État ou Province"
            value={form.state}
            options={states[form.country]}
            onChange={(val) => setForm((prev) => ({ ...prev, state: val }))}
          />
        )}

        <Dropdown
          label="Taille de l'entreprise"
          value={form.employeeCountRange}
          options={employeeRanges}
          onChange={(val) => setForm((prev) => ({ ...prev, employeeCountRange: val }))}
        />

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">Mission de l’entreprise</label>
          <textarea
            name="mission"
            value={form.mission}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="2"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Décrivez les activités de l’entreprise : types de services/produits offerts, type d’installations, mode de production…
          </label>
          <textarea
            name="activities"
            value={form.activities}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="3"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#1D4E89]">
            Décrivez les clients actuels et cibles : leur type (individus, entreprises, gouvernements), leur emplacement géographique (pays)
          </label>
          <textarea
            name="client"
            value={form.client}
            onChange={handleChange}
            className="w-full border rounded p-2"
            rows="3"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit}
          className="bg-[#00B2CA] hover:bg-[#1D4E89] text-white px-6 py-2 rounded-md text-sm"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}
