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
                <span class="info-text info-text--full"><b> - Exclusive - </b> ${card.bonustext.text}</span>
                <span class="info-text info-text--short">Free Bet</span>
                <span class="info-text info-text--amount">&nbsp;${card.bonustext.amount}$</span>
            `}
        if (card.bonustext.type === "bonus") {
                bonustext = `
                    <span class="info-text info-text--full"><span>100% Sign Up Bonus </span>${card.bonustext.text} </span>
                    <span class="info-text info-text--short">Bonus</span>
                    <span class="info-text info-text--amount">&nbsp;${card.bonustext.amount}$</span>
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