const Documentation = () => {
    const sections = [
      {
        title: "Introduction",
        content:
          "Bienvenue dans notre documentation ESG. Cette section offre une vue d'ensemble des fonctionnalités principales et des objectifs de notre application."
      },
      {
        title: "Navigation",
        content:
          "Utilisez la barre latérale pour accéder aux différentes sections : Accueil, Tableaux de bord, Rapports, Bâtiments, Véhicules, Données sociales et Gouvernance."
      },
      {
        title: "Saisie des données",
        content:
          "Chaque module vous permet d'ajouter, modifier ou supprimer des données. Assurez-vous de sauvegarder vos modifications pour les voir apparaître dans les rapports."
      },
      {
        title: "Visualisation",
        content:
          "Les tableaux de bord fournissent des représentations graphiques de vos données. Ces graphiques sont dynamiques et s'ajustent automatiquement à vos entrées."
      },
      {
        title: "Exportation",
        content:
          "Les rapports peuvent être exportés en format PDF ou Excel. Cliquez simplement sur l'icône de téléchargement dans la section Rapports."
      },
      {
        title: "Sécurité et confidentialité",
        content:
          "Vos données sont stockées de manière sécurisée. Seuls les utilisateurs autorisés peuvent y accéder grâce à notre système d'authentification renforcé."
      },
    ];
  
    return (
      <main className="p-4 sm:p-6 bg-white font-['Archivo'] space-y-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1D4E89] mb-2">
            📘 Documentation ESG
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Guide utilisateur pour comprendre et maîtriser les fonctionnalités clés.
          </p>
        </header>
  
        {sections.map((section, index) => (
          <section key={index} className="bg-gray-50 p-5 rounded-xl shadow-inner">
            <h2 className="text-2xl font-semibold text-[#1D4E89] mb-2">
              {section.title}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {section.content}
            </p>
          </section>
        ))}
      </main>
    );
  };
  
  export default Documentation;
  