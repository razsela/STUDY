document.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
    const btnPlayVsPlayer = document.getElementById('btn_play_vs_player');
    const btnPlayVsBot = document.getElementById('btn_play_vs_bot');
    const menuButton = document.getElementById('menu');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = false; // Initialize as false
    let isBotTurn = false;
    let player1_count = 0;
    let player2_count = 0;
    let TIE_count = 0;

    // Initialize scores from localStorage or default to 0
    player1_count = parseInt(document.getElementById('playerXScore')) || 0;
    player2_count = parseInt(document.getElementById('playerOScore')) || 0;
    TIE_count = parseInt(document.getElementById('playerOScore')) || 0;
    // Display scores
    updateScores();

    function updateScores() {
        localStorage.setItem('playerXScore', player1_count);
        localStorage.setItem('playerOScore', player2_count);
        localStorage.setItem('tiescore', TIE_count);
        document.getElementById('playerXScore').innerText = player1_count;
        document.getElementById('playerOScore').innerText = player2_count;
        document.getElementById('tiescore').innerText = TIE_count;
    }

    // Winning conditions
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i < winningConditions.length; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            announce(currentPlayer === 'X' ? 'PLAYERX_WON' : 'PLAYERO_WON');
            isGameActive = false;
            return;
        }

        if (!board.includes('')) {
            announce('TIE');
        }
    }

    function announce(result) {
        switch (result) {
            case 'PLAYERO_WON':
                Swal.fire({
                    title: 'Player O won!',
                    imageUrl: 'player_2_wins.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                });
                player2_count++;
                updateScores();
                break;
            case 'PLAYERX_WON':
                Swal.fire({
                    title: 'Player X won!',
                    imageUrl: 'player_1_wins.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                });
                player1_count++;
                updateScores();
                break;
            case 'TIE':
                Swal.fire({
                    title: "It's a TIE !",
                    imageUrl: 'tie_game.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                });
                TIE_count++;
                updateScores();
                    }
        announcer.classList.remove('hide');
    }

    function isValidAction(tile) {
        return tile.innerText === '';
    }

    function updateBoard(index) {
        board[index] = currentPlayer;
    }

    function changePlayer() {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = `Player ${currentPlayer}'s Turn`;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    function userAction(tile, index) {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
            if (isBotTurn) {
                botMove();
            }
        }
    }

    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        isBotTurn = false;
        announcer.classList.add('hide');

        currentPlayer = 'X';
        playerDisplay.innerText = `Player ${currentPlayer}'s Turn`;
        playerDisplay.classList.remove('playerO');
        playerDisplay.classList.add('playerX');

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    function botMove() {
        if (isGameActive && currentPlayer === 'O') {
            setTimeout(() => {
                const emptyTiles = tiles.filter(tile => tile.innerText === '');
                if (emptyTiles.length > 0) {
                    const randomIndex = Math.floor(Math.random() * emptyTiles.length);
                    const randomTile = emptyTiles[randomIndex];
                    userAction(randomTile, tiles.indexOf(randomTile));
                    botMove(); // Call botMove again for the next move
                }
            }, 500);
        }
    }

    btnPlayVsPlayer.addEventListener('click', () => {
        resetBoard();
        currentPlayer = 'X';
        isGameActive = true;
        isBotTurn = false;
        tiles.forEach((tile, index) => {
            tile.addEventListener('click', () => userAction(tile, index));
        });
    });

    btnPlayVsBot.addEventListener('click', () => {
        resetBoard();
        currentPlayer = 'X';
        isGameActive = true;
        isBotTurn = true; // Enable bot's turn
    
        // Remove existing click event listeners from tiles
        tiles.forEach((tile, index) => {
            tile.removeEventListener('click', () => userAction(tile, index));
        });
    
        // Add new click event listeners for user actions
        tiles.forEach((tile, index) => {
            tile.addEventListener('click', () => userAction(tile, index));
        });
    
        botMove(); // Start the bot's move
    });

    resetButton.addEventListener('click', resetBoard);

    menuButton.addEventListener('click', () => {
        // Hide the game elements and show the initial options
        document.getElementById('pattern1').style.display = 'none';
        document.getElementById('turn1').style.display = 'none';
        document.getElementById('btn_play_vs_player').style.display = 'block';
        document.getElementById('btn_play_vs_bot').style.display = 'block';
        document.getElementById('score').style.display = 'none';
        resetBoard();
    });
    

});

function show_pattern() {
    var div1 = document.getElementById("pattern1");
    var turn = document.getElementById("turn1");
    var btn_player = document.getElementById("btn_play_vs_player");
    var btn_bot = document.getElementById("btn_play_vs_bot");
    var score = document.getElementById("score");
    div1.style.display = "grid";
    turn.style.display = "";
    btn_player.style.display = "none";
    btn_bot.style.display = "none";
    score.style.display = "";
}
