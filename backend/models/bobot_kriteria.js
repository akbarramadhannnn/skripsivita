const mongoose = require('mongoose');

const bobotKriteriaSchema = new mongoose.Schema({
    kriteria: {
        type: Array,
        required: true,
    },
});

module.exports = mongoose.model("bobot_kriteria", bobotKriteriaSchema);
