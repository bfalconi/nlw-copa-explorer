function createGame(date, player1, score, player2) {
    return `
        <li>
            <span>${date}</span>
            <img src="./assets/svg/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${score}</strong>
            <img src="./assets/svg/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.4;

function createCard(group, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${group}</h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML =    
createCard("Grupo A", createGame("Dom 20/11<br>13h00", "qatar", "x", "ecuador") + createGame("Seg 21/11<br>13:00", "senegal", "x", "netherlands") + createGame("Sex 25/11<br>10:00", "qatar", "x", "senegal") + createGame("Sex 25/11<br>13:00", "netherlands", "x", "ecuador") + createGame("Ter 29/11<br>12:00", "netherlands", "x", "qatar") + createGame("Ter 29/11<br>12:00", "ecuador", "x", "senegal")) + 
createCard("Grupo B", createGame("Seg 21/11<br>10h00", "england", "x", "iran") + createGame("Seg 21/11<br>16:00", "united-states", "x", "wales") + createGame("Sex 25/11<br>07:00", "wales", "x", "iran") + createGame("Sex 25/11<br>16:00", "england", "x", "united-states") + createGame("Ter 29/11<br>16:00", "iran", "x", "united-states") + createGame("Ter 29/11<br>16:00", "wales", "x", "england")) + 
createCard("Grupo C", createGame("Ter 22/11<br>07h00", "argentina", "x", "saudi-arabia") + createGame("Ter 22/11<br>13:00", "mexico", "x", "poland") + createGame("Sab 26/11<br>10:00", "poland", "x", "saudi-arabia") + createGame("Sab 26/11<br>10:00", "argentina", "x", "mexico") + createGame("Qua 30/11<br>16:00", "poland", "x", "argentina") + createGame("Qua 30/11<br>16:00", "saudi-arabia", "x", "mexico")) + 
createCard("Grupo D", createGame("Ter 22/11<br>10h00", "denmark", "x", "tunisia") + createGame("Seg 22/11<br>16:00", "france", "x", "australia") + createGame("Sab 26/11<br>07:00", "tunisia", "x", "australia") + createGame("Sab 26/11<br>13:00", "france", "x", "denmark") + createGame("Qua 30/11<br>12:00", "tunisia", "x", "france") + createGame("Qua 30/11<br>12:00", "australia", "x", "denmark")) + 
createCard("Grupo E", createGame("Qua 23/11<br>10h00", "germany", "x", "japan") + createGame("Qua 23/11<br>13:00", "spain", "x", "costa-rica") + createGame("Dom 27/11<br>07:00", "japan", "x", "costa-rica") + createGame("Dom 27/11<br>13:00", "spain", "x", "germany") + createGame("Qui 01/12<br>16:00", "japan", "x", "spain") + createGame("Qui 01/12<br>16:00", "costa-rica", "x", "germany")) + 
createCard("Grupo F", createGame("Qua 23/11<br>07h00", "marocco", "x", "croatia") + createGame("Qua 23/11<br>16:00", "belgium", "x", "canada") + createGame("Dom 27/11<br>10:00", "belgium", "x", "marocco") + createGame("Dom 27/11<br>13:00", "croatia", "x", "canada") + createGame("Qui 01/12<br>12:00", "croatia", "x", "belgium") + createGame("Qui 01/12<br>12:00", "canada", "x", "marocco")) + 
createCard("Grupo G", createGame("Qui 24/11<br>07h00", "switzerland", "x", "cameroon") + createGame("Qui 24/11<br>16:00", "brazil", "x", "serbia") + createGame("Seg 28/11<br>07:00", "cameroon", "x", "serbia") + createGame("Sex 28/11<br>13:00", "brazil", "x", "switzerland") + createGame("Sex 02/12<br>16:00", "cameroon", "x", "brazil") + createGame("Ter 02/12<br>16:00", "serbia", "x", "switzerland")) + 
createCard("Grupo H", createGame("Qui 24/11<br>10h00", "uruguay", "x", "southkorea") + createGame("Qui 24/11<br>13:00", "portugal", "x", "ghana") + createGame("Seg 28/11<br>10:00", "southkorea", "x", "ghana") + createGame("Seg 28/11<br>16:00", "portugal", "x", "uruguay") + createGame("Ter 02/12<br>12:00", "southkorea", "x", "portugal") + createGame("Ter 02/12<br>12:00", "ghana", "x", "uruguay"))