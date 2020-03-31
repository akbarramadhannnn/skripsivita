const mongoose = require('mongoose')

const alternatifSchema = new mongoose.Schema({
    kode: {
        type: String,
        required: true
    },
    merk: {
        type: String,
        required: true
    },
    sensor: {
        type: String,
        required: true
    },
    resolusi: {
        type: Number,
        required: true
    },
    harga: {
        type: Number,
        required: true
    },
    fitur: [
        {
            namaFitur: {
                type: String,
                required: true
            }
        }
    ],
    iso: {
        type: Number,
        required: true
    },
    keterangan: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Alternatif", alternatifSchema)

