const parseNumber = require('./parseNumber');

const perhitunganKriteria = (bobot_kriteria, kriteria) => {
  let kriteria_bobot = [];
  for (const i in kriteria) {
    kriteria_bobot.push({
      ...kriteria[i]._doc || kriteria[i],
      bobot: [],
    });
    for (const bk of bobot_kriteria) {
      if (
        (kriteria[i].namaKriteria || kriteria[i].namaSubKriteria).toLowerCase() === bk.KriteriaKeDua.toLowerCase() &&
        bk.KriteriaPertama.toLowerCase() !== bk.KriteriaKeDua.toLowerCase()
      ) {
        kriteria_bobot[i].bobot.push(parseNumber(parseFloat(1 / parseInt(bk.penilaian)), 2));
      } else if ((kriteria[i].namaKriteria || kriteria[i].namaSubKriteria).toLowerCase() === bk.KriteriaPertama.toLowerCase()) {
        kriteria_bobot[i].bobot.push(parseNumber(parseInt(bk.penilaian), 2));
      }
    }
  }
  
  const arraySumBobot = [];
  for (const i in kriteria_bobot) {
    let sumBobot = 0;
    for (const j in kriteria_bobot[i].bobot) {
      sumBobot += kriteria_bobot[j].bobot[i];
    }
    arraySumBobot.push(parseNumber(sumBobot, 2));
  }

  kriteria_bobot.push({
    kodeKriteria: 'jumlah',
    namaKriteria: 'Jumlah',
    bobot: arraySumBobot,
  });

  for(let i = 0; i < kriteria_bobot.length; i ++) {
    if(kriteria_bobot[i].namaSubKriteria) {
      kriteria_bobot[i].namaKriteria = kriteria_bobot[i].namaSubKriteria
      delete kriteria_bobot[i].namaSubKriteria
    }
  }

  return kriteria_bobot;
};

module.exports = perhitunganKriteria;
