import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormText, FormGroup, Alert } from 'reactstrap';
import { userDaftar } from '../../api'
import history from '../../utils/history'

const Daftar = () =>  {
    const[stateNama,setStateNama]                   = useState('')
    const[errorNama,setErrorNama]                   = useState('')
    const[stateTempatLahir,setStateTempatLahir]     = useState('')
    const[errorTempatLahir,setErrorTempatLahir]     = useState('')
    const[stateTanggalLahir,setStateTanggalLahir]   = useState('')
    const[errorTanggalLahir,setErrorTanggalLahir]   = useState('')
    const[stateJenisKelamin,setStateJenisKelamin]   = useState('')
    const[errorJenisKelamin,setErrorJenisKelamin]   = useState('')
    const[stateEmail,setStateEmail]                 = useState('')
    const[errorEmail,setErrorEmail]                 = useState('')
    const[statePassword,setStatePassword]           = useState('')
    const[errorPassword,setErrorPassword]           = useState('')

    const[success,setSuccess]                       = useState('')

    const changeNama = (e) => {
        setStateNama(e.target.value)
        setErrorNama('')
    }

    const changeTempatLahir = (e) => {
        setStateTempatLahir(e.target.value)
        setErrorTempatLahir('')
    }

    const changeTanggalLahir = (e) => {
        setStateTanggalLahir(e.target.value)
        setErrorTanggalLahir('')
    }

    const changeJenisKelamin = (e) => {
        setStateJenisKelamin(e.target.value)
        setErrorJenisKelamin('')
    }

    const changeEmail = (e) => {
        setStateEmail(e.target.value)
        setErrorEmail('')
    }

    const changePassword = (e) => {
        setStatePassword(e.target.value)
        setErrorPassword('')
    }

    const submit = (e) => {
        e.preventDefault()
        const nama          = stateNama
        const tempatLahir   = stateTempatLahir
        const tanggalLahir  = stateTanggalLahir
        const jenisKelamin  = stateJenisKelamin
        const email         = stateEmail
        const password      = statePassword
        if(nama === '' && tempatLahir === '' && tanggalLahir === '' && jenisKelamin === '' && email === '' && password === '') {
            setErrorNama('kolom nama harus diisi!!')
            setErrorTempatLahir('kolom tempat lahir harus diisi!!')
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
            setErrorJenisKelamin('kolom jenis kelamin harus diisi!!')
            setErrorEmail('kolom email harus diisi!!')
            setErrorPassword('kolom password harus diisi!!')
        } else if (tempatLahir === '' && tanggalLahir === '' && jenisKelamin === '' && email === '' && password === '') {
            setErrorTempatLahir('kolom tempat lahir harus diisi!!')
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
            setErrorJenisKelamin('kolom jenis kelamin harus diisi!!')
            setErrorEmail('kolom email harus diisi!!')
            setErrorPassword('kolom password harus diisi!!')
        } else if (tanggalLahir === '' && jenisKelamin === '' && email === '' && password === '') {
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
            setErrorJenisKelamin('kolom jenis kelamin harus diisi!!')
            setErrorEmail('kolom email harus diisi!!')
            setErrorPassword('kolom password harus diisi!!')
        } else if (jenisKelamin === '' && email === '' && password === '') {
            setErrorJenisKelamin('kolom jenis kelamin harus diisi!!')
            setErrorEmail('kolom email harus diisi!!')
            setErrorPassword('kolom password harus diisi!!')
        } else if (email === '' && password === '') {
            setErrorEmail('kolom email harus diisi!!')
            setErrorPassword('kolom password harus diisi!!')
        } else if(nama === '' && tempatLahir === '' && tanggalLahir && jenisKelamin === '' && email && password) {
            setErrorNama('kolom nama harus diisi!!')
            setErrorTempatLahir('kolom tempat lahir harus diisi!!')
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
            setErrorJenisKelamin('kolom jenis kelamin harus diisi!!')
            setErrorEmail('kolom email harus diisi!!')
            setErrorPassword('kolom password harus diisi!!')
        } else if(nama === '' && tempatLahir === '' && tanggalLahir === '' && email && password) {
            setErrorNama('kolom nama harus diisi!!')
            setErrorTempatLahir('kolom tempat lahir harus diisi!!')
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
        } else if(nama === '' && tempatLahir === '' && tanggalLahir === '' && email === '' && password) {
            setErrorNama('kolom nama harus diisi!!')
            setErrorTempatLahir('kolom tempat lahir harus diisi!!')
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
            setErrorEmail('kolom email harus diisi!!')
        } else if(tempatLahir === '' && tanggalLahir === '' && email && password) {
            setErrorTempatLahir('kolom tempat lahir harus diisi!!')
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
        } else if(tempatLahir === '' && tanggalLahir === '' && email === '' && password) {
            setErrorTempatLahir('kolom tempat lahir harus diisi!!')
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
            setErrorEmail('kolom email harus diisi!!')
        } else if(tempatLahir === '' && tanggalLahir === '' && email === '' && password === '') {
            setErrorTempatLahir('kolom tempat lahir harus diisi!!')
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
            setErrorEmail('kolom email harus diisi!!')
            setErrorPassword('kolom password harus diisi!!')
        } else if(tanggalLahir === '' && email === '' && password) {
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
            setErrorEmail('kolom email harus diisi!!')
        }  else if(tanggalLahir === '' && email === '' && password === '') {
            setErrorTanggalLahir('kolom tanggal lahir harus diisi!!')
            setErrorEmail('kolom email harus diisi!!')
            setErrorPassword('kolom password harus diisi!!')
        } else if (nama && tempatLahir && tanggalLahir && jenisKelamin &&email && password) {
            const data = {
                nama: nama,
                tempatlahir: tempatLahir,
                tanggallahir: tanggalLahir,
                jenisKelamin: jenisKelamin,
                email: email,
                password: password
            }
            userDaftar(data)
            .then(res => {
                if(res) {
                    setStateNama('')
                    setStateTempatLahir('')
                    setStateTanggalLahir('')
                    setStateJenisKelamin('')
                    setStateEmail('')
                    setStatePassword('')
                    setSuccess('anda berhasil mendaftar, silahkan login dengan email anda')
                    setTimeout(() => {
                        history.push('/')
                    }, 5000);
                }
            })
        }
    }


    return (
        <div className="animated fadeIn app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="6">
                        <CardGroup>
                            <Card className="p-4">
                                <CardBody>
                                    <Form onSubmit={submit}>
                                        <p className="text-muted">Daftar Akun</p>
                                        {
                                            success && (
                                                <Alert color="primary">{success}</Alert>
                                            )
                                        }
                                        <FormGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user"></i>
                                                </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" placeholder="nama lengkap" value={stateNama} onChange={changeNama} />
                                            </InputGroup>
                                            {
                                                errorNama && (
                                                    <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorNama}</FormText>
                                                )
                                            }
                                        </FormGroup>

                                        <FormGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-building-o"></i>
                                                </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" placeholder="tempat lahir" value={stateTempatLahir} onChange={changeTempatLahir}/>
                                            </InputGroup>
                                            {
                                                errorTempatLahir && (
                                                    <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorTempatLahir}</FormText>
                                                )
                                            }
                                        </FormGroup>

                                        <FormGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-calendar"></i>
                                                </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="date" placeholder="tanggal lahir" value={stateTanggalLahir} onChange={changeTanggalLahir}/>
                                            </InputGroup>
                                            {
                                                errorTanggalLahir && (
                                                    <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorTanggalLahir}</FormText>
                                                )
                                            }
                                        </FormGroup>

                                        <FormGroup >
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-venus-double"></i>
                                                </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="select" onChange={changeJenisKelamin}>
                                                    <option value="">Pilih Jenis Kelamin</option>
                                                    <option value="Perempuan">Perempuan</option>
                                                    <option value="Laki - Laki">Laki - Laki </option>
                                                </Input>
                                            </InputGroup>
                                            {
                                                errorJenisKelamin && (
                                                    <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorJenisKelamin}</FormText>
                                                )
                                            }
                                        </FormGroup>

                                        <FormGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-envelope-o"></i>
                                                </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="email" placeholder="Email" value={stateEmail} onChange={changeEmail}/>
                                            </InputGroup>
                                            {
                                                errorEmail && (
                                                    <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{errorEmail}</FormText>
                                                )
                                            }
                                        </FormGroup>
                                        
                                        <FormGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"></i>
                                                </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="password" placeholder="Password" value={statePassword} onChange={changePassword}/>
                                            </InputGroup>
                                            {
                                                errorPassword && (
                                                    <FormText className="help-block" color="danger" style={{marginTop: '-22px'}}>{errorPassword}</FormText>
                                                )
                                            }
                                        </FormGroup>

                                        <Row>
                                            <Col xs="6">
                                                <Link to="/">
                                                    <Button color="warning" className="px-4">Kembali</Button>
                                                </Link>
                                            </Col>
                                            <Col xs="6">
                                                <Button color="primary" className="px-4 pull-right">Daftar</Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Daftar;
