function ArrayDuaDimensi(rows) {
  var arr = [];

  for (var i = 0; i < rows; i++) {
    arr[i] = [];
  }

  return arr;
}

const perhitunganKriteria = (bobot_kriteria, kriteria) => {
  let kriteria_bobot = [];
  for (const i in kriteria) {
    kriteria_bobot.push({
      ...kriteria[i]._doc,
      bobot: [],
    });
    for (const bk of bobot_kriteria) {
      if (
        kriteria[i].namaKriteria === bk.KriteriaKeDua &&
        bk.KriteriaPertama !== bk.KriteriaKeDua
      ) {
        kriteria_bobot[i].bobot.push(parseFloat(1 / parseInt(bk.penilaian)));
      } else if (kriteria[i].namaKriteria === bk.KriteriaPertama) {
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
    id: '5598954tjnvfjdj458u',
    kodeKriteria: 'jumlah',
    namaKriteria: 'Jumlah',
    bobot: arraySumBobot,
  });

  return kriteria_bobot;
};

module.exports = perhitunganKriteria;
