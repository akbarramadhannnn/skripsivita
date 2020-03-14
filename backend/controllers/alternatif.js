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