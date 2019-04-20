/**
 * Variables
 */
const $home = document.querySelector('.home-view')

const $main = document.querySelector('.main-view')
const $worksSlider = document.querySelector('.works-slider')
const $aboutButton = document.querySelector('.about-link')

const $allworks = document.querySelector('.allworks-button')
const $workMenu = document.querySelector('.work-menu')

const $about = document.querySelector('.about-view')
const $backWorkButton = $about.querySelector('.backworks-button')


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

// SHOW WORK MENU
const showWorkMenu = () => {
    $worksSlider.classList.add('animated', 'fadeOut', 'slow')
    $workMenu.classList.add('animated', 'fadeIn', 'slow', 'delay-2s')
}

// SHOW ABOUT VIEW
const showAbout = () => {
    $about.classList.add('show')
    //$home.classList.add('hide')
    $home.classList.add('animated', 'fadeOut')
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

// CLICK ALL WORKS
$allworks.addEventListener('click', () => {
    showWorkMenu()
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
