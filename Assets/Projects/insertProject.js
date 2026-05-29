function insertProject(id, project, name) {
  document.getElementById(id).innerHTML += `
            
      <div class="project box" style="background: ${project.color.startsWith("linear") ? project.color : `color-mix(in srgb, ${project.color} 50%, transparent)`}">
        <div class="project_left">

          <div class="tags">
              ${project.tags?.includes("released") ? `<span class="tag released">Released</span>` : ""}
              ${project.tags?.includes("progress") ? `<span class="tag progress">In progress</span>` : ""}
              ${project.tags?.includes("cancelled") ? `<span class="tag cancelled">Cancelled</span>` : ""}
           </div>

          <div class="project_contents">
            <h1>${project.name}</h1>
          </div>

          <div class="project_bottom">
            <button class="project_learnmore ${name}_learnmore" data-modal-target="#modal_${name}">Learn more</button>
          </div>

        <!--Modal-->

          <div id="modal_${name}" class="project_infos ${name}_infos">
            <div style="background: ${project.color}" class="project_colorbg"><div class="project_bg">
          
          <span class="close">&times;</span>
            
          <div class="project_modal">  
              
            <h1>${project.name}</h1>
              
            <p>${project.description}</p>
              
            ${project.img ? `<img src="https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/${name}/preview.png">` : ""}              
            ${
              project.video
                ? `<div class="video_wrapper">
                      <video width="320" height="240" controls="">
                        <source src="https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/${name}/preview.mp4" type="video/mp4">
                        <source src="https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/${name}/preview.webm" type="video/webm">
                        <source src="https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/${name}/preview.ogv" type="video/ogv">
                        Your browser does not support this video.
                      </video>
                    </div>`
                : ""
            }
            ${
              project.yt
                ? `<div class="youtube_player">
          				<iframe width="560" height="300" src="${project.yt}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>				
			          </div>`
                : ""
            }

            <div class="modal_bottom">

            ${project.buttons?.map((btn) => `<a target="_blank" href="${btn.link}"><div class="project_learnmore">${btn.label}</div></a>`).join("") ?? ""}
            </div>
              
              </div>
              
            </div></div>
            
          </div>

        </div>
        
        <!-- End of modal -->

        <div class="project_right">
          <img src="https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Projects/${name}/icon.png" alt="Project logo">
        </div>
      </div>


          `;
}
