const homeIcon = document.getElementById("homeIcon");
const menuIcon = document.getElementById("menuIcon");
const nav = document.getElementById("nav");

const allProjectsContainer = document.querySelector(".allProjectsContainer");

let isMenuOpen = false;
// ouvre et ferme le menu
menuIcon.addEventListener("click", () => {
  // ouvre le menu
  if (!isMenuOpen) {
    // marque un temps d'arret pour laisser le main disparaitre
    setTimeout(() => {
      nav.classList.toggle("navContainer-visible");
    }, 200);
    allProjectsContainer.classList.add("out");
    menuIcon.className = "fa-solid fa-xmark headerContainer-icon";
    return (isMenuOpen = true);
  }

  // ferme le menu
  if (isMenuOpen) {
    nav.classList.toggle("navContainer-visible");
    allProjectsContainer.classList.remove("out");
    menuIcon.className = "fa-solid fa-bars headerContainer-icon";
    return (isMenuOpen = false);
  }
});