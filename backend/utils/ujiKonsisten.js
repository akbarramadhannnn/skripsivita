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
            sumColumn += (bobotKriteria[i][j] * bobotPrioritas[j]);
        }
        lamdaMaks.push(sumColumn);
    }

    console.log(bobotPrioritas);
    console.log(lamdaMaks);
    let sumLamdaMaks = 0;
    for (const i in lamdaMaks) {
        sumLamdaMaks += (lamdaMaks[i] / bobotPrioritas[i]);
    }
    sumLamdaMaks *= (1/5);

    const ci = (sumLamdaMaks - bobotPrioritas.length) / (bobotPrioritas.length - 1);

    console.log(ci);

    const cr = ci / 1.12;

    console.log(cr);

    return {
        lamdaMaks,
        consistencyIndex: ci,
        consistencyRatio: cr,
        isConsistent: cr < 0.1,
    }
}

module.exports = ujiKonsistensi;
