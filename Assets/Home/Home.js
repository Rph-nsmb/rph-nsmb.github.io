//Projects

const projects = [
  { path: "/Assets/Projects/mhds.json", weight: 5 },
  { path: "/Assets/Projects/mkvn.json", weight: 6 },
  { path: "/Assets/Projects/wikilg.json", weight: 3 },
  { path: "/Assets/Projects/nmsmb.json", weight: 1 },
];

const paths = projects.flatMap((p) =>
  Array.from({ length: p.weight }, () => p.path),
);

let rand = Math.floor(Math.random() * paths.length);
let projectPath = paths[rand];

//Devices

function insertDevice() {}

function insertDeviceEnd() {
  document.getElementById("devices").innerHTML += `
            
  <details class="device box" ${window.matchMedia("(max-width: 800px)").matches ? "" : "open"}>
    <summary class="device_summary">Some other devices...</summary><br>
    <div class="device_title">Some other devices...</div><br>
    <br><br><div class="device_description">
              
    <div>• A Nintendo DS Lite (Crimson)</div>
    <div>• A modded Nintendo Wii (White, with GC controller ports but can't read DVDs)</div>
    <div>• A modded New Nintendo 2DS XL (Orange and white)</div><br>
    <div style="text-align: center; font-size: 125%">And more!</div>
    
  </details>
          `;
}

//Charging everything

document.addEventListener("DOMContentLoaded", () => {
  fetch(projectPath)
    .then((res) => res.json())
    .then((project) => {
      const name = projectPath.split("/").pop().replace(".json", "");
      insertProject("featuredproject", project, name);
    });

  fetch("/Assets/Home/devices.json")
    .then((res) => res.json())
    .then((devices) => {
      devices.forEach((device) => {
        if (device.device) {
          //Normal devices

          document.getElementById("devices").innerHTML += `

        <details class="device box" ${window.matchMedia("(max-width: 800px)").matches ? "" : "open"}>
              <summary class="device_summary">${device.name}<br>(${device.attribute.type})</summary><br>
              <div class="device_title">${device.name}<br>(${device.attribute.type})</div><br>
              <br><div class="device_description">
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
        } else {
          //Final page

          insertDeviceEnd();
        }
      });
    })

    .catch((err) => {
      console.error(err);
      document.getElementById("devices").textContent =
        "Could not load devices data.";
    });
});

// Project modals
document.addEventListener("click", (event) => {
  // If a Learn More button is clicked
  const button = event.target.closest(".project_learnmore");
  if (button) {
    const modalSelector = button.getAttribute("data-modal-target");
    if (!modalSelector) return;

    const modal = document.querySelector(modalSelector);
    if (modal) {
      modal.style.display = "block"; // Show the modal
    }
    return; // Stop processing further for this event
  }

  // If a close button (×) is clicked inside a modal
  if (event.target.classList.contains("close")) {
    const modal = event.target.closest(".project_infos");
    if (modal) {
      modal.style.display = "none"; // Hide the modal
    }
    return;
  }

  // If user clicks outside modal content (on the overlay)
  if (event.target.classList.contains("project_infos")) {
    event.target.style.display = "none"; // Hide the modal overlay
  }
});
