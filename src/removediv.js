let contentDiv = document.getElementById('content')

function removeChild(div) {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
      }
    }

    export default removeChild