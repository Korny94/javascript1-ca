const gamesDiv = document.querySelector("#gamesDiv");

const url = "https://api.rawg.io/api/games?dates=2001-01-01,2001-12-31&ordering=-rating";

const key = "&key=dfdbb9ccf03946b793f193f9ec243e36";

const urlKey = url + key;


async function fetchGames() {
    try {
        const response = await fetch(urlKey);
        const json = await response.json();

        console.log(json);

        const games = json.results;
        console.log(games);

        gamesDiv.classList.remove("loading");

        games.forEach(function(game) {
            gamesDiv.innerHTML += `
                <a href="../html/details.html?id=${game.id}" class="gameCard">
                    <div class="gameBg" style="background-image: url(${game.background_image})">
                    </div>
                    <div class="gameName">
                        ${game.name}
                    </div>
                </a>
            `
        })
        } catch (err) {
        gamesDiv.classList.remove("loading");
        gamesDiv.classList.add("error");
        gamesDiv.innerHTML = "There was an error!";
    }
}

fetchGames();
