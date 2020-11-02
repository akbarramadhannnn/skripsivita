const { describe, it } = require('mocha');
const { expect } = require('chai');

const parseNumber = require('../utils/parseNumber');
const penjumlahanKolomMatrixFAHP = require('../utils/penjumlahanRowMatrixFAHP');

describe('Menjumlahan baris dari matrix FAHP', () => {
    it('should sum column in fahp matrix', () => {
        const matrixFAHP = [
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
        ];

        const hasilPenjumlahanKolom = penjumlahanKolomMatrixFAHP(matrixFAHP);

        expect(hasilPenjumlahanKolom)
            .to.be.an('Array')
            .to.deep.equals([
                [
                    6, 8, 10
                ].map(item => parseNumber(item, 2)),
                [
                    4.67, 6.5, 9
                ].map(item => parseNumber(item, 2)),
                [
                    3.67, 5.17, 7.5
                ].map(item => parseNumber(item, 2)),
                [
                    3.07, 4.17, 6.17
                ].map(item => parseNumber(item, 2)),
                [
                    2.9, 3.57, 5.17
                ].map(item => parseNumber(item, 2)),
            ])
    })
});
