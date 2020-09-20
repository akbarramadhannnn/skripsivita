const express           = require('express')
const app               = express()
const bodyParser        = require('body-parser')
const cors              = require('cors')
const mongoose          = require('mongoose')
const dotenv            = require('dotenv')

dotenv.config()

mongoose.connect('mongodb://localhost:27017/skripsivita', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Database terhubung.. nama database 'skripsivita' ")
})

mongoose.connection.on('error', err => {
    console.log(`Database koneksi error: ${err.message}`)
})

app.use(cors())
app.use(bodyParser.json())

// routes
const authRoutes = require('./routes/auth')
const alternatifRoutes = require('./routes/alternatif')
const kriteriaRoutes = require('./routes/kriteria')
const subKriteriaRoutes = require('./routes/subkriteria')
app.use('/', authRoutes)
app.use('/', alternatifRoutes)
app.use('/', kriteriaRoutes)
app.use('/', subKriteriaRoutes)

app.listen(process.env.PORT, () => {
    console.log(`run on PORT ${process.env.PORT}`)
})
