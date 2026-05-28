
function insertContact(id, platform){

  document.getElementById(id).innerHTML += `
            
				<div class="platform" style="background-color: color-mix(in srgb, ${platform.color} 50%, transparent);">
				
					<h1>${platform.name}</h1>
					
					<p>${platform.description}</p>
					
					<div class="contactlink">
            ${platform.link
              ? `<a target="_blank" href="${platform.link}">${platform.button}</a>`
              : `<span>${platform.button}</span>`}					
          
          </div><br>
				
				</div>
          `;
}

//DOM


document.addEventListener("DOMContentLoaded", () => {

  fetch("/Assets/Contact/platforms.json")
    .then(res => res.json())
    .then(platforms => {
      platforms.forEach(platform => {

        if (platform.category == "main") { //Main platforms

          insertContact("main_platforms", platform);

        } else { //Final page

          insertContact("other_platforms", platform);
        }


      });
    })

    
    .catch(err => {
      console.error(err);
      document.getElementById("main_platforms").textContent = 'Could not load main platforms.';
      document.getElementById("other_platforms").textContent = 'Could not load other platforms.';

    });
});