document.addEventListener("DOMContentLoaded", () => {
  fetch("/Assets/Projects/projects.json")
    .then((res) => res.json())
    .then((projects) => {
      projects.main.forEach((name) => {
        fetch(`/Assets/Projects/${name}.json`)
          .then((res) => res.json())
          .then((project) => insertProject("main_projects", project, name));
      });
      projects.other.forEach((name) => {
        fetch(`/Assets/Projects/${name}.json`)
          .then((res) => res.json())
          .then((project) => insertProject("other_projects", project, name));
      });
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
