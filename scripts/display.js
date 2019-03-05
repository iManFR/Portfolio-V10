/**
 * Variables
 */
const $home = document.querySelector('.home-view')

const $main = document.querySelector('.main-view')
const $aboutButton = document.querySelector('.about-link')

const $about = document.querySelector('.about-view')
const $backWorkButton = $about.querySelector('.backworks-button')
console.log($backWorkButton);


/**
 * Methods
 */
// SHOW MAIN VIEW
const showMain = () => {
    $home.classList.add('hide')
    $main.classList.add('show')
}

// SHOW MAIN VIEW
const hideMain = () => {
    $main.classList.remove('show')
}

// SHOW ABOUT VIEW
const showAbout = () => {
    $about.classList.add('show')
    $home.classList.add('hide')
}

// HIDE ABOUT VIEW
const hideAbout = () => {
    $about.classList.remove('show')
    $home.classList.add('show')
}

 
/**
 * Events
 */
// SCROLL FROM HOME VIEW TO MAIN VIEW
$home.addEventListener('wheel', (e) => {
    if (e.wheelDeltaY < -10){
        showMain()
    }
})

// CLICK ON ABOUT BUTTON
$aboutButton.addEventListener('click', () => {
    showAbout()
    hideMain()
})

// CLICK ON BACK WORKS BUTTON
$backWorkButton.addEventListener('click', () => {
    showMain()
    hideAbout()
})
