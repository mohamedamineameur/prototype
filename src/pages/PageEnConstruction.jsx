const BASE = import.meta.env.BASE_URL;

export default function PageEnConstruction() {
  return (
    <div className="min-h-screen bg-white text-[#1D4E89] flex flex-col items-center justify-center px-6 py-12 font-['Archivo']">
      <img
        src={`${BASE}logo-white.png`}
        alt="Logo"
        className="w-24 sm:w-32 mb-6 animate-pulse"
      />
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">Page en cours de construction</h1>
      <p className="text-lg sm:text-xl text-[#1D4E89]/80 text-center max-w-xl">
        Nous travaillons actuellement sur cette section pour vous offrir une meilleure expérience. Merci de votre patience !
      </p>

      <div className="mt-10 relative w-full max-w-sm">
        <div className="absolute inset-0 rounded-xl bg-[#1D4E89]/10 backdrop-blur-sm animate-pulse" />
        <div className="relative z-10 p-4 border border-[#1D4E89]/20 rounded-xl text-center">
          <div className="text-sm mb-2">État d'avancement</div>
          <div className="w-full bg-[#1D4E89]/20 h-2 rounded-full overflow-hidden mb-1">
            <div className="bg-[#00B2CA] h-full w-[35%]" />
          </div>
          <span className="text-xs text-[#1D4E89]/80">35 %</span>
        </div>
      </div>

      
    </div>
  );
}
