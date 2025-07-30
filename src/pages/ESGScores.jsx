import React from "react";

const scores = [
  {
    title: "🌱 Environnement",
    score: 100,
    color: "#7DCFB6",
    description:
      "Très bon (80-100) : Vous avez une excellente gestion environnementale. Continuez à maintenir ces pratiques exemplaires et partagez vos meilleures pratiques avec d'autres entreprises.",
  },
  {
    title: "🧑‍🤝‍🧑 Social",
    score: 100,
    color: "#F79256",
    description:
      "Très bon (80-100) : Votre entreprise excelle dans les pratiques sociales. Maintenez ces standards élevés et explorez de nouvelles façons d'impliquer vos employés et votre communauté.",
  },
  {
    title: "🏛 Gouvernance",
    score: 72.5,
    color: "#00B2CA",
    description:
      "Bon (60-79) : Vous avez une bonne gouvernance. Envisagez de renforcer vos pratiques et investissez dans des formations continues pour votre équipe de direction.",
  },
  {
    title: "🌐 Global",
    score: 80.1,
    color: "#1D4E89",
    description:
      "Très bon (80-100) : Votre entreprise est un leader en matière de durabilité et de responsabilité sociale. Vous démontrez que la durabilité peut aller de pair avec la performance économique.",
  },
];

const ScoreCircle = ({ value, color }) => {
  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full"
        style={{
          background: `conic-gradient(${color} ${value * 3.6}deg, #e5e7eb ${value * 3.6}deg)`,
        }}
      ></div>
      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center text-[#1D4E89] text-lg font-bold">
        {value}%
      </div>
    </div>
  );
};

const ESGScores = () => {
  return (
    <main className="px-4 py-6 sm:px-8 sm:py-10 bg-white font-['Archivo'] space-y-12">
      <header className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D4E89]">
          Vos Scores ESG
        </h1>
        <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
          Analyse de vos scores et recommandations pour améliorer vos pratiques en durabilité,
          responsabilité sociale et gouvernance.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scores.map((item, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-[#F9FAFB] rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
          >
            <ScoreCircle value={item.score} color={item.color} />
            <div className="text-center sm:text-left space-y-2">
              <h2 className="text-xl font-semibold text-[#1D4E89]">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ESGScores;
