const generateMatrixAHP = (bobotAHP) => {
    const bobotMatrix = bobotAHP;
    for (let i = 0; i < bobotAHP.length; i+=1) {
        for (let j = 0; j < bobotAHP[i].length; j+=1) {
            bobotMatrix[j][i] = bobotAHP[i][j];
        }
    }
    return bobotMatrix;
}

module.exports = generateMatrixAHP;
