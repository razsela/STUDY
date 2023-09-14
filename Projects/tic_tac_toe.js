window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';
    let player1_count = 0;
    let player2_count = 0;
    let TIE_count = 0;
    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

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
        for (let i = 0; i <= 7; i++) {
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
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

        if (!board.includes('')) {
            announce(TIE);
        }
    }

    const announce = (type) => {
        switch(type) {
            case PLAYERO_WON:
                Swal.fire({
                    title: 'Player O won!',
                    imageUrl: 'player_2_wins.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                });
                player2_count++;
                announcer.innerHTML = `Player o points: ${player2_count}`;
                break;
            case PLAYERX_WON:
                Swal.fire({
                    title: 'Player X won!',
                    imageUrl: 'player_1_wins.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                });
                player1_count++;
                announcer.innerHTML = `Player x points: ${player1_count}`;
                break;
            case TIE:
                Swal.fire({
                    title: "It's a TIE !",
                    imageUrl: 'tie_game.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                });
                TIE_count++;   
                announcer.innerHTML = `TIE points: ${TIE_count}`;
            }
        announcer.classList.remove('hide');
    };

    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O') {
            return false;
        }

        return true;
    };

    const updateBoard = (index) => {
        board[index] = currentPlayer;
    };

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    };

    const userAction = (tile, index) => {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    };

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    };

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});

function show_pattern() {
    var div1 = document.getElementById("pattern1");
    var turn = document.getElementById("turn1");
    var btn_player = document.getElementById("btn_play_vs_player");
    var btn_bot = document.getElementById("btn_play_vs_bot");
    div1.style.display = "grid";
    turn.style.display = "";
    btn_player.style.display = "none";
    btn_bot.style.display = "none";

}