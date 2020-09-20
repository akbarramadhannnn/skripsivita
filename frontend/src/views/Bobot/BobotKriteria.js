import React, { Fragment, useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
  Table,
} from "reactstrap";
import axios from "axios";
const BobotKriteria = () => {
  const [sensor] = useState("Sensor");
  const [resolusi] = useState("Resolusi");
  const [harga] = useState("Harga");
  const [fitur] = useState("Fitur");
  const [iso] = useState("Iso");
  // Penilaian
  const [valuePenilaianPertama, setValuePenilaianPertama] = useState("");
  const [valuePenilaianKedua, setValuePenilaianKedua] = useState("");
  const [valuePenilaianKetiga, setValuePenilaianKetiga] = useState("");
  const [valuePenilaianKeempat, setValuePenilaianKeempat] = useState("");
  const [valuePenilaianKelima, setValuePenilaianKelima] = useState("");
  const [valuePenilaianKeenam, setValuePenilaianKeenam] = useState("");
  const [valuePenilaianKetujuh, setValuePenilaianKetujuh] = useState("");
  const [valuePenilaianKedelepan, setValuePenilaianKedelapan] = useState("");
  const [valuePenilaianKesembilan, setValuePenilaianKesembilan] = useState("");
  const [valuePenilaianKesepuluh, setValuePenilaianKesepuluh] = useState("");
  const [valuePenilaianKesebelas, setValuePenilaianKesebelas] = useState("");
  const [valuePenilaianKeduabelas, setValuePenilaianKeduabelas] = useState("");
  const [valuePenilaianKetigabelas, setValuePenilaianKetigabelas] = useState(
    ""
  );
  const [valuePenilaianKeempatbelas, setValuePenilaianKeempatbelas] = useState(
    ""
  );
  const [valuePenilaianKelimabelas, setValuePenilaianKelimabelas] = useState(
    ""
  );

  const [stateSkalaSaaty] = useState([
    {
      intensitas: "1",
      keterangan: "Sama penting dengan",
    },
    {
      intensitas: "2",
      keterangan: "Mendekati sedikit lebih penting dari",
    },
    {
      intensitas: "3",
      keterangan: "Sedikit lebih penting dari",
    },
    {
      intensitas: "4",
      keterangan: "Mendekati lebih penting dari",
    },
    {
      intensitas: "5",
      keterangan: "Lebih penting dari",
    },
    {
      intensitas: "6",
      keterangan: "Mendekati sangat penting dari",
    },
    {
      intensitas: "7",
      keterangan: "Sangat penting dari",
    },
    {
      intensitas: "8",
      keterangan: "Mendekati mutlak dari",
    },
    {
      intensitas: "9",
      keterangan: "Mutlak sangat penting dari",
    },
  ]);
  const [valueBobotKriteria, setValueBobotKriteria] = useState([
    {
      KriteriaPertama: sensor,
      penilaian: "",
      KriteriaKeDua: sensor,
    },
    {
      KriteriaPertama: sensor,
      penilaian: "",
      KriteriaKeDua: resolusi,
    },
    {
      KriteriaPertama: sensor,
      penilaian: "",
      KriteriaKeDua: harga,
    },
    {
      KriteriaPertama: sensor,
      penilaian: "",
      KriteriaKeDua: fitur,
    },
    {
      KriteriaPertama: sensor,
      penilaian: "",
      KriteriaKeDua: iso,
    },
    {
      KriteriaPertama: resolusi,
      penilaian: "",
      KriteriaKeDua: resolusi,
    },
    {
      KriteriaPertama: resolusi,
      penilaian: "",
      KriteriaKeDua: harga,
    },
    {
      KriteriaPertama: resolusi,
      penilaian: "",
      KriteriaKeDua: fitur,
    },
    {
      KriteriaPertama: resolusi,
      penilaian: "",
      KriteriaKeDua: iso,
    },
    {
      KriteriaPertama: harga,
      penilaian: "",
      KriteriaKeDua: harga,
    },
    {
      KriteriaPertama: harga,
      penilaian: "",
      KriteriaKeDua: fitur,
    },
    {
      KriteriaPertama: harga,
      penilaian: "",
      KriteriaKeDua: iso,
    },
    {
      KriteriaPertama: fitur,
      penilaian: "",
      KriteriaKeDua: fitur,
    },
    {
      KriteriaPertama: fitur,
      penilaian: "",
      KriteriaKeDua: iso,
    },
    {
      KriteriaPertama: iso,
      penilaian: "",
      KriteriaKeDua: iso,
    },
  ]);
  const [disabledButton, setDisabledButton] = useState(true);
  const [hasilPerhitungan, setHasilPerhitungan] = useState([]);

  useEffect(() => {
    if (
      valuePenilaianPertama === "" ||
      valuePenilaianKedua === "" ||
      valuePenilaianKetiga === "" ||
      valuePenilaianKeempat === "" ||
      valuePenilaianKelima === "" ||
      valuePenilaianKeenam === "" ||
      valuePenilaianKetujuh === "" ||
      valuePenilaianKedelepan === "" ||
      valuePenilaianKesembilan === "" ||
      valuePenilaianKesepuluh === "" ||
      valuePenilaianKesebelas === "" ||
      valuePenilaianKeduabelas === "" ||
      valuePenilaianKetigabelas === "" ||
      valuePenilaianKeempatbelas === "" ||
      valuePenilaianKelimabelas === ""
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [
    valuePenilaianPertama,
    valuePenilaianKedua,
    valuePenilaianKetiga,
    valuePenilaianKeempat,
    valuePenilaianKelima,
    valuePenilaianKeenam,
    valuePenilaianKetujuh,
    valuePenilaianKedelepan,
    valuePenilaianKesembilan,
    valuePenilaianKesepuluh,
    valuePenilaianKesebelas,
    valuePenilaianKeduabelas,
    valuePenilaianKetigabelas,
    valuePenilaianKeempatbelas,
    valuePenilaianKelimabelas,
  ]);

  // Change Penilaian
  const changePenilaianPertama = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianPertama(value);
    const state = [...valueBobotKriteria];
    state[0].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKedua = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKedua(value);
    const state = [...valueBobotKriteria];
    state[1].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKetiga = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKetiga(value);
    const state = [...valueBobotKriteria];
    state[2].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKeempat = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKeempat(value);
    const state = [...valueBobotKriteria];
    state[3].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKelima = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKelima(value);
    const state = [...valueBobotKriteria];
    state[4].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKeenam = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKeenam(value);
    const state = [...valueBobotKriteria];
    state[5].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKetujuh = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKetujuh(value);
    const state = [...valueBobotKriteria];
    state[6].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKedelepan = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKedelapan(value);
    const state = [...valueBobotKriteria];
    state[7].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKesembilan = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKesembilan(value);
    const state = [...valueBobotKriteria];
    state[8].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKesepuluh = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKesepuluh(value);
    const state = [...valueBobotKriteria];
    state[9].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKesebelas = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKesebelas(value);
    const state = [...valueBobotKriteria];
    state[10].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKeduabelas = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKeduabelas(value);
    const state = [...valueBobotKriteria];
    state[11].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKetigabelas = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKetigabelas(value);
    const state = [...valueBobotKriteria];
    state[12].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKeempatbelas = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKeempatbelas(value);
    const state = [...valueBobotKriteria];
    state[13].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKelimabelas = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    setValuePenilaianKelimabelas(value);
    const state = [...valueBobotKriteria];
    state[14].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const klikHitung = () => {
    axios
      .post("http://localhost:8080/kriteria/perhitunganbobot", {
        data: valueBobotKriteria,
      })
      .then((res) => {
        setHasilPerhitungan(res.data.kriteria_bobot);
      });
  };

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
                  <FormGroup>
                    <Label style={{ fontSize: "20px" }}>Kriteria Pertama</Label>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={sensor} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={sensor} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={sensor} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={sensor} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={sensor} disabled />
                    </div>
                    {/* Resolusi */}
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={resolusi} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={resolusi} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={resolusi} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={resolusi} disabled />
                    </div>
                    {/* Harga */}
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={harga} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={harga} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={harga} disabled />
                    </div>
                    {/* Fitur */}
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={fitur} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={fitur} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={iso} disabled />
                    </div>
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label style={{ fontSize: "20px" }}>Penilaian</Label>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianPertama}
                        onChange={changePenilaianPertama}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKedua}
                        onChange={changePenilaianKedua}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKetiga}
                        onChange={changePenilaianKetiga}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKeempat}
                        onChange={changePenilaianKeempat}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKelima}
                        onChange={changePenilaianKelima}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKeenam}
                        onChange={changePenilaianKeenam}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKetujuh}
                        onChange={changePenilaianKetujuh}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKedelepan}
                        onChange={changePenilaianKedelepan}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKesembilan}
                        onChange={changePenilaianKesembilan}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKesepuluh}
                        onChange={changePenilaianKesepuluh}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKesebelas}
                        onChange={changePenilaianKesebelas}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKeduabelas}
                        onChange={changePenilaianKeduabelas}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKetigabelas}
                        onChange={changePenilaianKetigabelas}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKeempatbelas}
                        onChange={changePenilaianKeempatbelas}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input
                        type="select"
                        value={valuePenilaianKelimabelas}
                        onChange={changePenilaianKelimabelas}
                      >
                        <option value="">Pilih Skala Saaty</option>
                        {stateSkalaSaaty &&
                          stateSkalaSaaty.map((data, i) => {
                            return (
                              <Fragment key={i}>
                                <option
                                  value={`${data.intensitas}. ${data.keterangan}`}
                                  id={data.intensitas}
                                >
                                  {data.intensitas}. {data.keterangan}
                                </option>
                              </Fragment>
                            );
                          })}
                      </Input>
                    </div>
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label style={{ fontSize: "20px" }}>Kriteria Kedua</Label>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={sensor} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={resolusi} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={harga} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={fitur} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={iso} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={resolusi} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={harga} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={fitur} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={iso} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={harga} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={fitur} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={iso} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={fitur} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={iso} disabled />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                      <Input type="text" value={iso} disabled />
                    </div>
                  </FormGroup>
                </Col>
              </Row>

              <Button
                color="primary"
                onClick={klikHitung}
                disabled={disabledButton}
              >
                Hitung
              </Button>
            </CardBody>

            <CardBody>
              <Table className="table-bordered">
                <thead>
                  <tr>
                    <th></th>
                    <th>Sensor</th>
                    <th>Resolusi</th>
                    <th>Harga</th>
                    <th>Fitur</th>
                    <th>Iso</th>
                  </tr>
                </thead>

                {hasilPerhitungan.map((d, i) => {
                  return (
                    <Fragment key={i}>
                      <tbody>
                        <tr>
                          <td>{d.namaKriteria}</td>
                          {d.bobot.map((b, i1) => {
                            return <td key={i1}>{b}</td>;
                          })}
                        </tr>
                      </tbody>
                    </Fragment>
                  );
                })}
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BobotKriteria;
