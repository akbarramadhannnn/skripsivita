const fuzzyTriangleScala = {
    1: {
        tringular: [1,1,1],
        reciprocal: [1,1,1],
    },
    2: {
        tringular: [1/2,1,3/2],
        reciprocal: [2/3,1,2],
    },
    3: {
        tringular: [1,3/2,2],
        reciprocal: [1/2,2/3,1],
    },
    4: {
        tringular: [3/2,2,5/2],
        reciprocal: [2/5,1/2,2/3],
    },
    5: {
        tringular: [2,5/2,3],
        reciprocal: [1/3,2/5,1/2],
    },
    6: {
        tringular: [5/2,3,7/2],
        reciprocal: [2/7,1/3,2/5],
    },
    7: {
        tringular: [3,7/2,4],
        reciprocal: [1/4,2/7,1/3],
    },
    8: {
        tringular: [7/2,4,9/2],
        reciprocal: [2/9,1/4,2/7],
    },
    9: {
        tringular: [4,9/2,9/2],
        reciprocal: [2/9,2/9,1/4],
    },
}
const generateMatrixFAHP = (matrixAHP) => {
    const matrixFAHP = matrixAHP.map((item) => item.slice());
    
    for (let i = 0; i < matrixAHP.length; i+=1) {
        for (let j = i; j < matrixAHP[i].length; j+=1) {
            const tringular = Object
                .keys(fuzzyTriangleScala)
                .find((index) => parseInt(index) === matrixAHP[i][j]);
            
            const reciprocal = Object
                .keys(fuzzyTriangleScala)
                .find((index) => parseInt(index) === matrixAHP[j][i]);

            matrixFAHP[i][j] = fuzzyTriangleScala[tringular].tringular;
            matrixFAHP[j][i] = fuzzyTriangleScala[reciprocal].reciprocal;
        }
    }
    
    return matrixFAHP
}

module.exports = generateMatrixFAHP;
