import { useState } from "react";

const AideSupport = () => {
  const [form, setForm] = useState({ nom: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Ici tu pourrais envoyer les données à une API
    console.log("Formulaire envoyé:", form);
  };

  return (
    <main className="p-4 sm:p-6 font-['Archivo'] bg-white min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1D4E89] mb-2">
          Aide et Support
        </h1>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Besoin d'assistance ? Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement.
        </p>

        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-xl shadow">
            Merci pour votre message. Nous vous contacterons bientôt !
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-6 rounded-xl shadow space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-[#1D4E89] mb-1">
                Nom
              </label>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D4E89] mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1D4E89] mb-1">
                Message / Problème rencontré
              </label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B2CA]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#00B2CA] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#0092a8] transition"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default AideSupport;
