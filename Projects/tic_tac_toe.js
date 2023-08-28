const game = (new Array(9).fill (0,0,9)  )



let player1_count = 0
let player2_count = 0
let tie_count = 0
let taps_count = 0

function cell_click_x(cell_number){
    document.getElementById(`cell-${cell_number}`).textContent = 'X'
}
function cell_click_o(cell_number){
    document.getElementById(`cell-${cell_number}`).textContent = 'O'

}

// const pap_container = document.getElementById('container')
// for (let i = 0; i < 10; i++) {
//    const new_cell = document.createElement('div')
//    new_cell.textContent = `${i}`
//    new_cell.addEventListener('click', () => {cell_click_x(i)})
//    new_cell.id = `cell-${i}`
//    new_cell.classList.add('cell')
//    pap_container.appendChild(new_cell)
// }





