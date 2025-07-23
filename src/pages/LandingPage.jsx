const BASE = import.meta.env.BASE_URL;

export default function LandingPage() {
    const navigate = (link) => () => {
        window.location.href = `${BASE}${link}`;
    };
    
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 font-['Archivo'] text-white text-center">
      <img src={`${BASE}logo-color.png`} alt="Logo" style={{ maxWidth: '480px', marginBottom: 40 }} />

      <p className="text-[#7DCFB6]  max-w-md mb-10 text-lg">
        Faites de la durabilité votre plus grand atout
      </p>

      <div className="flex gap-12 flex-wrap justify-center" >
        <button className="bg-[#1D4E89] hover:bg-[#163b66] text-white  py-3 w-40 rounded-xl transition duration-200" onClick={navigate('register')}>
          S'inscrire
        </button>
        <button className="bg-[#00B2CA] hover:bg-[#0099b0] text-white  py-3 w-40 rounded-xl transition duration-200" onClick={navigate('login')}>
          Se connecter
        </button>
      </div>
    </div>
  );
}
