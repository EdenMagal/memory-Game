document.addEventListener("DOMContentLoaded", () => {
    const cardsArr = [
        {
            name: "hamburger",
            img: "images/hamburger.png"
        },
        {
            name: "hamburger",
            img: "images/hamburger.png"
        },
        {
            name: "pizza",
            img: "images/pizza.png"
        },
        {
            name: "pizza",
            img: "images/pizza.png"
        },
        {
            name: "fries",
            img: "images/fries.png"
        },
        {
            name: "fries",
            img: "images/fries.png"
        },
        {
            name: "hotdog",
            img: "images/hotdog.png"
        },
        {
            name: "hotdog",
            img: "images/hotdog.png"
        },
        {
            name: "icecream",
            img: "images/icecream.png"
        },
        {
            name: "icecream",
            img: "images/icecream.png"
        },
        {
            name: "milkshake",
            img: "images/milkshake.png"
        },
        {
            name: "milkshake",
            img: "images/milkshake.png"
        }
    ];

    cardsArr.sort(() => 0.5 - Math.random());

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    const grid = document.querySelector(".grid");
    function creatBoard() {
        for (let i = 0; i < cardsArr.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "images/blank.png");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipcard);
            grid.appendChild(card);
        }
    }

    function flipcard() {
        const cardId = this.getAttribute("data-id");
        cardsChosen.push(cardsArr[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src", cardsArr[cardId].img);
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    const span = document.querySelector("#result");
    const div = document.querySelector(".center");
    const btn = document.createElement("button");
    btn.addEventListener("click", playAgain);
    btn.innerHTML = "play again";
    div.appendChild(btn);
    btn.style.display = "none";

    function checkForMatch() {
        const cards = document.querySelectorAll("img");
        const [optionOneId, optionTwoId] = cardsChosenId;
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("you found a match!");
            cards[optionOneId].setAttribute("src", "images/white.png");
            cards[optionTwoId].setAttribute("src", "images/white.png");
            cardsWon.push(cardsChosen);
            span.innerHTML++;
            cards[optionOneId].removeEventListener("click", flipcard);
            cards[optionTwoId].removeEventListener("click", flipcard);

        }
        else {
            cards[optionOneId].setAttribute("src", "images/blank.png");
            cards[optionTwoId].setAttribute("src", "images/blank.png");
            alert("sorry,try again");
        }
        cardsChosen = [];
        cardsChosenId = [];

        if (cardsArr.length / 2 == cardsWon.length) {
            span.innerHTML = "YOU WON!";
            btn.style.display = "block";

        }

    }

    function playAgain() {
        grid.innerHTML = "";
        span.innerHTML = 0;
        cardsArr.sort(() => 0.5 - Math.random());
        creatBoard();
        btn.style.display = "none";
    }

    creatBoard();

})