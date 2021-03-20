const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  umur: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['admin', 'user'],
  },
  rekomendasi: [
    {
      type: ObjectId,
      ref: 'Alternatif',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
