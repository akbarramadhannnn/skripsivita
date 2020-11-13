const parseNumber = require('./parseNumber');

const normalisasiBobotVector = (vector = [], sumVector = 0) => {
    return vector.map(val => parseNumber(val / sumVector, 2));
}

module.exports = normalisasiBobotVector;
