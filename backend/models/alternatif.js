const mongoose = require('mongoose')

const alternatifSchema = new mongoose.Schema({
    kode: {
        type: String,
        required: true
    },
    nama: {
        type: String,
        required: true
    },
    jenis: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Alternatif", alternatifSchema)

