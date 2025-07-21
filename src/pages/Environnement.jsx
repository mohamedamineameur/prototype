import { Car, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Environnement = () => {
  const navigate = useNavigate();

  const Card = ({ icon, title, description, onClick }) => (
    <div
      onClick={onClick}
      className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-start gap-4 cursor-pointer hover:shadow-lg transition duration-300 border border-[#E0E7FF]"
    >
      <div className="bg-[#E0F7FA] p-3 rounded-full text-[#1D4E89]">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-[#1D4E89]">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );

  return (
    <main className="p-4 sm:p-6 bg-white font-['Archivo'] space-y-8">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1D4E89] mb-2">
          🌍 Module Environnement
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Accédez rapidement aux informations environnementales liées aux bâtiments et aux véhicules.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card
          icon={<Car size={28} />}
          title="Véhicules"
          description="Consultez les données environnementales liées à votre flotte de véhicules."
          onClick={() => navigate("/vehicules")}
        />

        <Card
          icon={<Building size={28} />}
          title="Bâtiments"
          description="Explorez les indicateurs environnementaux associés à vos bâtiments."
          onClick={() => navigate("/batiments")}
        />
      </div>
    </main>
  );
};

export default Environnement;