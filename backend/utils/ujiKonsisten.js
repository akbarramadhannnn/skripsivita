const parseNumber = require('./parseNumber');
/**
 *
 * Author   : Ari Nurcahya
 * Email    : nurcahyaari@gmail.com
 */

/**
 *
 * @param {any[]} normalisasi
 * @param {any[]} bobotPrioritas
 */
const ujiKonsistensi = (normalisasi, bobotPrioritas) => {
  const lamdaMaks = [];
  const bobotKriteria = normalisasi.map((item) => item.bobot);
  for (const i in bobotKriteria) {
    let sumColumn = 0;
    for (const j in bobotKriteria) {
      sumColumn += bobotKriteria[i][j] * bobotPrioritas[j];
    }
    lamdaMaks.push(parseNumber(sumColumn, 2));
  }
  for (const j in lamdaMaks) {
    normalisasi[j].lamdaNormalisasi = lamdaMaks[j];
  }

  let sumLamdaMaks = 0;
  for (const i in lamdaMaks) {
    sumLamdaMaks += lamdaMaks[i] / bobotPrioritas[i];
  }
  sumLamdaMaks *= 1 / 5;

  const ci = (sumLamdaMaks - bobotPrioritas.length) / (bobotPrioritas.length - 1);

  const cr = parseNumber(ci / 1.12, 2);

  // console.log(cr);

  return {
    lamdaMaks,
    consistencyIndex: ci,
    consistencyRatio: cr,
    isConsistent: cr < 0.1,
  };
};

module.exports = ujiKonsistensi;
