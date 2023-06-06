// Données de base //
// L'animation background dure 3s //

//**** Mes variables  *****//

// const curtain = document.querySelector('.curtain');
// const curtainLeft = document.querySelector('.curtain-left');
// const curtainRight = document.querySelector('.curtain-right');
// const grain = document.querySelector('.grain');
// const machine = document.querySelector('object');
// const loaderContainer = document.querySelector('.loader-container');
// const logoContainer = document.querySelector('.logo-container');
// const logo = document.querySelector('.logo')
// const sos = document.querySelector('.sos');
// const apesWindow = document.querySelector('.apes-window');
// const topGun = document.querySelector('.top-gun');


// // **** Mes fonctions ****//

// function imageOpacityIncreaser(element) {
//     element.style.display = 'block'
//     element.style.opacity = 1;
//     element.style.transition = 'ease 3s';
// }

// function imageOpacityDecreaser(element) {
//     element.style.opacity = 0;
//     element.style.transition = 'ease 3s';
// }

// function logoAppearance() {
//     logoContainer.style.display = 'flex';
//     logoContainer.style.opacity = 1;
//     logoContainer.style.transition = '4s ease';
//     logoContainer.style.width = '100vw'
//     logoContainer.style.height = '100vh'
// }

// function darkenRoom() {
//     curtain.style.background = 'black';
// }

// function removeCurtains() {
//     curtainLeft.style.display = 'none';
//     curtainRight.style.display = 'none';
// }

// function moveAround() {
//     curtainLeft.style.transform = 'translateX(-105%)';
//     curtainLeft.style.transition = '4s ease';
//     curtainRight.style.transform = 'translateX(105%)';
//     curtainRight.style.transition = '4s ease';
// }

// function reveal() {
//     curtain.style.display = 'flex';
//     curtain.style.opacity = 1;
//     curtain.style.transition = '5s ease';
// }
// reveal()
// setTimeout(moveAround, 3500)
// setTimeout(darkenRoom, 3530)
// setTimeout(removeCurtains, 6000)
// setTimeout(logoAppearance, 6020)
// setTimeout(() => imageOpacityIncreaser(sos), 6030)
// setTimeout(() => imageOpacityDecreaser(sos), 7030)
// setTimeout(() => imageOpacityIncreaser(apesWindow), 7030)
// setTimeout(() => imageOpacityDecreaser(apesWindow), 8030)
// setTimeout(() => imageOpacityIncreaser(topGun), 8030)
// setTimeout(() => imageOpacityDecreaser(topGun), 9030)

//******************************* HOME PAGE ****************************************/

const hamburger = document.querySelector('.hamburger');
const upperHam = document.querySelector('.upper');
const middleHam = document.querySelector('.middle');
const lowerHam = document.querySelector('.lower');
let mainTitle = document.querySelector('.movie-title');
let moviesDiv = document.querySelectorAll('.movie');

//****** GREY FILTER ON ALL IMAGES **************/

moviesDiv.forEach(el => el.style.filter = 'greyscale(100%)')
//***************************** MES FONCTIONS ************************************ */

function toggleMobileMenu() {
    hamburger.onclick = function () {
        middleHam.classList.toggle('middle-active');
        upperHam.classList.toggle('upper-active');
        lowerHam.classList.toggle('lower-active');
    }
}

toggleMobileMenu();