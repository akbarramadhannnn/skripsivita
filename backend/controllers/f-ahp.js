const parseNumber = require('../utils/parseNumber');
const bobotKriteriaModel = require('../models/bobotKriteria');
const generateMatrixAHP = require('../utils/generateMatrixAHP');
const generateMatrixFAHP = require('../utils/generateMatrixFAHP');
const sumFAHPRow = require('../utils/penjumlahanRowMatrixFAHP');
const sumColOfFAHPRow = require('../utils/penjumlahanHasilJumlahKolomMatrixFAHP');
const generateSyntetic = require('../utils/generateSynteticValue');
const fahpVector = require('../utils/fahpVector');
const normalisasiBobotVector = require('../utils/normalisasiBobotVector');
const sumFahpVector = require('../utils/sumFahpVector');
const kriteria = require('../models/kriteria');
const subkriteria = require('../models/subkriteria');

// perhitungan fuzzy
exports.calculateFAHP = async (req, res) => {
    const id = req.params.id;
    const bobotKriteria = await bobotKriteriaModel.findById(id);
    console.log(bobotKriteria.kriteria);
    // perhitungan kriteria
    const bobot = JSON.parse(JSON.stringify(bobotKriteria.kriteria.map((item) => item.bobot)));
    console.log(bobot);
    const matrixAHP = generateMatrixAHP(bobot);
    console.log(bobot);
    console.log(matrixAHP)
    console.log(bobotKriteria.kriteria);
    const matrixFAHP = generateMatrixFAHP(matrixAHP);
    const outputSumFAHPRow = sumFAHPRow(matrixFAHP);
    const outputSumColOfFAHPRow = sumColOfFAHPRow(outputSumFAHPRow);
    const outputSyntetic = generateSyntetic(outputSumFAHPRow, outputSumColOfFAHPRow);

    matrixFAHP.map((item, index) => {
        return item.push(outputSumFAHPRow[index]);
    });
    
    const dataAHP = bobotKriteria.kriteria.map(((item, index) => {
        return {
            name: item.namaKriteria,
            bobot: item.bobot,
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
    });

    const denormalisasiVectorMapFunction = async (item, index) => {
        const bobot = normalisasiVector.find((_, indexMatrix) => indexMatrix === index);
        
        await kriteria.findOneAndUpdate(
            {namaKriteria: item.namaKriteria},
            {
                $set: {
                    bobot,
                }
            },
        );
        
        return Promise.resolve({
            name: item.namaKriteria,
            bobot: bobot,
        });
    } 

    const denormalisasiVectorMap = async () => {
        return Promise.all(bobotKriteria.kriteria.map((item, index) => denormalisasiVectorMapFunction(item, index)));
    }

    const datanormalisasiVector = await denormalisasiVectorMap();

    datanormalisasiVector.push({
        name: 'total',
        bobot: sumNormalisasiVector,
    });
    // console.log(datanormalisasiVector);

    const calculateBobotKriteriaMapFunction = async (sub_kriteria) => {
        const nama_subkriteria = sub_kriteria.nama;
        const bobot = JSON.parse(JSON.stringify(sub_kriteria.data.map((data) => data.bobot)));
        console.log(bobot);
        const matrixAHP = generateMatrixAHP(bobot);
        console.log(matrixAHP);
        console.log('end');
        const matrixFAHP = generateMatrixFAHP(matrixAHP);
        const outputSumFAHPRow = sumFAHPRow(matrixFAHP);
        const outputSumColOfFAHPRow = sumColOfFAHPRow(outputSumFAHPRow);
        const outputSyntetic = generateSyntetic(outputSumFAHPRow, outputSumColOfFAHPRow);

        matrixFAHP.map((item, index) => {
            return item.push(outputSumFAHPRow[index]);
        });

        const dataAHP = sub_kriteria.data.map(((item, index) => {
            return {
                name: item.namaKriteria,
                bobot: item.bobot,
            }
        }));

        const dataFAHP = sub_kriteria.data.map(((item, index) => {
            const bobot = matrixFAHP.find((item, indexMatrix) => indexMatrix === index);
            return {
                name: item.namaKriteria,
                bobot,
            }
        }));

        const dataSyntetic = sub_kriteria.data.map(((item, index) => {
            const bobot = outputSyntetic.find((item, indexMatrix) => indexMatrix === index);
            return {
                name: item.namaKriteria,
                bobot,
            }
        }));
        
        const outputVector = fahpVector(dataSyntetic);
        const minBobotVector = outputVector.map((value) => value.min.value);
        
        const sumVector = sumFahpVector(minBobotVector);
        const normalisasiVector = normalisasiBobotVector(minBobotVector, sumVector);
        const sumNormalisasiVector = sumFahpVector(normalisasiVector)

        const datafahpVector = sub_kriteria.data.map(((item, index) => {
            const bobot = outputVector.find((item, indexMatrix) => indexMatrix === index);
            return {
                name: item.namaKriteria,
                bobot,
            }
        }));
        datafahpVector.push({
            name: 'total',
            bobot: sumVector
        });

        const denormalisasiVectorMapFunction = async (item, index) => {
            const bobot = normalisasiVector.find((item, indexMatrix) => indexMatrix === index);
            const k = await kriteria.findOne({
                namaKriteria: sub_kriteria.nama,
            });
            
            await subkriteria.findOneAndUpdate({
                idKriteria: k.id,
                namaSubKriteria: item.namaKriteria,
            }, {
                bobot: bobot,
            });
            
            return Promise.resolve({
                name: item.namaKriteria,
                bobot,
            })
        }

        const denormalisasiVectorMap = async () => {
            return Promise.all(sub_kriteria.data.map((item, index) => denormalisasiVectorMapFunction(item, index)));
        }

        const datanormalisasiVector = await denormalisasiVectorMap();

        datanormalisasiVector.push({
            name: 'total',
            bobot: sumNormalisasiVector,
        });

        return Promise.resolve({
            nama_subkriteria: nama_subkriteria,
            matrix_fahp: dataFAHP,
            matrix_ahp: dataAHP,
            sum_col_matrix_fahp: outputSumColOfFAHPRow,
            syntetic: dataSyntetic,
            vector: datafahpVector,
            normalisasi_vector: datanormalisasiVector,
        });
    }

    // perhitungan sub kriteria
    const calculateBobotKriteriaMap = async () => {
        return Promise.all(
            bobotKriteria.sub_kriteria.map((sub_kriteria) => calculateBobotKriteriaMapFunction(sub_kriteria))
        );
    };

    const sub_kriteria = await calculateBobotKriteriaMap();

    res.send({
        kriteria: {
            matrix_fahp: dataFAHP,
            matrix_ahp: dataAHP,
            sum_col_matrix_fahp: outputSumColOfFAHPRow,
            syntetic: dataSyntetic,
            vector: datafahpVector,
            normalisasi_vector: datanormalisasiVector,
        },
        sub_kriteria,
    });
}
