// Wait for DOM content loaded
document.addEventListener('DOMContentLoaded', () => {

  // Delegate all clicks to the document
  document.addEventListener('click', (event) => {

    // If a Learn More button is clicked
    const button = event.target.closest('.nppsmb_learnmore');
    if (button) {
      const modalSelector = button.getAttribute('data-modal-target');
      if (!modalSelector) return;

      const modal = document.querySelector(modalSelector);
      if (modal) {
        modal.style.display = 'block'; // Show the modal
      }
      return; // Stop processing further for this event
    }

    // If a close button (×) is clicked inside a modal
    if (event.target.classList.contains('close')) {
      const modal = event.target.closest('.nppsmb_infos');
      if (modal) {
        modal.style.display = 'none'; // Hide the modal
      }
      return;
    }

    // If user clicks outside modal content (on the overlay)
    if (event.target.classList.contains('nppsmb_infos')) {
      event.target.style.display = 'none'; // Hide the modal overlay
    }

  });

});
