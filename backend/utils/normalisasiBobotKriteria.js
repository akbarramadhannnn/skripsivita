/**
 * 
 * @param {{kodeKriteria: string, namaKriteria: string, bobot: number[]}[]} databobotKriteria 
 */
const normalisasiBobotKriteria = (databobotKriteria) => {
    const sumBoboKriteria = databobotKriteria.find((bobot) => bobot.kodeKriteria === "sumall");
    const bobotKriteria = databobotKriteria.filter((bobot) => bobot.kodeKriteria !== "sumall")
    
    for (const i in bobotKriteria) {
        bobotKriteria[i].normalisasi = [];
        for (const j in bobotKriteria[i].bobot) {
            bobotKriteria[i].normalisasi.push(
                (bobotKriteria[i].bobot[j] / sumBoboKriteria.bobot[j])
            );
        }
    }

    console.log(sumBoboKriteria);
    console.log(bobotKriteria);
}

module.exports = normalisasiBobotKriteria;
