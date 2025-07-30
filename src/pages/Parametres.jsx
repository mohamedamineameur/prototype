import ChangePassword from "./ChangePassword";
import ChangeLanguage from "./ChangeLanguage";
import UserManagement from "./UserManagement";

export default function Parametres() {
  return (
    <main className="p-4 sm:p-6 font-archivo bg-white min-h-screen max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1D4E89]">
          Paramètres du compte
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Gérez vos préférences personnelles et l'administration des utilisateurs.
        </p>
      </header>

      <section className="space-y-6">
        <Accordion title="Modifier le mot de passe">
          <ChangePassword />
        </Accordion>

        <Accordion title="Changer de langue">
          <ChangeLanguage />
        </Accordion>

        <Accordion title="Gestion des utilisateurs">
          <UserManagement />
        </Accordion>
      </section>
    </main>
  );
}

function Accordion({ title, children }) {
  return (
    <details className="group border border-[#E5EAF0] rounded-2xl overflow-hidden bg-[#F9FBFF]">
      <summary className="px-5 py-4 cursor-pointer text-[#1D4E89] font-semibold text-base flex items-center justify-between hover:bg-[#EEF5FB] transition">
        {title}
        <span className="transition-transform group-open:rotate-180 text-[#00B2CA]">
          ▾
        </span>
      </summary>
      <div className="border-t border-[#E5EAF0] px-5 py-6">{children}</div>
    </details>
  );
}
