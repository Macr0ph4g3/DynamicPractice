const footerClass = document.getElementsByClassName('footer')
const contentID = document.getElementById('content')

function menuPage() {
    const about = document.createElement('div')
    about.className = "about"
    contentID.appendChild(about)
    contentID.insertBefore(about, footerClass[0])

    const header = document.createElement('h1')
    const paragraph = document.createElement('p')

    header.innerHTML = "Russian cuisine in your backyard"
    paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos voluptas illum tenetur culpa tempore facilis at debitis doloribus, ducimus laudantium praesentium et aut rem ea labore maxime molestiae ipsum repellendus ullam! Similique, "

    about.appendChild(header)
    about.appendChild(paragraph)
}