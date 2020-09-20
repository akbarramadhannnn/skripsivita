function ArrayDuaDimensi(rows) {
  var arr = [];

  for (var i = 0; i < rows; i++) {
    arr[i] = [];
  }

  return arr;
}

const perhitunganKriteria = (bobot_kriteria, kriteria) => {
  let result = [];
  let array_bobot = [];
  let kriteria_bobot = [];
  //   console.log('bobot', bobot_kriteria.length);
  //   console.log('kriteria', kriteria.length);
  for (const i in kriteria) {
    kriteria_bobot.push({
      ...kriteria[i]._doc,
      bobot: [],
    });
    for (const bk of bobot_kriteria) {
      if ((kriteria[i].namaKriteria === bk.KriteriaKeDua) && (bk.KriteriaPertama !== bk.KriteriaKeDua)) {
        kriteria_bobot[i].bobot.push(parseFloat(1/parseInt(bk.penilaian)));
      } else if (kriteria[i].namaKriteria === bk.KriteriaPertama) {
        kriteria_bobot[i].bobot.push(parseInt(bk.penilaian));
      }
    }
  }
  console.log(kriteria_bobot);
  return kriteria_bobot;
};

module.exports = perhitunganKriteria;

// Hitungan Kriteria
// const hasil = PerhitunganKriteria(data)

// for(let i = 0; i < hasil.length; i++) {
//     // if(hasil[i].toString().length > 4) {
//     //     hasil[i] = Number(hasil[i].toFixed(2))
//     // }
//     data[i].penilaian = hasil[i]
// }

// return res.status(200).json({
//     tabel_perbandingan_kriteria: data
// })
