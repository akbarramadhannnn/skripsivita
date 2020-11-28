const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const subKriteriaSchema = new mongoose.Schema({
    idKriteria: {
        type: ObjectId,
        ref: 'Kriteria',
        required: true
    },
    namaSubKriteria: {
        type: String,
        required: true
    },
    bobot: {
        type: Number,
        required: false,
    }
})

module.exports = mongoose.model("SubKriteria", subKriteriaSchema)

