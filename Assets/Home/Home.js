//Projects

const projects = [
  { path: "/Assets/Projects/MHDS/MHDS.html", weight: 5 },
  { path: "/Assets/Projects/MKVN/MKVN.html", weight: 6 },
  { path: "/Assets/Projects/WIKILG/WIKILG.html", weight: 3 },
  { path: "/Assets/Projects/NMSMB/NMSMB.html", weight: 1 }
];

const paths = projects.flatMap(p =>
  Array.from({ length: p.weight }, () => p.path)
);

let rand = Math.floor(Math.random() * paths.length);
let projectPath = paths[rand];

//Devices

const isMobile = window.matchMedia("(max-width: 800px)").matches;
const devicesPath = isMobile
  ? "/Assets/Home/Devices_mobile.html"
  : "/Assets/Home/Devices.html";

//DOM

function loadInto(url, containerId, errorMsg) {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`${url} (${res.status})`);
      return res.text();
    })
    .then(html => {
      document.getElementById(containerId).innerHTML = html;
    })
    .catch(err => {
      console.error(err);
      document.getElementById(containerId).textContent = errorMsg;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadInto(projectPath, "featuredproject", "Projet indisponible.");
  loadInto(devicesPath, "devices",       "Appareil indisponible.");
});
