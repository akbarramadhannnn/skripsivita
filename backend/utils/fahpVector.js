const parseNumber = require('./parseNumber');

const FahpVector = (synteticMatrix = []) => {
    const vector = [];
    for (let i = 0; i < synteticMatrix.length; i++) {
        const minVector = [];
        for (let j = 0; j < synteticMatrix.length; j++) {
            if (j !== i) {
                if (synteticMatrix[j].bobot[1] >= synteticMatrix[i].bobot[1]) {
                    minVector.push({
                        name: `${synteticMatrix[j].name} > ${synteticMatrix[i].name}`,
                        value: 1
                    });
                } else if (synteticMatrix[i].bobot[0] >= synteticMatrix[i].bobot[2]) {
                    minVector.push({
                        name: `${synteticMatrix[j].name} > ${synteticMatrix[i].name}`,
                        value: 0
                    });
                } else {
                    const v = ((synteticMatrix[i].bobot[0] - synteticMatrix[j].bobot[2]) / ((synteticMatrix[j].bobot[1] - synteticMatrix[j].bobot[2]) - (synteticMatrix[i].bobot[1] - synteticMatrix[i].bobot[0])));
                    minVector.push({
                        name: `${synteticMatrix[j].name} > ${synteticMatrix[i].name}`,
                        value: parseNumber(v, 2)
                    });
                }
            }
        }
        
        const min = minVector.reduce((prev, curr) => {
            if (prev.value > curr.value) {
                return curr;
            }
            return prev;
        });

        vector.push({
            vector: minVector,
            min,
        });
    }
    return vector
}

module.exports = FahpVector
