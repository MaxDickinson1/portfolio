// const makeBio = () => {
//     document.getElementById('bioText').innerText = 'testing'

// }




// // buttons = () => {

// document.getElementById('bio').addEventListener('click', makeBio)

// }
// buttons()





function navBar() {
    const navDisplay = document.getElementById("navBar");
    navDisplay.classList.toggle('revealed')
}



function resumeButton() {
    const resDisplay = document.getElementById("resumeDiv");
    resDisplay.classList.toggle('revealed')
}

function projectsButton() {
    const resDisplay = document.getElementById("projectDiv");
    resDisplay.classList.toggle('revealed')
}



///////////////////////////////////////////////////
//mouse hover event listener resume
//////////////////////////////////////////////////
//grabs the resume header  
const resumeGrab = document.getElementById('resumeHeader')
//adds event listenre for when mouse is hovering over header resume
resumeGrab.addEventListener('mouseover', e => {
    const h2Text = document.getElementById('resumeHeader')
    //makes it underlined when mouse is of header resume
    h2Text.style.textDecoration = 'underline'
})
//undoes what above does
const resumeLeave = document.getElementById('resumeHeader')
resumeGrab.addEventListener('mouseleave', e => {
    const h2Text = document.getElementById('resumeHeader')
    //when mouse isnt hover it isnt underlined
    h2Text.style.textDecoration = 'none'
})

///////////////////////////////////////////////////


///////////////////////////////////////////////////
//mouse over event listener projects
/////////////////////////////////////////////////

const projectsHover = document.getElementById('projectsHeader')
projectsHover.addEventListener('mouseover', e => {
    const h2Text = document.getElementById('projectsHeader')
    
    h2Text.style.textDecoration = 'underline'
})

const projectsLeave = document.getElementById('projectsHeader')
projectsLeave.addEventListener('mouseleave', e => {
    const h2Text = document.getElementById('projectsHeader')
    
    h2Text.style.textDecoration = 'none'
})

//////////////////////////////////////////////////

//////////////////////////////////////////////////
//mouse hover for nav bar
//////////////////////////////////////////////////


//something isnt working here
// const navBarHover = document.getElementsByClassName('navBtn')
// navBarHover.addEventListener('mouseover', e => {
    //     const navBarText = document.getElementsByClassName('navBtn')
    
    //     navBarText.style.coler = 'red'
    // })
    
    // window.addEventListener('scroll', e => {
        //     const navHead = document.querySelector('header')
        //     navHead.classList.toggle('sticky', window.scrollY > 0)
        // })
        const body = document.body
        
        let lastScroll = 0
        
        window.addEventListener('scroll', () => {
        //current scroll is where the document is on the y axis
            const currentScroll = window.pageYOffset
    // if current scroll is at the top it was show nav bar
            if(currentScroll <= 0) { //removes navbar
                body.classList.remove("scroll-up")
            }//if current scroll is more the last scroll remove nav bar
             if (currentScroll > lastScroll && !body.classList.contains('scroll-down')){
                body.classList.remove('scroll-up')
                body.classList.add('scroll-down')
             }
        // if current scroll is less the last scroll add nav bar
             if (currentScroll < lastScroll && body.classList.contains('scroll-down')){
                body.classList.remove('scroll-down')
                body.classList.add('scroll-up')
             }
        
        //keeps track
             lastScroll = currentScroll
        
        })
