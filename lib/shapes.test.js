const { describe } = require("node:test");

// import what you want to test (shape.svg, etc)
// const sum = require('./sum');

function sum (value1, value2) {
    return value1 + value2;
}
//nest functions
//syntax to customize outputs in terminal 
describe('sum', () => {
    test('1 + 2', () => {
        expect(sum(1, 2)).toBe(4);
    })
    test('3 + 4', () => {
        expect(sum(3, 4)).toBe(8);
    })

});



