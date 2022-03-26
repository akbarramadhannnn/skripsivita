const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// mongodb://localhost:27017/vitaskripsi
mongoose
  .connect('mongodb+srv://123user:123456user@cluster0.jippn.mongodb.net/db_vita?retryWrites=true&w=majority', {
  // .connect('mongodb://localhost:27017/vitaskripsi', {
    // .connect('mongodb://localhost:27017/skripsivita', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Database terhubung.. nama database 'vitaskripsi' ");
  });

mongoose.connection.on('error', (err) => {
  console.log(`Database koneksi error: ${err.message}`);
});

app.use(cors());
app.use(bodyParser.json());

// routes
const authRoutes = require('./routes/auth');
const alternatifRoutes = require('./routes/alternatif');
const kriteriaRoutes = require('./routes/kriteria');
const subKriteriaRoutes = require('./routes/subkriteria');
const fahpRoutes = require('./routes/f-ahp');
const rekomendasiRoutes = require('./routes/rekomendasi');
app.use('/', authRoutes);
app.use('/', alternatifRoutes);
app.use('/', kriteriaRoutes);
app.use('/', subKriteriaRoutes);
app.use('/', fahpRoutes);
app.use('/', rekomendasiRoutes);

app.listen(process.env.PORT, () => {
  console.log(`run on PORT ${process.env.PORT}`);
});
