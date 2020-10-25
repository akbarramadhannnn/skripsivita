const bobotKriteriaModel = require('../models/bobot_kriteria');
const generateMatrixAHP = require('../utils/generateMatrixAHP');
const generateMatrixFAHP = require('../utils/generateMatrixFAHP');

exports.calculateFAHP = async (req, res) => {
    const id = req.params.id;

    const bobotKriteria = await bobotKriteriaModel.findById(id);
    const bobot = bobotKriteria.kriteria.map((item) => item.bobot);
    const matrixAHP = generateMatrixAHP(bobot);
    const matrixFAHP = generateMatrixFAHP(matrixAHP);
    const data = bobotKriteria.kriteria.map(((item, index) => {
        const bobot = matrixFAHP.find((item, indexMatrix) => indexMatrix === index);
        return {
            name: item.namaKriteria,
            bobot,
        }
    }))
    res.send({
        data,
    });
}