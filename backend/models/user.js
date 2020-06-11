const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    tempatLahir: {
        type: String,
        required: true
    },
    tanggalLahir: {
        type: Date,
        required: true
    },
    jenisKelamin: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ["admin","user"]
    }
})

module.exports = mongoose.model("User", userSchema)

