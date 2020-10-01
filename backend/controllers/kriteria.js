const Kriteria = require('../models/kriteria');
const AHP = require('ahp');
const perhitunganKriteria = require('../utils/perhitunganKriteria');
const normalisasiBobotKriteria = require('../utils/normalisasiBobotKriteria');
const ujiKonsistensi = require('../utils/ujiKonsisten');
exports.getKriteria = async (req, res) => {
  try {
    const result = await Kriteria.find().select('-__v');
    return res.status(201).json({
      status: true,
      data: result,
    });
  } catch (e) {
    return e;
  }
};

exports.tambahKriteria = async (req, res) => {
  try {
    const kriteria = new Kriteria(req.body);
    await kriteria.save();
    return res.status(201).json({
      status: true,
      message: 'Data kriteria berhasil ditambahkan',
    });
  } catch (e) {
    return e;
  }
};

exports.getKriteriaById = async (req, res) => {
  const { idKriteria } = req.params;
  try {
    const result = await Kriteria.findById({ _id: idKriteria }).select('-__v');
    return res.status(201).json({
      status: true,
      data: result,
    });
  } catch (e) {
    return e;
  }
};

exports.perhitunganBobot = async (req, res) => {
  let { data } = req.body;
  try {
    const kriteria = await Kriteria.find().select('-__v');
    const hasilPerhitungan = perhitunganKriteria(data, kriteria);
    const { bobotKriteria, bobotPrioritas } = normalisasiBobotKriteria(
      hasilPerhitungan
    );
    const {
      lamdaMaks,
      consistencyIndex,
      consistencyRatio,
      isConsistent,
    } = ujiKonsistensi(bobotKriteria, bobotPrioritas);
    return res.status(200).json({
      kriteria_bobot: hasilPerhitungan,
      normalisasi_bobot_kriteria: bobotKriteria,
      total_bobot_prioritas: bobotPrioritas,
      lamda_maks: lamdaMaks,
      consistency_index: consistencyIndex,
      consistency_ratio: consistencyRatio,
      is_consistent: isConsistent,
    });
  } catch (e) {
    console.log(e);
  }
};
