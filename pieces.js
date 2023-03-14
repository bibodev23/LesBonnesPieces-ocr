// Récupération des pièces depuis le fichier JSON
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
// création d'une fonction pour augmenter le compteur qui indique la la position de chaque article
for (let i = 0; i < pieces.length; i++) {

    const article = pieces[i];
    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    // Création des balises 
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    const stockElement = document.createElement("p");
    stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
    
    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    //Ajout des éléments au DOM pour l'exercice
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);
 }
 
// on met en place la fonction pour trier les produits dans l'ordre croissant par prix
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    pieces.sort(function (a, b) {
        return a.prix - b.prix;
    });
    console.log(pieces);
});

// creation du bouton filter les produits dont les prix sont inf a 35
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function(piece) {
        return piece.prix <= 35;
    });
    console.log(piecesFiltrees);
});
//  creation du bouton afin d afficher que les produits avec description
const boutonDescription = document.querySelector(".btn-description");
boutonDescription.addEventListener("click", function () {
    const pieceDescription = pieces.filter(function(piece) {
        return piece.categorie != null;
    })
    console.log(pieceDescription);
})

// création bouton ordre décroissant
const boutonTrier2 = document.querySelector(".btn-trier2");
boutonTrier2.addEventListener("click", function () {
    const piecesOrdonnees2 = Array.from(pieces);
    pieces.sort(function (b, a) {
        return a.prix - b.prix;
    });
    console.log(pieces);
});


// // Fonction lambda
// piece => piece.nom

// // Fonction normale
// function (piece) {
//     return piece.nom;
// }
// création dbouton pour afficher seulement les noms des produits
const boutonNom = document.querySelector(".btn-nom");
boutonNom.addEventListener("click", function () {
    const noms = pieces.map(piece => piece.nom);
    console.log(noms);
})

