const mongoose = require('mongoose');

const bobotSchema = new mongoose.Schema({
    bobot: []
    // KriteriaPertama: {
    //     type: String,
    // },
    // bobot: {
    //     type: Number,
    // },
    // KriteriaKeDua: {
    //     type: String,
    // },
});

module.exports = mongoose.model('Bobot', bobotSchema);
