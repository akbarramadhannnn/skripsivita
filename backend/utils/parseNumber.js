const parseNumber = (num, fixed) => {
    return parseFloat(parseFloat(num).toFixed(fixed));
}

module.exports = parseNumber;
