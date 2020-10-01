/**
 *
 * @param {{kodeKriteria: string, namaKriteria: string, bobot: number[]}[]} databobotKriteria
 */
const normalisasiBobotKriteria = (databobotKriteria) => {
  //   console.log(databobotKriteria);
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
      const sumNormalisasi =
        bobotKriteria[i].bobot[j] / sumBoboKriteria.bobot[j];
      bobotKriteria[i].normalisasi.push(sumNormalisasi);
    }
    bobotPrioritas.push(
      bobotKriteria[i].normalisasi.reduce((a, b) => a + b) /
        bobotKriteria[i].normalisasi.length
    );
  }

  for (const i in bobotKriteria) {
    const bobotNormalisasi =
      bobotKriteria[i].normalisasi.reduce((a, b) => a + b) /
      bobotKriteria[i].normalisasi.length;
    bobotKriteria[i].bobotNormalisasi = bobotNormalisasi;
  }

  for (const i in bobotKriteria) {
    const jumlah = bobotKriteria[i].normalisasi.reduce((a, b) => a + b);
    bobotKriteria[i].jumlahNormalisasi = jumlah;
  }

  // hitung bobot prioritas
  return {
    bobotKriteria,
    bobotPrioritas,
  };
};

module.exports = normalisasiBobotKriteria;
