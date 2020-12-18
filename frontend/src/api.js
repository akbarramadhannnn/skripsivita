import axios from 'axios'
// import history from './utils/history'

export const userLogin = async (email,password) => {
    const data = {
        email: email,
        password: password
    }
    try {
        const result = await axios.post('http://localhost:8080/login', data)
        return result.data
    } catch(e) {
        return e
    }
}

export const userDaftar = async (data) => {
    try {
        const result = await axios.post('http://localhost:8080/daftar', data)
        return result.data
    } catch(e) {
        return e
    }
}

export const getAllUser = async (req,res) => {
    try {
        const result = await axios.get('http://localhost:8080/user')
        return result.data
    } catch(e) {
        console.log(e)
    }
}

export const userLogout = async () => {
    localStorage.clear()
    window.location.reload()
    // history.push('/')
}

export const tambahAlternatif = async (kode,merk,sensor,resolusi,harga,iso,fitur,keterangan) => {
    const data = {
        kode: kode,
        merk: merk,
        sensor: sensor,
        resolusi: resolusi,
        harga: harga,
        fitur: fitur,
        iso: iso,
        keterangan: keterangan
    }
    try {
        const result = await axios.post('http://localhost:8080/alternatif/tambah', data)
        return result.data
    } catch(e) {
        return e
    }
}

export const getDataAlternatif = async () => {
    try {
        const result = await axios.get('http://localhost:8080/alternatif')
        return result.data
    } catch(e) {
        return e
    }
}

export const tambahKriteria = async (kode,nama) => {
    const data = {
        kodeKriteria: kode,
        namaKriteria: nama,
    }
    try {
        const result = await axios.post('http://localhost:8080/kriteria/tambah', data)
        return result.data
    } catch(e) {
        return e
    }
}

export const getDetailAlternatif = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/alternatif/${id}`)
        return result.data
    } catch(e) {
        return e
    }
}

export const editAlternatif = async (id,data) => {
    try {
        const result = await axios.put(`http://localhost:8080/alternatif/update/${id}`, data)
        return result.data
    } catch(e) {
        return e
    }
}

export const hapusAlternatif = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/alternatif/delete/${id}`)
        return result.data
    } catch(e) {
        return e
    }
}

export const getDataKriteria = async () => {
    try {
        const result = await axios.get('http://localhost:8080/kriteria')
        return result.data
    } catch(e) {
        return e
    }
}

export const getKriteriaByIdKriteria = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/kriteria/${id}`)
        return result.data
    } catch(e) {
        return e
    }
}

export const tambahSubKriteria = async (id,nama) => {
    const data = {
        idKriteria: id,
        namaSubKriteria: nama,
    }
    try {
        const result = await axios.post('http://localhost:8080/subkriteria/tambah', data)
        return result.data
    } catch(e) {
        return e
    }
}

export const getDataSubKriteria = async () => {
    try {
        const result = await axios.get('http://localhost:8080/subkriteria')
        return result.data
    } catch(e) {
        return e
    }
}

export const getDataSubKriteriaByIdKriteria = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/subkriteria/${id}`)
        return result.data
    } catch(e) {
        return e
    }
}

export const RekomendasiAlternatif = async (payload) => {
    try {
        const result = await axios.post(`http://localhost:8080/rekomendasi`, payload)
        return result.data
    } catch(e) {
        return e
    }
}