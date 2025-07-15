import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/side-bare";
import Dashboard from "./pages/Dashboard";
import RapportsESG from "./pages/RapportsESG";
import Batiments from "./pages/Batiments";

const base = import.meta.env.BASE_URL; // 🔥 Import de la base depuis Vite

function App() {
  return (
    <Router basename={base}> {/* ✅ Appliquer la base ici */}
      <div className="flex h-screen overflow-hidden font-archivo">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-white">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rapports" element={<RapportsESG />} />
            <Route path="/batiments" element={<Batiments />} />
            {/* Ajoute d'autres routes ici */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
