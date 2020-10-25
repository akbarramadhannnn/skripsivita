const { describe, it } = require('mocha');
const { expect } = require('chai');

const generateMatrixFAHP = require('../utils/generateMatrixFAHP');

describe('Generate matrix FAHP', () => {
    it('Should generate matrix FAHP', () => {
        const matrixFAHP = generateMatrixFAHP([
            [1,2,3,4,5],
            [2,1,2,3,4],
            [3,2,1,2,3],
            [4,3,2,1,2],
            [5,4,3,2,1],
        ]);

        expect(matrixFAHP)
            .to.be.an('Array')
            .to.deep.equals([
                [
                    [1,1,1],[1/2,1,3/2],[1,3/2,2],[3/2,2,5/2],[2,5/2,3]
                ],
                [
                    [2/3,1,2],[1,1,1],[1/2,1,3/2],[1,3/2,2],[3/2,2,5/2]
                ],
                [
                    [1/2,2/3,1],[2/3,1,2],[1,1,1],[1/2,1,3/2],[1,3/2,2]
                ],
                [
                    [2/5,1/2,2/3],[1/2,2/3,1],[2/3,1,2],[1,1,1],[1/2,1,3/2]
                ],
                [
                    [1/3,2/5,1/2],[2/5,1/2,2/3],[1/2,2/3,1],[2/3,1,2],[1,1,1]
                ],
            ])
    });
})
