import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, FormText, FormGroup } from 'reactstrap';
import { userLogin } from '../../api'
import { setToken } from '../../utils/token'
// import history from '../../utils/history'

const Login = () => {
    const[stateEmail, setStateEmail]                  = useState('')
    const[statePassword, setStatePassword]            = useState('')
    const[stateErrorEmail, setStateErrorEmail]        = useState('')
    const[stateErrorPassword, setStateErrorPassword]  = useState('')

    const changeUsername = (e) => {
        setStateEmail(e.target.value)
        setStateErrorEmail('')
    }

    const changePassword = (e) => {
        setStatePassword(e.target.value)
        setStateErrorPassword('')
    }

    const submit = (e) => {
        e.preventDefault()
        const email = stateEmail
        const password = statePassword
        if(email === '' && password === '') {
            setStateErrorEmail('email tidak boleh kosong')
            setStateErrorPassword('password tidak boleh kosong')
        } else if (email === '') {
            setStateErrorEmail('email tidak boleh kosong')
        } else if (password === '') {
            setStateErrorPassword('password tidak boleh kosong')
        } else {
            userLogin(email,password)
            .then(res => {
                if(res.response) {
                    if(res.response.data.name === 'email') {
                        setStateErrorEmail(res.response.data.message)
                    }

                    if(res.response.data.name === 'password') {
                        setStateErrorPassword(res.response.data.message)
                    }
                } else if(res) {
                    setToken(res)
                    window.location.reload()
                    // history.push('/dashboard')
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
                                        <h1 className="mb-5 text-center">AHP & FUZZY</h1>
                                        {/* <p className="text-muted">Sign In to your account</p> */}
                                        <FormGroup>
                                            <InputGroup className="mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user"></i>
                                                </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" placeholder="Email" value={stateEmail} onChange={changeUsername}/>
                                            </InputGroup>
                                            {
                                                stateErrorEmail && (
                                                <FormText className="help-block" color="danger" style={{marginTop: '-15px'}}>{stateErrorEmail}</FormText>
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
                                                stateErrorPassword && (
                                                    <FormText className="help-block" color="danger" style={{marginTop: '-22px'}}>{stateErrorPassword}</FormText>
                                                )
                                            }
                                        </FormGroup>

                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" className="px-4">Login</Button>
                                            </Col>
                                            <Col xs="6" className="text-right">
                                                <Link to="/daftar">
                                                    <Button color="link" className="px-0">Daftar</Button>
                                                </Link>
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
    )
}


export default Login