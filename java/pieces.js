console.log('sectionFiches')
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

const article = pieces[i];

const sectionFiches = document.querySelector(".fiches");

const pieceElement = document.createElement("article");

pieceElement.id = "id" + article.id

const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment."

const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite ? "En stock" : "En rupture de stock";

sectionFiches.appendChild(pieceElement)
pieceElement.appendChild(imageElement);
pieceElement.appendChild(nomElement);
pieceElement.appendChild(prixElement);
pieceElement.appendChild(categorieElement);
pieceElement.appendChild(descriptionElement)
pieceElement.appendChild(stockElement)
}

const buttonTrier = document.querySelector(".btn-trier");
buttonTrier.addEventListener("click", function() {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    })
    console.log(piecesOrdonnees);
});

const buttonFiltrer = document.querySelector(".btn-filtrer");
buttonFiltrer.addEventListener("click", function() {
    const pieceFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    console.log(pieceFiltrees)
});

const buttonDecroissant = document.querySelector(".btn-decroissant");
buttonDecroissant.addEventListener("click", function() {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    })
    console.log(piecesOrdonnees);
});

const buttonNoDescription = document.querySelector(".btn-filtrer");
buttonFiltrer.addEventListener("click", function() {
    const pieceFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    console.log(pieceFiltrees)
});