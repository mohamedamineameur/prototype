import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/side-bare";
import Dashboard from "./pages/Dashboard";
import RapportsESG from "./pages/RapportsESG";
import Batiments from "./pages/Batiments";
import Vehicules from "./pages/Voitures";
import DonneesSociales from './pages/Social'
import Gouvernance from './pages/Gouvernance';
import Accueil from './pages/Acceuil';

const base = import.meta.env.BASE_URL; // 🔥 Import de la base depuis Vite

function App() {
  return (
    <Router basename={base}> {/* ✅ Appliquer la base ici */}
      <div className="flex h-screen overflow-hidden font-archivo">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-white">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/rapports" element={<RapportsESG />} />
            <Route path="/batiments" element={<Batiments />} />
            <Route path="/vehicules" element={<Vehicules />} />
            <Route path="/donnees-sociales" element={<DonneesSociales />} />
            <Route path="/gouvernances" element={<Gouvernance />} />

            {/* Ajoute d'autres routes ici */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
