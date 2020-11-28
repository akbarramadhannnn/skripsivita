const convertToSubkriteria = (kode, value) => {
    let output = '';
    switch (kode) {
        case "resolusi" : {
            if (value < 5) {
                output = 'RENDAH';
            } else if (value < 10) {
                output = 'SEDANG';
            } else {
                output = 'TINGGI';
            }
            break;
        }
        case "harga" : {
            if (value < 4000000) {
                output = 'MURAH';
            } else if (value < 600000) {
                output = 'SEDANG';
            } else {
                output = 'MAHAL';
            }
            break;
        }
        case "fitur" : {
            if (value.length < 3) {
                output = 'TIDAK LENGKAP';
            } else if (value.length < 5) {
                output = 'LENGKAP';
            } else {
                output = 'SANGAT LENGKAP';
            }
            break;
        }
        case "iso" : {
            if (value < 500) {
                output = 'RENDAH';
            } else if (value < 1000) {
                output = 'SEDANG';
            } else {
                output = 'TINGGI';
            }
            break;
        }
        default : {
            break;
        }
    }
    return output;
}

module.exports = convertToSubkriteria;
