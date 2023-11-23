const assert = require('assert')
const cald = require('calculator')

describe('Testing basic functionallisty of the Calcolator', () => {
    it('add simple numbers [1+1]', ()=> {
        const actual = cald.add(1,1)
        const expected = 2
        assert.strictEqual(expected, actual)
    })
    it('add infinity [infinity+1]', ()=> {
        const actual = cald.add(Infinity,1)
        const expected = Infinity
        assert.strictEqual(expected, actual)
    })

    it('minus simple numbers [9-4]', ()=> {
        const actual = cald.sub(9,4)
        const expected = 5
        assert.strictEqual(expected, actual)
    })

    it('div simple numbers [10/2]', ()=> {
        const actual = cald.div(10,2)
        const expected = 5
        assert.strictEqual(expected, actual)
    })
})