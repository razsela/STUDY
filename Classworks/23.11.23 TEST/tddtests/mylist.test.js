const assert = require('assert')
const mylist = require('./mylist')
const { error } = require('console')

describe('Testing basic functionallisty of the list', () => {
    it('insert into the list', ()=> {
        mylist.initialize()
        mylist.insert(10)
       const expected = 1
       const actual = mylist.count()
        assert.strictEqual(expected, actual)
    })
    it('remove from the list', () => {
        mylist.initialize()
        mylist.insert(1)
        mylist.remove()
        const expected = 0
        const actual = mylist.count()
        assert.strictEqual(expected, actual)
    }) 
    it('find the max in the list', ()=> {
        mylist.initialize()
        mylist.insert(10)
        mylist.insert(-2)
        mylist.insert(-5)
        mylist.insert(20)
       const expected = 20
       const actual = mylist.max()
        assert.strictEqual(expected, actual)
    })
    it('find the min in the list', ()=> {
        mylist.initialize()
        mylist.insert(10)
        mylist.insert(-2)
        mylist.insert(-5)
        mylist.insert(20)
       const expected = -5
       const actual = mylist.min()
        assert.strictEqual(expected, actual)
    })
    it('find the avg in the list', ()=> {
        mylist.initialize()
        mylist.insert(10)
        mylist.insert(-2)
        mylist.insert(-5)
        mylist.insert(20)
       const expected = 5.75
       const actual = mylist.avg()
        assert.strictEqual(expected, actual)
    })
    it('remove an item from an empty list should create an error', ()=> {
        mylist.initialize()
       mylist.insert(1)
       mylist.remove()
       mylist.remove()
    })
    it('find count in a list', () => {
        mylist.initialize()
        mylist.insert(10)
        mylist.insert(-40)        
        mylist.insert(-2)
        mylist.insert(-5)
        const expected = 4
        const actual = mylist.count()
        assert.strictEqual(expected, actual)
    }) 
chai 
should
})