const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver();

suite('UnitTests', () => {
    test('Puzzle string of 81 chars', (done) => {
        let complete = '769235418851496372432178956174569283395842761628713549283657194516924837947381625' 

        assert.equal(solver.solve('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'), complete)
        assert.isTrue(solver.validate('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'))
        done()
    })

    test('Puzzle string with invalid chars', (done) => {
        assert.equal(solver.solve('..9..5.1.85.4....2432......1...69.83g9.....6.62.71...9......1945....4.37.4.3..6..'), false)
        assert.isFalse(solver.validate('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6.a'))
        done()
    })

    test('Puzzle string that is not 81 char in length', (done) => {
        assert.equal(solver.solve('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6....'), false)
        assert.isFalse(solver.validate('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6....'))
        done()
    })    

    test('Valid row placement', (done) => {
        assert.isTrue(solver.checkRowPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..','A', '1', 2))
        done()
    })    

    test('Invalid row placement', (done) => {
        assert.isFalse(solver.checkRowPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..','A', '1', 9))
        done()
    })    

    test('Valid column placement', (done) => {
        assert.isTrue(solver.checkColPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..','A', '1', 2))
        done()
    })    

    test('Invalid column placement', (done) => {
        assert.isFalse(solver.checkColPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..','A', '1', 1))
        done()
    })    

    test('Valid region placement', (done) => {
        assert.isTrue(solver.checkRegionPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..','A', '1', 1))
        done()
    })    

    test('Invalid region placement', (done) => {
        assert.isFalse(solver.checkRegionPlacement('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..','A', '1', 2))
        done()
    }) 

    test('Valid puzzle strings pass the solver', (done) => {
        assert.equal(solver.solve('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'), '769235418851496372432178956174569283395842761628713549283657194516924837947381625')
        done()
    })

    test('Invalid puzzle strings fail the solver', (done) => {
        assert.isFalse(solver.solve('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6......'))
        done()
    })

    test('Solver returns the expected solution for an incomplete puzzle', (done) => {
        assert.equal(solver.solve('..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'), '769235418851496372432178956174569283395842761628713549283657194516924837947381625')
        done()
    })
});