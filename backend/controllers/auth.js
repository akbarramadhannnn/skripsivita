const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (user) {
      const getPassword = await bcryptjs.compareSync(password, user.password);
      if (getPassword) {
        const token = await jsonwebtoken.sign(
          {
            _id: user._id.toString(),
            nama: user.nama,
            username: user.username,
            role: user.role,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '1h',
            algorithm: 'HS256',
          }
        );

        return res.status(200).json({
          userId: user._id.toString(),
          nama: user.nama,
          email: user.email,
          role: user.role,
          token: token,
          message: 'berhasil login',
        });
      } else {
        return res.status(404).json({
          name: 'password',
          message: 'password anda salah',
        });
      }
    } else {
      return res.status(404).json({
        name: 'email',
        message: 'email tidak teredia',
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.daftar = async (req, res) => {
  const {
    nama,
    tempatlahir,
    tanggallahir,
    jenisKelamin,
    email,
    password,
  } = req.body;
  try {
    const hashPassword = await bcryptjs.hash(password, 8);
    const user = new User({
      nama: nama,
      tempatLahir: tempatlahir,
      tanggalLahir: tanggallahir,
      jenisKelamin: jenisKelamin,
      email: email,
      password: hashPassword,
    });
    await user.save();
    return res.status(201).json({
      message: 'User berhasil ditambahkan',
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getAllUser = async (req, res) => {
  try {
    // const user = await User.find({role: 'user'}).select('-__v')
    const user = await User.aggregate([
      {
        $match: {
          role: 'user',
        },
      },
      {
        $lookup: {
          from: 'alternatifs',
          localField: 'rekomendasi',
          foreignField: '_id',
          as: 'rekomendasi',
        },
      },
      {
        $project: {
          _id: 1,
          nama: 1,
          jenisKelamin: 1,
          tempatLahir: 1,
          email: 1,
          rekomendasi: '$rekomendasi.merk',
        },
      },
    ]);
    return res.status(201).json({
      status: true,
      data: user,
    });
  } catch (e) {
    console.log(e);
  }
};
