//import js files
import navBarsetup from './header'
import mainPage from './mainPage'
import footer from './footer'
import './style.css';
import menuPage from './Menu'

let menuButtons = document.getElementsByClassName("Menu")
let homeButton = document.getElementsByClassName("logo")
let about = document.getElementsByClassName("About")
let contact = document.getElementsByClassName("Contact")

let mainDiv = document.getElementsByClassName('main')
let menuDiv = document.getElementsByClassName('foodMenu')



for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", changePage => {
        // This will remove MainPage.js and will import new Menu page
            mainDiv[0].remove();
            menuPage()

        
    })    
}

for (let i = 0; i < about.length; i++) {
    about[i].addEventListener("click", changePage => {
        // This will remove MainPage.js and will import new Menu page
        console.log('About!')
        
    })    
}
for (let i = 0; i < contact.length; i++) {
    contact[i].addEventListener("click", changePage => {
        // This will remove MainPage.js and will import new Menu page
        console.log('contact!')
        
    })    
}

homeButton[0].addEventListener("click", logging => {
    console.log("clicked")
    mainPage()

})
