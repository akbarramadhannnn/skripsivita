function convertToSubKriteriaRevert(kode, value) {
    let output = {
        min: 0,
        max: 0,
    };
    switch (kode) {
        case 'resolusi': {
            if (value === "RENDAH") {
              output = {
                  min: 6,
                  max: 20,
              };
            } else if (value === 'SEDANG') {
                output = {
                    min: 21,
                    max: 30,
                };
            } else if (value === 'TINGGI') {
                output = {
                    min: 31,
                    max: 50,
                };
            }
            break;
          }
          case 'harga': {
            if (value === "MURAH") {
                output = {
                    min: 4000000,
                    max: 8000000,
                };
            } else if (value === 'SEDANG')  {
                output = {
                    min: 8000001,
                    max: 30000000,
                };
            } else if (value === 'MAHAL') {
                output = {
                    min: 30000001,
                    max: 100000000,
                };
            }
            break;
          }
          case 'fitur': {
            if (value === 'TIDAK LENGKAP') {
              output = {
                min: 1,
                max: 5,
            };
            } else if (value === 'LENGKAP') {
              output = {
                min: 6,
                max: 10,
            };
            } else if (value === 'SANGAT LENGKAP') {
              output = {
                min: 11,
                max: 15,
            };
            }
            break;
          }
          case 'iso': {
            if (value === 'RENDAH') {
              output = {
                min: 100,
                max: 5000,
            };
            } else if (value === 'SEDANG') {
              output = {
                min: 5001,
                max: 15000,
            };
            } else if (value === 'TINGGI') {
              output = {
                min: 15001,
                max: 25000,
            };
            }
            break;
          }
          default: {
            break;
          }
    }
    return output;
}

module.exports = convertToSubKriteriaRevert;
