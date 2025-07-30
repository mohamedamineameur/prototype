import { HandHeart, DollarSign, Info } from "lucide-react";

const SocialCommunityPhilanthropySummary = () => {
  const data = {
    numberOfVolunteerHours: 340,
    cashDonations: 12500,
    volunteerAndCommunityEngagementInitiativesDescription:
      "L’entreprise a participé à 3 collectes alimentaires, soutenu 2 associations locales et organisé une journée solidaire avec ses employés.",
    facultativeAdditionalInformation:
      "Une nouvelle collaboration avec un refuge pour femmes est en discussion pour l’année prochaine.",
  };

  const Stat = ({ icon, label, value, unit }) => (
    <div className="bg-white p-4 rounded-xl shadow border border-gray-100 flex items-center gap-4">
      <div className="p-2 rounded-full bg-[#1D4E89]/10 text-[#1D4E89]">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="text-2xl font-bold text-[#1D4E89]">
          {value} {unit}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-8 font-['Archivo']">
      <h2 className="text-3xl font-bold text-[#1D4E89]">💡 Résumé - Engagement communautaire</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Stat icon={<HandHeart size={20} />} label="Heures de bénévolat" value={data.numberOfVolunteerHours} unit="h" />
        <Stat icon={<DollarSign size={20} />} label="Dons en argent" value={data.cashDonations} unit="€" />
      </div>

      <div className="bg-white p-6 rounded-xl border shadow text-sm space-y-2 text-gray-700">
        <h3 className="text-lg font-semibold text-[#1D4E89]">🎯 Initiatives réalisées</h3>
        <p>{data.volunteerAndCommunityEngagementInitiativesDescription}</p>
      </div>

      {data.facultativeAdditionalInformation && (
        <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-700 border border-gray-200">
          <strong className="text-[#1D4E89] flex items-center gap-2">
            <Info size={16} /> Informations supplémentaires
          </strong>
          <p className="mt-2">{data.facultativeAdditionalInformation}</p>
        </div>
      )}
    </div>
  );
};

export default SocialCommunityPhilanthropySummary;
