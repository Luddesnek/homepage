let ball = document.getElementById("ball")


function moveBall(event) {
   ball.style.top = event.clientY + "px"
   ball.style.left = event.clientX + "px"
}

document.body.addEventListener("mousemove", moveBall);
document.body.addEventListener("touchmove", moveBall);