const { error } = require("console")
const list = []

const initialize = () => {
    list.splice(0, list.length)
}
const insert = (num) => {
    list.push(num)
}
// remove a number from the end
// if the list is empty then should get an Error
const remove = () => {
    if (list.length == 0)
        throw new Error('cannot remove an item from an empty list')
    list.pop()
}

const max = () => {
    if (list.length == 0)
        throw new Error('cannot find max in an empty list')
    return Math.max(...list)
}

const min = () => {
    if (list.length == 0)
        throw new Error('cannot find min in an empty list')
    return Math.min(...list)
}

const avg = () => {
    if (list.length == 0)
        throw new Error('cannot find avg in an empty list')

    let sum = 0
    list.forEach(x => sum += x)

    return sum / list.length
}

const count = () => {
    return list.length
}

module.exports = {
    insert, remove, max, min, avg, initialize, count
}
