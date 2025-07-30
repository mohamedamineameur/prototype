import { useState } from "react";
import { ArrowDown } from "lucide-react";
import SocialWellBeingSummary from "./SocialWellBeingSummary";
import SocialWorkingConditionsSummary from "./SocialWorkingConditionsSummary";
import SocialEquityInclusionSummary from "./SocialEquityInclusionSummary";
import SocialCommunityPhilanthropySummary from "./SocialCommunityPhilanthropySummary";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      <div
        className="p-4 cursor-pointer flex justify-between items-center text-[#1D4E89]"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-lg">{title}</span>
        <ArrowDown className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </div>
      {open && <div className="p-4 border-t space-y-2">{children}</div>}
    </div>
  );
};

export default function SocialSummary() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6 font-['Archivo']">
      <h2 className="text-3xl font-bold text-[#1D4E89]">🧑‍🤝‍🧑 Résumé Social</h2>

      <Accordion title="😊 Bien-être au travail">
        <SocialWellBeingSummary />
      </Accordion>

      <Accordion title="🛠️ Conditions de travail">
        <SocialWorkingConditionsSummary />
      </Accordion>

      <Accordion title="⚖️ Équité et inclusion">
        <SocialEquityInclusionSummary />
      </Accordion>

      <Accordion title="🌍 Communauté et philanthropie">
        <SocialCommunityPhilanthropySummary />
      </Accordion>
    </div>
  );
}
