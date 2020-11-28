const alternatifModel = require('../models/alternatif');
const kriteriaModel = require('../models/kriteria');
const subKriteriaModel = require('../models/subkriteria');
const convertToSubkriteria = require('../utils/convertToSubKriteria');
const multiplyKriteriaSubkriteria = require('../utils/multiplyKriteriaSubkriteria');

exports.rekomendasi = async (req, res) => {
    const {
        id
    } = req.body;

    const dataAlternatif = await alternatifModel.find({
        _id: id,
    }).select('-__v');
    
    const data = [];
    for (const i in dataAlternatif) {
        const resolusi = convertToSubkriteria("resolusi", dataAlternatif[i].resolusi);
        const harga = convertToSubkriteria("harga", dataAlternatif[i].harga);
        const fitur = convertToSubkriteria("fitur", dataAlternatif[i].fitur);
        const iso = convertToSubkriteria("iso", dataAlternatif[i].iso);
        
        dataAlternatif[i].resolusi = resolusi;
        dataAlternatif[i].convertHarga = harga;
        dataAlternatif[i].convertFitur = fitur;
        dataAlternatif[i].convertIso = iso;

        data.push({
            ...dataAlternatif[i]._doc,
            resolusi,
            harga,
            fitur,
            iso,
        });
    }
    
    const dataKriteria = await kriteriaModel.find();
    const kriteria = [];

    for (const k of dataKriteria) {
        const subkriteria = await subKriteriaModel.find({
            idKriteria: k._id,
        });
        kriteria.push({
            ...k._doc,
            subkriteria: subkriteria,
        })
    }
    
    const hasil = multiplyKriteriaSubkriteria(data, kriteria);

    res.send({
        id: id,
        message: "rekomendasi",
        data: data,
        kriteria,
        bobot: hasil,
    });
}
