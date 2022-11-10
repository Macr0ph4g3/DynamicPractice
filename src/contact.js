const footerClass = document.getElementsByClassName('footer')
const contentID = document.getElementById('content')

function contactPage() {
    const about = document.createElement('div')
    about.className = "contactMain"
    contentID.appendChild(about)
    contentID.insertBefore(about, footerClass[0])

    const header = document.createElement('h1')
    const paragraph = document.createElement('p')

    header.innerHTML = "Contact Page is a WIP"
    paragraph.innerHTML = "Please come back later once it's done!"
    about.appendChild(header)
    about.appendChild(paragraph)
}

export default contactPage