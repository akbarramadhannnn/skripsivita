const alternatifModel = require('../models/alternatif');
const bobotKriteriaModel = require('../models/bobot_kriteria');
const kriteriaModel = require('../models/kriteria');
const subKriteriaModel = require('../models/subkriteria');
const convertToSubkriteria = require('../utils/convertToSubKriteria');
const convertToSubKriteriaRevert = require('../utils/convertToSubKriteriaRevert');
const multiplyKriteriaSubkriteria = require('../utils/multiplyKriteriaSubkriteria');
const generateMatrixAHP = require('../utils/generateMatrixAHP');
const generateMatrixFAHP = require('../utils/generateMatrixFAHP');
const sumFAHPRow = require('../utils/penjumlahanRowMatrixFAHP');
const sumColOfFAHPRow = require('../utils/penjumlahanHasilJumlahKolomMatrixFAHP');
const generateSyntetic = require('../utils/generateSynteticValue');
const fahpVector = require('../utils/fahpVector');
const normalisasiBobotVector = require('../utils/normalisasiBobotVector');
const sumFahpVector = require('../utils/sumFahpVector');

exports.rekomendasi = async (req, res) => {
  const { id } = req.body;

  const bobotKriteria = await bobotKriteriaModel.findOne();
  // perhitungan kriteria
  const bobot = JSON.parse(
    JSON.stringify(bobotKriteria.kriteria.map((item) => item.bobot))
  );
  const matrixAHP = generateMatrixAHP(bobot);
  const matrixFAHP = generateMatrixFAHP(matrixAHP);
  const outputSumFAHPRow = sumFAHPRow(matrixFAHP);
  const outputSumColOfFAHPRow = sumColOfFAHPRow(outputSumFAHPRow);
  const outputSyntetic = generateSyntetic(
    outputSumFAHPRow,
    outputSumColOfFAHPRow
  );

  matrixFAHP.map((item, index) => {
    return item.push(outputSumFAHPRow[index]);
  });

  const dataAHP = bobotKriteria.kriteria.map((item, index) => {
    return {
      name: item.namaKriteria,
      bobot: item.bobot,
    };
  });

  const dataFAHP = bobotKriteria.kriteria.map((item, index) => {
    const bobot = matrixFAHP.find((item, indexMatrix) => indexMatrix === index);
    return {
      name: item.namaKriteria,
      bobot,
    };
  });

  const dataSyntetic = bobotKriteria.kriteria.map((item, index) => {
    const bobot = outputSyntetic.find(
      (item, indexMatrix) => indexMatrix === index
    );
    return {
      name: item.namaKriteria,
      bobot,
    };
  });

  const outputVector = fahpVector(dataSyntetic);
  const minBobotVector = outputVector.map((value) => value.min.value);

  const sumVector = sumFahpVector(minBobotVector);
  const normalisasiVector = normalisasiBobotVector(minBobotVector, sumVector);
  const sumNormalisasiVector = sumFahpVector(normalisasiVector);

  const datafahpVector = bobotKriteria.kriteria.map((item, index) => {
    const bobot = outputVector.find(
      (item, indexMatrix) => indexMatrix === index
    );
    return {
      name: item.namaKriteria,
      bobot,
    };
  });
  datafahpVector.push({
    name: 'total',
    bobot: sumVector,
  });

  const denormalisasiVectorMapFunction = async (item, index) => {
    const bobot = normalisasiVector.find(
      (_, indexMatrix) => indexMatrix === index
    );

    await kriteriaModel.findOneAndUpdate(
      { namaKriteria: item.namaKriteria },
      {
        $set: {
          bobot,
        },
      }
    );

    return Promise.resolve({
      name: item.namaKriteria,
      bobot: bobot,
    });
  };

  const denormalisasiVectorMap = async () => {
    return Promise.all(
      bobotKriteria.kriteria.map((item, index) =>
        denormalisasiVectorMapFunction(item, index)
      )
    );
  };

  const datanormalisasiVector = await denormalisasiVectorMap();

  datanormalisasiVector.push({
    name: 'total',
    bobot: sumNormalisasiVector,
  });
  // console.log(datanormalisasiVector);

  const calculateBobotKriteriaMapFunction = async (sub_kriteria) => {
    const nama_subkriteria = sub_kriteria.nama;
    const bobot = JSON.parse(
      JSON.stringify(sub_kriteria.data.map((data) => data.bobot))
    );

    const matrixAHP = generateMatrixAHP(bobot);
    const matrixFAHP = generateMatrixFAHP(matrixAHP);
    const outputSumFAHPRow = sumFAHPRow(matrixFAHP);
    const outputSumColOfFAHPRow = sumColOfFAHPRow(outputSumFAHPRow);
    const outputSyntetic = generateSyntetic(
      outputSumFAHPRow,
      outputSumColOfFAHPRow
    );

    matrixFAHP.map((item, index) => {
      return item.push(outputSumFAHPRow[index]);
    });

    const dataAHP = sub_kriteria.data.map((item, index) => {
      return {
        name: item.namaKriteria,
        bobot: item.bobot,
      };
    });

    const dataFAHP = sub_kriteria.data.map((item, index) => {
      const bobot = matrixFAHP.find(
        (item, indexMatrix) => indexMatrix === index
      );
      return {
        name: item.namaKriteria,
        bobot,
      };
    });

    const dataSyntetic = sub_kriteria.data.map((item, index) => {
      const bobot = outputSyntetic.find(
        (item, indexMatrix) => indexMatrix === index
      );
      return {
        name: item.namaKriteria,
        bobot,
      };
    });

    const outputVector = fahpVector(dataSyntetic);
    const minBobotVector = outputVector.map((value) => value.min.value);

    const sumVector = sumFahpVector(minBobotVector);
    const normalisasiVector = normalisasiBobotVector(minBobotVector, sumVector);
    const sumNormalisasiVector = sumFahpVector(normalisasiVector);

    const datafahpVector = sub_kriteria.data.map((item, index) => {
      const bobot = outputVector.find(
        (item, indexMatrix) => indexMatrix === index
      );
      return {
        name: item.namaKriteria,
        bobot,
      };
    });
    datafahpVector.push({
      name: 'total',
      bobot: sumVector,
    });

    const denormalisasiVectorMapFunction = async (item, index) => {
      const bobot = normalisasiVector.find(
        (item, indexMatrix) => indexMatrix === index
      );
      const k = await kriteriaModel.findOne({
        namaKriteria: sub_kriteria.nama,
      });

      await subKriteriaModel.findOneAndUpdate(
        {
          idKriteria: k.id,
          namaSubKriteria: item.namaKriteria,
        },
        {
          bobot: bobot,
        }
      );

      return Promise.resolve({
        name: item.namaKriteria,
        bobot,
      });
    };

    const denormalisasiVectorMap = async () => {
      return Promise.all(
        sub_kriteria.data.map((item, index) =>
          denormalisasiVectorMapFunction(item, index)
        )
      );
    };

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
  };

  // perhitungan sub kriteria
  const calculateBobotKriteriaMap = async () => {
    return Promise.all(
      bobotKriteria.sub_kriteria.map((sub_kriteria) =>
        calculateBobotKriteriaMapFunction(sub_kriteria)
      )
    );
  };

  const sub_kriteria = await calculateBobotKriteriaMap();

  const dataAlternatif = await alternatifModel
    .find({
      _id: id,
    })
    .select('-__v');

  const data = [];
  for (const i in dataAlternatif) {
    const resolusi = convertToSubkriteria(
      'resolusi',
      dataAlternatif[i].resolusi
    );
    const harga = convertToSubkriteria('harga', dataAlternatif[i].harga);
    const fitur = convertToSubkriteria('fitur', dataAlternatif[i].fitur);
    const iso = convertToSubkriteria('iso', dataAlternatif[i].iso);

    dataAlternatif[i].resolusi = resolusi;
    dataAlternatif[i].convertHarga = harga;
    dataAlternatif[i].convertFitur = fitur;
    dataAlternatif[i].convertIso = iso;

    data.push({
      ...dataAlternatif[i]._doc,
      resolusi,
      harga,
      fitur,
      iso,
    });
  }

  const dataKriteria = await kriteriaModel.find();
  const kriteria = [];

  for (const k of dataKriteria) {
    const subkriteria = await subKriteriaModel.find({
      idKriteria: k._id,
    });
    kriteria.push({
      ...k._doc,
      subkriteria: subkriteria,
    });
  }

  const hasil = multiplyKriteriaSubkriteria(data, kriteria);

  res.send({
    id: id,
    message: 'rekomendasi',
    bobot: hasil,
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
};

exports.cariRekomendasi = async (req, res) => {
    const { harga, resolusi, sensor, fitur, iso } = req.body;
    const resolusiConvert = convertToSubKriteriaRevert(
        'resolusi',
        resolusi
    );
    const hargaConvert = convertToSubKriteriaRevert('harga', harga);
    const fiturConvert = convertToSubKriteriaRevert('fitur', fitur);
    const isoConvert = convertToSubKriteriaRevert('iso', iso);

    const alternatif = await alternatifModel.find({
        $and: [
            {
                "resolusi": {
                    $lt: resolusiConvert.max,
                    $gt: resolusiConvert.min,
                },
            },
            {
                "harga": {
                    $lt: hargaConvert.max,
                    $gt: hargaConvert.min,
                },
            },
            {
                "sensor": sensor,
            },
            {
                "iso": {
                    $lt: isoConvert.max,
                    $gt: isoConvert.min,
                }
            }
        ],
    });

    const filterAlternatif = alternatif.filter(data => {
        return (data.fitur.length > fiturConvert.min && data.fitur.length < fiturConvert.max)
    })

    console.log(alternatif);
    res.send(filterAlternatif)
};
