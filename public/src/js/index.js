const homeIcon = document.getElementById("homeIcon");
const menuIcon = document.getElementById("menuIcon");
const nav = document.getElementById("nav");

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");

let isMenuOpen = false;
// ouvre et ferme le menu
menuIcon.addEventListener("click", () => {
  // ouvre le menu
  if (!isMenuOpen) {
    // marque un temps d'arret pour laisser le main disparaitre
    setTimeout(() => {
      nav.classList.toggle("navContainer-visible");
    }, 600);
    menuIcon.className = "fa-solid fa-xmark headerContainer-icon";
    item1.id = "item1-out";
    item2.id = "item2-out";
    item3.id = "item3-out";
    return (isMenuOpen = true);
  }

  // ferme le menu
  if (isMenuOpen) {
    nav.classList.toggle("navContainer-visible");
    menuIcon.className = "fa-solid fa-bars headerContainer-icon";
    item1.id = "item1-in";
    item2.id = "item2-in";
    item3.id = "item3-in";
    return (isMenuOpen = false);
  }
});
