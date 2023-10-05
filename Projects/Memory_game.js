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

function show_pattern() {
    var board = document.getElementById('pattern1')
    var reset_btn1 = document.getElementById('reset_btn')
    var play_btn = document.getElementById('spongebob_btn')
    var counter = document.getElementById('counter')
    var shoes_btn = document.getElementById('shoes_btn')
    shoes_btn.style.display = 'none';
    board.style.display = 'grid'
    reset_btn1.style.display = ''
    play_btn.style.display = 'none'
    counter.style.display = ''
}


const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {

    document.getElementById('pattern1').style.display = 'none';
    document.getElementById('counter').style.display = 'none';
    document.getElementById('spongebob_btn').style.display = '';
    document.getElementById('reset_btn').style.display = 'none';
    document.getElementById('shoes_btn').style.display = '';

    

    clicks = 0;
    updateScores();
    reset_btn();

});

function show_shoes() {
    var board = document.getElementById('pattern1');
    var reset_btn1 = document.getElementById('reset_btn');
    var counter = document.getElementById('counter');
    var shoes_btn = document.getElementById('shoes_btn');
    var play_btn = document.getElementById('spongebob_btn')
    shoes_btn.style.display = 'none';
    play_btn.style.display = 'none';
    board.style.display = 'grid';
    reset_btn1.style.display = '';
    counter.style.display = '';

    // Update image sources for shoes
    const shoe_images = [
        'images/shoes_pair_1.png',
        'images/shoes_pair_2.png',
        'images/shoes_pair_3.png',
        'images/shoes_pair_4.png',
        'images/shoes_pair_5.png',
        'images/shoes_pair_6.png',
        'images/shoes_pair_7.png',
        'images/shoes_pair_8.png',
        'images/shoes_pair_1.png',
        'images/shoes_pair_2.png',
        'images/shoes_pair_3.png',
        'images/shoes_pair_4.png',
        'images/shoes_pair_5.png',
        'images/shoes_pair_6.png',
        'images/shoes_pair_7.png',
        'images/shoes_pair_8.png',
    ];

    const tiles = document.querySelectorAll('.tile');

    for (let i = 0; i < tiles.length; i++) {
        const frontFaceImg = tiles[i].querySelector('.front-face');
        const backFaceImg = tiles[i].querySelector('.back-face');
        frontFaceImg.src = shoe_images[i];

        // you can change it to a shoe image if you want, instead of bob spong
        backFaceImg.src = 'images/shoes_background.png'; 
    }
}
