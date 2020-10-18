const mongoose = require('mongoose');

const bobotKriteriaSchema = new mongoose.Schema({
    kriteria: {
        type: Array,
        required: true,
    },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model("bobot_kriteria", bobotKriteriaSchema);
