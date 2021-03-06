const parseNumber = require('./parseNumber');
/**
 *
 * @param {{kodeKriteria: string, namaKriteria: string, bobot: number[]}[]} databobotKriteria
 */
const normalisasiBobotKriteria = (databobotKriteria) => {
  const sumBoboKriteria = databobotKriteria.find(
    (bobot) => bobot.kodeKriteria === 'jumlah'
  );
  const bobotKriteria = databobotKriteria.filter(
    (bobot) => bobot.kodeKriteria !== 'jumlah'
  );
  const bobotPrioritas = [];
  for (const i in bobotKriteria) {
    bobotKriteria[i].normalisasi = [];
    for (const j in bobotKriteria[i].bobot) {
      const sumNormalisasi = bobotKriteria[i].bobot[j] / sumBoboKriteria.bobot[j];
      bobotKriteria[i].normalisasi.push(parseNumber(sumNormalisasi, 2));
    }
    bobotPrioritas.push(
      parseNumber(
        bobotKriteria[i].normalisasi.reduce((a, b) => a + b) /
        bobotKriteria[i].normalisasi.length,
        2
      )
    );
  }

  for (const i in bobotKriteria) {
    const bobotNormalisasi =
      bobotKriteria[i].normalisasi.reduce((a, b) => a + b) /
      bobotKriteria[i].normalisasi.length;
      bobotKriteria[i].bobotNormalisasi = parseNumber(bobotNormalisasi, 2);
  }

  for (const i in bobotKriteria) {
    const jumlah = bobotKriteria[i].normalisasi.reduce((a, b) => a + b);
    bobotKriteria[i].jumlahNormalisasi = parseNumber(jumlah, 2);
  }

  // hitung bobot prioritas
  return {
    bobotKriteria,
    bobotPrioritas,
  };
};

module.exports = normalisasiBobotKriteria;
