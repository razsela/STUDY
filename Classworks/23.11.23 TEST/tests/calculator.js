const add = (num1, num2)=> {
    if (num1 == undefined|| num2 == undefined){
        return undefined
    }
    if (num1 == NaN|| num2 == NaN){
        return NaN
    }
    if (num1 == Infinity|| num2 == Infinity){
        return Infinity
    }
    return num1 + num2
}
const sub = (num1, num2)=> {
    if (num1 ==0 || num2 ==0){
        return
    }
    return num1 - num2
}
const mul = (num1, num2)=> {
    return num1 * num2
}
const div = (num1, num2)=> {
    if (num2 == 0) {
        console.log('cannot divide by 0');
    }
    return num1 / num2
}
module.exports = {
    add, sub, div
}