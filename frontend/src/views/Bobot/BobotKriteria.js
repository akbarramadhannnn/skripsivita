import React, { Fragment } from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from "reactstrap";

const Bobot = ({
  kriteria,
  skalaSaaty,
  valueKriteria,
  setValueKriteria,
  valueBobotKriteria,
  setValueBobotKriteria,
}) => {
  // Change Penilaian
  const changePenilaianPertama = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    console.log(value)
    console.log(nilai)
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianPertama = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[0].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKedua = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeDua = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[1].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKetiga = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeTiga = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[2].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKeempat = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeEmpat = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[3].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKelima = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeLima = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[4].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKeenam = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeEnam = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[5].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKetujuh = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeTujuh = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[6].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKedelepan = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeDelapan = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[7].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKesembilan = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeSembilan = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[8].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKesepuluh = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeSepuluh = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[9].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKesebelas = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeSebelas = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[10].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKeduabelas = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeDuabelas = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[11].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKetigabelas = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeTigabelas = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[12].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKeempatbelas = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeEmpatbelas = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[13].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  const changePenilaianKelimabelas = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateKriteria = { ...valueKriteria };
    stateKriteria.valuePenilaianKeLimabelas = value;
    setValueKriteria(stateKriteria);
    const state = [...valueBobotKriteria];
    state[14].penilaian = nilai;
    setValueBobotKriteria(state);
  };

  return (
    <Col xs="12" lg="12">
      <Card>
        <CardBody>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label style={{ fontSize: "20px" }}>Kriteria Pertama</Label>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.sensor} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.sensor} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.sensor} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.sensor} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.sensor} disabled />
                </div>
                {/* Resolusi */}
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.resolusi} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.resolusi} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.resolusi} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.resolusi} disabled />
                </div>
                {/* Harga */}
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.harga} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.harga} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.harga} disabled />
                </div>
                {/* Fitur */}
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.fitur} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.fitur} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.iso} disabled />
                </div>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label style={{ fontSize: "20px" }}>Penilaian</Label>
                <div style={{ marginBottom: "10px" }}>
                  <Input
                    type="text"
                    value={valueKriteria.valuePenilaianPertama}
                    onChange={changePenilaianPertama}
                    disabled={true}
                  />
                    {/* <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                      })} */}
                  {/* </Input> */}
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input
                    type="select"
                    value={valueKriteria.valuePenilaianKeDua}
                    onChange={changePenilaianKedua}
                  >
                    <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                    value={valueKriteria.valuePenilaianKeTiga}
                    onChange={changePenilaianKetiga}
                  >
                    <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                    value={valueKriteria.valuePenilaianKeEmpat}
                    onChange={changePenilaianKeempat}
                  >
                    <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                    value={valueKriteria.valuePenilaianKeLima}
                    onChange={changePenilaianKelima}
                  >
                    <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                    type="text"
                    value={valueKriteria.valuePenilaianKeEnam}
                    onChange={changePenilaianKeenam}
                    disabled={true}
                  />
                    {/* <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                      })} */}
                  {/* </Input> */}
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input
                    type="select"
                    value={valueKriteria.valuePenilaianKeTujuh}
                    onChange={changePenilaianKetujuh}
                  >
                    <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                    value={valueKriteria.valuePenilaianKeDelapan}
                    onChange={changePenilaianKedelepan}
                  >
                    <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                    value={valueKriteria.valuePenilaianKeSembilan}
                    onChange={changePenilaianKesembilan}
                  >
                    <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                    type="text"
                    value={valueKriteria.valuePenilaianKeSepuluh}
                    onChange={changePenilaianKesepuluh}
                    disabled={true}
                  />
                    {/* <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                      })} */}
                  {/* </Input> */}
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input
                    type="select"
                    value={valueKriteria.valuePenilaianKeSebelas}
                    onChange={changePenilaianKesebelas}
                  >
                    <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                    value={valueKriteria.valuePenilaianKeDuabelas}
                    onChange={changePenilaianKeduabelas}
                  >
                    <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                    type="text"
                    value={valueKriteria.valuePenilaianKeTigabelas}
                    onChange={changePenilaianKetigabelas}
                    disabled={true}
                  />
                    {/* <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                      })} */}
                  {/* </Input> */}
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input
                    type="select"
                    value={valueKriteria.valuePenilaianKeEmpatbelas}
                    onChange={changePenilaianKeempatbelas}
                  >
                    <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                    type="text"
                    value={valueKriteria.valuePenilaianKeLimabelas}
                    onChange={changePenilaianKelimabelas}
                    disabled={true}
                  />
                    {/* <option value="">Pilih Skala Saaty</option>
                    {skalaSaaty &&
                      skalaSaaty.map((data, i) => {
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
                      })} */}
                  {/* </Input> */}
                </div>
              </FormGroup>
            </Col>
            <Col md="4">
              <FormGroup>
                <Label style={{ fontSize: "20px" }}>Kriteria Kedua</Label>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.sensor} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.resolusi} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.harga} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.fitur} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.iso} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.resolusi} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.harga} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.fitur} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.iso} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.harga} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.fitur} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.iso} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.fitur} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.iso} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={kriteria.iso} disabled />
                </div>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Bobot;
