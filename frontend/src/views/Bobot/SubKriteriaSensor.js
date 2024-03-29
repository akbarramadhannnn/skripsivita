import React, { Fragment } from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from "reactstrap";

const SubKriteriaSensor = ({
  subKriteria,
  skalaSaaty,
  valueSubKriteria,
  setValueSubKriteria,
  valueBobotSubKriteria,
  setValueBobotSubKriteria,
}) => {
  // Change Penilaian
  const changePenilaianPertama = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateSubKriteria = { ...valueSubKriteria };
    stateSubKriteria.valuePenilaianPertama = value;
    setValueSubKriteria(stateSubKriteria);
    const state = [...valueBobotSubKriteria];
    state[0].penilaian = nilai;
    setValueBobotSubKriteria(state);
  };

  const changePenilaianKedua = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateSubKriteria = { ...valueSubKriteria };
    stateSubKriteria.valuePenilaianKeDua = value;
    setValueSubKriteria(stateSubKriteria);
    const state = [...valueBobotSubKriteria];
    state[1].penilaian = nilai;
    setValueBobotSubKriteria(state);
  };

  const changePenilaianKetiga = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateSubKriteria = { ...valueSubKriteria };
    stateSubKriteria.valuePenilaianKeTiga = value;
    setValueSubKriteria(stateSubKriteria);
    const state = [...valueBobotSubKriteria];
    state[2].penilaian = nilai;
    setValueBobotSubKriteria(state);
  };

  const changePenilaianKeempat = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateSubKriteria = { ...valueSubKriteria };
    stateSubKriteria.valuePenilaianKeEmpat = value;
    setValueSubKriteria(stateSubKriteria);
    const state = [...valueBobotSubKriteria];
    state[3].penilaian = nilai;
    setValueBobotSubKriteria(state);
  };

  const changePenilaianKelima = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateSubKriteria = { ...valueSubKriteria };
    stateSubKriteria.valuePenilaianKeLima = value;
    setValueSubKriteria(stateSubKriteria);
    const state = [...valueBobotSubKriteria];
    state[4].penilaian = nilai;
    setValueBobotSubKriteria(state);
  };

  const changePenilaianKeenam = (e) => {
    const value = e.target.value;
    const nilai = e.target[e.target.selectedIndex].id;
    const stateSubKriteria = { ...valueSubKriteria };
    stateSubKriteria.valuePenilaianKeEnam = value;
    setValueSubKriteria(stateSubKriteria);
    const state = [...valueBobotSubKriteria];
    state[5].penilaian = nilai;
    setValueBobotSubKriteria(state);
  };

  return (
    <Col xs="12" lg="12">
      <Card>
        <CardBody>
          <Row>
            <Col md="4">
              <FormGroup>
                <Label style={{ fontSize: "20px" }}>Sub Kriteria</Label>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.fullframe} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.fullframe} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.fullframe} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.apsh} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.apsh} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.apsc} disabled />
                </div>
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label style={{ fontSize: "20px" }}>Penilaian</Label>
                <div style={{ marginBottom: "10px" }}>
                  <Input
                    type="text"
                    value={valueSubKriteria.valuePenilaianPertama}
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
                    value={valueSubKriteria.valuePenilaianKeDua}
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
                    value={valueSubKriteria.valuePenilaianKeTiga}
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
                    type="text"
                    value={valueSubKriteria.valuePenilaianKeEmpat}
                    onChange={changePenilaianKeempat}
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
                    value={valueSubKriteria.valuePenilaianKeLima}
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
                    value={valueSubKriteria.valuePenilaianKeEnam}
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
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label style={{ fontSize: "20px" }}>Sub Kriteria </Label>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.fullframe} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.apsh} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.apsc} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.apsh} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.apsc} disabled />
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <Input type="text" value={subKriteria.apsc} disabled />
                </div>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SubKriteriaSensor;
