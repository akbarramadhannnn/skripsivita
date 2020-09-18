
const perhitunganKriteria = (data) => {
    const hasilHitung = []
    const hitung1 = data[0].penilaian / 1
    const hitung2 = data[1].penilaian / 1
    const hitung3 = data[2].penilaian / 1
    const hitung4 = data[3].penilaian / 1
    const hitung5 = data[4].penilaian / 1


    // const hitung6 =  1 / data[5].penilaian
    // const hitung7 = data[6].penilaian / 1
    // const hitung8 = data[7].penilaian / 1
    // const hitung9 = data[8].penilaian / 1
    // const hitung10 = data[9].penilaian / 1

    // const hitung11 =  1 / data[10].penilaian
    // const hitung12 =  1 / data[11].penilaian
    // const hitung13 = data[12].penilaian / 1
    // const hitung14 = data[13].penilaian / 1
    // const hitung15 = data[14].penilaian / 1

    hasilHitung.push(hitung1)
    hasilHitung.push(hitung2)
    hasilHitung.push(hitung3)
    hasilHitung.push(hitung4)
    hasilHitung.push(hitung5)
    // hasilHitung.push(hitung6)
    // hasilHitung.push(hitung7)
    // hasilHitung.push(hitung8)
    // hasilHitung.push(hitung9)
    // hasilHitung.push(hitung10)
    // hasilHitung.push(hitung11)
    // hasilHitung.push(hitung12)
    // hasilHitung.push(hitung13)
    // hasilHitung.push(hitung14)
    // hasilHitung.push(hitung15)

    return hasilHitung
}

module.exports = perhitunganKriteria


// Hitungan Kriteria
// const hasil = PerhitunganKriteria(data)

// for(let i = 0; i < hasil.length; i++) {
//     // if(hasil[i].toString().length > 4) {
//     //     hasil[i] = Number(hasil[i].toFixed(2))
//     // }
//     data[i].penilaian = hasil[i]
// }

// return res.status(200).json({
//     tabel_perbandingan_kriteria: data
// })