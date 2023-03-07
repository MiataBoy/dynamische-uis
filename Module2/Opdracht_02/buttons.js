function buttonFilter(buttonInt) {
    document.querySelectorAll('button').forEach(elem => {elem.disabled = false;});
    document.querySelectorAll('button').forEach(elem => {elem.style.backgroundColor = "#4CAF50";});

    document.getElementById("backgroundimg").style.backgroundImage = `url('images/bg${buttonInt}.jpg')`;
    document.getElementById("containerimg").src = `images/${buttonInt}.jpg`
    let button = document.getElementById(`button${buttonInt}`)
    let text = button.innerText;
    button.innerText = parseInt(text) + 1

    button.style.backgroundColor = 'red';
    button.disabled = true;
}

