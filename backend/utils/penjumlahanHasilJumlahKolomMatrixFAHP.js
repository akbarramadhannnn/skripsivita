const parseNumber = require('./parseNumber');

const penjumlahanHasilJumlahKolomMatrixFAHP = (matrixFAHP) => {
    const sumMatrix = [];
    
    for (let i = 0; i < 3; i+=1) {
        let sum = 0;
        for (let j = 0; j < matrixFAHP.length; j+=1) {
            sum += matrixFAHP[j][i];
        }
        sumMatrix.push(parseNumber(sum, 2));
    }

    return sumMatrix;
}

module.exports = penjumlahanHasilJumlahKolomMatrixFAHP;
