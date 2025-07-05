const projectPaths = [
  "https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/MHDS/MHDS.html",
  "https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/MKVN/MKVN.html",
  "https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/WIKILG/WIKILG.html",
  "https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/NMSMB/NMSMB.html",
  "https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/NPPSMB/NPPSMB.html",
  "https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/SM256/SM256.html"
];

const insertIds = [
  "mhds",
  "mkvn",
  "wikilg",
  "nmsmb",
  "nppsmb",
  "sm256"
];

document.addEventListener("DOMContentLoaded", () => {
	
  for (let i = 0; i < insertIds.length; i++) {

    const id = insertIds[i];
    const projectPath = projectPaths[i];

    const containerEl = document.getElementById(id);
    if (!containerEl) {
      console.error(`Impossible de trouver l'élément avec l'id « ${id} »`);
      continue; // on poursuit malgré l'erreur
    }

    fetch(projectPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Échec du chargement de ${projectPath} : ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        containerEl.innerHTML = html;
      })
      .catch(error => {
        console.error("Erreur fetch :", error);
        containerEl.textContent = `Le projet ${projectPath} n'a pas pu être chargé.`;
      });
  }

});
