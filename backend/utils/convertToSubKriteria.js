const convertToSubkriteria = (kode, value) => {
  let output = '';
  switch (kode) {
    case 'resolusi': {
      if (value > 6 && value < 20) {
        output = 'RENDAH';
      } else if (value > 21 && value < 30) {
        output = 'SEDANG';
      } else if (value > 31 && value < 50) {
        output = 'TINGGI';
      }
      break;
    }
    case 'harga': {
      if (value > 4000000 && value < 8000000) {
        output = 'MURAH';
      } else if (value > 8000001 && value < 30000000)  {
        output = 'SEDANG';
      } else if (value > 30000001 && value < 100000000) {
        output = 'MAHAL';
      }
      break;
    }
    case 'fitur': {
      if (value.length > 1 && value.length < 5) {
        output = 'TIDAK LENGKAP';
      } else if (value.length > 6 && value.length < 10) {
        output = 'LENGKAP';
      } else if (value.length > 11 && value.length < 15) {
        output = 'SANGAT LENGKAP';
      }
      break;
    }
    case 'iso': {
      if (value > 100 && value < 5000) {
        output = 'RENDAH';
      } else if (value > 5001 && value < 15000) {
        output = 'SEDANG';
      } else if (value > 15001 && value < 25000) {
        output = 'TINGGI';
      }
      break;
    }
    default: {
      break;
    }
  }
  return output;
};

module.exports = convertToSubkriteria;
