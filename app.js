// const makeBio = () => {
//     // const bio = document.createElement('p')
//     // const bioText = ('testing testing testing')
//     document.getElementById('bioText').innerText = 'testing'

// }










// // buttons = () => {

// document.getElementById('bio').addEventListener('click', makeBio)

// }

// buttons()

function navBar() {
    const navDisplay = document.getElementById("myTopnav");
    if (navDisplay.className === "topnav") {
      navDisplay.className += " responsive";
    } else {
      navDisplay.className = "topnav";
    }
  }

  function resumeButton() {
    const resDisplay = document.getElementById("resumeDiv");
    if (resDisplay.style.display === "none") {
      resDisplay.style.display = "block";
    } else {
      resDisplay.style.display = "none";
    }
  }

  function projectsButton() {
    const ProjectDisplay = document.getElementById("projectDiv");
    if (ProjectDisplay.style.display === "none") {
      ProjectDisplay.style.display = "block";
    } else {
      ProjectDisplay.style.display = "none";
    }
  }