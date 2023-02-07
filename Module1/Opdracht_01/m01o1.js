let uitleg = "In een parkeergarage passen 80 auto's op de begane grond en 120 op een verdieping.\n"+
"Vraag het gewenste aantal auto's in de garage en bereken het aantal verdiepingen wat je nodig hebt.";

alert(uitleg);
let gewenste_aantal_autos = prompt("Hoeveel autos wilt u kwijt in de parkeergarage?");

let nodige_verdiepingen = gewenste_aantal_autos > 80 ? Math.ceil((gewenste_aantal_autos - 80)/70) : 0

if (gewenste_aantal_autos > 80) {
    antwoord = `Er moet${nodige_verdiepingen > 1 ? 'en' : ''} ${nodige_verdiepingen} verdieping${nodige_verdiepingen > 1 ? 'en' : ''} komen!`;
} else {
    antwoord = "Er zijn geen extra verdiepingen nodig. De begane grond is genoeg."
}

document.getElementById("antwoord").innerText = antwoord;

console.log(`Om het gewenste aantal autos kwijt te kunnen heb ik ${nodige_verdiepingen} verdiepingen nodig.`)

alert(antwoord)