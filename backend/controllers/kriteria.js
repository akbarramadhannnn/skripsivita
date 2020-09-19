const Kriteria = require('../models/kriteria');
const AHP = require('ahp');
const perhitunganKriteria = require('../utils/perhitunganKriteria');

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
  let { bobot_kriteria } = req.body;
  try {
    const kriteria = await Kriteria.find().select('-__v');
    const hasilPerhitungan = perhitunganKriteria(bobot_kriteria, kriteria);

    return res.status(200).json({
      bobot_kriteria,
      kriteria,
    });
  } catch (e) {
    console.log(e);
  }
};
