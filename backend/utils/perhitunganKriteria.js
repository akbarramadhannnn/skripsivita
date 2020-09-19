function ArrayDuaDimensi(rows) {
  var arr = [];

  for (var i = 0; i < rows; i++) {
    arr[i] = [];
  }

  return arr;
}

const perhitunganKriteria = (bobot_kriteria, kriteria) => {
  let result = [];
  let array_bobot = [];
  //   console.log('bobot', bobot_kriteria.length);
  //   console.log('kriteria', kriteria.length);
  for (var i = 0; i < kriteria.length; i++) {
    array_bobot[i] = [];
    for (var j = 0; j < bobot_kriteria.length; j++) {
      if (kriteria[i].namaKriteria === bobot_kriteria[j].KriteriaKeDua) {
        // console.log(kriteria[i]);
        array_bobot[i] = [1, 2, 3, 4, 5, 2, 2, 2, 3, 2, 2, 3, 1, 2, 1];
      }
    }
  }
  //   kriteria.forEach((dataKriteria, indexKriteria) => {
  //     bobot_kriteria.forEach((dataBobotKriteria, indexBobotKriteria) => {
  //       if (dataKriteria.namaKriteria == dataBobotKriteria.KriteriaKeDua) {
  //         // const bobot = Number(dataBobotKriteria.penilaian);
  //         array_bobot.push(indexKriteria);
  //         for (let i = 0; i < array_bobot.length; i++) {
  //           array_bobot[i] = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3, 1, 2, 1];
  //         }
  //         // console.log(bobot);
  //       }
  //     });
  //   });

  //   console.log(array_bobot);
  kriteria.forEach((dataKriteria1, indexKriteria1) => {
    kriteria.forEach((dataKriteria2, indexKriteria2) => {
      let nilai = 1;
      if (indexKriteria1 === indexKriteria2) {
        nilai = 1;
      }
      if (indexKriteria1 > indexKriteria2) {
        nilai = 1 / array_bobot[indexKriteria1][indexKriteria2];
      } else {
        nilai = array_bobot[indexKriteria2][indexKriteria1];
      }
      console.log(nilai);
      //   result = nilai;
      //   console.log(result);
    });
  });
};

module.exports = perhitunganKriteria;

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
