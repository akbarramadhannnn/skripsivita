const parseNumber = require('./parseNumber');

const penjumlahanRowMatrixFAHP = (matrixFAHP) => {
    const sumOfColumn = matrixFAHP.map(arr => {
        const sumOfColumInArr = [];
        for (let i = 0; i < 3; i+=1) {
            let sum = 0;
            for (let j = 0; j < arr.length; j+=1) {
                sum += arr[j][i];
            };
            sumOfColumInArr.push(parseNumber(sum, 2));
        }
        return sumOfColumInArr;
    });
    return sumOfColumn;
}

module.exports = penjumlahanRowMatrixFAHP;
