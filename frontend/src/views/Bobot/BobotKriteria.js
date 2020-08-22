import React, { Fragment, useState, useEffect } from 'react'
import { getDataKriteria } from '../../api'
import { Row, Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Button } from 'reactstrap'

const BobotKriteria = () => {
    const[sensor]   = useState('Sensor')
    const[resolusi] = useState('Resolusi')
    const[harga]    = useState('Harga')
    const[fitur]    = useState('Fitur')
    // Penilaian
    const[valuePenilaianPertama,setValuePenilaianPertama]           = useState('')
    const[valuePenilaianKedua,setValuePenilaianKedua]               = useState('')
    const[valuePenilaianKetiga,setValuePenilaianKetiga]             = useState('')
    const[valuePenilaianKeempat,setValuePenilaianKeempat]           = useState('')
    const[valuePenilaianKelima,setValuePenilaianKelima]             = useState('')
    const[valuePenilaianKeenam,setValuePenilaianKeenam]             = useState('')
    const[valuePenilaianKetujuh,setValuePenilaianKetujuh]           = useState('')
    const[valuePenilaianKedelepan,setValuePenilaianKedelapan]       = useState('')
    const[valuePenilaianKesembilan,setValuePenilaianKesembilan]     = useState('')
    const[valuePenilaianKesepuluh,setValuePenilaianKesepuluh]       = useState('')
    const[valuePenilaianKesebelas,setValuePenilaianKesebelas]       = useState('')
    const[valuePenilaianKeduabelas,setValuePenilaianKeduabelas]     = useState('')
    const[valuePenilaianKetigabelas,setValuePenilaianKetigabelas]   = useState('')
    const[valuePenilaianKeempatbelas,setValuePenilaianKeempatbelas]   = useState('')
    // Kriteria Kedua
    const[valueKriteriaKeduaKeSatu,setValueKriteriaKeduaKeSatu]   = useState('');
    const[valueKriteriaKeduaKedua,setValueKriteriaKeduaKedua]     = useState('');
    const[valueKriteriaKeduaKetiga,setValueKriteriaKeduaKetiga]   = useState('');
    const[valueKriteriaKeduaKeempat,setValueKriteriaKeduaKeempat] = useState('');
    const[valueKriteriaKeduaKelima,setValueKriteriaKeduaKelima]   = useState('');
    const[valueKriteriaKeduaKeenam,setValueKriteriaKeduaKeenam]   = useState('');
    const[valueKriteriaKeduaKetujuh,setValueKriteriaKeduaKetujuh]   = useState('');
    const[valueKriteriaKeduaKedelapan,setValueKriteriaKeduaKedelapan]   = useState('');
    const[valueKriteriaKeduaKesembilan,setValueKriteriaKeduaKesembilan]   = useState('');
    const[valueKriteriaKeduaKesepuluh,setValueKriteriaKeduaKesepuluh]   = useState('');
    const[valueKriteriaKeduaKesebelas,setValueKriteriaKeduaKesebelas]   = useState('');
    const[valueKriteriaKeduaKeduabelas,setValueKriteriaKeduaKeduabelas]   = useState('');
    const[valueKriteriaKeduaKetigabelas,setValueKriteriaKeduaKetigabelas]   = useState('');
    const[valueKriteriaKeduaKeempatbelas,setValueKriteriaKeduaKeempatbelas]   = useState('');
    const[stateDataKriteria,setStateDataKriteria] = useState([])
    const[stateSkalaSaaty] = useState([
        {
            intensitas: '1',
            keterangan: 'Sama penting dengan'
        },
        {
            intensitas: '2',
            keterangan: 'Mendekati sedikit lebih penting dari'
        },
        {
            intensitas: '3',
            keterangan: 'Sedikit lebih penting dari'
        },
        {
            intensitas: '4',
            keterangan: 'Mendekati lebih penting dari'
        },
        {
            intensitas: '5',
            keterangan: 'Lebih penting dari'
        },
        {
            intensitas: '6',
            keterangan: 'Mendekati sangat penting dari'
        },
        {
            intensitas: '7',
            keterangan: 'Sangat penting dari'
        },
        {
            intensitas: '8',
            keterangan: 'Mendekati mutlak dari'
        },
        {
            intensitas: '9',
            keterangan: 'Mutlak sangat penting dari'
        },
    ])
    const[valueBobotKriteria,setValueBobotKriteria] = useState([
        {
            KriteriaPertama: sensor,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: sensor,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: sensor,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: sensor,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: sensor,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: resolusi,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: resolusi,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: resolusi,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: resolusi,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: harga,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: harga,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: harga,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: fitur,
            penilaian: '',
            KriteriaKeDua: '',
        },
        {
            KriteriaPertama: fitur,
            penilaian: '',
            KriteriaKeDua: '',
        }
    ])

    useEffect(() => {
        getDataKriteria()
        .then(res => {
            if(res) {
                setStateDataKriteria(res.data)
            }
        })
    }, [])

    // Change Penilaian
    const changePenilaianPertama = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianPertama(value)
        const state = [...valueBobotKriteria]
        state[0].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKedua = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKedua(value)
        const state = [...valueBobotKriteria]
        state[1].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKetiga = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKetiga(value)
        const state = [...valueBobotKriteria]
        state[2].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKeempat = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKeempat(value)
        const state = [...valueBobotKriteria]
        state[3].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKelima = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKelima(value)
        const state = [...valueBobotKriteria]
        state[4].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKeenam = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKeenam(value)
        const state = [...valueBobotKriteria]
        state[5].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKetujuh = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKetujuh(value)
        const state = [...valueBobotKriteria]
        state[6].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKedelepan = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKedelapan(value)
        const state = [...valueBobotKriteria]
        state[7].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKesembilan = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKesembilan(value)
        const state = [...valueBobotKriteria]
        state[8].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKesepuluh = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKesepuluh(value)
        const state = [...valueBobotKriteria]
        state[9].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKesebelas = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKesebelas(value)
        const state = [...valueBobotKriteria]
        state[10].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKeduabelas = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKeduabelas(value)
        const state = [...valueBobotKriteria]
        state[11].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKetigabelas = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKetigabelas(value)
        const state = [...valueBobotKriteria]
        state[12].penilaian = nilai
        setValueBobotKriteria(state)
    }

    const changePenilaianKeempatbelas = (e) => {
        const value = e.target.value
        const nilai = e.target[e.target.selectedIndex].id
        setValuePenilaianKeempatbelas(value)
        const state = [...valueBobotKriteria]
        state[13].penilaian = nilai
        setValueBobotKriteria(state)
    }

    // Change Kriteria Ke Dua
    const changeKriteriaKeduaKeSatu = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKeSatu(value)
        const state = [...valueBobotKriteria]
        state[0].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKeDua = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKedua(value)
        const state = [...valueBobotKriteria]
        state[1].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKeTiga = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKetiga(value)
        const state = [...valueBobotKriteria]
        state[2].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKeEmpat = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKeempat(value)
        const state = [...valueBobotKriteria]
        state[3].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKeLima = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKelima(value)
        const state = [...valueBobotKriteria]
        state[4].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKeenam = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKeenam(value)
        const state = [...valueBobotKriteria]
        state[5].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKetujuh = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKetujuh(value)
        const state = [...valueBobotKriteria]
        state[6].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKedelapan = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKedelapan(value)
        const state = [...valueBobotKriteria]
        state[7].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKesembilan = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKesembilan(value)
        const state = [...valueBobotKriteria]
        state[8].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKesepuluh = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKesepuluh(value)
        const state = [...valueBobotKriteria]
        state[9].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKesebelas = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKesebelas(value)
        const state = [...valueBobotKriteria]
        state[10].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKeduabelas = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKeduabelas(value)
        const state = [...valueBobotKriteria]
        state[11].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKetigabelas = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKetigabelas(value)
        const state = [...valueBobotKriteria]
        state[12].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const changeKriteriaKeduaKeempatbelas = (e) => {
        const value = e.target.value
        setValueKriteriaKeduaKeempatbelas(value)
        const state = [...valueBobotKriteria]
        state[13].KriteriaKeDua = value
        setValueBobotKriteria(state)
    }

    const klikHitung = () => {
        console.log('valueBobotKriteria', valueBobotKriteria)
    }

    return (
        <div className="animated fadeIn">
            <Row>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Bobot Kriteria
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col md="4">
                                    <FormGroup >
                                        <Label style={{fontSize: '20px'}}>Kriteria Pertama</Label>
                                            {/* Sensir */}
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={sensor} disabled />
                                            </div>
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={sensor} disabled />
                                            </div>
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={sensor} disabled />
                                            </div>
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={sensor} disabled />
                                            </div>
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={sensor} disabled />
                                            </div>
                                            {/* Resolusi */}
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={resolusi} disabled />
                                            </div>
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={resolusi} disabled />
                                            </div>
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={resolusi} disabled />
                                            </div>
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={resolusi} disabled />
                                            </div>
                                            {/* Harga */}
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={harga} disabled />
                                            </div>
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={harga} disabled />
                                            </div>
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={harga} disabled />
                                            </div>
                                            {/* Fitur */}
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={fitur} disabled />
                                            </div>
                                            <div style={{marginBottom: '10px'}}>
                                                <Input type="text" value={fitur} disabled />
                                            </div>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label style={{fontSize: '20px'}}>Penilaian</Label>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianPertama} onChange={changePenilaianPertama}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKedua} onChange={changePenilaianKedua}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKetiga} onChange={changePenilaianKetiga}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKeempat} onChange={changePenilaianKeempat}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKelima} onChange={changePenilaianKelima}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKeenam} onChange={changePenilaianKeenam}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKetujuh} onChange={changePenilaianKetujuh}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKedelepan} onChange={changePenilaianKedelepan}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKesembilan} onChange={changePenilaianKesembilan}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKesepuluh} onChange={changePenilaianKesepuluh}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKesebelas} onChange={changePenilaianKesebelas}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKeduabelas} onChange={changePenilaianKeduabelas}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKetigabelas} onChange={changePenilaianKetigabelas}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valuePenilaianKeempatbelas} onChange={changePenilaianKeempatbelas}>
                                                <option value="">Pilih Skala Saaty</option>
                                                {
                                                    stateSkalaSaaty && stateSkalaSaaty.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={`${data.intensitas}. ${data.keterangan}`} id={data.intensitas}>{data.intensitas}. {data.keterangan}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                    </FormGroup>
                                </Col>
                                <Col md="4">
                                    <FormGroup>
                                        <Label style={{fontSize: '20px'}}>Kriteria Kedua</Label>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKeSatu} onChange={changeKriteriaKeduaKeSatu}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria} >{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKedua} onChange={changeKriteriaKeduaKeDua}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKetiga} onChange={changeKriteriaKeduaKeTiga}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKeempat} onChange={changeKriteriaKeduaKeEmpat}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKelima} onChange={changeKriteriaKeduaKeLima}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKeenam} onChange={changeKriteriaKeduaKeenam}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKetujuh} onChange={changeKriteriaKeduaKetujuh}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKedelapan} onChange={changeKriteriaKeduaKedelapan}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKesembilan} onChange={changeKriteriaKeduaKesembilan}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKesepuluh} onChange={changeKriteriaKeduaKesepuluh}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKesebelas} onChange={changeKriteriaKeduaKesebelas}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKeduabelas} onChange={changeKriteriaKeduaKeduabelas}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKetigabelas} onChange={changeKriteriaKeduaKetigabelas}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                        <div style={{marginBottom: '10px'}}>
                                            <Input type="select" value={valueKriteriaKeduaKeempatbelas} onChange={changeKriteriaKeduaKeempatbelas}>
                                                <option value="">Pilih Kriteria</option>
                                                {
                                                    stateDataKriteria && stateDataKriteria.map((data,i) => {
                                                        return (
                                                            <Fragment key={i}>
                                                                <option value={data.namaKriteria}>{data.namaKriteria}</option>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </Input>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Button 
                                color="primary"
                                onClick={klikHitung}
                            >
                                Hitung
                            </Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default BobotKriteria