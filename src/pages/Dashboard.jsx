import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Environnement from "./Environnement";
import Social from "./Social";
import Gouvernance from "./Gouvernance";

const Section = ({ title, children, open, onToggle }) => (
  <section className="bg-white rounded-xl shadow-md overflow-hidden border">
    <button
      onClick={onToggle}
      className="w-full px-4 py-3 bg-gray-100 flex justify-between items-center text-left font-bold text-[#1D4E89]"
    >
      {title}
      {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
    </button>
    {open && <div className="p-4">{children}</div>}
  </section>
);

export default function Dashboard() {
  const [openSection, setOpenSection] = useState("env");

  const toggle = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto my-6 space-y-4 font-['Archivo']">
      <h1 className="text-3xl font-bold text-[#1D4E89] mb-6">Tableau de bord ESG</h1>
      <Section
        title="🌱 Environnement"
        open={openSection === "env"}
        onToggle={() => toggle("env")}
      >
        <Environnement />
      </Section>

      <Section
        title="👥 Social"
        open={openSection === "soc"}
        onToggle={() => toggle("soc")}
      >
        <Social />
      </Section>

      <Section
        title="🏛 Gouvernance"
        open={openSection === "gov"}
        onToggle={() => toggle("gov")}
      >
        <Gouvernance />
      </Section>
    </div>
  );
}
