function loadText(file, elementId) {
    console.log(`Tentative de chargement du fichier: ${file}`); // Pour vérifier si la requête est faite
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`); // Si la requête échoue
            }
            return response.text();
        })
        .then(text => {
            document.getElementById(elementId).innerHTML = text; // Insertion du texte
            console.log(`Texte chargé dans l'élément #${elementId}`);
        })
        .catch(error => console.error('Erreur lors du chargement du fichier:', error));
}

loadText('assets/texts/about_me.txt', 'about-text');
loadText('assets/texts/project_corewar.txt', 'project-corewar');
