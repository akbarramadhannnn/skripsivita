/**
 * 
 * @param {{kodeKriteria: string, namaKriteria: string, bobot: number[]}[]} databobotKriteria 
 */
const normalisasiBobotKriteria = (databobotKriteria) => {
    const sumBoboKriteria = databobotKriteria.find((bobot) => bobot.kodeKriteria === "sumall");
    const bobotKriteria = databobotKriteria.filter((bobot) => bobot.kodeKriteria !== "sumall")
    const bobotPrioritas = [];
    for (const i in bobotKriteria) {
        bobotKriteria[i].normalisasi = [];
        for (const j in bobotKriteria[i].bobot) {
            const sumNormalisasi = (bobotKriteria[i].bobot[j] / sumBoboKriteria.bobot[j]);
            bobotKriteria[i].normalisasi.push(
                sumNormalisasi,
            );
        }
        bobotPrioritas.push((bobotKriteria[i].normalisasi.reduce((a, b) => a + b)) / bobotKriteria[i].normalisasi.length);
    }

    // hitung bobot prioritas

    console.log(sumBoboKriteria);
    console.log(bobotKriteria);
    return {
        bobotKriteria,
        bobotPrioritas,
    };
}

module.exports = normalisasiBobotKriteria;
