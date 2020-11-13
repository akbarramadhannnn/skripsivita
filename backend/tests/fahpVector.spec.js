const { describe, it } = require('mocha');
const { expect } = require('chai');

const fahpVector = require('../utils/fahpVector');

describe('Generating Vector from syntetic value', () => {
    it ('should get vector with min value from syntetic value', () => {
        const sumOfRow = [
            [0.16, 0.29, 0.49],
            [0.12, 0.24, 0.44],
            [0.09,0.18,0.37],
            [0.08,0.58,0.30],
            [0.07,0.12,0.25]
        ];
        const output = fahpVector(sumOfRow);

        expect(output)
            .to.be.an('Array')
            .to.deep.equals([
                0.35, 0.52, 0.73, 0.27, 1
            ])
    })
})
