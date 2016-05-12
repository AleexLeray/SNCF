



(function(){
  var app = angular.module("shopApp", []);

  app.controller("StoreController", function(){
    this.products = livres;
  });

  var livres =[
    {
    image: "images/essai.png",
    titre: "L'humanisme, une religion?",
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
    }
  ];
})();
