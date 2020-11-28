const Kriteria = require('../models/kriteria');
const bobotKriteriaModel = require('../models/bobot_kriteria');
// const Subkriteria = require('../models/subkriteria');
const Bobot = require('../models/bobot');
const perhitunganKriteria = require('../utils/perhitunganKriteria');
const normalisasiBobotKriteria = require('../utils/normalisasiBobotKriteria');
const ujiKonsistensi = require('../utils/ujiKonsisten');
const parseNumber = require('../utils/parseNumber');

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
          as: 'subkriteria',
        },
      },
    ]);

    const subKriteriaSensor = subKriteria.find(
      (item) =>
        item.namaKriteria.toLowerCase() ===
        reqSubkriteriaSensor.nama.toLowerCase()
    );
    const subKriteriaResolusi = subKriteria.find(
      (item) =>
        item.namaKriteria.toLowerCase() ===
        reqSubkriteriaResolusi.nama.toLowerCase()
    );
    const subKriteriaHarga = subKriteria.find(
      (item) =>
        item.namaKriteria.toLowerCase() ===
        reqSubkriteriaHarga.nama.toLowerCase()
    );
    const subKriteriaFitur = subKriteria.find(
      (item) =>
        item.namaKriteria.toLowerCase() ===
        reqSubkriteriaFitur.nama.toLowerCase()
    );
    const subKriteriaIso = subKriteria.find(
      (item) =>
        item.namaKriteria.toLowerCase() === reqSubkriteriaIso.nama.toLowerCase()
    );

    
    // sensor
    const hasilPerhitunganSensor = perhitunganKriteria(
      reqSubkriteriaSensor.bobot,
      subKriteriaSensor.subkriteria
    );
    
    const {
      bobotKriteria: bobotKriteriaSensor,
      bobotPrioritas: bobotPrioritasSensor,
    } = normalisasiBobotKriteria(hasilPerhitunganSensor);
    const {
      lamdaMaks: lamdaMaksSensor,
      consistencyIndex: consistencyIndexSensor,
      consistencyRatio: consistencyRatioSensor,
      isConsistent: isConsistentsSensor,
    } = ujiKonsistensi(bobotKriteriaSensor, bobotPrioritasSensor);

    // resolusi
    const hasilPerhitunganResolusi = perhitunganKriteria(
      reqSubkriteriaResolusi.bobot,
      subKriteriaResolusi.subkriteria
    );
    const {
      bobotKriteria: bobotKriteriaResolusi,
      bobotPrioritas: bobotPrioritasResolusi,
    } = normalisasiBobotKriteria(hasilPerhitunganResolusi);
    const {
      lamdaMaks: lamdaMaksResolusi,
      consistencyIndex: consistencyIndexResolusi,
      consistencyRatio: consistencyRatioResolusi,
      isConsistent: isConsistentsResolusi,
    } = ujiKonsistensi(bobotKriteriaResolusi, bobotPrioritasResolusi);

    // harga
    const hasilPerhitunganHarga = perhitunganKriteria(
      reqSubkriteriaHarga.bobot,
      subKriteriaHarga.subkriteria
    );
    const {
      bobotKriteria: bobotKriteriaHarga,
      bobotPrioritas: bobotPrioritasHarga,
    } = normalisasiBobotKriteria(hasilPerhitunganHarga);
    const {
      lamdaMaks: lamdaMaksHarga,
      consistencyIndex: consistencyIndexHarga,
      consistencyRatio: consistencyRatioHarga,
      isConsistent: isConsistentsHarga,
    } = ujiKonsistensi(bobotKriteriaHarga, bobotPrioritasHarga);

    // fitur
    const hasilPerhitunganFitur = perhitunganKriteria(
      reqSubkriteriaFitur.bobot,
      subKriteriaFitur.subkriteria
    );
    const {
      bobotKriteria: bobotKriteriaFitur,
      bobotPrioritas: bobotPrioritasFitur,
    } = normalisasiBobotKriteria(hasilPerhitunganFitur);
    const {
      lamdaMaks: lamdaMaksFitur,
      consistencyIndex: consistencyIndexFitur,
      consistencyRatio: consistencyRatioFitur,
      isConsistent: isConsistentsFitur,
    } = ujiKonsistensi(bobotKriteriaFitur, bobotPrioritasFitur);

    // iso
    const hasilPerhitunganIso = perhitunganKriteria(
      reqSubkriteriaIso.bobot,
      subKriteriaIso.subkriteria
    );

    const {
      bobotKriteria: bobotKriteriaIso,
      bobotPrioritas: bobotPrioritasIso,
    } = normalisasiBobotKriteria(hasilPerhitunganIso);

    const {
      lamdaMaks: lamdaMaksIso,
      consistencyIndex: consistencyIndexIso,
      consistencyRatio: consistencyRatioIso,
      isConsistent: isConsistentsIso,
    } = ujiKonsistensi(bobotKriteriaIso, bobotPrioritasIso);

    // save bobot dan nama bobot ke database
    const mappedBobotKriteria = bobotKriteria.map(data => ({
      namaKriteria: data.namaKriteria,
      bobot: data.bobot,
    }));

    const mappedBobotSubkriteriaSensor = bobotKriteriaSensor.map(data => ({
      namaKriteria: data.namaKriteria,
      bobot: data.bobot,
    }));

    const mappedBobotSubkriteriaResulusi = bobotKriteriaResolusi.map(data => ({
      namaKriteria: data.namaKriteria,
      bobot: data.bobot,
    }));

    const mappedBobotSubkriteriaIso = bobotKriteriaIso.map(data => ({
      namaKriteria: data.namaKriteria,
      bobot: data.bobot,
    }));

    const mappedBobotSubkriteriaHarga = bobotKriteriaHarga.map(data => ({
      namaKriteria: data.namaKriteria,
      bobot: data.bobot,
    }));

    const mappedBobotSubkriteriaFitur = bobotKriteriaFitur.map(data => ({
      namaKriteria: data.namaKriteria,
      bobot: data.bobot,
    }));


    const bobotKriteriaData = new bobotKriteriaModel({
      kriteria: mappedBobotKriteria,
      sub_kriteria: [
        {
          nama: 'Sensor',
          data: mappedBobotSubkriteriaSensor,
        },
        {
          nama: 'Resolusi',
          data: mappedBobotSubkriteriaResulusi,
        },
        {
          nama: 'Iso',
          data: mappedBobotSubkriteriaIso,
        },
        {
          nama: 'Harga',
          data: mappedBobotSubkriteriaHarga,
        },
        {
          nama: 'Fitur',
          data: mappedBobotSubkriteriaFitur,
        },
      ]
    });
    if(isConsistent === true && isConsistentsSensor === true && isConsistentsResolusi === true && isConsistentsHarga === true && isConsistentsFitur === true && isConsistentsIso === true) {
      await bobotKriteriaModel.deleteMany({});
      bobotKriteriaData.save();
    }

    return res.status(200).json({
      kriteria: {
        kriteria_bobot: hasilPerhitungan,
        normalisasi_bobot_kriteria: bobotKriteria,
        total_bobot_prioritas: parseNumber(bobotPrioritas, 2),
        lamda_maks: parseNumber(lamdaMaks, 2),
        consistency_index: parseNumber(consistencyIndex, 2),
        consistency_ratio: parseNumber(consistencyRatio, 2),
        is_consistent: isConsistent,
        id_bobot_kriteria: bobotKriteriaData._id,
      },
      sub: {
        sensor: {
          name: "sensor",
          kriteria_bobot: hasilPerhitunganSensor,
          normalisasi_bobot_kriteria: bobotKriteriaSensor,
          total_bobot_prioritas: parseNumber(bobotPrioritasSensor, 2),
          lamda_maks: parseNumber(lamdaMaksSensor, 2),
          consistency_index: parseNumber(consistencyIndexSensor, 2),
          consistency_ratio: parseNumber(consistencyRatioSensor, 2),
          is_consistent: isConsistentsSensor,
        },
        resolusi: {
          name: "resolusi",
          kriteria_bobot: hasilPerhitunganResolusi,
          normalisasi_bobot_kriteria: bobotKriteriaResolusi,
          total_bobot_prioritas: parseNumber(bobotPrioritasResolusi, 2),
          lamda_maks: parseNumber(lamdaMaksResolusi, 2),
          consistency_index: parseNumber(consistencyIndexResolusi, 2),
          consistency_ratio: parseNumber(consistencyRatioResolusi, 2),
          is_consistent: isConsistentsResolusi,
        },
        harga: {
          name: "harga",
          kriteria_bobot: hasilPerhitunganHarga,
          normalisasi_bobot_kriteria: bobotKriteriaHarga,
          total_bobot_prioritas: parseNumber(bobotPrioritasHarga, 2),
          lamda_maks: parseNumber(lamdaMaksHarga, 2),
          consistency_index: parseNumber(consistencyIndexHarga, 2),
          consistency_ratio: parseNumber(consistencyRatioHarga, 2),
          is_consistent: isConsistentsHarga,
        },
        fitur: {
          name: "fitur",
          kriteria_bobot: hasilPerhitunganFitur,
          normalisasi_bobot_kriteria: bobotKriteriaFitur,
          total_bobot_prioritas: parseNumber(bobotPrioritasFitur, 2),
          lamda_maks: parseNumber(lamdaMaksFitur, 2),
          consistency_index: parseNumber(consistencyIndexFitur, 2),
          consistency_ratio: parseNumber(consistencyRatioFitur, 2),
          is_consistent: isConsistentsFitur,
        },
        iso: {
          name: "iso",
          kriteria_bobot: hasilPerhitunganIso,
          normalisasi_bobot_kriteria: bobotKriteriaIso,
          total_bobot_prioritas: parseNumber(bobotPrioritasIso, 2),
          lamda_maks: parseNumber(lamdaMaksIso, 2),
          consistency_index: parseNumber(consistencyIndexIso, 2),
          consistency_ratio: parseNumber(consistencyRatioIso, 2),
          is_consistent: isConsistentsIso,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
};
