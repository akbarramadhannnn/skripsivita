const parseNumber = require('./parseNumber');

const perhitunganKriteria = (bobot_kriteria, kriteria) => {
  let kriteria_bobot = [];
  
  for (const i in kriteria) {
    kriteria_bobot.push({
      ...kriteria[i]._doc,
      bobot: [],
    });
    for (const bk of bobot_kriteria) {
      if (
        (kriteria[i].namaKriteria || kriteria[i].namaSubKriteria).toLowerCase() === bk.KriteriaKeDua.toLowerCase() &&
        bk.KriteriaPertama.toLowerCase() !== bk.KriteriaKeDua.toLowerCase()
      ) {
        kriteria_bobot[i].bobot.push(parseNumber(parseFloat(1 / parseInt(bk.penilaian)), 2));
      } else if ((kriteria[i].namaKriteria || kriteria[i].namaSubKriteria).toLowerCase() === bk.KriteriaPertama.toLowerCase()) {
        kriteria_bobot[i].bobot.push(parseInt(bk.penilaian));
      }
    }
  }
  
  const arraySumBobot = [];
  for (const i in kriteria_bobot) {
    let sumBobot = 0;
    for (const j in kriteria_bobot[i].bobot) {
      sumBobot += kriteria_bobot[j].bobot[i];
    }
    arraySumBobot.push(sumBobot);
  }

  kriteria_bobot.push({
    // id: '5598954tjnvfjdj458u',
    kodeKriteria: 'jumlah',
    namaKriteria: 'Jumlah',
    bobot: arraySumBobot,
  });

  return kriteria_bobot;
};

module.exports = perhitunganKriteria;
