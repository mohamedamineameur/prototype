import { useState, useEffect, useRef } from "react";
import questions from "../assets/questions.json";
import { CheckCircle } from "lucide-react";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

const Questionnaire = () => {
  const [current, setCurrent] = useState(0);
  const [responses, setResponses] = useState({});
  const [selected, setSelected] = useState(null);
  const cardRef = useRef(null); // ref sur la carte blanche

  const question = questions[current];
  const isLast = current === questions.length - 1;

  const handleSelect = (score) => setSelected(score);

  const handleNext = () => {
    setResponses({ ...responses, [current]: selected });
    setSelected(null);
    if (!isLast) setCurrent(current + 1);
    else alert("Questionnaire terminé !");
  };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [current]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 sm:px-6 py-6 font-archivo overflow-y-auto">
      <div
        ref={cardRef}
        className="bg-white w-full max-w-4xl mx-auto rounded-3xl shadow-xl p-8 sm:p-10 space-y-8"
      >
        <p className="text-sm font-semibold text-[#1D4E89] uppercase tracking-wide">
          Question {current + 1} / {questions.length}
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#1D4E89] leading-snug">
          {question.Question.fr}
        </h2>

        <div className="flex flex-col gap-4">
          {question.Réponses.slice(0, 6).map((rep, idx) => {
            const isSelected = selected === rep.Score;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(rep.Score)}
                className={`relative w-full rounded-xl px-5 py-4 text-left font-medium text-base flex items-center gap-3 border transition-all ${
                  isSelected
                    ? "bg-[#1D4E89] text-white border-[#1D4E89]"
                    : "bg-white text-[#1D4E89] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold border ${
                    isSelected
                      ? "bg-white text-[#1D4E89]"
                      : "text-[#1D4E89] border-[#1D4E89]"
                  }`}
                >
                  {LETTERS[idx]}
                </div>
                {rep.Texte.fr}
                {isSelected && (
                  <CheckCircle className="absolute right-4 text-white" size={20} />
                )}
              </button>
            );
          })}
        </div>

        <div className="pt-4 text-right">
          <button
            disabled={selected === null}
            onClick={handleNext}
            className={`px-6 py-3 rounded-full font-semibold text-white transition ${
              selected === null
                ? "bg-[#1D4E89]/50 cursor-not-allowed"
                : "bg-[#1D4E89] hover:bg-[#163b68]"
            }`}
          >
            {isLast ? "Terminer" : "Suivant"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
