const Kriteria = require('../models/kriteria');
// const Subkriteria = require('../models/subkriteria');
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
  let { 
    subKriteriaSensor: reqSubkriteriaSensor,
    subKriteriaResolusi: reqSubkriteriaResolusi,
    subKriteriaHarga: reqSubkriteriaHarga,
    subKriteriaFitur: reqSubkriteriaFitur,
    subKriteriaIso: reqSubkriteriaIso,
    kriteria: reqKriteria,
  } = req.body;
  try {
    // perhitungan kriteria
    const kriteria = await Kriteria.find().select('-__v');
    const hasilPerhitungan = perhitunganKriteria(reqKriteria, kriteria);
    const { bobotKriteria, bobotPrioritas } = normalisasiBobotKriteria(
      hasilPerhitungan
    );
    const {
      lamdaMaks,
      consistencyIndex,
      consistencyRatio,
      isConsistent,
    } = ujiKonsistensi(bobotKriteria, bobotPrioritas);

    // Perhitungan subkriteria
    const subKriteria = await Kriteria.aggregate([
      {
        $lookup: {
          from: 'subkriterias',
          localField: '_id',
          foreignField: 'idKriteria',
          as: 'subkriteria'
        }
      }
    ]);
    
    const subKriteriaSensor = subKriteria.find((item) => item.namaKriteria.toLowerCase() === reqSubkriteriaSensor.nama.toLowerCase());
    const subKriteriaResolusi = subKriteria.find((item) => item.namaKriteria.toLowerCase() === reqSubkriteriaResolusi.nama.toLowerCase());
    const subKriteriaHarga = subKriteria.find((item) => item.namaKriteria.toLowerCase() === reqSubkriteriaHarga.nama.toLowerCase());
    const subKriteriaFitur = subKriteria.find((item) => item.namaKriteria.toLowerCase() === reqSubkriteriaFitur.nama.toLowerCase());
    const subKriteriaIso = subKriteria.find((item) => item.namaKriteria.toLowerCase() === reqSubkriteriaIso.nama.toLowerCase());
    
    // sensor
    const hasilPerhitunganSensor = perhitunganKriteria(reqSubkriteriaSensor.bobot, subKriteriaSensor.subkriteria);
    const { bobotKriteria: bobotKriteriaSensor, bobotPrioritas: bobotPrioritasSensor } = normalisasiBobotKriteria(
      hasilPerhitunganSensor
    );
    const {
      lamdaMaks: lamdaMaksSensor,
      consistencyIndex: consistencyIndexSensor,
      consistencyRatio: consistencyRatioSensor,
      isConsistent: isConsistentsSensor,
    } = ujiKonsistensi(bobotKriteriaSensor, bobotPrioritasSensor);

    // resolusi
    const hasilPerhitunganResolusi = perhitunganKriteria(reqSubkriteriaResolusi.bobot, subKriteriaResolusi.subkriteria);
    const { bobotKriteria: bobotKriteriaResolusi, bobotPrioritas: bobotPrioritasResolusi } = normalisasiBobotKriteria(
      hasilPerhitunganResolusi
    );
    const {
      lamdaMaks: lamdaMaksResolusi,
      consistencyIndex: consistencyIndexResolusi,
      consistencyRatio: consistencyRatioResolusi,
      isConsistent: isConsistentsResolusi,
    } = ujiKonsistensi(bobotKriteriaResolusi, bobotPrioritasResolusi);

    // harga
    const hasilPerhitunganHarga = perhitunganKriteria(reqSubkriteriaHarga.bobot, subKriteriaHarga.subkriteria);
    console.log(reqSubkriteriaHarga);
    console.log(subKriteriaHarga);
    console.log(hasilPerhitunganHarga);
    const { bobotKriteria: bobotKriteriaHarga, bobotPrioritas: bobotPrioritasHarga } = normalisasiBobotKriteria(
      hasilPerhitunganHarga
    );
    const {
      lamdaMaks: lamdaMaksHarga,
      consistencyIndex: consistencyIndexHarga,
      consistencyRatio: consistencyRatioHarga,
      isConsistent: isConsistentsHarga,
    } = ujiKonsistensi(bobotKriteriaHarga, bobotPrioritasHarga);

    // fitur
    const hasilPerhitunganFitur = perhitunganKriteria(reqSubkriteriaFitur.bobot, subKriteriaFitur.subkriteria);
    const { bobotKriteria: bobotKriteriaFitur, bobotPrioritas: bobotPrioritasFitur } = normalisasiBobotKriteria(
      hasilPerhitunganFitur
    );
    const {
      lamdaMaks: lamdaMaksFitur,
      consistencyIndex: consistencyIndexFitur,
      consistencyRatio: consistencyRatioFitur,
      isConsistent: isConsistentsFitur,
    } = ujiKonsistensi(bobotKriteriaFitur, bobotPrioritasFitur);

    // iso
    const hasilPerhitunganIso = perhitunganKriteria(reqSubkriteriaIso.bobot, subKriteriaIso.subkriteria);
    const { bobotKriteria: bobotKriteriaIso, bobotPrioritas: bobotPrioritasIso } = normalisasiBobotKriteria(
      hasilPerhitunganIso
    );
    const {
      lamdaMaks: lamdaMaksIso,
      consistencyIndex: consistencyIndexIso,
      consistencyRatio: consistencyRatioIso,
      isConsistent: isConsistentsIso,
    } = ujiKonsistensi(bobotKriteriaIso, bobotPrioritasIso);

    return res.status(200).json({
      kriteria: {
        kriteria_bobot: hasilPerhitungan,
        normalisasi_bobot_kriteria: bobotKriteria,
        total_bobot_prioritas: bobotPrioritas,
        lamda_maks: lamdaMaks,
        consistency_index: consistencyIndex,
        consistency_ratio: consistencyRatio,
        is_consistent: isConsistent,
      },
      sub: {
        sensor: {
          kriteria_bobot: hasilPerhitunganSensor,
          normalisasi_bobot_kriteria: bobotKriteriaSensor,
          total_bobot_prioritas: bobotPrioritasSensor,
          lamda_maks: lamdaMaksSensor,
          consistency_index: consistencyIndexSensor,
          consistency_ratio: consistencyRatioSensor,
          is_consistent: isConsistentsSensor,
        },
        resolusi: {
          kriteria_bobot: hasilPerhitunganResolusi,
          normalisasi_bobot_kriteria: bobotKriteriaResolusi,
          total_bobot_prioritas: bobotPrioritasResolusi,
          lamda_maks: lamdaMaksResolusi,
          consistency_index: consistencyIndexResolusi,
          consistency_ratio: consistencyRatioResolusi,
          is_consistent: isConsistentsResolusi,
        },
        harga: {
          kriteria_bobot: hasilPerhitunganHarga,
          normalisasi_bobot_kriteria: bobotKriteriaHarga,
          total_bobot_prioritas: bobotPrioritasHarga,
          lamda_maks: lamdaMaksHarga,
          consistency_index: consistencyIndexHarga,
          consistency_ratio: consistencyRatioHarga,
          is_consistent: isConsistentsHarga,
        },
        fitur: {
          kriteria_bobot: hasilPerhitunganFitur,
          normalisasi_bobot_kriteria: bobotKriteriaFitur,
          total_bobot_prioritas: bobotPrioritasFitur,
          lamda_maks: lamdaMaksFitur,
          consistency_index: consistencyIndexFitur,
          consistency_ratio: consistencyRatioFitur,
          is_consistent: isConsistentsFitur,
        },
        iso: {
          kriteria_bobot: hasilPerhitunganIso,
          normalisasi_bobot_kriteria: bobotKriteriaIso,
          total_bobot_prioritas: bobotPrioritasIso,
          lamda_maks: lamdaMaksIso,
          consistency_index: consistencyIndexIso,
          consistency_ratio: consistencyRatioIso,
          is_consistent: isConsistentsIso,
        },
      }
    });
  } catch (e) {
    console.log(e);
  }
};
