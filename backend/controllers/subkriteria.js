const SubKriteria = require('../models/subkriteria')

exports.tambahSubKriteria = async (req,res) => {
    try {
        const subkriteria = new SubKriteria(req.body)
        await subkriteria.save()
        return res.status(201).json({
            status: true,
            message: 'Data subkriteria berhasil ditambahkan'
        })
    } catch (e) {
        return e
    }
}

exports.getSubKriteria = async (req,res) => {
    try {
        const result = await SubKriteria.find().populate('idKriteria').select('namaSubKriteria')
        return res.status(200).json({
            status: true,
            data: result
        })
    } catch (e) {
        return e
    }
}

exports.getSubkriteriaByIdKriteria = async (req,res) => {
    const { idKriteria } = req.params
    try {
        const result = await SubKriteria.find({idKriteria: idKriteria}).populate('idKriteria')
        return res.status(200).json({
            status: true,
            data: result
        })
    } catch (e) {
        return e
    }
}