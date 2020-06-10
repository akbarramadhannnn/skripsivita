const Alternatif = require('../models/alternatif')

exports.TambahAlternatif = async (req,res) => {
    try {
        const alternatif = new Alternatif(req.body)
        await alternatif.save()
        return res.status(201).json({
            status: true,
            message: 'Data alternatif berhasil ditambahkan'
        })
    } catch (e) {
        console.log(e)
    }
}

exports.getAlternatif = async (req,res) => {
    try {
        const result = await Alternatif.find().select('-__v')
        return res.status(200).json({
            status: true,
            data: result
        })
    } catch (e) {
        console.log(e)
    }
}

exports.getDetailAlternatif = async (req,res) => {
    const { id } = req.params
    try {
        const alternatif = await Alternatif.findOne({_id: id})
        return res.status(200).json({
            status: true,
            data: alternatif
        })
    } catch(e) {
        console.log(e)
    }
}

exports.updateAlternatif = async (req,res) => {
    const { id } = req.params
    const { kode, merk, sensor, resolusi, harga, iso, fitur, keterangan } = req.body
    try {
        const alternatif = await Alternatif.findOne({_id: id})
        alternatif.kode = kode
        alternatif.merk = merk
        alternatif.sensor = sensor
        alternatif.resolusi = resolusi
        alternatif.harga = harga
        alternatif.iso = iso
        alternatif.fitur = fitur
        alternatif.keterangan = keterangan
        await alternatif.save()
        return res.status(201).json({
            status: true,
            message: 'Alternatif berhasil di update',
            data: req.body
        })
    } catch(e) {
        console.log(e)
    }
}

exports.deleteAlternatif = async (req,res) => {
    const { id } = req.params
    try {
        await Alternatif.findOneAndDelete({_id: id})
        return res.status(201).json({
            status: true,
            message: 'Alternatif berhasil di hapus',
        })
    } catch(e) {
        console.log(e)
    }
}