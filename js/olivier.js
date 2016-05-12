



(function(){
  var app = angular.module("shopApp", []);

  app.controller("StoreController", function($scope){
    this.products = livres;
  });

   var livres =[
    {
    image: "images/giratoire.png",
    titre: "Giratoire",
    resume: "description",
    prix: 500
    },
    {
    image: "images/lite.png",
    titre: "Passages à l'étranger",
    resume: "description",
    prix: 231
    },
    {
    image: "images/polar.png",
    titre: "Recherche cadavre exquis",
    resume: "description",
    prix: 957
    },
    {
    image: "images/plage.png",
    titre: "Une semaine légèrement agitée",
    resume: "description",
    prix: 500
    },
    {
    image: "images/scifi.png",
    titre: "La zizique de l'âme",
    resume: "description",
    prix: 500
    },
    {
    image: "images/lgdm.png",
    titre: "La guerre des mondes",
    resume: "description",
    prix: 500
    },
    {
    image: "images/historique.png",
    titre: "Moi Jean-Thierry, Héritier Tipaldy",
    resume: "description",
    prix: 500
    },
    {
    image: "images/louis.png",
    titre: "La Malentente",
    resume: "description",
    prix: 500
    },
  ];
})();
