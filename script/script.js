// Render cards
async function getCardsData() {
    let url = '../assets/card-data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderCards() {
    let card = await getCardsData();
    let cardContainer = '';
    card.forEach(card => {
        let bonustext = ''
        if (card.bonustext.type === "free-bet") {
            bonustext = `
                <p class="info-text info-text--full"><b> - Exclusive - </b></p>
                <p class="info-text info-text--short">Free Bet</p>
                <p class="info-text info-text--amount"><span class="hide--mobile">${card.bonustext.text}</span>&nbsp;<b>${card.bonustext.amount}$</b></p>
            `}
        if (card.bonustext.type === "bonus") {
                bonustext = `
                    <p class="info-text info-text--full">100% Sign Up Bonus</p>
                    <p class="info-text info-text--short">Bonus</p>
                    <p class="info-text info-text--amount"><span class="hide--mobile">&nbsp;${card.bonustext.text}</span>&nbsp;<b>${card.bonustext.amount}$</b></p>
                `}
        let singleCards = `
                    <div class="card" data-company="${card.company.toLowerCase()}">
                        <p class="card__count"></p>
                        <div class="card__info">
                            <img src="./assets/${card.logo}" class="card__img" alt="${card.company}">
                            <div class="card__rating">
                                <div class="rating rating--${card.rating}"></div>
                                <a class="card__review" href="./review">Review</a>
                            </div>
                            <div class="info">
                                ${bonustext}
                            </div>
                        </div>
                        <a href="#" class="card__button">
                            Play&nbsp;Now
                            <i class="card__button--icon fa-solid fa-chevron-right"></i>
                        </a>
                    </div>`;

        cardContainer += singleCards;
    });

    container.innerHTML = cardContainer;
}

// Sort Alphabetically 

// Compare names and sort
function comparator(a, b) {
    if (a.dataset.company < b.dataset.company)
        return -1;
    if (a.dataset.company > b.dataset.company)
        return 1;
    return 0;
}
  
function sortCards() {
    var subjects = document.querySelectorAll("[data-company]");
    var subjectsArray = Array.from(subjects);
    let sorted = subjectsArray.sort(comparator);
    sorted.forEach(e => document.querySelector(".card-container").appendChild(e));
}

    

// number cards
function numberCards() {
    let getCardsCount = document.querySelectorAll(".card__count");
    for (let i = 0; i < getCardsCount.length; i++) {
        getCardsCount[i].innerHTML = i + 1;
    }
}
let container = document.querySelector('.card-container');
await renderCards();
let getCards = document.querySelectorAll(".card");
numberCards();

// add sort class listener
let sortTriggerAlphab = document.querySelector("#sortCardsAlphabeticall");
sortTriggerAlphab.addEventListener("click", function() { 
    sortCards()
    sortTriggerAlphab.style.display = "none";
    sortTriggerNumeri.style.display = "block";
    container.classList.add("card-container--sorted");
});

let sortTriggerNumeri = document.querySelector("#sortCardsNumerical");
sortTriggerNumeri.addEventListener("click", async function() { 
    sortTriggerNumeri.style.display = "none";
    sortTriggerAlphab.style.display = "block";
    container.classList.remove("card-container--sorted");
    await renderCards();
    numberCards();
});




// view toggle

function switchCardView() {
    if (getToggle.checked == true) {
        container.classList.add("card-container--cards-big");
        console.log("toggle toggle ")
    } else {
        container.classList.remove("card-container--cards-big");
    }
}

let getToggle = document.querySelector(".switch__checkbox");
getToggle.addEventListener("click", function() { 
    switchCardView();
});