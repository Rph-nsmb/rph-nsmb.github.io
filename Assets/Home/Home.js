const paths = [
	"./Assets/Projects/MHDS/MHDS.html",
	"./Assets/Projects/MHDS/MHDS.html",
	"./Assets/Projects/MHDS/MHDS.html",
	"./Assets/Projects/MHDS/MHDS.html",
	"./Assets/Projects/MHDS/MHDS.html",
	"./Assets/Projects/MKVN/MKVN.html",
	"./Assets/Projects/MKVN/MKVN.html",
	"./Assets/Projects/MKVN/MKVN.html",
	"./Assets/Projects/MKVN/MKVN.html",
	"./Assets/Projects/MKVN/MKVN.html",
	"./Assets/Projects/WIKILG/WIKILG.html",
	"./Assets/Projects/WIKILG/WIKILG.html",
	"./Assets/Projects/WIKILG/WIKILG.html",
	"./Assets/Projects/NMSMB/NMSMB.html"
];

let rand = Math.floor(Math.random() * paths.length);
let projectPath = paths[rand];


const devicesPath = "./Assets/Home/Devices.html";

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
	
  const projectContainer = document.getElementById('featuredproject');
  if (!projectContainer) {
    console.error("Can't find element with id 'featuredproject'");
    return;
  }

  const devicesContainer = document.getElementById('devices');
  if (!devicesContainer) {
    console.error("Can't find element with id 'devices'");
    return;
  }
  

  fetch(projectPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${projectPath}: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      // Inject the fetched HTML into the container
      projectContainer.innerHTML = html;
      // No need to load script here since Projects.js is loaded via defer in index.html
    })
    .catch(error => {
      console.error('Fetch error:', error);
      projectContainer.textContent = "Project can't be loaded.";
    });
    
    
    
	fetch(devicesPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${devicesPath}: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      devicesContainer.innerHTML = html;
    })
    .catch(error => {
      console.error('Fetch error:', error);
      devicesContainer.textContent = "Devices can't be loaded.";
    });
    
});
