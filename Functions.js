function get_random(max_random){
    return  Math.floor( Math.random ()* max_random )+1
  }
//
//

  function populate_list_random(capacity = 10, max_random = 100) {
    const numbers = [ ]
    
    for (let i = 1; i <= capacity; i++) {
        let number = get_random(max_random)
        numbers.push(number)
    }

    return numbers;
}
//
//

function get_max(numbers){
    let max = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[ i ] > max){
            max = numbers[ i ]
            
        }
       
    }
    return max
}  