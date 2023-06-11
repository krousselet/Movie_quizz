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

// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
// });

// const swiper = document.querySelector('.swiper').swiper;
//******************************* HOME PAGE ****************************************/

const header = document.querySelector('header');
const mobileMenu = document.querySelector('.mobile-menu')
const hamburger = document.querySelector('.hamburger');
const upperHam = document.querySelector('.upper');
const middleHam = document.querySelector('.middle');
const lowerHam = document.querySelector('.lower');
let mainTitle = document.querySelector('.movie-title');
let active = false;


//***************************** MES FONCTIONS ************************************ */

function toggleMobileMenu() {
    middleHam.classList.toggle('middle-active');
    upperHam.classList.toggle('upper-active');
    lowerHam.classList.toggle('lower-active');
    mobileMenu.classList.toggle('mobile-menu-active');
    mobileMenu.style.transition = 'opacity .5s ease';
}

function toggleDisplayHomePlay() {
    homeContainer.classList.toggle('home-container-inactive');
    playContainer.classList.toggle('play-container-active');
    homePage = false;
}
//************************** How to redirect to the Play page in JS ****************/

const homeContainer = document.querySelector('.home-container');
const playContainer = document.querySelector('.play-container');
const home = document.querySelectorAll('.accueil');
const movie = document.querySelectorAll('.movie');
const gladiator = document.querySelector('.gladiator');
const schindler = document.querySelector('.schindler');
const minorityReport = document.querySelector('.minority-report');
const dreamCatcher = document.querySelector('.dreamcatcher');
const hotShots = document.querySelector('.hot-shots');
const alienCovenant = document.querySelector('.alien-covenant');
const gladiatorRedirect = './index.html'
const schindlerRedirect = './index.html';
const minorityReportRedirect = './index.html';
const dreamCatcherRedirect = './index.html';
const hotShotsRedirect = './index.html';
const alienCovenantsRedirect = './index.html';
let clicked = true;
let homePage = true;
const imageClicked = document.querySelector('.image-clicked');

hamburger.onclick = () => toggleMobileMenu();

home.forEach(el => el.onclick = function () {
    !homePage ? toggleDisplayHomePlay() : console.log('test');
    homePage = true;
    toggleMobileMenu();
})

// **** REDIRECTION AU CLICK SUR UNE NOUVELLE PAGE **** //

// function goTo(div, redirection) {
//     div.target = '_blank';
//     window.open(redirection);
//     // clicked = true;
// }

// goTo(schindler, schindlerRedirect);
// goTo(minorityReport, minorityReportRedirect);
// goTo(dreamCatcher, dreamCatcherRedirect);
// goTo(alienCovenant, alienCovenantsRedirect);

const apiURL = 'https://api.themoviedb.org/3/movie/550?api_key=0055dcf71eefbef167140b90c31be8fd';



//************* UTILISATION DE FETCH() POUR EXPLOITER LE JSON ***********/

async function extractDataJson() {
    const response = await fetch('./movies.JSON');
    const data = await response.json();
    console.log(data);
    gladiator.onclick = function () {
        imageClicked.src = data.medias.movie[0].picture
        let movieTitle = data.medias.movie[0].title;
        console.log(movieTitle);
        // goTo(gladiator, gladiatorRedirect);
        toggleDisplayHomePlay();
        validateAnswer(movieTitle);

    }
    schindler.onclick = function () {
        imageClicked.src = data.medias.movie[1].picture;
        let movieTitle = data.medias.movie[1].title;
        toggleDisplayHomePlay();
        validateAnswer(movieTitle);
    }

    dreamCatcher.onclick = function () {
        imageClicked.src = data.medias.movie[2].picture;
        let movieTitle = data.medias.movie[2].title;
        toggleDisplayHomePlay();
        validateAnswer(movieTitle);
    }
    hotShots.onclick = function () {
        imageClicked.src = data.medias.movie[3].picture
        let movieTitle = data.medias.movie[3].title;
        toggleDisplayHomePlay();
        validateAnswer(movieTitle);
    };
    minorityReport.onclick = function () {
        imageClicked.src = data.medias.movie[4].picture
        let movieTitle = data.medias.movie[4].title;
        toggleDisplayHomePlay();
        validateAnswer(movieTitle);
    };
    alienCovenant.onclick = function () {
        imageClicked.src = data.medias.movie[5].picture
        let movieTitle = data.medias.movie[5].title;
        toggleDisplayHomePlay();
        validateAnswer(movieTitle);
    };
}

extractDataJson();

//********************* Logics Handling *******************//
const inputHandler = document.querySelector('#user-input');
const submit = document.querySelector('#submit');
let userAnswer = inputHandler.value;
//*** First step : get the user's input ***/

function validateAnswer(movieTitle) {
    submit.onclick = function () {
        let userAnswer = inputHandler.value;
        console.log(userAnswer);
        if (userAnswer === movieTitle) {
            console.log('Bravo !');
        }
        return userAnswer;
    }


}


