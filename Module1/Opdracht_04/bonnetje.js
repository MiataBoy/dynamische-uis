let products = {"bier": 3.50, "fris": 1.50, "wijn": 12.50}
let receipt = {}

let totaal = 0;
let stopping = false;
let userInput;
let productAmount = NaN;
let amountNaN = true;
while (stopping === false) {
    userInput = prompt(`Wat wilt u bestellen? (Type 'stop' om te stoppen.)\nProductkeuze: ${Object.keys(products)}`)

    if (userInput === "stop") {
        stopping = true;
    } else {

        if (!userInput in products) {
            alert(`Wij bieden dit product (${userInput}) momenteel niet aan. Excuses voor het ongemak.`)
        } else {
            while (amountNaN === true) {
                productAmount = parseInt(prompt(`Hoeveel wilt u van ${userInput}?`))

                console.log(isNaN(productAmount))

                if (!isNaN(productAmount)) {
                    amountNaN = false
                }
            }

            amountNaN = true

            Object.keys(receipt).includes(userInput) ? receipt[userInput] += productAmount : receipt[userInput] = productAmount

            totaal += productAmount * products[userInput]
        }
    }
}

for (const [key, value] of Object.entries(receipt)) {
    let display = `${value}x ${key} - €${(value*products[key]).toFixed(2).replace(".", ",")}`
    document.getElementById("bon").innerText = "Uw bon - bedankt voor het bestellen!"
    document.getElementById("bon-producten").innerText += display + '\n';
}
if (totaal > 0) {
    document.getElementById("totaalprijs").innerText = "totaal: €" + totaal.toFixed(2).replace(".", ",")
}