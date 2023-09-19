// check if there's a local storage color option 
let colorOption = localStorage.getItem("color-option");

if (colorOption !== null) {
  document.documentElement.style.setProperty("--main--color", colorOption);

  // remove active class from all li
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // add active class to the target element with data-color === local storage item 
    if (element.dataset.color === colorOption) {
      element.classList.add("active")
    }

  });
}

// change background images 
const randombg = document.querySelectorAll(".background-option span");

randombg.forEach((span) => {
  span.addEventListener("click", (e) => {
    // remove active class from all li
    
    handleActive(e)
  });
});

// change root colors 
const colorList = document.querySelectorAll(".colors-list li");

colorList.forEach(li => {
  li.addEventListener("click", (e) => {

    // add color to the root 
    document.documentElement.style.setProperty("--main--color", e.target.dataset.color);

    // set color option to localstorage 
    localStorage.setItem("color-option", e.target.dataset.color);

    handleActive(e)
  })
})

document.querySelector(".settings-box .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");

  document.querySelector(".settings-box").classList.toggle("open");
}

// get the skills section 
let skills = document.querySelector(".skills");

window.onscroll = () => {
  
  let offsetTop = skills.offsetTop;
  
  let sectionHeight = skills.offsetHeight;
  
  let windowHeight = this.innerHeight; // 1000 
  
  let windowTop = this.pageYOffset; // 1000 
  
  if (windowTop > (offsetTop + sectionHeight - windowHeight)) {
    
    let allSkills = document.querySelectorAll(".skills .skill-box span")
    
    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress
    })
  }
}
// let's create the pop up 

let gallery = document.querySelectorAll(".gallery img");

gallery.forEach(img => {
  img.addEventListener("click", (e) => {

    // create the overlay  
    let overlay = document.createElement("div")

    overlay.className = "popup-overlay";
    // add it to the body 
    document.body.appendChild(overlay);

    // create the pop up box 
    let popupBox = document.createElement("div");

    popupBox.className = "popup-box";

        if (img.alt !== null) {
          // create the heading
          let heading = document.createElement("h3");

          let headingText = document.createTextNode(img.alt);

          heading.appendChild(headingText);

          popupBox.appendChild(heading);
        }

    // create the image 
    let popupImage = document.createElement ("img");

    // set image source 
    popupImage.src = img.src;
    
    // add image to the pop up box
    popupBox.appendChild(popupImage);

    // add these to body 
    document.body.appendChild(popupBox);


    // create the close button 
 
    let button = document.createElement("span");

    let closeButton = document.createTextNode("X");
    
    button.appendChild(closeButton);

    button.className = "close-button";
    
    popupBox.appendChild(button);

  });
});
// close the popup 
document.addEventListener("click", function(e) {

  if (e.target.className == "close-button") {

    e.target.parentNode.remove()
    document.querySelector(".popup-overlay").remove();
  }
})

// get alls bullets 
let bullets = document.querySelectorAll(".bullets-container .bullet");

bullets.forEach(bull => {
  bull.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior : "smooth"
    });
  });
});

// handle active function 

function handleActive(event) {

      event.target.parentElement.querySelectorAll(".active").forEach((element) => {
        element.classList.remove("active");
      });

      // add active class to the target element
      event.target.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsHandler = document.querySelector(".bullets-container");

let localStorageBullets = localStorage.getItem("bullets_option");

if (localStorageBullets !== null) {
  
  bulletsSpan.forEach(span => {
    span.classList.remove("active")
  })

  if (localStorageBullets == "block") {

    bulletsHandler.style.display = "block";
    document.querySelector(".bullets-option .yes").classList.add("active")
  } else {
    bulletsHandler.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach(span => {

  span.addEventListener("click", (e) => {

    if (span.dataset.display === "yes") {

      bulletsHandler.style.display = "block"  
      
      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsHandler.style.display = "none"

        localStorage.setItem("bullets_option", "none");
    }

    handleActive(e)
  });
});

// reset the options 
document.querySelector(".reset").onclick = function () {

  localStorage.removeItem("color-option")
  localStorage.removeItem("background-option");
  localStorage.removeItem("bullets_option");

  // reload the window 
  window.location.reload();
}

// toggle menu 
let toggleBtn = document.querySelector(".toggle-menu")
let links = document.querySelector(".links")


toggleBtn.onclick = function (e) {

  e.stopPropagation();
  
  this.classList.toggle ("menu-active");

  links.classList.toggle("open");
}

// click anywhere to close the menu 
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== links) {
      
    if (links.classList.contains("open")) {
        toggleBtn.classList.toggle("menu-active");

        links.classList.toggle("open");
    }
  }
})

// target the li 
links.onclick = function (e) {
  e.stopPropagation();
} 