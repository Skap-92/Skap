let pieces;

fetch('pieces-autos.json')
  .then(response => response.json())
  .then(data => {
    // Utilisez les données JSON ici
    console.log(data);
    pieces = data;
  })
  .catch(error => console.error('Erreur de chargement du fichier JSON :', error));


  