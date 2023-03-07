function buttonFilter(buttonInt) {
    document.getElementById("backgroundimg").style.backgroundImage = `url('images/bg${buttonInt}.jpg')`;
    document.getElementById("containerimg").src = `images/${buttonInt}.jpg`
    let text = document.getElementById(`button${buttonInt}`).innerText;
    document.getElementById(`button${buttonInt}`).innerText = parseInt(text) + 1
}

