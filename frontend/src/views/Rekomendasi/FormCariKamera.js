import React, { Fragment, useState } from "react";
import { FormGroup, Input, Label, Col, Row, Button } from "reactstrap";

const FormCariKamera = ({
  // valueHarga,
  // valueResolusi,
  // valueSensor,
  // valueFitur,
  // valueIso,
  // onChangeHari,
  // onChangeResolusi,
  // onChangeSensor,
  // onChangeFitur,
  // onChangeIso,
  klikCariKamera,
  disabledButtonCariKamera,
  onChangeValue,
  value,
  setValue,
}) => {
  const [pilihan] = useState(["Harga", "Resolusi", "Sensor", "Fitur", "Iso"]);
  const [index, setIndex] = useState("");

  const klikButtonPilihan = (index) => {
    setValue("");
    setIndex(index);
  };

  return (
    <Fragment>
      <div className="mb-4">
        <Row>
          {pilihan.map((item, i) => {
            return (
              <Col md="auto" key={i}>
                <Button
                  key={i}
                  color={index === i ? "primary" : "secondary"}
                  onClick={() => klikButtonPilihan(i)}
                >
                  {item}
                </Button>
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="mb-3">
        <Row>
          {index === 0 && (
            <Col md="6">
              <FormGroup>
                <Label>Harga</Label>
                <Input
                  type="select"
                  value={value}
                  onChange={(e) => onChangeValue(e, "harga")}
                >
                  <option value="">Pilih Harga</option>
                  <option value="MURAH">Murah (4jt-8jt)</option>
                  <option value="SEDANG">Sedang (8jt-30jt)</option>
                  <option value="MAHAL">Mahal (30jt-100jt)</option>
                </Input>
              </FormGroup>
            </Col>
          )}

          {index === 1 && (
            <Col md="6">
              <Label>Resolusi</Label>
              <Input
                type="select"
                value={value}
                onChange={(e) => onChangeValue(e, "resolusi")}
              >
                <option value="">Pilih Resolusi</option>
                <option value="RENDAH">Rendah (5-20mp)</option>
                <option value="SEDANG">Sedang (20-30mp)</option>
                <option value="TINGGI">Tinggi (31-50mp)</option>
              </Input>
            </Col>
          )}

          {index === 2 && (
            <Col md="6">
              <FormGroup>
                <Label>Sensor</Label>
                <Input
                  type="select"
                  value={value}
                  onChange={(e) => onChangeValue(e, "sensor")}
                >
                  <option value="">Pilih Sensor</option>
                  <option value="APS-C">APS-C</option>
                  <option value="APS-H">APS-H</option>
                  <option value="full frame">Full Frame</option>
                </Input>
              </FormGroup>
            </Col>
          )}

          {index === 3 && (
            <Col md="6">
              <FormGroup>
                <Label>Fitur</Label>
                <Input
                  type="select"
                  value={value}
                  onChange={(e) => onChangeValue(e, "fitur")}
                >
                  <option value="">Pilih Fitur</option>
                  <option value="TIDAK LENGKAP">Tidak Lengkap (1-5)</option>
                  <option value="LENGKAP">Lengkap (5-10)</option>
                  <option value="SANGAT LENGKAP">Sangat Lengkap (10)</option>
                </Input>
              </FormGroup>
            </Col>
          )}

          {index === 4 && (
            <Col md="6">
              <FormGroup>
                <Label>Iso</Label>
                <Input
                  type="select"
                  value={value}
                  onChange={(e) => onChangeValue(e, "iso")}
                >
                  <option value="">Pilih Iso</option>
                  <option value="RENDAH">Rendah (100-5000)</option>
                  <option value="SEDANG">Sedang (5000-15000)</option>
                  <option value="TINGGI">Tinggi (15000-25000)</option>
                </Input>
              </FormGroup>
            </Col>
          )}
        </Row>
      </div>

      <Col md="12" className="text-center">
        <Button
          color="primary"
          onClick={klikCariKamera}
          disabled={disabledButtonCariKamera}
        >
          Cari Kamera
        </Button>
      </Col>
    </Fragment>
  );
};

export default FormCariKamera;
