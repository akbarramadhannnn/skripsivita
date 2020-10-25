const {describe, it} = require('mocha');
const {expect} = require('chai');

const generateMatrixAHP = require('../utils/generateMatrixAHP');

describe('Should return AHP matrix with the following pattern', () => {
    it('Will return matrix ahp with the pattern', () => {
        const matrix = generateMatrixAHP([
            [1,2,3,4,5],
            [0.5,1,2,3,4],
            [0.33, 0.5, 1,2,3],
            [0.25, 0.33, 0.5, 1,2],
            [0.2, 0.25, 0.33, 0.5, 1],
        ]);

        expect(matrix)
            .to.be.an('Array')
            .to.deep.equals([
                [1,2,3,4,5],
                [2,1,2,3,4],
                [3,2,1,2,3],
                [4,3,2,1,2],
                [5,4,3,2,1],
            ])
    })
})
