const Kriteria = require('../models/kriteria')
const AHP = require('ahp');

exports.getKriteria = async (req,res) => {
    try {
        const result = await Kriteria.find().select('-__v')
        return res.status(201).json({
            status: true,
            data: result
        })
    } catch(e) {
        return e
    }
}

exports.tambahKriteria = async (req,res) => {
    try {
        const kriteria = new Kriteria(req.body)
        await kriteria.save()
        return res.status(201).json({
            status: true,
            message: 'Data kriteria berhasil ditambahkan'
        })
    } catch (e) {
        return e
    }
}

exports.getKriteriaById = async (req,res) => {
    const { idKriteria } = req.params
    try {
        const result = await Kriteria.findById({_id: idKriteria}).select('-__v')
        return res.status(201).json({
            status: true,
            data: result
        })
    } catch(e) {
        return e
    }
}

exports.perhitunganBobot = async (req,res) => {
    const { data } = req.body
    var ahpContext = new AHP();
    // ahpContext.addItems(['VendorA', 'VendorB', 'VendorC']);
    
    ahpContext.addCriteria(['price', 'functionality', 'UX']);
    
    //rank criteria with rank scale
    // ahpContext.rankCriteriaItem('price', [
    //     ['VendorB', 'VendorC', 1 / 2],
    //     ['VendorA', 'VendorC', 1 / 2],
    //     ['VendorA', 'VendorB', 1]
    // ]);
    
    // //rank criteria with rank scale
    // ahpContext.rankCriteriaItem('functionality', [
    //     ['VendorB', 'VendorC', 1],
    //     ['VendorA', 'VendorC', 5],
    //     ['VendorA', 'VendorB', 5]
    // ]);
    
    // //rank criteria with absolute rank scole
    // ahpContext.setCriteriaItemRankByGivenScores('UX', [10, 10, 1]);
    
    ahpContext.rankCriteria(
        [
            ['price', 'functionality', 3],
            ['price', 'UX', 3],
            ['functionality', 'UX', 1]
        ]
    );
    
    // let output = ahpContext.run();
    // console.log(output);
    let analyticContext = ahpContext.debug();
    for(let key in analyticContext){
        console.log(`${key}: apapapa `, analyticContext[key], '\n');
    }
}