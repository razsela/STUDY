const cards = document.querySelectorAll('.tile');

let clicks = 0;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    clicks += 1; 

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
    updateScores(); 
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    hasFlippedCard = false;
    lockBoard = false;
}

function checkForMatch() {
    const img1 = firstCard.querySelector("img")
    const img2 = secondCard.querySelector("img")
    let isMatch = img1.src === img2.src;

    if (isMatch) {
        disableCards();
    } else {
        setTimeout(() => {
            unflipCards();
        }, 500);
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    if (!firstCard || !secondCard) {
        // Check if firstCard or secondCard is null or undefined
        resetBoard();
        return;
    }

    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
        resetBoard();
    }, 500);
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
    cards.forEach(card => card.addEventListener('click', flipCard));
}


    function reset_btn() {
       
        cards.forEach(card => card.classList.remove('flip'));
        setTimeout(() => {
            resetBoard();
            shuffle();
            clicks = 0;
            updateScores();
    
        
        }, 500);
    }
     


function updateScores() {
    document.getElementById('clicks').innerText = clicks;
}

cards.forEach(card => card.addEventListener('click', flipCard));

shuffle();
