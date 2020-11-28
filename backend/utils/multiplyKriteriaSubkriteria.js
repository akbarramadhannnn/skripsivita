const parseNumber = require('./parseNumber');

const multiplyKriteriaSubkriteria = (alternatif, bobot) => {
    const hasil = [];
    for (const a of alternatif) {
        const bobotKriteria = [];
        for (const b of bobot) {
            let sum = 0;
            for (const sub of b.subkriteria) {
                if (a[b.namaKriteria.toLowerCase()] === sub.namaSubKriteria) {
                    sum = b.bobot * sub.bobot;
                }
            }
            bobotKriteria.push({
                nama: `${b.namaKriteria} x ${a[b.namaKriteria.toLowerCase()]}`,
                value: parseNumber(sum, 2),
            });
        }
        hasil.push({
            nama: a.merk,
            value: bobotKriteria,
            total: parseNumber(bobotKriteria.reduce((prev, cur) => prev + cur.value, 0), 2),
        })
    }
    
    return hasil;
}

module.exports = multiplyKriteriaSubkriteria;
