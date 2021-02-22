import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
//   InputGroupAddon,
//   InputGroupText,
  Row,
  FormText,
  FormGroup,
  Alert,
} from "reactstrap";
import { userDaftar } from "../../api";
import history from "../../utils/history";

const Daftar = () => {
  const [stateNama, setStateNama] = useState("");
  const [errorNama, setErrorNama] = useState("");
  const [stateUmur, setStateUmur] = useState("");
  const [errorUmur, setErrorUmur] = useState("");
  //   const [stateTempatLahir, setStateTempatLahir] = useState("");
  //   const [errorTempatLahir, setErrorTempatLahir] = useState("");
  //   const [stateTanggalLahir, setStateTanggalLahir] = useState("");
  //   const [errorTanggalLahir, setErrorTanggalLahir] = useState("");
  //   const [stateJenisKelamin, setStateJenisKelamin] = useState("");
  //   const [errorJenisKelamin, setErrorJenisKelamin] = useState("");
  //   const [stateEmail, setStateEmail] = useState("");
  //   const [errorEmail, setErrorEmail] = useState("");
  //   const [statePassword, setStatePassword] = useState("");
  //   const [errorPassword, setErrorPassword] = useState("");

  const [success, setSuccess] = useState("");

  const changeNama = (e) => {
    setStateNama(e.target.value);
    setErrorNama("");
  };

  const changeUmur = (e) => {
    setStateUmur(e.target.value);
    setErrorUmur("");
  };

  //   const changeTempatLahir = (e) => {
  //     setStateTempatLahir(e.target.value);
  //     setErrorTempatLahir("");
  //   };

  //   const changeTanggalLahir = (e) => {
  //     setStateTanggalLahir(e.target.value);
  //     setErrorTanggalLahir("");
  //   };

  //   const changeJenisKelamin = (e) => {
  //     setStateJenisKelamin(e.target.value);
  //     setErrorJenisKelamin("");
  //   };

  //   const changeEmail = (e) => {
  //     setStateEmail(e.target.value);
  //     setErrorEmail("");
  //   };

  //   const changePassword = (e) => {
  //     setStatePassword(e.target.value);
  //     setErrorPassword("");
  //   };

  const submit = (e) => {
    e.preventDefault();
    const nama = stateNama;
    const umur = stateUmur;
    if (nama === "" && umur === "") {
      setErrorNama("kolom nama harus diisi!!");
      setErrorUmur("kolom umur harus diisi!!");
    } else if (!nama === "" && umur === "") {
      setErrorUmur("kolom umur harus diisi!!");
    } else if (nama === "" && !umur === "") {
      setErrorNama("kolom nama harus diisi!!");
    } else {
      const data = {
        nama: nama,
      };
      userDaftar(data).then((res) => {
        if (res) {
          setStateNama("");
          setSuccess(
            "anda berhasil mendaftar, silahkan login dengan email anda"
          );
          setTimeout(() => {
            history.push("/");
          }, 5000);
        }
      });
    }
  };

  return (
    <div className="animated fadeIn app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={submit}>
                    <p className="text-muted">Mohon isi data berikut</p>
                    {success && <Alert color="primary">{success}</Alert>}
                    <FormGroup>
                      <InputGroup className="mb-3">
                        {/* <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon> */}
                        <Input
                          type="text"
                          placeholder="nama lengkap"
                          value={stateNama}
                          onChange={changeNama}
                        />
                      </InputGroup>
                      {errorNama && (
                        <FormText
                          className="help-block"
                          color="danger"
                          style={{ marginTop: "-15px" }}
                        >
                          {errorNama}
                        </FormText>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <InputGroup className="mb-3">
                        {/* <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon> */}
                        <Input
                          type="number"
                          placeholder="umur anda"
                          value={stateUmur}
                          onChange={changeUmur}
                        />
                      </InputGroup>
                      {errorUmur && (
                        <FormText
                          className="help-block"
                          color="danger"
                          style={{ marginTop: "-15px" }}
                        >
                          {errorUmur}
                        </FormText>
                      )}
                    </FormGroup>

                    {/* <FormGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-building-o"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="tempat lahir"
                          value={stateTempatLahir}
                          onChange={changeTempatLahir}
                        />
                      </InputGroup>
                      {errorTempatLahir && (
                        <FormText
                          className="help-block"
                          color="danger"
                          style={{ marginTop: "-15px" }}
                        >
                          {errorTempatLahir}
                        </FormText>
                      )}
                    </FormGroup>

                    <FormGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fa fa-calendar"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="date"
                          placeholder="tanggal lahir"
                          value={stateTanggalLahir}
                          onChange={changeTanggalLahir}
                        />
                      </InputGroup>
                      {errorTanggalLahir && (
                        <FormText
                          className="help-block"
                          color="danger"
                          style={{ marginTop: "-15px" }}
                        >
                          {errorTanggalLahir}
                        </FormText>
                      )}
                    </FormGroup> */}

                    <Row>
                      <Col xs="12">
                        <Button color="primary" className="px-4 pull-right">
                          Selesai
                        </Button>
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
};

export default Daftar;
