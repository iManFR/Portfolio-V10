//Setup
const $canvas = document.querySelector('.js-canvas')
const context = $canvas.getContext('2d')

//Resize
const sizes = { width: 800, height: 600 }

const resize = () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    $canvas.width = sizes.width
    $canvas.height = sizes.height
}

window.addEventListener('resize', resize)
resize()

context.beginPath()
context.fillStyle = '#000'
context.fillRect(0, 0, sizes.width, sizes.height)
context.closePath()

const drawDiscover = (x, y, radius) => {
    context.beginPath()
    //context.fillStyle = 'white'
    context.arc(x, y, radius, 0, 2 * Math.PI)
    context.globalCompositeOperation = "destination-out"
    context.fill()
    context.closePath()
}

document.addEventListener('click', e => {
    const clickX = e.clientX
    const clickY = e.clientY
    let radius = 2
    setInterval(() => {
        drawDiscover(clickX, clickY, radius+=5)
    }, 10);
})


//Cursor Position and down ?
/*const cursor = { x: 0, y: 0, down: false }

window.addEventListener('mousedown', () => {
    cursor.down = true
})

window.addEventListener('mouseup', () => {
    cursor.down = false
})


document.addEventListener('mousemove', e => {
    cursor.x = e.clientX
    cursor.y = e.clientY
})*/

//Draw
/*const cursorDraw = () => {
    window.requestAnimationFrame(cursorDraw)
    context.beginPath()
    context.strokeStyle = 'white'
    context.arc(cursor.x, cursor.y, 30, 0, 2 * Math.PI)
    context.clearRect(0, 0,  sizes.width,  sizes.height)
    context.fillStyle = '#000'
    context.fillRect(0, 0, sizes.width, sizes.height)
    context.stroke()
}
cursorDraw()

const loop = () => {
    window.requestAnimationFrame(loop)
    if(cursor.down){
        context.beginPath()
        
    } else {
        context.beginPath()
        
    }
}
loop()*/

//Draw canvas
/*const loop = () => {
    window.requestAnimationFrame(loop)
    if(cursor.down){
        context.beginPath()
        context.arc(cursor.x, cursor.y, 150, 0, 2 * Math.PI)
        context.fill()
        context.globalCompositeOperation = "destination-out" 
    } /*else {
        context.beginPath()
        context.arc(cursor.x, cursor.y, 150, 0, 2 * Math.PI)
        context.strokeStyle = 'white'
        context.stroke()
        context.globalCompositeOperation = "source-over" 
    }*/
/*}
loop()*/

/*const loop = () => {
    window.requestAnimationFrame(loop)
    context.beginPath()
    context.arc(cursor.x, cursor.y, 150, 0, 2 * Math.PI)
    context.strokeStyle = 'white'
    context.stroke()
}
loop()*/

/*
Variables
*/
/*const portfolio = {}
portfolio.$hero = document.querySelector('.hero')
portfolio.$mouseFollow = document.querySelector('#mouse-follow')

document.addEventListener('mousemove', e => {
    portfolio.$mouseFollow.style.transform = 'translateY('+(e.clientY-1240)+'px)'
    portfolio.$mouseFollow.style.transform += 'translateX('+(e.clientX-2000)+'px)'
})*/

