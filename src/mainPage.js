//This is the Homepage initialization file.
import borscht from './Images/borscht.jpeg'
import chef from './Images/chef.png'
import curry from './Images/curry.png'
import wineglasses from './Images/wine-glasses.png'

function mainPage(){
    const contentID = document.getElementById('content')

// This is the Navbar creation

//mainDiv creation
    const main = document.createElement("div");
    const mainLeft = document.createElement("div");
    const mainRight = document.createElement("div");
    const mainBottom = document.createElement("div");

    contentID.appendChild(main);
    main.appendChild(mainLeft);
    main.appendChild(mainRight);
    main.appendChild(mainBottom);
    main.className = "main"
    mainLeft.className = "mainLeft"
    mainRight.className = "mainRight"
    mainBottom.className = "mainBottom"

    const mainLeftH1 = document.createElement("h1")
    mainLeftH1.innerHTML = "This... is Borscht Bros" 
    mainLeft.appendChild(mainLeftH1)
    const mainLeftP = document.createElement("p")
    mainLeftP.innerHTML = "Authentic Flavors | Locally Sourced Ingredients"
    mainLeft.appendChild(mainLeftP)
    const mainLeftP2 = document.createElement("p")
    mainLeftP2.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, ut quo"
    mainLeft.appendChild(mainLeftP2)

    const borschtImg = document.createElement("img")
    borschtImg.setAttribute('src', borscht)
    mainRight.appendChild(borschtImg)
    borschtImg.className = "borscht"

    const bottomImg1 = document.createElement("div")
    const bottomImg2 = document.createElement("div")
    const bottomImg3 = document.createElement("div")
    bottomImg1.className = "bottomIcon"
    bottomImg2.className = "bottomIcon"
    bottomImg3.className = "bottomIcon"

    const bottomDiv1 = document.createElement("img")
    const bottomDiv2 = document.createElement("div")
    const bottomDiv3 = document.createElement("img")
    const bottomDiv4 = document.createElement("div")
    const bottomDiv5 = document.createElement("img")
    const bottomDiv6 = document.createElement("div")


    mainBottom.appendChild(bottomImg1)
    mainBottom.appendChild(bottomImg2)
    mainBottom.appendChild(bottomImg3)

    bottomImg1.appendChild(bottomDiv1)
    bottomImg1.appendChild(bottomDiv2)

    bottomImg2.appendChild(bottomDiv3)
    bottomImg2.appendChild(bottomDiv4)

    bottomImg3.appendChild(bottomDiv5)
    bottomImg3.appendChild(bottomDiv6)

    bottomDiv1.setAttribute('src', wineglasses)
    bottomDiv3.setAttribute('src', curry)
    bottomDiv5.setAttribute('src', chef)
    bottomDiv1.className = 'icon'
    bottomDiv3.className = 'icon'
    bottomDiv5.className = 'icon'

    bottomDiv2.innerHTML = "Great for parties!"
    bottomDiv4.innerHTML = "Authentic food!"
    bottomDiv6.innerHTML = "World Renown Chefs"

//Footer Creation

}


export default mainPage()