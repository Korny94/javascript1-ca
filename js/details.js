const gameDiv = document.querySelector("#gameDiv");

const gameTitle = document.querySelector("#gameTitle");

const urlGame = "https://api.rawg.io/api/games/"

const keyGame = "?key=dfdbb9ccf03946b793f193f9ec243e36";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const urlKeyId = urlGame + id + keyGame;

console.log(urlKeyId)

async function fetchGame() {
    try {
        const response = await fetch(urlKeyId);
        const json = await response.json();

        console.log(json);

        gameDiv.classList.remove("loading");

        gameTitle.innerHTML = json.name;

        createGameHtml(json)

        } catch (err) {
            console.log(err);
        gameDiv.classList.remove("loading");
        gameDiv.classList.add("error");
        gameDiv.innerHTML = "There was an error!";
    }
}

fetchGame();


function createGameHtml(json) {
    gameDiv.innerHTML = `
    <div class="gameDetails">
        <h1 class="h1Details">${json.name}</h1>
        <div class="gameDetailBg" style="background-image: url(${json.background_image})"></div>
        <h2>Rating: <span>${json.ratings[0].title}</span></h2>
        <h3>Released: ${json.released}</h3>
    </div>
`;

}