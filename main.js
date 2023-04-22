canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d")

mouseve="empty"
var lpx, lpy

color="black"
widthline=3

var wh = screen.width
var nw = screen.width - 70
var nh = screen.height - 50

if (wh < 992){

    document.getElementById("myCanvas").width = nw
    document.getElementById("myCanvas").height = nh
    document.body.style.overflow="hidden"
    
}


canvas.addEventListener("touchstart", mytouchstart)

canvas.addEventListener("touchmove", mytouchmove)

function mytouchstart(e){

    color = document.getElementById("cl").value

    widthline = document.getElementById("wl").value

    lpx = e.touches[0].clientX - canvas.offsetLeft
    lpy = e.touches[0].clientX - canvas.offsetTop

}


function  mytouchmove(e){

    cpx = e.touches[0].clientX - canvas.offsetLeft
    cpy = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = widthline
    ctx.moveTo(lpx, lpy)
    ctx.lineTo(cpx, cpy)
    ctx.stroke()

    lpx = cpx
    lpy = cpy
}

canvas.addEventListener("mousedown", mymousedown)

canvas.addEventListener("mouseup", mymouseup)

canvas.addEventListener("mouseleave", mymouseleave)

canvas.addEventListener("mousemove", mymousemove)

function mymousedown(e){

    mouseve="md"

    color=document.getElementById("cl").value
    widthline=document.getElementById("wl").value

}

function mymouseup(e){

    mouseve="mu"

    
}

function mymouseleave(e){

    mouseve="ml"

    
}

function mymousemove(e){

    cpx=e.clientX- canvas.offsetLeft
    cpy=e.clientY- canvas.offsetTop

    if(mouseve == "md"){

        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthline

        ctx.moveTo(lpx, lpy)
        ctx.lineTo(cpx, cpy)
        ctx.stroke()
    }

    lpx = cpx   //where lpx is last position of x and cpx is current position of x
    lpy = cpy   //where lpy is last position of y and cpy is current position of y

}


function erase(){

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
