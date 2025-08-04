import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/DashboardMobile";
import RapportsESG from "./pages/RapportsESGMobile";
import Batiments from "./pages/BatimentsMobile";
import { Menu } from "lucide-react";
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
import Questionnaire from "./pages/Questionnaire";
import ESGScores from "./pages/ESGScores";
import UserManagement from "./pages/UserManagement";
import ChangePassword from "./pages/ChangePassword";
import ChangeLanguage from "./pages/ChangeLanguage";
import SocialWellBeingForm from "./pages/SocialWellBeingForm";
import GovernanceEthicsForm from "./pages/GovernanceEthicsForm";
import CompanyForm from "./pages/CompanyForm";
import MyTest from "./pages/test";
import GovernanceSummary from "./pages/GovernanceSummary";
import SocialWellBeingSummary from "./pages/SocialWellBeingSummary";
import SocialWorkingConditionsForm from "./pages/SocialWorkingConditionsForm";
import SocialWorkingConditionsSummary from "./pages/SocialWorkingConditionsSummary";
import SocialEquityInclusionForm from "./pages/SocialEquityInclusionForm";
import SocialEquityInclusionSummary from "./pages/SocialEquityInclusionSummary";
import SocialCommunityPhilanthropyForm from "./pages/SocialCommunityPhilanthropyForm";
import SocialCommunityPhilanthropySummary from "./pages/SocialCommunityPhilanthropySummary";
import GovernanceStructureForm from "./pages/GovernanceStructureForm";
import GovernanceStructureSummary from "./pages/GovernanceStructureSummary";
import GovernanceRiskResilienceForm from "./pages/GovernanceRiskResilienceForm";
import GovernanceRiskResilienceSummary from "./pages/GovernanceRiskResilienceSummary";
import GovernanceEsgStrategyLeadershipForm from "./pages/GovernanceEsgStrategyLeadershipForm";
import GovernanceEsgStrategyLeadershipSummary from "./pages/GovernanceEsgStrategyLeadershipSummary";
import VehicleForm from "./pages/VehicleForm";
import VehicleConsumptionForm from "./pages/VehicleConsumptionForm";
import BuildingForm from "./pages/BuildingForm";
import BuildingFuelConsumptionForm from "./pages/BuildingFuelConsumptionForm";
import BuildingElectricityConsumptionForm from "./pages/BuildingElectricityConsumptionForm";
import BuildingWaterConsumptionForm from "./pages/BuildingWaterConsumptionForm";
import BuildingWasteForm from "./pages/BuildingWasteForm";
import EnvironnementSummary from "./pages/EnvironnementSummary";
import StepperForm from "./pages/StepperForm";
import ESGplus from "./pages/ESGPlus";
import AccountWithUsers from "./pages/AccountWithUsers";

import AccountManagement from "./pages/AccountManagement";
import SidebarAdminMobile from "./components/SidebarAdminMobile";
import RecommendationPage from "./pages/RecommendationPage";
import PageEnConstruction from "./pages/PageEnConstruction";

const base = import.meta.env.BASE_URL;

function LayoutMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
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
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
<div className="flex min-h-screen font-archivo bg-[#F8FAFC]">
{/* Sidebar */}
      {!hideSidebar && (
        <>
          <div
            className={`fixed z-40 inset-y-0 left-0 w-64 bg-[#1D4E89] transform transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {isAdminRoute ? (
              <SidebarAdminMobile onClose={() => setMenuOpen(false)} />
            ) : (
              <Sidebar onClose={() => setMenuOpen(false)} />
            )}
          </div>

          {menuOpen && (
            <div
              className="fixed inset-0 z-30 bg-black bg-opacity-40"
              onClick={() => setMenuOpen(false)}
            ></div>
          )}
        </>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-white relative z-10">
      {/* Topbar */}
        {!hideSidebar && (
          <div className="sticky top-0 z-20 bg-white flex items-center justify-between px-4 py-3 border-b shadow-sm">
          <button onClick={() => setMenuOpen(true)}>
              <Menu size={24} className="text-[#1D4E89]" />
            </button>
            <img src={`${base}logo-blue.png`} alt="Logo" className="w-32" />
          </div>
        )}

        {/* Routes */}
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
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/esg-scores" element={<ESGScores />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/change-language" element={<ChangeLanguage />} />
          <Route path="/social-well-being" element={<SocialWellBeingForm />} />
          <Route path="/governance-ethics" element={<GovernanceEthicsForm />} />
          <Route path="/company-form" element={<CompanyForm />} />
          <Route path="/test" element={<MyTest />} />
          <Route path="/hh" element={<GovernanceSummary />} />
          <Route path="/a" element={<SocialWellBeingSummary />} />
          <Route path="/social-working-conditions" element={<SocialWorkingConditionsForm />} />
          <Route path="/b" element={<SocialWorkingConditionsSummary />} />
          <Route path="/c" element={<SocialEquityInclusionForm />} />
          <Route path="/d" element={<SocialEquityInclusionSummary />} />
          <Route path="/e" element={<SocialCommunityPhilanthropyForm />} />          
          <Route path="/f" element={<SocialCommunityPhilanthropySummary />} />
          <Route path="/g" element={<GovernanceStructureForm />} />
          <Route path="/h" element={<GovernanceStructureSummary />} />
          <Route path="/i" element={<GovernanceRiskResilienceForm />} />
          <Route path="/j" element={<GovernanceRiskResilienceSummary />} />
          <Route path="/k" element={<GovernanceEsgStrategyLeadershipForm />} />
          <Route path="/l" element={<GovernanceEsgStrategyLeadershipSummary />} />
          <Route path="/m" element={<VehicleForm />} />
          <Route path="/n" element={<VehicleConsumptionForm />} />
          <Route path="/o" element={<BuildingForm />} />
          <Route path="/p" element={<BuildingFuelConsumptionForm />} />
          <Route path="/q" element={<BuildingElectricityConsumptionForm />} />
          <Route path="/r" element={<BuildingWaterConsumptionForm />} />           
          <Route path="/s" element={<BuildingWasteForm />} />       
          <Route path="/t" element={<EnvironnementSummary />} />
          <Route path="/stepper-form" element={<StepperForm />} />
          <Route path="/esg-plus" element={<ESGplus />} />
          <Route path="/admin/account-management" element={<AccountManagement />} />
          
          {/* Admin routes */}
          <Route path="/admin/account-management/account-with-users" element={<AccountWithUsers />} />
          <Route path="/recommandations-ia" element={<RecommendationPage />} />
          <Route path="/admin/page-en-construction1" element={<PageEnConstruction />} />
          <Route path="/admin/page-en-construction2" element={<PageEnConstruction />} />
          <Route path="/admin/page-en-construction3" element={<PageEnConstruction />} />
          <Route path="/admin/page-en-construction4" element={<PageEnConstruction />} />
          <Route path="/admin/page-en-construction5" element={<PageEnConstruction />} />    
          <Route path="/admin/page-en-construction6" element={<PageEnConstruction />} />
          <Route path="/admin/page-en-construction7" element={<PageEnConstruction />} />
          
          
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

function AppMobile() {
  return (
    <Router basename={base}>
      <LayoutMobile />
    </Router>
  );
}

export default AppMobile;
