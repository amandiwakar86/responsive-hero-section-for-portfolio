const humburger = document.querySelector("#humburger"); // Select the Humburgur icon
const navmenu = document.querySelector("#menu"); // Select the menu bar
humburger.addEventListener("click", mobileMenu); // Add a eventlistener on icon
// Make a function to open menu bar
function mobileMenu() {
    humburger.classList.toggle("active");
    navmenu.classList.toggle("active");
}

// Select the links
const navLinks = document.querySelectorAll("li");
navLinks.forEach(n => n.addEventListener("click", closeMenu)); // Run a loop in list

// Make a function to Close the menu bar
function closeMenu() {
    humburger.classList.remove("active");
    navmenu.classList.remove("active");
}