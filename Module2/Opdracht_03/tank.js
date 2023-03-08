var image = document.getElementById("image");

document.onkeydown = checkKey;
image.style.transform = "rotate(90deg)"
image.style.left = "0px"
image.style.top = "0px"
image.style.backgroundPosition = `80px 0px`;

function changePosition(direction) {
    positionleft = parseInt(image.style.left)
    positiontop = parseInt(image.style.top)
    backposition = image.style.backgroundPosition.split(" ")[0]


    degdown = "rotate(180deg)"
    degup = "rotate(360deg)"
    degleft = "rotate(270deg)"
    degright = "rotate(90deg)"

    console.log("arrow: " + direction)
    console.log("Current transform degrees: " + image.style.transform)

    switch (direction) {
        case "up":
            image.style.transform = degup
            positiontop -= 10
            backposition += 10
            image.style.top = positiontop.toString() + "px";
            image.style.backgroundPosition = `${backposition}px -0px`;
            return
        case "down":
            image.style.transform = degdown
            positiontop += 10
            image.style.top = positiontop.toString() + "px";
            return
        case "left":
            image.style.transform = degleft
            positionleft -= 10
            image.style.left = positionleft.toString() + "px";
            return
        case "right":
            image.style.transform = degright
            positionleft += 10
            image.style.left = positionleft.toString() + "px";
            return
    }
}

function checkKey(e) {
	console.log("key nr = " + e.keyCode);
    e = e || window.event;
    if(e.keyCode == 32){
    	console.log("spacebar");
    } else if (e.keyCode == '38') {  // up arrow
        changePosition("up")
    } else if (e.keyCode == '40') { // down arrow
        changePosition("down")
    } else if (e.keyCode == '37') { // left arrow
    	changePosition("left")
    } else if (e.keyCode == '39') {   // right arrow
    	changePosition("right")
    }
}