const cards4 = document.querySelectorAll('.tile1');
const cards6 = document.querySelectorAll('.tile2');

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
    cards4.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
    cards4.forEach(card => card.addEventListener('click', flipCard));
    cards6.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
    cards6.forEach(card => card.addEventListener('click', flipCard));
}


function reset_btn() {

    cards4.forEach(card => card.classList.remove('flip'));
    cards6.forEach(card => card.classList.remove('flip'));

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

cards4.forEach(card => card.addEventListener('click', flipCard));
cards6.forEach(card => card.addEventListener('click', flipCard));

shuffle();

//menu
const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', () => {

    document.getElementById('pattern4').style.display = 'none';
    document.getElementById('pattern6').style.display = 'none';
    document.getElementById('counter').style.display = 'none';
    document.getElementById('spongebob_btn_easy').style.display = 'none';
    document.getElementById('spongebob_btn_hard').style.display = 'none';
    document.getElementById('spongebob_btn').style.display = '';
    document.getElementById('reset_btn').style.display = 'none';
    document.getElementById('shoes_btn').style.display = '';
    document.getElementById('shoes_btn_hard').style.display = 'none';
    document.getElementById('shoes_btn_easy').style.display = 'none';
    document.getElementById('cars_btn').style.display = '';
    document.getElementById('cars_btn_hard').style.display = 'none';
   document.getElementById('cars_btn_easy').style.display = 'none';
    document.getElementById('select_subject').style.display = '';
    document.getElementById('select_level').style.display = 'none';
    document.getElementById("background").style.backgroundImage = "url(images/memory_game_background.png)";


    clicks = 0;
    updateScores();
    reset_btn();
});
//
function spongebob_level() {
    var reset_btn1 = document.getElementById('reset_btn');
    var counter = document.getElementById('counter');
    var shoes_btn = document.getElementById('shoes_btn');
    var spongebob_btn = document.getElementById('spongebob_btn');
    var cars_btn = document.getElementById('cars_btn');
    var subject = document.getElementById('select_subject');
    var spongebob_hard = document.getElementById('spongebob_btn_hard');
    var spongebob_easy = document.getElementById('spongebob_btn_easy');
    var select_level = document.getElementById('select_level');
    select_level.style.display = '';
    spongebob_easy.style.display = '';
    spongebob_hard.style.display = '';
    subject.style.display = 'none';
    cars_btn.style.display = 'none';
    shoes_btn.style.display = 'none';
    spongebob_btn.style.display = 'none';

}
function show_spongebob4() {
    var board = document.getElementById('pattern4');
    var reset_btn1 = document.getElementById('reset_btn');
    var counter = document.getElementById('counter');
    var shoes_btn = document.getElementById('shoes_btn');
    var play_btn = document.getElementById('spongebob_btn');
    var cars_btn = document.getElementById('cars_btn');
    var subject = document.getElementById('select_subject');
    var spongebob_hard = document.getElementById('spongebob_btn_hard');
    var spongebob_easy = document.getElementById('spongebob_btn_easy');
    var select_level = document.getElementById('select_level');
    select_level.style.display = 'none';
    spongebob_easy.style.display = 'none';
    spongebob_hard.style.display = 'none';
    subject.style.display = 'none';
    cars_btn.style.display = 'none';
    shoes_btn.style.display = 'none';
    play_btn.style.display = 'none';
    board.style.display = 'grid';
    reset_btn1.style.display = '';
    counter.style.display = '';
 
    document.getElementById("background").style.backgroundImage = "url(images/spongebob_background.png)";    // Update image sources for shoes
    const spongebob_images = [
        'images/spongebob_character.png',
        'images/squidward.png',
        'images/sandy.png',
        'images/pearl.png',
        'images/patrick.png',
        'images/mr_crabs.png',
        'images/mrs_puff.png',
        'images/plankton.png',
        'images/spongebob_character.png',
        'images/squidward.png',
        'images/sandy.png',
        'images/pearl.png',
        'images/patrick.png',
        'images/mr_crabs.png',
        'images/mrs_puff.png',
        'images/plankton.png',
    
    ];

    const tiles = document.querySelectorAll('.tile1');

    for (let i = 0; i < tiles.length; i++) {
        const frontFaceImg = tiles[i].querySelector('.front-face');
        const backFaceImg = tiles[i].querySelector('.back-face');
        frontFaceImg.src = spongebob_images[i];
        backFaceImg.src = 'images/spongebob_backface.png';


    }
}
function show_spongebob6() {
    var board = document.getElementById('pattern6');
    var reset_btn1 = document.getElementById('reset_btn');
    var counter = document.getElementById('counter');
    var shoes_btn = document.getElementById('shoes_btn');
    var play_btn = document.getElementById('spongebob_btn');
    var cars_btn = document.getElementById('cars_btn');
    var subject = document.getElementById('select_subject');
    var spongebob_hard = document.getElementById('spongebob_btn_hard');
    var spongebob_easy = document.getElementById('spongebob_btn_easy');
    var select_level = document.getElementById('select_level');
    select_level.style.display = 'none';
    spongebob_easy.style.display = 'none';
    spongebob_hard.style.display = 'none';
    subject.style.display = 'none';
    cars_btn.style.display = 'none';
    shoes_btn.style.display = 'none';
    play_btn.style.display = 'none';
    board.style.display = 'grid';
    reset_btn1.style.display = '';
    counter.style.display = '';

    document.getElementById("background").style.backgroundImage = "url(images/spongebob_background.png)";    // Update image sources for shoes
    const spongebob_images6 = [
        'images/spongebob_character.png',
        'images/squidward.png',
        'images/sandy.png',
        'images/pearl.png',
        'images/patrick.png',
        'images/mr_crabs.png',
        'images/mrs_puff.png',
        'images/plankton.png',
        'images/larry.png',
        'images/karen.png',
        'images/squilliam.png',
        'images/neptune.png',
        'images/spongebob_character_2.png',
        'images/patrick_2.png',
        'images/squidward_2.png',
        'images/magic_boy.png',
        'images/sea_man.png',
        'images/ray.png',

        'images/spongebob_character.png',
        'images/squidward.png',
        'images/sandy.png',
        'images/pearl.png',
        'images/patrick.png',
        'images/mr_crabs.png',
        'images/mrs_puff.png',
        'images/plankton.png',
        'images/larry.png',
        'images/karen.png',
        'images/neptune.png',
        'images/spongebob_character_2.png',
        'images/patrick_2.png',
        'images/squidward_2.png',
        'images/magic_boy.png',
        'images/sea_man.png',
        'images/squilliam.png',
        'images/ray.png'
    ];
    const tiles = document.querySelectorAll('.tile2');

    for (let i = 0; i < tiles.length; i++) {
        const frontFaceImg = tiles[i].querySelector('.front-face');
        const backFaceImg = tiles[i].querySelector('.back-face');
        frontFaceImg.src = spongebob_images6[i];
        backFaceImg.src = 'images/spongebob_backface.png';


    }
}

function shoes_level() {
    var reset_btn1 = document.getElementById('reset_btn');
    var counter = document.getElementById('counter');
    var shoes_btn = document.getElementById('shoes_btn');
    var spongebob_btn = document.getElementById('spongebob_btn');
    var cars_btn = document.getElementById('cars_btn');
    var subject = document.getElementById('select_subject');
    var shoes_hard = document.getElementById('shoes_btn_hard');
    var shoes_easy = document.getElementById('shoes_btn_easy');
    var select_level = document.getElementById('select_level');
    select_level.style.display = '';
    shoes_easy.style.display = '';
    shoes_hard.style.display = '';
    subject.style.display = 'none';
    cars_btn.style.display = 'none';
    shoes_btn.style.display = 'none';
    spongebob_btn.style.display = 'none';

}
function show_shoes4() {
    var board = document.getElementById('pattern4');
    var reset_btn1 = document.getElementById('reset_btn');
    var counter = document.getElementById('counter');
    var shoes_btn = document.getElementById('shoes_btn');
    var play_btn = document.getElementById('spongebob_btn');
    var cars_btn = document.getElementById('cars_btn');
    var subject = document.getElementById('select_subject');
    var shoes_hard = document.getElementById('shoes_btn_hard');
    var shoes_easy = document.getElementById('shoes_btn_easy');
    var select_level = document.getElementById('select_level');
    select_level.style.display = 'none';
    shoes_easy.style.display = 'none';
    shoes_hard.style.display = 'none';
    subject.style.display = 'none';
    cars_btn.style.display = 'none';
    shoes_btn.style.display = 'none';
    play_btn.style.display = 'none';
    board.style.display = 'grid';
    reset_btn1.style.display = '';
    counter.style.display = '';
    document.getElementById("background").style.backgroundImage = "url(images/shoes_background.png)";    // Update image sources for shoes

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

    const tiles = document.querySelectorAll('.tile1');

    for (let i = 0; i < tiles.length; i++) {
        const frontFaceImg = tiles[i].querySelector('.front-face');
        const backFaceImg = tiles[i].querySelector('.back-face');
        frontFaceImg.src = shoe_images[i];

        backFaceImg.src = 'images/shoes_backface.png';
    }
}

function show_shoes6() {
    var board = document.getElementById('pattern6');
    var reset_btn1 = document.getElementById('reset_btn');
    var counter = document.getElementById('counter');
    var shoes_btn = document.getElementById('shoes_btn');
    var play_btn = document.getElementById('spongebob_btn');
    var cars_btn = document.getElementById('cars_btn');
    var subject = document.getElementById('select_subject');
    var shoes_hard = document.getElementById('shoes_btn_hard');
    var shoes_easy = document.getElementById('shoes_btn_easy');
    var select_level = document.getElementById('select_level');
    select_level.style.display = 'none';
    shoes_easy.style.display = 'none';
    shoes_hard.style.display = 'none';
    subject.style.display = 'none';
    cars_btn.style.display = 'none';
    shoes_btn.style.display = 'none';
    play_btn.style.display = 'none';
    board.style.display = 'grid';
    reset_btn1.style.display = '';
    counter.style.display = '';
    document.getElementById("background").style.backgroundImage = "url(images/shoes_background2.png)";    // Update image sources for shoes

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
        'images/shoes_pair_9.png',
        'images/shoes_pair_10.png',
        'images/shoes_pair_11.png',
        'images/shoes_pair_12.png',
        'images/shoes_pair_13.png',
        'images/shoes_pair_14.png',
        'images/shoes_pair_15.png',
        'images/shoes_pair_16.png',
        'images/shoes_pair_17.png',
        'images/shoes_pair_18.png',

        'images/shoes_pair_1.png',
        'images/shoes_pair_2.png',
        'images/shoes_pair_3.png',
        'images/shoes_pair_4.png',
        'images/shoes_pair_5.png',
        'images/shoes_pair_6.png',
        'images/shoes_pair_7.png',
        'images/shoes_pair_8.png',
        'images/shoes_pair_9.png',
        'images/shoes_pair_10.png',
        'images/shoes_pair_11.png',
        'images/shoes_pair_12.png',
        'images/shoes_pair_13.png',
        'images/shoes_pair_14.png',
        'images/shoes_pair_15.png',
        'images/shoes_pair_16.png',
        'images/shoes_pair_17.png',
        'images/shoes_pair_18.png',
    ];

    const tiles = document.querySelectorAll('.tile2');

    for (let i = 0; i < tiles.length; i++) {
        const frontFaceImg = tiles[i].querySelector('.front-face');
        const backFaceImg = tiles[i].querySelector('.back-face');
        frontFaceImg.src = shoe_images[i];

        backFaceImg.src = 'images/shoes_backface.png';
    }
}

function cars_level() {
    var reset_btn1 = document.getElementById('reset_btn');
    var counter = document.getElementById('counter');
    var shoes_btn = document.getElementById('shoes_btn');
    var spongebob_btn = document.getElementById('spongebob_btn');
    var cars_btn = document.getElementById('cars_btn');
    var subject = document.getElementById('select_subject');
    var cars_hard = document.getElementById('cars_btn_hard');
    var cars_easy = document.getElementById('cars_btn_easy');
    var select_level = document.getElementById('select_level');
    select_level.style.display = '';
    cars_easy.style.display = '';
    cars_hard.style.display = '';
    subject.style.display = 'none';
    cars_btn.style.display = 'none';
    shoes_btn.style.display = 'none';
    spongebob_btn.style.display = 'none';

}

function show_cars4() {
    var board = document.getElementById('pattern4');
    var reset_btn1 = document.getElementById('reset_btn');
    var counter = document.getElementById('counter');
    var shoes_btn = document.getElementById('shoes_btn');
    var play_btn = document.getElementById('spongebob_btn')
    var cars_btn = document.getElementById('cars_btn');
    var cars_hard = document.getElementById('cars_btn_hard');
    var cars_easy = document.getElementById('cars_btn_easy');
    var subject = document.getElementById('select_subject');
    var select_level = document.getElementById('select_level');
    select_level.style.display = 'none';
    subject.style.display = 'none';
    cars_btn.style.display = 'none';
    cars_easy.style.display = 'none';
    cars_hard.style.display = 'none';
    shoes_btn.style.display = 'none';
    play_btn.style.display = 'none';
    board.style.display = 'grid';
    reset_btn1.style.display = '';
    counter.style.display = '';
    document.getElementById("background").style.backgroundImage = "url(images/cars_background.png)";    // Update image sources for shoes

    // Update image sources for shoes
    const cars_images = [
        'images/mercedes.png',
        'images/bmw.png',
        'images/hyundai.png',
        'images/honda.png',
        'images/volvo.png',
        'images/toyota.png',
        'images/kia.png',
        'images/wolswagen.png',
        'images/mercedes.png',
        'images/bmw.png',
        'images/hyundai.png',
        'images/honda.png',
        'images/volvo.png',
        'images/toyota.png',
        'images/kia.png',
        'images/wolswagen.png'
    ];

    const tiles = document.querySelectorAll('.tile1');

    for (let i = 0; i < tiles.length; i++) {
        const frontFaceImg = tiles[i].querySelector('.front-face');
        const backFaceImg = tiles[i].querySelector('.back-face');
        frontFaceImg.src = cars_images[i];

        // you can change it to a shoe image if you want, instead of bob spong
        backFaceImg.src = 'images/cars_backface.png';
    }
}
function show_cars6() {
    var board = document.getElementById('pattern6');
    var reset_btn1 = document.getElementById('reset_btn');
    var counter = document.getElementById('counter');
    var shoes_btn = document.getElementById('shoes_btn');
    var play_btn = document.getElementById('spongebob_btn')
    var cars_btn = document.getElementById('cars_btn');
    var cars_hard = document.getElementById('cars_btn_hard');
    var cars_easy = document.getElementById('cars_btn_easy');
    var subject = document.getElementById('select_subject');
    var select_level = document.getElementById('select_level');
    select_level.style.display = 'none';
    subject.style.display = 'none';
    cars_btn.style.display = 'none';
    cars_easy.style.display = 'none';
    cars_hard.style.display = 'none';
    shoes_btn.style.display = 'none';
    play_btn.style.display = 'none';
    board.style.display = 'grid';
    reset_btn1.style.display = '';
    counter.style.display = '';
    document.getElementById("background").style.backgroundImage = "url(images/cars_background.png)";    // Update image sources for shoes

    // Update image sources for shoes
    const cars_images = [
        'images/mercedes.png',
        'images/bmw.png',
        'images/hyundai.png',
        'images/honda.png',
        'images/volvo.png',
        'images/toyota.png',
        'images/kia.png',
        'images/wolswagen.png',
        'images/ferrari.png',
        'images/infiniti.png',
        'images/lexus.png',
        'images/ford.png',
        'images/chevrolet.png',
        'images/alfa_romeo.png',
        'images/mitsubishi.png',
        'images/jaguar.png',
        'images/skoda.png',
        'images/peugeot.png',

        'images/mercedes.png',
        'images/bmw.png',
        'images/hyundai.png',
        'images/honda.png',
        'images/volvo.png',
        'images/toyota.png',
        'images/kia.png',
        'images/wolswagen.png',
        'images/ferrari.png',
        'images/infiniti.png',
        'images/lexus.png',
        'images/ford.png',
        'images/chevrolet.png',
        'images/alfa_romeo.png',
        'images/mitsubishi.png',
        'images/jaguar.png',
        'images/skoda.png',
        'images/peugeot.png'
    ];

    const tiles = document.querySelectorAll('.tile2');

    for (let i = 0; i < tiles.length; i++) {
        const frontFaceImg = tiles[i].querySelector('.front-face');
        const backFaceImg = tiles[i].querySelector('.back-face');
        frontFaceImg.src = cars_images[i];

        // you can change it to a shoe image if you want, instead of bob spong
        backFaceImg.src = 'images/cars_backface.png';
    }
}

