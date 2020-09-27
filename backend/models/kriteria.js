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
});

module.exports = mongoose.model('Kriteria', kriteriaSchema);
