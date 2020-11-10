const parseNumber = require('./parseNumber');

const FahpVector = (synteticMatrix = []) => {
    const vector = [];
    for (let i = 0; i < synteticMatrix.length; i++) {
        const minVector = []
        for (let j = 0; j < synteticMatrix.length; j++) {
            if (j !== i) {
                if (synteticMatrix[j][1] >= synteticMatrix[i][1]) {
                    minVector.push(1);
                } else if (synteticMatrix[i][0] >= synteticMatrix[i][2]) {
                    minVector.push(0);
                } else {
                    const v = ((synteticMatrix[i][0] - synteticMatrix[j][2]) / ((synteticMatrix[j][1] - synteticMatrix[j][2]) - (synteticMatrix[i][1] - synteticMatrix[i][0])));
                    minVector.push(parseNumber(v, 2));
                }
            }
        }
        vector.push(
            Math.min(...minVector),
        );
    }
    return vector
}

module.exports = FahpVector
