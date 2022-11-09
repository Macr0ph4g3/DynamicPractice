const footer = function() {
    
const contentID = document.getElementById('content')

const footer = document.createElement("div")
const footerMenu = document.createElement("ul")
const footerInfo = document.createElement("div")
const footerReferences = document.createElement("div")

contentID.appendChild(footer)
footer.appendChild(footerMenu)
footer.appendChild(footerInfo)
footer.appendChild(footerReferences)
footer.className = "footer"
footerMenu.className = "footerMenu"
footerInfo.className = "footerInfo"
footerReferences.className = "footerReferences"

const foodMenu = document.createElement("li")
const about = document.createElement("li")
const contact = document.createElement("li")

foodMenu.className = "Menu"
about.className = "About"
contact.className = "Contact"

footerMenu.appendChild(foodMenu)
footerMenu.appendChild(about)
footerMenu.appendChild(contact)

const githubIcon = document.createElement("div")
const authorInfo = document.createElement("div")
footerInfo.appendChild(authorInfo)
footerInfo.appendChild(githubIcon)
authorInfo.textContent = "Created by Macrophage"
githubIcon.className = 'Github'
foodMenu.textContent = "Menu"
about.textContent = "About"
contact.textContent = "Contact"

footerReferences.innerHTML = "Icons provided by SmashIcons"

}
export default footer