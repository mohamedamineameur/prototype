import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/side-bare";
import Dashboard from "./pages/Dashboard";
import RapportsESG from "./pages/RapportsESG";
import Batiments from "./pages/Batiments";
import Vehicules from "./pages/Voitures";
import DonneesSociales from './pages/Social';
import Gouvernance from './pages/Gouvernance';
import Accueil from './pages/Acceuil';
import LoginForm from "./pages/Login";
import RegisterForm from './pages/Inscription';
import ResetPassword from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";
import OTPPage from "./pages/OTPPage";
import Utilisateurs from "./components/Utilisateurs";
import Documentation from "./pages/Documentation";
import AideSupport from "./pages/AideSupport";
import Parametres from "./pages/Parametres";
import Environnement from "./pages/Environnement";
import LandingPage from "./pages/LandingPage";

const base = import.meta.env.BASE_URL;

function Layout() {
  const location = useLocation();
  const noSidebarRoutes = [
    "/login",
    "/register",
    "/reset-password",
    "/new-password",
    "/otp",
    "/landing"
  ];

  const hideSidebar = noSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex h-screen overflow-hidden font-archivo">
      {!hideSidebar && <Sidebar />}
      <div className="flex-1 overflow-y-auto bg-white">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rapports" element={<RapportsESG />} />
          <Route path="/batiments" element={<Batiments />} />
          <Route path="/vehicules" element={<Vehicules />} />
          <Route path="/donnees-sociales" element={<DonneesSociales />} />
          <Route path="/gouvernances" element={<Gouvernance />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/otp" element={<OTPPage />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/aide" element={<AideSupport />} />
          <Route path="/settings" element={<Parametres />} />
          <Route path="/environnement" element={<Environnement />} />
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename={base}>
      <Layout />
    </Router>
  );
}

export default App;
