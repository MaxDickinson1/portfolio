const makeBio = () => {
    // const bio = document.createElement('p')
    // const bioText = ('testing testing testing')
    document.getElementById('bioText').innerText = 'testing'

}










// buttons = () => {

document.getElementById('bio').addEventListener('click', makeBio)

// }

// buttons()

function navBar() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function java() {
    const x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }