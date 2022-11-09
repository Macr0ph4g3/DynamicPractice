const navBarsetup = function() {

const contentID = document.getElementById('content')

const navbar = document.createElement("div");
const logoDiv = document.createElement("div");
const navBarUL = document.createElement("ul")
const foodMenu = document.createElement("li")
const about = document.createElement("li")
const contact = document.createElement("li")

contentID.appendChild(navbar);
navbar.appendChild(logoDiv);
navbar.className = "navBar";

logoDiv.className = "logo";
logoDiv.textContent = "Borscht Bros"

navbar.appendChild(navBarUL)
navBarUL.className = "navBarUL"

navBarUL.appendChild(foodMenu)
navBarUL.appendChild(about)
navBarUL.appendChild(contact)

foodMenu.className = "Menu"
about.className = "About"
contact.className = "Contact"

foodMenu.textContent = "Menu"
about.textContent = "About"
contact.textContent = "Contact"

}
export default navBarsetup