const mongoose = require('mongoose');

const kriteriaSchema = new mongoose.Schema({
  kodeKriteria: {
    type: String,
    required: true,
  },
  namaKriteria: {
    type: String,
    required: true,
  },
  bobot: {
    type: Number,
    required: false,
  }
});

module.exports = mongoose.model('Kriteria', kriteriaSchema);
