import image2 from "./Images/aboutIMG.jpg"

const footerClass = document.getElementsByClassName('footer')
const contentID = document.getElementById('content')

function aboutPage() {
    const about = document.createElement('div')
    about.className = "aboutMain"
    contentID.appendChild(about)
    contentID.insertBefore(about, footerClass[0])

    const header = document.createElement('h1')
    const paragraph = document.createElement('p')
    const image = document.createElement('img')

    header.innerHTML = "Russian cuisine in your backyard"
    paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, "
    image.setAttribute("src", image2)

    about.appendChild(header)
    about.appendChild(paragraph)
    about.appendChild(image)
}
export default aboutPage