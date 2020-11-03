const parseNumber = require('../utils/parseNumber');
const bobotKriteriaModel = require('../models/bobot_kriteria');
const generateMatrixAHP = require('../utils/generateMatrixAHP');
const generateMatrixFAHP = require('../utils/generateMatrixFAHP');
const sumFAHPRow = require('../utils/penjumlahanRowMatrixFAHP');
const sumColOfFAHPRow = require('../utils/penjumlahanHasilJumlahKolomMatrixFAHP');
const generateSyntetic = require('../utils/generateSynteticValue');

exports.calculateFAHP = async (req, res) => {
    const id = req.params.id;

    const bobotKriteria = await bobotKriteriaModel.findById(id);
    const bobot = bobotKriteria.kriteria.map((item) => item.bobot);
    const matrixAHP = generateMatrixAHP(bobot);
    const matrixFAHP = generateMatrixFAHP(matrixAHP);
    const outputSumFAHPRow = sumFAHPRow(matrixFAHP);
    const outputSumColOfFAHPRow = sumColOfFAHPRow(outputSumFAHPRow);
    const outputSyntetic = generateSyntetic(outputSumFAHPRow, outputSumColOfFAHPRow);

    const matrixFAHPWithSumRow = matrixFAHP.map((item, index) => {
        return item.push(outputSumFAHPRow[index]);
    });

    const dataAHP = bobotKriteria.kriteria.map(((item, index) => {
        const bobot = matrixFAHPWithSumRow.find((item, indexMatrix) => indexMatrix === index);
        return {
            name: item.namaKriteria,
            bobot,
        }
    }));

    const dataFAHP = bobotKriteria.kriteria.map(((item, index) => {
        const bobot = matrixFAHP.find((item, indexMatrix) => indexMatrix === index);
        return {
            name: item.namaKriteria,
            bobot,
        }
    }));

    const dataSumFAHPRow = bobotKriteria.kriteria.map(((item, index) => {
        const bobot = outputSumFAHPRow.find((item, indexMatrix) => indexMatrix === index);
        return {
            name: item.namaKriteria,
            bobot,
        }
    }));

    const dataSyntetic = bobotKriteria.kriteria.map(((item, index) => {
        const bobot = outputSyntetic.find((item, indexMatrix) => indexMatrix === index);
        return {
            name: item.namaKriteria,
            bobot,
        }
    }));

    res.send({
        matrix_fahp: dataFAHP,
        matrix_ahp: dataAHP,
        sum_col_matrix_fahp: outputSumColOfFAHPRow,
        syntetic: dataSyntetic,
    });
}
