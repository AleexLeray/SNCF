



(function(){
  var app = angular.module("shopApp", []);

  app.controller("StoreController", function($scope){
    this.products = livres;
  });

   var livres =[
    {
    image: "images/giratoire.png",
    titre: "Giratoire",
    resume: "Lui, Joaquin, est chargé de concevoir la décoration d’un rond-point pour une petite ville de la Drôme. Elle, Vivienne, est mandatée afin de l’assister – ou de le surveiller. Elle arrive de Paris en Mercedes et, sans se connaître, ils partent ensemble assister à la réunion du conseil municipal de La Virote, non loin de Montélimar. S’enchaînent alors, dans une sorte de road novel, multiples péripéties rencontrées par ces deux personnages que tout oppose et qui portent chacun un lourd secret. Leur aventure prendra une tournure inattendue. À la fois cocasse et tragique, en tout cas, hors du commun. Par sa construction originale, son écriture incisive, Giratoire confronte un homme et une femme obsédés par le désir de la fuite, le désir d’un lieu où la mort s’abolit dans la beauté.",
    prix: 500
    },
    {
    image: "images/lite.png",
    titre: "Passages à l'étranger",
    resume: "Il est passé par ici. Il est parfois repassé par là. Mais dans ces 'Passages à l'étranger', point d'extases touristiques, de prélassements farnientesques ensoleillés ni de cartes postales, mais des visions pétries d'imaginaire, des sensations chargées d'Histoire et de poussière. et la vie d'un homme qui passe. On y croise les ombres, les statues ou les âmes de Khéops, Agamemnon, Lénine, mais aussi Byron, Lovecraft, Tolstoï, et encore le Roi des Aulnes, Blake et Mortimer, le Golem, Enrico Macias, et bien sûr des rois, des princes, des tsars, des palais et des tombeaux, des dieux, et peut-être le Christ. De principautés en capitales, Gilles Ascaride traverse un monde où tout bouge sans que rien ne change vraiment... Spectateur plus qu'acteur, qui voit l'URSS glisser vers la Russie, la RFA-RDA vers l'Allemagne, le communisme vers le capitalisme néo-libéral, et les ailleurs exotiques vers le village global. Ni journal de voyage, ni recueil de souvenirs émus, ce livre offre, à travers le décentrement, un voyage dans l'homme, étranger à l'étranger autant qu'à lui-même.",
    prix: 231
    },
    {
    image: "images/polar.png",
    titre: "Recherche cadavre exquis",
    resume: "Un ténor du barreau est retrouvé mort dans son bureau. Mia Schmetz, jeune avocate obsessionnelle et déjantée, débute sa carrière au cabinet Cerdant-Ménard et associés. Elle qui a toujours rêvé de découvrir un cadavre répondant à de hautes exigences esthétiques est révoltée par la vision de son patron assassiné. La position grotesque dans laquelle il a été abandonné signe de la part de l’auteur un manque de goût impardonnable. Ainsi décide-t-elle de mener l’enquête, avec une obstination et une inconscience qui lui font parfois frôler les catastrophes. Mais jamais perdre son sens critique ou son humour.",
    prix: 957
    },
    {
    image: "images/plage.png",
    titre: "Une semaine légèrement agitée",
    resume: "Va-t-elle survivre à une (longue, très longue) semaine de vacances avec (toute) sa famille? C'est le casse-tête obsédant de Chelsea Benton depuis que sa mère a lancé sa bombe: les réunir tous en hôtel-club à Lanzarote pour fêter ses 60 ans. Bien sûr, Chelsea les aime! Mais... il y aura son petit neveu aux doigts poisseux (très mauvais pour les fringues de marque), sa nièce ado que tout « saoule », son grand-père adorable mais pas du genre à passer inaperçu, son beau-frère... Aucune chance de mettre à profit ces vacances forcées pour approfondir les relations avec le beau mec de l'avion (oui, celui qui est accompagné de la petite peste de 6 ans). Mais la goutte d'eau qui fait déborder la piscine, c'est que la soeur de Chelsea est de la partie. La fille parfaite, mariée, femme au foyer exemplaire dont Chelsea se demande si elle doit l'envier (elle, elle vient encore de se faire larguer) ou la plaindre (franchement, lâcherait-elle son job d'esclave dans un magazine glamour à Londres pour devenir épouse et maman? Elle se tâte...). Bref des vacances (horribles) sans surprise? Pas sûr. Des surprises, il va y en avoir au contraire. Et même, de vraies révélations ! A propos de l'auteur : Originaire de Gloucester, en Angleterre, Chrissie Manby écrit depuis l'âge de 14 ans. Après avoir étudié la psychologie à Oxford, elle a décidé de se consacrer à plein temps à l'écriture. Avec son regard à la fois critique et tendre, son humour détaché à l'anglaise, ainsi que sa plume incisive et légère, elle vous embarque dans des comédies qui bousculent personnages et idées reçues ! Une semaine légèrement agitée est son premier roman traduit en français.",
    prix: 500
    },
    {
    image: "images/scifi.png",
    titre: "La zizique de l'âme",
    resume: "Le mal. Le mal dans toute sa puissance. Le mal humain qui tourmente les hommes depuis déjà trop longtemps. Pourrait-on y faire face s’il se transformait en mauvaise énergie, en une sorte de plasma ? Une telle découverte, vous imaginez ? Encouragé par l’un de ses professeurs de littérature française, puis par un éditeur sympathisant, il a autoédité près d'une douzaine de récits. Alors les hommes pourraient s'en débarrasser. Mais comment ? L'espace est néant, un espace gigantesque rempli de vide au regard de la Terre si petite. Le mieux serait d'envoyer au plus vite cette énergie dans les confins des étoiles. Qui en pâtirait ? Voici tout l'enjeu : le mal, s'il n'est pas périssable, ne doit pas contaminer l'univers car il s'agirait bien là de la finitude de la beauté de nos origines toutes entières. Arnaud Hoffmann est né dans les Ardennes en 1974. De nature curieuse, il s’intéresse à tous les moyens d’expression – théâtre, musique, littérature. Il décroche un bac d'arts appliqués avant de suivre un cursus de lettres modernes à l'université.",
    prix: 500
    },
    {
    image: "images/lgdm.png",
    titre: "La guerre des mondes",
    resume: "Une réflexion sur la politique étrangère de la Russie de Vladimir Poutine, qui marque, selon l'auteur, une rupture croissante avec l'Occident. Il décrypte son discours politique sur le sujet et explicite le conflit culturel et idéologique sous-jacent qui en découle.",
    prix: 500
    },
    {
    image: "images/historique.png",
    titre: "Moi Jean-Thierry, Héritier Tipaldy",
    resume: "Trente-six milliards d'euros – c'est le montant d'un héritage extraordinaire détenu par l'État français et toujours dû aux héritiers légitimes. Voici l'histoire de cet héritage mais aussi de celui qui en fut à l'origine – Jean Thiery, cordonnier et ancêtre de l’auteur – parti chercher fortune au XVIIe siècle dans le monde des marchands de Venise. Une vie d'aventures, un destin exceptionnel, un héritage qui ne l'est pas moins : voilà la trame de ce roman-récit écrit dans un style qui privilégie l'action. Une histoire de famille qui va chercher ses racines au temps de Louis XI et que l’auteur n'a pas voulu laisser sombrer dans l'oubli, pour tous les héritiers Thiery à venir.",
    prix: 500
    },
    {
    image: "images/louis.png",
    titre: "La Malentente",
    resume: "L'historienne traite de la relation complexe qu'entretenaient le roi Louis XIII et son principal ministre Richelieu. Le premier était soucieux de son autorité face aux ambitions du second, mais ils ont partagé des objectifs communs comme la consolidation de l'appareil d'Etat face aux grands féodaux et la fin de l'hégémonie des Habsbourg en Europe.",
    prix: 500
    },
    {
    image: "images/essai.png",
    titre: "L'humanisme, une religion?'",
    resume: "Après avoir publié, au cours de sa longue carrière, de nombreux ouvrages dans les domaines technique, juridique et historique ; après avoir, dans un précédent ouvrage, livré ses réflexions sur les religions et le rôle de l’homme dans l’univers, l’auteur aborde aujourd’hui le thème de l’humanisme. Des réflexions sur maints sujets – tels la laïcité, la famille, le travail, la technique et l’écologie – le conduisent à considérer l’humanisme comme une religion pouvant aider à l’avènement d’un monde plus juste et dénué de violence. Ingénieur et juriste, Jackie Boisselier a consacré sa vie à la prévention des risques professionnels et à l’amélioration des conditions de travail. Aujourd’hui octogénaire, cet humaniste livre ses réflexions sur les religions, le sens de la vie et le devenir de l’Homme.",
    prix: 500
    }
  ];
})();
