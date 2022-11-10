import BeefStro from "./Images/BeefSto.jpeg"
import Blintz from "./Images/Blintz.jpeg"
import OlivierSalad from "./Images/OlivierSalad.jpeg"
import Vareniki from "./Images/Vareniki.jpeg"
import HoneyCake from "./Images/HoneyCake.jpeg"
import Napoleon from "./Images/Napoleon.jpeg"
import Shashlik from "./Images/Shashlik.jpeg"
import Baklava from "./Images/Baklava.png"

const footerClass = document.getElementsByClassName('footer')
const contentID = document.getElementById('content')

function menuPage() {
    const foodMenu = document.createElement('div')
    foodMenu.className = "foodMenu"
    contentID.appendChild(foodMenu)
    contentID.insertBefore(foodMenu, footerClass[0])
    const mainCourse = document.createElement('div')
    const dessert = document.createElement('div')
    const mainCourseHeader = document.createElement('h1')
    const dessertHeader = document.createElement('h1')

    foodMenu.appendChild(mainCourseHeader)
    foodMenu.appendChild(mainCourse)
    foodMenu.appendChild(dessertHeader)
    foodMenu.appendChild(dessert)

    mainCourse.className = 'mainCourse'
    dessert.className = 'dessert'
    mainCourseHeader.innerHTML = "Main Courses"
    dessertHeader.innerHTML = "Desserts"
    mainCourseHeader.className = "header"
    dessertHeader.className = "header"


    for (let i = 0; i < 4; i++) {
        let foodItem = document.createElement('div')
        foodItem.className = `foodItem` 
        mainCourse.appendChild(foodItem)

        let foodPic = document.createElement('img')
        let foodDescrip = document.createElement('h2')
        foodPic.className = `foodPic`
        foodDescrip.className = 'foodDescript'
        foodItem.appendChild(foodPic)
        foodItem.appendChild(foodDescrip)
    }

    for (let i = 0; i < 4; i++) {
        let dessertItem = document.createElement('div')
        dessertItem.className = `dessertItem` 
        dessert.appendChild(dessertItem)

        let foodPic = document.createElement('img')
        let foodDescrip = document.createElement('h2')
        foodPic.className = `foodPic`
        foodDescrip.className = 'foodDescript'
        dessertItem.appendChild(foodPic)
        dessertItem.appendChild(foodDescrip)

    }

    foodItemFill()
}

function foodItemFill() {
    let foodPic = document.getElementsByClassName('foodPic')
    let foodDescript = document.getElementsByClassName('foodDescript')
    foodPic[0].setAttribute('src', BeefStro)
    foodPic[1].setAttribute('src', Shashlik)
    foodPic[2].setAttribute('src', OlivierSalad)
    foodPic[3].setAttribute('src', Vareniki)
    foodPic[4].setAttribute('src', Blintz)
    foodPic[5].setAttribute('src', HoneyCake)
    foodPic[6].setAttribute('src', Napoleon)
    foodPic[7].setAttribute('src', Baklava)


    foodDescript[0].innerHTML = `Beef Stroganoff`
    foodDescript[1].innerHTML = `Shashlik`
    foodDescript[2].innerHTML = `Olivier Salad`
    foodDescript[3].innerHTML = `Vareniki`
    foodDescript[4].innerHTML = `Blintz`
    foodDescript[5].innerHTML = `HoneyCake`
    foodDescript[6].innerHTML = `Napoleon`
    foodDescript[7].innerHTML = `Baklava`


}

export default menuPage