const { describe, it } = require('mocha');
const { expect } = require('chai');

const normalisasiBobotVector = require('../utils/normalisasiBobotVector');
const sumFahpVector = require('../utils/sumFahpVector');

describe('Normalisasi weight of vector', () => {
    it ('will return an array', () => {
        const sumOfRow = [
            0.5, 0.73, 0.84, 0.83, 1
        ];
        const sum = sumFahpVector(sumOfRow);
        const output = normalisasiBobotVector(sumOfRow, sum);

        expect(output)
            .to.be.an('Array')
            .to.deep.equals([
                0.13, 0.19, 0.22, 0.21, 0.26
            ])
    })
});
