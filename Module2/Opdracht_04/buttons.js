let MAX = 50

console.log("running this dumb script")

for (let buttons = 1; buttons < MAX+1; buttons++) {
    var button = document.createElement("BUTTON");
    button.id = buttons
    button.innerText = buttons;
    button.addEventListener("click", () => changeColour(buttons))
    document.getElementById("container").appendChild(button);
}

function changeColour(buttonID) {
    console.info(`buttonID ${buttonID}`)

    let button = document.getElementById(buttonID)
    console.log(button.classList.contains("placeholder"))

    if (button.classList.contains("btn-5")) {
        button.remove()
    } else if (button.classList.contains("btn-4")) {
        button.classList.add("btn-5")
    } else if (button.classList.contains("btn-3")) {
        button.classList.add("btn-4")
    } else if (button.classList.contains("btn-2")) {
        button.classList.add("btn-3")
    } else if (!button.classList.contains("btn-2")) {
        button.classList.add("btn-2")
    }



}
