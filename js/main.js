



//CREAT loop for Image

//random bcakgrpund  option 
let backgroundoption = true;

//   variable to control the interval
let backgroundinterval;

// check if there is in localStorage random background item
let backgroundlocLitem = localStorage.getItem("background-option")

// check if random backgound localStorage is not empty
if (backgroundlocLitem !== null) {
    if (backgroundlocLitem === "true") {

        backgroundoption = true

    } else {

        backgroundoption = false

    }
    //reove class active doc
    document.querySelectorAll(".random-backgrpund span").forEach((e) => {
        e.classList.remove("active")
    })
    if (backgroundlocLitem === 'true') {
        document.querySelector(".random-backgrpund .yes").classList.add("active")
    } else {
        document.querySelector(".random-backgrpund .no").classList.add("active")

    }
}


//select landinbage element
let landingpage = document.querySelector(".landingpage")

//CREATE  array 
let arrayimage = ["05.jpg", "06.jpg", "07.jpg", "09.jpg"]

//change image backgrownd
landingpage.style.backgroundImage = 'url("image/09.jpg")'

//   function to randomize option
function randomizeimage() {
    if (backgroundoption === true) {

        backgroundinterval = setInterval(() => {

            //GET RANDOM NUMBER 
            let randomnumber = Math.floor(Math.random() * arrayimage.length)

            //change image backgrownd
            landingpage.style.backgroundImage = 'url("image/' + arrayimage[randomnumber] + '")'

        }, 1000);

    }
}
randomizeimage()







//    start optin-box random-backgrpund strat background image or no



// switch random backgroundImage option
const randombackgroundimage = document.querySelectorAll(".random-backgrpund span")

// loop on all spans
randombackgroundimage.forEach(span => {

    // add click every span
    span.addEventListener("click", (e) => {
        // shortcut from function to active
        Addanaroveactive(e);
        if (e.target.dataset.background === 'yes') {
            backgroundoption = true;

            randomizeimage()

            localStorage.setItem("background-option", true)
        } else {
            backgroundoption = false;

            clearInterval(backgroundinterval)

            localStorage.setItem("background-option", false)

        }

    })

})


/*             /*                        */



//toggle spin class  on icon
document.querySelector(".toggle-sectting .fa-gear").onclick = function () {
    //toggle class fa-SPIN rotation box and setting
    this.classList.toggle("fa-spin")

    //toggle class open on Main settings
    document.querySelector(".setting-box").classList.toggle("open")

}







/*             /*                        */


// switch colors
const colorsli = document.querySelectorAll(".colors-list  li")


// loop for color
colorsli.forEach(li => {


    //add event cilck
    li.addEventListener("click", (e) => {


        //set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)


        //  set color in localStorage
        localStorage.setItem("color-option-two", e.target.dataset.color)


        Addanaroveactive(e)

    })
})



//  check if there  is localStorage color his name is color option
let checkcolor = localStorage.getItem("color-option ")

if (checkcolor !== null) {
    //add color in localstorage
    document.documentElement.style.setProperty('--main-color', checkcolor);

    // check for active class
    // remove  class active frome all children
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active")


        ///add  active  class  on element with data-color=== local storafe item
        if (element.dataset.color === checkcolor) {
            //add active class 
            element.classList.add("active")
        }


    })

}

/*             /*                        */


//select skills selector
let ourskills = document.querySelector(".skills")
window.onscroll = function () {

    //skills offset top
    let skillsoffesttop = ourskills.offsetTop

    //skills  outer height
    let skillsouterheight = ourskills.offsetHeight

    // window hight
    let windowheight = this.innerHeight

    //wondo scrollltop 
    let windowscrolltop = this.pageYOffset

    if (windowscrolltop > (skillsoffesttop + skillsouterheight - windowheight)) {

        let allskills = document.querySelectorAll(".skills-box .skills-progress span")

        allskills.forEach(skill => {

            skill.style.width = skill.dataset.progress;
        })
    }
}






/*             /*                   */



// <!-- start gallery -->
let ourgallery = document.querySelectorAll(".gallery img")

ourgallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // creete over element
        let overlay = document.createElement("div")

        // add class to overlay
        overlay.className = 'popup-overlay'

        //append overlay  to thr bady
        document.body.appendChild(overlay)

        //create popup box
        let popupbox = document.createElement("div")
        //add class name
        popupbox.className = "popup-box"
        //create image

        if (img.src !== null) {
            //create heading
            let imgheading = document.createElement("h3")

            //create heading for text 
            let textimage = document.createTextNode(img.alt)

            //append  text to heading
            imgheading.append(textimage)
            popupbox.append(imgheading)
            //create img
        }
        //get h3 in popupbox
        let pheading = popupbox.querySelector("h3")
        console.log(pheading)
        //stely imgheading
        pheading.style.cssText = "text-align: center;background-color: var(--main-color);padding: 17px;border-radius: 40px; width: fit-content;margin: auto;margin-bottom: 20px;"
        let poopulImage = document.createElement("img")

        // set image src
        poopulImage.src = img.src

        //add image to popup-box
        popupbox.appendChild(poopulImage)

        //append popup box to body
        document.body.appendChild(popupbox)


        //  create close span in popupbox
        let closebtn = document.createElement("span")
        //create class name 
        closebtn.className = "closebtn"
        //create the close button
        let closebtntext = document.createTextNode("x")

        //apend  colosebtn to colsebtntext
        closebtn.append(closebtntext)
        //apend to bady
        popupbox.append(closebtn)

        //close popup
        document.addEventListener("click", (e) => {
            if (e.target.classList == 'closebtn') {
                //remove  current popup
                e.target.parentNode.remove();

                //reomve overlay
                overlay.style.display = "none"
            }
        })
    })

})






const allbultes = document.querySelectorAll(".nav-bullets .bullet ")
const allskills = document.querySelectorAll(".links li a")
console.log(allskills)

function scrollto(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            })
        })
    })


}
scrollto(allskills)
scrollto(allbultes)

function Addanaroveactive(e) {
    // remove all classs active
    e.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active")
    })
    e.target.classList.add("active")

}

//strat show and hide bullets


// check localStorage
let bulletspan = document.querySelectorAll(".bullets-optin span")
let bulletscontainer = document.querySelector(".nav-bullets")
let bulletitam = localStorage.getItem(".bullets-option")

if (bulletitam !== null) {
    bulletitam.forEach(span => {
        span.classList.remove("active")
    })
    if (bulletitam === 'block') {
        bulletscontainer.style.display = "block"
        document.querySelector(".bullets-option .yes").classList.add("active")

    } else {
        bulletscontainer.style.display = "none"
        document.querySelector(".bullets-option .no").classList.add("active")

    }
}

//LOOP on bullets
bulletspan.forEach(span => {
    span.addEventListener("click", (e) => {
        if (span.dataset.display === 'show') {
            bulletscontainer.style.display = 'block'
        } else {
            bulletscontainer.style.display = 'none'
        }
        e.target.parentElement.querySelectorAll(".active").forEach(ele => {
            ele.classList.remove("active")
        })
        e.target.classList.add("active")

    })
})



// //reset-options
document.querySelector(".reset-options").onclick = function () {

    localStorage.removeItem("color-option")
    localStorage.removeItem("background-option")
    localStorage.removeItem("bullets-option")
    window.location.reload()
}
//how to use grid?

//create onclick toggle`-menu

//select element 
let toggle = document.querySelector(".toggle-menu")
let toggleLINKS = document.querySelector(".links")

toggle.onclick = function (e) {
    // stop propagation
    e.stopPropagation()
    this.classList.toggle("menu-active")
    toggleLINKS.classList.toggle("open")

}
//click anywhere outside meun  and toggle boutton
document.addEventListener("click", (e) => {
    if (e.target !== toggle && e.target !== toggleLINKS) {
        console.log("this is not the button")

        // check menu is open 
        if (toggleLINKS.classList.contains("open")) {
            toggle.classList.toggle("menu-active")
            toggleLINKS.classList.toggle("open")
        }
    }
})
toggleLINKS.onclick = function (e) {
    e.stopPropagation()

}