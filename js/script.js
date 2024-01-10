// Burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});

// Image popup
function openImage(image) {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  if (screenWidth >= 850) {
  const popup = document.getElementById("image-popup");
  const popupImage = document.getElementById("popup-image");

  popupImage.src = image.src;
  popup.style.display = "block";
  }
}

function closeImage() {
  const popup = document.getElementById("image-popup");
  popup.style.display = "none";
}
