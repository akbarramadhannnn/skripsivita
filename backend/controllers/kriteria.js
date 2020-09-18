const Kriteria = require('../models/kriteria')
const AHP = require('ahp');
const PerhitunganKriteria = require('../utils/perhitunganKriteria');

exports.getKriteria = async (req,res) => {
    try {
        const result = await Kriteria.find().select('-__v')
        return res.status(201).json({
            status: true,
            data: result
        })
    } catch(e) {
        return e
    }
}

exports.tambahKriteria = async (req,res) => {
    try {
        const kriteria = new Kriteria(req.body)
        await kriteria.save()
        return res.status(201).json({
            status: true,
            message: 'Data kriteria berhasil ditambahkan'
        })
    } catch (e) {
        return e
    }
}

exports.getKriteriaById = async (req,res) => {
    const { idKriteria } = req.params
    try {
        const result = await Kriteria.findById({_id: idKriteria}).select('-__v')
        return res.status(201).json({
            status: true,
            data: result
        })
    } catch(e) {
        return e
    }
}

exports.perhitunganBobot = async (req,res) => {
    let { data } = req.body
    console.log(data)
}