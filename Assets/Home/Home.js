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

function insertDevice() {

  
}

function insertDeviceEnd(){

  document.getElementById("devices").innerHTML += `
            
  <details class="device" ${window.matchMedia("(max-width: 800px)").matches ? "" : "open"}>
    <summary class="device_summary">Some other devices...</summary><br>
    <div class="device_title">Some other devices...</div><br>
    <br><div class="device_description">
              
    <div>• A Nintendo DS Lite (Crimson)</div>
    <div>• A modded Nintendo Wii (White, with GC controller ports but can't read DVDs)</div>
    <div>• A modded New Nintendo 2DS XL (Orange and white)</div><br>
    <div style="text-align: center; font-size: 125%">And more!</div>
    
  </details>
          `;
}

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

//Charging everything

document.addEventListener("DOMContentLoaded", () => {

  loadInto(projectPath, "featuredproject", "Projet indisponible.");

  fetch("/Assets/Home/devices.json")
    .then(res => res.json())
    .then(devices => {
      devices.forEach(device => {

        if (device.device) { //Normal devices

        document.getElementById("devices").innerHTML += `

        <details class="device" ${window.matchMedia("(max-width: 800px)").matches ? "" : "open"}>
              <summary class="device_summary">${device.name}<br>(${device.attribute.type})</summary><br>
              <div class="device_title">${device.name}<br>(${device.attribute.type})</div><br>
              <div class="device_description">
                <div><span class="bold">CPU:</span> ${device.attribute.CPU}</div>
                <div><span class="bold">GPU:</span> ${device.attribute.GPU}</div>
                <div><span class="bold">RAM:</span> ${device.attribute.RAM}</div>
                <div><span class="bold">OS:</span> ${device.attribute.OS}</div>
                <div><span class="bold">Notes:</span> ${device.notes}</div>
              </div><br><br>
              <div class="device_image">
                <img src="${device.image}" alt="${device.name}">
              </div>
            </details>
        `;

        } else { //Final page

          insertDeviceEnd();
        }


      });
    })

    
    .catch(err => {
      console.error(err);
      document.getElementById("devices").textContent = 'Could not load devices data.';
    });
});