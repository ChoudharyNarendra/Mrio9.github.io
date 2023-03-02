const buttons = document.querySelectorAll("[data-carousel-button]")
var modal = document.getElementById("myModal");
var imgs = document.querySelectorAll(".gallrow .pro img");

var modalImg = document.getElementById("img01");
console.log(imgs);

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselButton === "next" ? 1 :
//             -1
//         const slides = button.closest("[data-carousel]").querySelector('[data-slides]')
//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         if (newIndex < 0) newIndex = slides.children.length -1
//         if (newIndex >= slides.children.length) newIndex = 0
//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active
//     })
// })
// var sidemenu = document.getElementById("sidemenu");
//         function openmenu(){
//             sidemenu.style.right = "0";
//         }
//         function closemenu(){
//             sidemenu.style.right = "-200px";
//         }
//         const proImages = document.querySelectorAll(".pro img");
//         const carousel = document.querySelector("[data-carousel]");
//         const slidesContainer = carousel.querySelector("[data-slides]");
        
//         proImages.forEach((image) => {
//           image.addEventListener("click", () => {
//             // Get the source of the clicked image
//             const imgSrc = image.getAttribute("src");
        
//             // Create a new slide with the clicked image
//             const newSlide = document.createElement("li");
//             newSlide.classList.add("slide");
//             newSlide.innerHTML = `<img src="${imgSrc}" alt="">`;
        
//             // Add the new slide to the carousel
//             slidesContainer.appendChild(newSlide);
        
//             // Reset the active slide to the first one
//             const activeSlide = slidesContainer.querySelector("[data-active]");
//             activeSlide.removeAttribute("data-active");
//             slidesContainer.firstElementChild.setAttribute("data-active", true);
//           });
//         });
        