//*** OBJET DATA ***//

const data =
{
    "medias": {
        "movie": [
            {
                "title": "Gladiator",
                "picture": "./ressources/movies/gladiator.webp"
            },
            {
                "title": "La liste de Schindler",
                "picture": "./ressources/movies/la-liste-de-schindler.jpg"
            },
            {
                "title": "Dreamcatcher",
                "picture": "./ressources/movies/dreamcatcher.jpg"
            },
            {
                "title": "Hot Shots",
                "picture": "./ressources/movies/hotshot.jpg"
            },
            {
                "title": "Minority Report",
                "picture": "./ressources/movies/minority-report.png"
            },
            {
                "title": "Alien Covenant",
                "picture": "./ressources/movies/alien-covenant.jpeg"
            }
        ],
        "series": [
            {
                "title": "FRIENDS",
                "picture": "./ressources/series/friends.jpg"
            },

            {
                "title": "Dark Angel",
                "picture": "./ressources/series/dark-angel.jpg"
            },
            {
                "title": "Kyle XY",
                "picture": "./ressources/series/Kyle-XY.webp"
            },
            {
                "title": "Charmed",
                "picture": "./ressources/series/charmed.jpg"
            },
            {
                "title": "Halo",
                "picture": "./ressources/series/halo.webp"
            },
            {
                "title": "Loki",
                "picture": "./ressources/series/loki.jpg"
            }
        ]
    }
}

// *** FONCTIONS DE STYLES ***//

function displayNone(element) {
    element.style.display = 'none'
}

function setOpacityNone(element) {
    element.style.opacity = 0;
    element.style.transition = '.8s, ease';
}

function setOpacityFull(element) {
    element.style.opacity = 1;
    element.style.transition = '.8s, ease';
}

function setDisappearance(element) {
    element.style.opacity = 0;
    element.style.width = 0;
    element.style.height = 0;
    element.style.transition = 'all .8s ease';
}

function setAppearance(element) {
    element.style.opacity = 1;
    element.style.width = '50%';
    element.style.height = '50';
    element.style.transition = 'all .8s ease';
}

//*** DECLARATION DES VARIABLES HEADER MOBILE ***/

const hamburger = document.querySelector('.hamburger');
const howToPlay = document.querySelector('.details');
const upperHam = document.querySelector('.upper');
const middleHam = document.querySelector('.middle');
const lowerHam = document.querySelector('.lower');
const mobileMenu = document.querySelector('.mobile-menu');
const details = document.querySelector('.details');
const rules = document.querySelector('.rules');
let active = false;

//*** DECLARATION FONCTIONS HAMBURGER ***/

function toggleMobileMenu() {
    middleHam.classList.toggle('middle-active');
    upperHam.classList.toggle('upper-active');
    lowerHam.classList.toggle('lower-active');
    mobileMenu.classList.toggle('mobile-menu-active');
    setTimeout(() =>
        setAppearance(mobileMenu),
        50);
    setTimeout(() => setOpacityNone(mobileMenu), 6000)
}

function toggleRules() {
    setTimeout(() => setOpacityNone(details), 150)
    setTimeout(() => setOpacityFull(details), 300)
    rules.classList.toggle('rules-active');
    setTimeout(() =>
        setAppearance(rules),
        50);
    setTimeout(() => setOpacityNone(rules), 10000)
}

hamburger.onclick = () => toggleMobileMenu();
details.onclick = () => toggleRules();

//*** DECLARATION HOME VARIABLES ***/
const upperScreenHome = document.querySelector('.upper-screen-home');

//*** DECLARATION SLIDES VARIABLES / PLAY VARIABLES ***//

const movieSliders = document.querySelectorAll('.swiper-slide-movie');
const seriesSliders = document.querySelectorAll('.swiper-slide-serie');
const upperScreenPlay = document.querySelector('.upper-screen-play');
const imageClickedContainer = document.querySelector('#image-clicked-container');
const imageClicked = document.querySelector('#image-clicked');
const validate = document.querySelector('#validate');
const cancel = document.querySelector('#cancel');
const userInput = document.querySelector('#proposition-input');

//*** SLIDES FUNCTIONS ***//

function toggleDisplayPlay() {
    upperScreenHome.classList.toggle('upper-screen-home-inactive');
    upperScreenPlay.classList.toggle('upper-screen-play-active');

}

function playGame() {
    setOpacityNone(upperScreenHome);
    setTimeout(toggleDisplayPlay(), 900);

    imageClicked.src = selected.src;

    alert(selected.dataset.title);
}


let selected;

function setMoviesSlidersDynamically() {
    for (i = 0; i < movieSliders.length; i++) {

        const slide = movieSliders[i];

        slide.alt = 'Image d\'un film à trouver';
        slide.src = data.medias.movie[i].picture;
        slide.dataset.title = data.medias.movie[i].title;
        console.log(slide.dataset.title, ', ', slide.src);
        slide.onclick = () => {
            selected = slide;
            playGame()
        };
    }

    for (i = 0; i < movieSliders.length; i++) {

        const slideSeries = seriesSliders[i];

        slideSeries.alt = 'Image d\'un film à trouver';
        slideSeries.src = data.medias.series[i].picture;
        slideSeries.dataset.title = data.medias.series[i].title;
        console.log(slideSeries.dataset.title, ', ', slideSeries.src);
        slideSeries.onclick = () => {
            selected = slideSeries;
            playGame()
        };


    }
}
//*** SET IMAGES DYNAMICALLY ***//



//*** EFFACER LES REPONSES ***/
function clearInputField() {
    userInput.value = '';
}
//*** PLAYING LOGICS FUNCTIONS ***/
function validateAnswer() {
    if (userInput.value === selected.dataset.title) {
        beRight()
        userInput.value = 'Bravo !';
        setTimeout(() => toggleDisplayPlay(), 3000);

    }
    else {
        beWrong();
    }
}

function setBaseParameters() {
    userInput.style = 'background-color: white';
    userInput.style = 'color: black';
    userInput.style = 'transition: all 1s ease';
    userInput.value = '';
}

function beRight() {
    userInput.style.backgroundColor = 'green';
    userInput.style.color = 'white';
    userInput.style.transition = 'all .7s ease';
    setTimeout(() => setBaseParameters(), 3000)
}

function beWrong() {
    userInput.value = 'Ce n\'est pas ça, réessayez!';
    userInput.style.backgroundColor = 'red';
    userInput.style.color = 'white';
    userInput.style.transition = 'all .7s ease';
    setTimeout(() => setBaseParameters(), 3000);
}

//*** BONNES REPONSES ***//
setMoviesSlidersDynamically();
// setSource()

validate.onclick = () => validateAnswer();
cancel.onclick = () => clearInputField();