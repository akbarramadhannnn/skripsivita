const { describe, it } = require('mocha');
const { expect } = require('chai');

const sumFahpVector = require('../utils/sumFahpVector');

describe('Sum fahp vector', () => {
    it ('will return total of fahp vector', () => {
        const sumOfRow = [
            1,2,3,4,5
        ];

        const output = sumFahpVector(sumOfRow);

        expect(output)
            .to.be.an('Number')
            .to.deep.equals(15)
    })
});
