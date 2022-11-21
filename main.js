function createGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/svg/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/svg/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.4;

function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML =    
createCard("Grupo G - 24/11", "quinta", createGame("switzerland", "07:00", "cameroon") + createGame("brazil", "16:00", "serbia")) + 
createCard("Grupo G - 28/11", "segunda", createGame("cameroon", "07:01", "serbia") + createGame("brazil", "13:00", "switzerland")) + 
createCard("Grupo G - 02/12", "sexta", createGame("serbia", "16:00", "switzerland") + createGame("brazil", "16:00", "cameroon"))
