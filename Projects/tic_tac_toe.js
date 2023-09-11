function play_vs_player(){
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
    let player1_count = 0
    let player2_count = 0

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

    if (!board.includes(''))
        announce(TIE);
    }
    

    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                Swal.fire({
                    title: 'Player O won!',
                    imageUrl: 'player_2_wins.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  });
                player2_count++
                announcer.innerHTML = `Player o points: ${player2_count}`
                break;
            case PLAYERX_WON:
                Swal.fire({
                    title: 'Player X won!',
                    imageUrl: 'player_1_wins.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  });    
            player1_count++
            announcer.innerHTML  = `Player x points: ${player1_count}`
            
                break;
            case TIE:
                announcer.innerText = '<span style="border: 1px solid white; width: 100px; background-color: orange;>Tie</span>';
        }
        announcer.classList.remove('hide');
    };
  

    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    // function computer_play(){
    //     if (isGameActive){
    //         let cell = Math.floor (Math.random() * 9 ) +1
    //     while(board[cell] != ""){
    //         let cell = Math.floor (Math.random() * 9 ) +1
    //     }
    //     }
    //     changePlayer((cell))
    // }

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
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard);
});
}


function show_pattern(){
    var div1 = document.getElementById("pattern1");
    var turn = document.getElementById("turn1");
    var btn_player = document.getElementById("btn_play_vs_player");

    if (div1.style.display = "none" ) {
      return  div1.style.display = "grid" ,
         turn.style.display == "block" ,
        btn_player.style.display == "none" ;
         
    }  
   

    }  



// function counter(player1_count , player2_count) {
//     announcer.innerHTML = `Player x points:${player1_count}`
//     announcer.innerHTML = `Player o points:${player2_count}`

// }

// counter(player1_count,player2_count)
























// const game = (new Array(9).fill (0,0,9)  )



// let player1_count = 0
// let player2_count = 0
// let tie_count = 0
// let taps_count = 0

// function cell_click_x(cell_number){
//     document.getElementById(`cell-${cell_number}`).textContent = 'X'
// }
// function cell_click_o(cell_number){
//     document.getElementById(`cell-${cell_number}`).textContent = 'O'

// }

// const pap_container = document.getElementById('container')
// for (let i = 0; i < 10; i++) {
//    const new_cell = document.createElement('div')
//    new_cell.textContent = `${i}`
//    new_cell.addEventListener('click', () => {cell_click_x(i)})
//    new_cell.id = `cell-${i}`
//    new_cell.classList.add('cell')
//    pap_container.appendChild(new_cell)
// }





