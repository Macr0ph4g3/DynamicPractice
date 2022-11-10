import github from "./Giticon.png"

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

const githubLink = document.createElement("a")
const authorInfo = document.createElement("div")
const githubImg = document.createElement("img")

footerInfo.appendChild(authorInfo)
footerInfo.appendChild(githubLink)
githubLink.appendChild(githubImg)

authorInfo.textContent = "Created by Macrophage"
githubLink.className = 'Github'
foodMenu.textContent = "Menu"
about.textContent = "About"
contact.textContent = "Contact"
githubLink.setAttribute("href", 'https://github.com/Macr0ph4g3' )

githubImg.setAttribute("src", github)
footerReferences.innerHTML = "Icons provided by SmashIcons"

}
export default footer