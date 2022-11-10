//import js files
import navBarsetup from './header'
import mainPage from './mainPage'
import footer from './footer'
import './style.css';
import menuPage from './Menu'
import removeDiv from './removediv.js'
import aboutjs from './about.js'
import contactjs from './contact.js'


//initialization of website
navBarsetup()
mainPage()
footer()

//caching parts of site into variables

let menuButtons = document.getElementsByClassName("Menu")
let homeButton = document.getElementsByClassName("logo")
let about = document.getElementsByClassName("About")
let contact = document.getElementsByClassName("Contact")
let mainDiv = document.getElementsByClassName('main')
let menuDiv = document.getElementsByClassName('foodMenu')
let content = document.getElementById('content')

//Event Listeners for each button
homeButton[0].addEventListener("click", clicked => {
    homeSetup()})
for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener("click", clicked => {
        menuSetup()})}
for (let i = 0; i < about.length; i++) {
    about[i].addEventListener("click", clicked => {
        aboutSetup()})}
for (let i = 0; i < contact.length; i++) {
    contact[i].addEventListener("click",  clicked => {
        contactSetup()})}


function homeSetup(){
let centerDiv = content.firstChild.nextSibling.className
    //this function replaces the second child of div id Content
    //Change this to !==
    if ( centerDiv !== 'main') {
        let firstChildContent = content.firstChild.nextSibling
        firstChildContent.remove()
        console.log(firstChildContent)
        mainPage()
    }
}
function menuSetup(){
    let centerDiv = content.firstChild.nextSibling.className

    if ( centerDiv !== 'foodMenu') {
        let firstChildContent = content.firstChild.nextSibling
        firstChildContent.remove()
        console.log(firstChildContent)
        menuPage()
    }

}
function aboutSetup(){
    let centerDiv = content.firstChild.nextSibling.className

    if ( centerDiv !== 'aboutMain') {
        let firstChildContent = content.firstChild.nextSibling
        firstChildContent.remove()
        console.log(firstChildContent)
    aboutjs()
    }

}
function contactSetup(){
    let centerDiv = content.firstChild.nextSibling.className

    if ( centerDiv !== 'main') {
        let firstChildContent = content.firstChild.nextSibling
        firstChildContent.remove()
        console.log(firstChildContent)
        contactjs()
    }

}