const { describe, it } = require('mocha');
const { expect } = require('chai');

const generateSynteticValue = require('../utils/generateSynteticValue');

describe('Generating sintetic value', () => {
    it ('should get syntetic value from sum of column and sum of row', () => {
        const sumOfRow = [
            [
                6, 8, 10
            ],
            [
                4.67, 6.5, 9
            ],
            [
                3.67, 5.17, 7.5
            ],
            [
                3.07, 4.17, 6.17
            ],
            [
                2.9, 3.57, 5.17
            ],
        ];
        const sumOfCol = [ 20.31, 27.41, 37.84 ];

        const output = generateSynteticValue(sumOfRow, sumOfCol);

        expect(output)
            .to.be.an('Array')
            .to.deep.equals([
                [0.16, 0.29, 0.49],
                [0.12, 0.24, 0.44],
                [0.1,0.19,0.37],
                [0.08,0.15,0.30],
                [0.08,0.13,0.25]
            ])
    })
})
