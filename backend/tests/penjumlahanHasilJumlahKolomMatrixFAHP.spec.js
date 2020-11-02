const { describe, it } = require('mocha');
const { expect } = require('chai');

const penjumlahanHasilJumlahKolomMatrixFAHP = require('../utils/penjumlahanHasilJumlahKolomMatrixFAHP');

describe('Menjumlahan kolom dari hasil jumlah baris dari matrix FAHP', () => {
    it('should sum column in fahp matrix', () => {
        const matrixFAHP = [
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

        const hasilPenjumlahanKolom = penjumlahanHasilJumlahKolomMatrixFAHP(matrixFAHP);

        expect(hasilPenjumlahanKolom)
            .to.be.an('Array')
            .to.deep.equals([
                20.31, 27.41, 37.84
            ])
    })
});
