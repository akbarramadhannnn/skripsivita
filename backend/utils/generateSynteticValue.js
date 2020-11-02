const parseNumber = require('./parseNumber');

const generateSynteticValue = (sumOfRow, sumOfCol) => {
    const synteticValue = [];

    for (let i = 0; i < sumOfRow.length; i+=1) {
        const valueRowSyntetic = [];
        for (let j = 0; j < sumOfRow[i].length; j+=1) {
            const sum = sumOfRow[i][j] / sumOfCol[2-j];
            valueRowSyntetic.push(parseNumber(sum, 2));
        }
        synteticValue.push(valueRowSyntetic);
    }
    
    return synteticValue;
}

module.exports = generateSynteticValue;
