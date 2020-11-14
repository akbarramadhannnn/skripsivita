const parseNumber = require('../utils/parseNumber');
const bobotKriteriaModel = require('../models/bobot_kriteria');
const generateMatrixAHP = require('../utils/generateMatrixAHP');
const generateMatrixFAHP = require('../utils/generateMatrixFAHP');
const sumFAHPRow = require('../utils/penjumlahanRowMatrixFAHP');
const sumColOfFAHPRow = require('../utils/penjumlahanHasilJumlahKolomMatrixFAHP');
const generateSyntetic = require('../utils/generateSynteticValue');
const fahpVector = require('../utils/fahpVector');
const normalisasiBobotVector = require('../utils/normalisasiBobotVector');
const sumFahpVector = require('../utils/sumFahpVector');

exports.calculateFAHP = async (req, res) => {
    const id = req.params.id;

    const bobotKriteria = await bobotKriteriaModel.findById(id);
    const bobot = bobotKriteria.kriteria.map((item) => item.bobot);
    const matrixAHP = generateMatrixAHP(bobot);
    const matrixFAHP = generateMatrixFAHP(matrixAHP);
    const outputSumFAHPRow = sumFAHPRow(matrixFAHP);
    const outputSumColOfFAHPRow = sumColOfFAHPRow(outputSumFAHPRow);
    const outputSyntetic = generateSyntetic(outputSumFAHPRow, outputSumColOfFAHPRow);

    matrixFAHP.map((item, index) => {
        return item.push(outputSumFAHPRow[index]);
    });

    const dataAHP = bobotKriteria.kriteria.map(((item, index) => {
        const bobot = matrixAHP.find((item, indexMatrix) => indexMatrix === index);
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

    const dataSyntetic = bobotKriteria.kriteria.map(((item, index) => {
        const bobot = outputSyntetic.find((item, indexMatrix) => indexMatrix === index);
        return {
            name: item.namaKriteria,
            bobot,
        }
    }));

    const outputVector = fahpVector(dataSyntetic);
    const minBobotVector = outputVector.map((value) => value.min.value);
    console.log(minBobotVector);
    const sumVector = sumFahpVector(minBobotVector);
    const normalisasiVector = normalisasiBobotVector(minBobotVector, sumVector);
    const sumNormalisasiVector = sumFahpVector(normalisasiVector)

    const datafahpVector = bobotKriteria.kriteria.map(((item, index) => {
        const bobot = outputVector.find((item, indexMatrix) => indexMatrix === index);
        return {
            name: item.namaKriteria,
            bobot,
        }
    }));
    datafahpVector.push({
        name: 'total',
        bobot: sumVector
    })

    const datanormalisasiVector = bobotKriteria.kriteria.map(((item, index) => {
        const bobot = normalisasiVector.find((item, indexMatrix) => indexMatrix === index);
        return {
            name: item.namaKriteria,
            bobot,
        }
    }));
    datanormalisasiVector.push({
        name: 'total',
        bobot: sumNormalisasiVector,
    })

    res.send({
        matrix_fahp: dataFAHP,
        matrix_ahp: dataAHP,
        sum_col_matrix_fahp: outputSumColOfFAHPRow,
        syntetic: dataSyntetic,
        vector: datafahpVector,
        normalisasi_vector: datanormalisasiVector,
    });
}
