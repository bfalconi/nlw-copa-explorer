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
createCard("Grupo G - 24/11", "quinta", createGame("switzerland", "07:00", "cameroon") + createGame("brazil", "16:00", "serbia")) + 
createCard("Grupo G - 28/11", "segunda", createGame("cameroon", "07:00", "serbia") + createGame("brazil", "13:00", "switzerland")) + 
createCard("Grupo G - 02/12", "sexta", createGame("serbia", "16:00", "switzerland") + createGame("brazil", "16:00", "cameroon"))
