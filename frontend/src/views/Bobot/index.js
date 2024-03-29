import React, { useState, useEffect } from "react";
import { Accordion, Card, Button, Col, Row } from "react-bootstrap";
import BobotKriteria from "./BobotKriteria";
import SubKriteriaSensor from "./SubKriteriaSensor";
import SubKriteriaResolusi from "./SubKriteriaResolusi";
import SubKriteriaHarga from "./SubKriteriaHarga";
import SubKriteriaFitur from "./SubKriteriaFitur";
import SubKriteriaIso from "./SubKriteriaIso";
import axios from "axios";
import { withRouter } from "react-router-dom";

const Bobot = (props) => {
  const [kriteria] = useState({
    sensor: "Sensor",
    resolusi: "Resolusi",
    harga: "Harga",
    fitur: "Fitur",
    iso: "Iso",
  });

  const [subKriteria] = useState({
    sensor: {
      apsc: "APS-C",
      apsh: "APS-H",
      fullframe: "FULL FRAME",
    },
    resolusi: {
      tinggi: "TINGGI",
      sedang: "SEDANG",
      rendah: "RENDAH",
    },
    harga: {
      mahal: "MAHAL",
      sedang: "SEDANG",
      murah: "MURAH",
    },
    fitur: {
      sangatlengkap: "SANGAT LENGKAP",
      lengkap: "LENGKAP",
      tidaklengkap: "TIDAK LENGKAP",
    },
    iso: {
      tinggi: "TINGGI",
      sedang: "SEDANG",
      rendah: "RENDAH",
    },
  });

  const [skalaSaaty] = useState([
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

  const [valueKriteria, setValueKriteria] = useState({
    valuePenilaianPertama: "1. Sama penting dengan",
    valuePenilaianKeDua: "",
    valuePenilaianKeTiga: "",
    valuePenilaianKeEmpat: "",
    valuePenilaianKeLima: "",
    valuePenilaianKeEnam: "1. Sama penting dengan",
    valuePenilaianKeTujuh: "",
    valuePenilaianKeDelapan: "",
    valuePenilaianKeSembilan: "",
    valuePenilaianKeSepuluh: "1. Sama penting dengan",
    valuePenilaianKeSebelas: "",
    valuePenilaianKeDuabelas: "",
    valuePenilaianKeTigabelas: "1. Sama penting dengan",
    valuePenilaianKeEmpatbelas: "",
    valuePenilaianKeLimabelas: "1. Sama penting dengan",
  });

  const [valueSubKriteriaSensor, setValueSubKriteriaSensor] = useState({
    valuePenilaianPertama: "1. Sama penting dengan",
    valuePenilaianKeDua: "",
    valuePenilaianKeTiga: "",
    valuePenilaianKeEmpat: "1. Sama penting dengan",
    valuePenilaianKeLima: "",
    valuePenilaianKeEnam: "1. Sama penting dengan",
  });

  const [valueSubKriteriaHarga, setValueSubKriteriaHarga] = useState({
    valuePenilaianPertama: "1. Sama penting dengan",
    valuePenilaianKeDua: "",
    valuePenilaianKeTiga: "",
    valuePenilaianKeEmpat: "1. Sama penting dengan",
    valuePenilaianKeLima: "",
    valuePenilaianKeEnam: "1. Sama penting dengan",
  });

  const [valueSubKriteriaFitur, setValueSubKriteriaFitur] = useState({
    valuePenilaianPertama: "1. Sama penting dengan",
    valuePenilaianKeDua: "",
    valuePenilaianKeTiga: "",
    valuePenilaianKeEmpat: "1. Sama penting dengan",
    valuePenilaianKeLima: "",
    valuePenilaianKeEnam: "1. Sama penting dengan",
  });

  const [valueSubKriteriaIso, setValueSubKriteriaIso] = useState({
    valuePenilaianPertama: "1. Sama penting dengan",
    valuePenilaianKeDua: "",
    valuePenilaianKeTiga: "",
    valuePenilaianKeEmpat: "1. Sama penting dengan",
    valuePenilaianKeLima: "",
    valuePenilaianKeEnam: "1. Sama penting dengan",
  });

  const [valueSubKriteriaResolusi, setValueSubKriteriaResolusi] = useState({
    valuePenilaianPertama: "1. Sama penting dengan",
    valuePenilaianKeDua: "",
    valuePenilaianKeTiga: "",
    valuePenilaianKeEmpat: "1. Sama penting dengan",
    valuePenilaianKeLima: "",
    valuePenilaianKeEnam: "1. Sama penting dengan",
  });

  const [valueBobotKriteria, setValueBobotKriteria] = useState([
    {
      KriteriaPertama: kriteria.sensor,
      penilaian: "1",
      KriteriaKeDua: kriteria.sensor,
    },
    {
      KriteriaPertama: kriteria.sensor,
      penilaian: "",
      KriteriaKeDua: kriteria.resolusi,
    },
    {
      KriteriaPertama: kriteria.sensor,
      penilaian: "",
      KriteriaKeDua: kriteria.harga,
    },
    {
      KriteriaPertama: kriteria.sensor,
      penilaian: "",
      KriteriaKeDua: kriteria.fitur,
    },
    {
      KriteriaPertama: kriteria.sensor,
      penilaian: "",
      KriteriaKeDua: kriteria.iso,
    },
    {
      KriteriaPertama: kriteria.resolusi,
      penilaian: "1",
      KriteriaKeDua: kriteria.resolusi,
    },
    {
      KriteriaPertama: kriteria.resolusi,
      penilaian: "",
      KriteriaKeDua: kriteria.harga,
    },
    {
      KriteriaPertama: kriteria.resolusi,
      penilaian: "",
      KriteriaKeDua: kriteria.fitur,
    },
    {
      KriteriaPertama: kriteria.resolusi,
      penilaian: "",
      KriteriaKeDua: kriteria.iso,
    },
    {
      KriteriaPertama: kriteria.harga,
      penilaian: "1",
      KriteriaKeDua: kriteria.harga,
    },
    {
      KriteriaPertama: kriteria.harga,
      penilaian: "",
      KriteriaKeDua: kriteria.fitur,
    },
    {
      KriteriaPertama: kriteria.harga,
      penilaian: "",
      KriteriaKeDua: kriteria.iso,
    },
    {
      KriteriaPertama: kriteria.fitur,
      penilaian: "1",
      KriteriaKeDua: kriteria.fitur,
    },
    {
      KriteriaPertama: kriteria.fitur,
      penilaian: "",
      KriteriaKeDua: kriteria.iso,
    },
    {
      KriteriaPertama: kriteria.iso,
      penilaian: "1",
      KriteriaKeDua: kriteria.iso,
    },
  ]);

  const [
    valueBobotSubKriteriaSensor,
    setValueBobotSubKriteriaSensor,
  ] = useState([
    {
      KriteriaPertama: subKriteria.sensor.fullframe,
      penilaian: "1",
      KriteriaKeDua: subKriteria.sensor.fullframe,
    },
    {
      KriteriaPertama: subKriteria.sensor.fullframe,
      penilaian: "",
      KriteriaKeDua: subKriteria.sensor.apsh,
    },
    {
      KriteriaPertama: subKriteria.sensor.fullframe,
      penilaian: "",
      KriteriaKeDua: subKriteria.sensor.apsc,
    },
    {
      KriteriaPertama: subKriteria.sensor.apsh,
      penilaian: "1",
      KriteriaKeDua: subKriteria.sensor.apsh,
    },
    {
      KriteriaPertama: subKriteria.sensor.apsh,
      penilaian: "",
      KriteriaKeDua: subKriteria.sensor.apsc,
    },
    {
      KriteriaPertama: subKriteria.sensor.apsc,
      penilaian: "1",
      KriteriaKeDua: subKriteria.sensor.apsc,
    },
  ]);

  const [
    valueBobotSubKriteriaResolusi,
    setValueBobotSubKriteriaResolusi,
  ] = useState([
    {
      KriteriaPertama: subKriteria.resolusi.tinggi,
      penilaian: "1",
      KriteriaKeDua: subKriteria.resolusi.tinggi,
    },
    {
      KriteriaPertama: subKriteria.resolusi.tinggi,
      penilaian: "",
      KriteriaKeDua: subKriteria.resolusi.sedang,
    },
    {
      KriteriaPertama: subKriteria.resolusi.tinggi,
      penilaian: "",
      KriteriaKeDua: subKriteria.resolusi.rendah,
    },
    {
      KriteriaPertama: subKriteria.resolusi.sedang,
      penilaian: "1",
      KriteriaKeDua: subKriteria.resolusi.sedang,
    },
    {
      KriteriaPertama: subKriteria.resolusi.sedang,
      penilaian: "",
      KriteriaKeDua: subKriteria.resolusi.rendah,
    },
    {
      KriteriaPertama: subKriteria.resolusi.rendah,
      penilaian: "1",
      KriteriaKeDua: subKriteria.resolusi.rendah,
    },
  ]);

  const [valueBobotSubKriteriaHarga, setValueBobotSubKriteriaHarga] = useState([
    {
      KriteriaPertama: subKriteria.harga.mahal,
      penilaian: "1",
      KriteriaKeDua: subKriteria.harga.mahal,
    },
    {
      KriteriaPertama: subKriteria.harga.mahal,
      penilaian: "",
      KriteriaKeDua: subKriteria.harga.sedang,
    },
    {
      KriteriaPertama: subKriteria.harga.mahal,
      penilaian: "",
      KriteriaKeDua: subKriteria.harga.murah,
    },
    {
      KriteriaPertama: subKriteria.harga.sedang,
      penilaian: "1",
      KriteriaKeDua: subKriteria.harga.sedang,
    },
    {
      KriteriaPertama: subKriteria.harga.sedang,
      penilaian: "",
      KriteriaKeDua: subKriteria.harga.murah,
    },
    {
      KriteriaPertama: subKriteria.harga.murah,
      penilaian: "1",
      KriteriaKeDua: subKriteria.harga.murah,
    },
  ]);

  const [valueBobotSubKriteriaFitur, setValueBobotSubKriteriaFitur] = useState([
    {
      KriteriaPertama: subKriteria.fitur.sangatlengkap,
      penilaian: "1",
      KriteriaKeDua: subKriteria.fitur.sangatlengkap,
    },
    {
      KriteriaPertama: subKriteria.fitur.sangatlengkap,
      penilaian: "",
      KriteriaKeDua: subKriteria.fitur.lengkap,
    },
    {
      KriteriaPertama: subKriteria.fitur.sangatlengkap,
      penilaian: "",
      KriteriaKeDua: subKriteria.fitur.tidaklengkap,
    },
    {
      KriteriaPertama: subKriteria.fitur.lengkap,
      penilaian: "1",
      KriteriaKeDua: subKriteria.fitur.lengkap,
    },
    {
      KriteriaPertama: subKriteria.fitur.lengkap,
      penilaian: "",
      KriteriaKeDua: subKriteria.fitur.tidaklengkap,
    },
    {
      KriteriaPertama: subKriteria.fitur.tidaklengkap,
      penilaian: "1",
      KriteriaKeDua: subKriteria.fitur.tidaklengkap,
    },
  ]);

  const [valueBobotSubKriteriaIso, setValueBobotSubKriteriaIso] = useState([
    {
      KriteriaPertama: subKriteria.iso.tinggi,
      penilaian: "1",
      KriteriaKeDua: subKriteria.iso.tinggi,
    },
    {
      KriteriaPertama: subKriteria.iso.tinggi,
      penilaian: "",
      KriteriaKeDua: subKriteria.iso.sedang,
    },
    {
      KriteriaPertama: subKriteria.iso.tinggi,
      penilaian: "",
      KriteriaKeDua: subKriteria.iso.rendah,
    },
    {
      KriteriaPertama: subKriteria.iso.sedang,
      penilaian: "1",
      KriteriaKeDua: subKriteria.iso.sedang,
    },
    {
      KriteriaPertama: subKriteria.iso.sedang,
      penilaian: "",
      KriteriaKeDua: subKriteria.iso.rendah,
    },
    {
      KriteriaPertama: subKriteria.iso.rendah,
      penilaian: "1",
      KriteriaKeDua: subKriteria.iso.rendah,
    },
  ]);

  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    if (
      valueKriteria.valuePenilaianPertama === "" ||
      valueKriteria.valuePenilaianKeDua === "" ||
      valueKriteria.valuePenilaianKeTiga === "" ||
      valueKriteria.valuePenilaianKeEmpat === "" ||
      valueKriteria.valuePenilaianKeLima === "" ||
      valueKriteria.valuePenilaianKeEnam === "" ||
      valueKriteria.valuePenilaianKeTujuh === "" ||
      valueKriteria.valuePenilaianKeDelepan === "" ||
      valueKriteria.valuePenilaianKeSembilan === "" ||
      valueKriteria.valuePenilaianKeSepuluh === "" ||
      valueKriteria.valuePenilaianKeSebelas === "" ||
      valueKriteria.valuePenilaianKeDuabelas === "" ||
      valueKriteria.valuePenilaianKeTigabelas === "" ||
      valueKriteria.valuePenilaianKeEmpatbelas === "" ||
      valueKriteria.valuePenilaianKeLimabelas === "" ||
      valueSubKriteriaSensor.valuePenilaianPertama === "" ||
      valueSubKriteriaSensor.valuePenilaianKeDua === "" ||
      valueSubKriteriaSensor.valuePenilaianKeTiga === "" ||
      valueSubKriteriaSensor.valuePenilaianKeEmpat === "" ||
      valueSubKriteriaSensor.valuePenilaianKeLima === "" ||
      valueSubKriteriaSensor.valuePenilaianKeEnam === "" ||
      valueSubKriteriaResolusi.valuePenilaianPertama === "" ||
      valueSubKriteriaResolusi.valuePenilaianKeDua === "" ||
      valueSubKriteriaResolusi.valuePenilaianKeTiga === "" ||
      valueSubKriteriaResolusi.valuePenilaianKeEmpat === "" ||
      valueSubKriteriaResolusi.valuePenilaianKeLima === "" ||
      valueSubKriteriaResolusi.valuePenilaianKeEnam === "" ||
      valueSubKriteriaHarga.valuePenilaianPertama === "" ||
      valueSubKriteriaHarga.valuePenilaianKeDua === "" ||
      valueSubKriteriaHarga.valuePenilaianKeTiga === "" ||
      valueSubKriteriaHarga.valuePenilaianKeEmpat === "" ||
      valueSubKriteriaHarga.valuePenilaianKeLima === "" ||
      valueSubKriteriaHarga.valuePenilaianKeEnam === "" ||
      valueSubKriteriaFitur.valuePenilaianPertama === "" ||
      valueSubKriteriaFitur.valuePenilaianKeDua === "" ||
      valueSubKriteriaFitur.valuePenilaianKeTiga === "" ||
      valueSubKriteriaFitur.valuePenilaianKeEmpat === "" ||
      valueSubKriteriaFitur.valuePenilaianKeLima === "" ||
      valueSubKriteriaFitur.valuePenilaianKeEnam === "" ||
      valueSubKriteriaIso.valuePenilaianPertama === "" ||
      valueSubKriteriaIso.valuePenilaianKeDua === "" ||
      valueSubKriteriaIso.valuePenilaianKeTiga === "" ||
      valueSubKriteriaIso.valuePenilaianKeEmpat === "" ||
      valueSubKriteriaIso.valuePenilaianKeLima === "" ||
      valueSubKriteriaIso.valuePenilaianKeEnam === ""
    ) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [
    valueKriteria.valuePenilaianPertama,
    valueKriteria.valuePenilaianKeDua,
    valueKriteria.valuePenilaianKeTiga,
    valueKriteria.valuePenilaianKeEmpat,
    valueKriteria.valuePenilaianKeLima,
    valueKriteria.valuePenilaianKeEnam,
    valueKriteria.valuePenilaianKeTujuh,
    valueKriteria.valuePenilaianKeDelepan,
    valueKriteria.valuePenilaianKeSembilan,
    valueKriteria.valuePenilaianKeSepuluh,
    valueKriteria.valuePenilaianKeSebelas,
    valueKriteria.valuePenilaianKeDuabelas,
    valueKriteria.valuePenilaianKeTigabelas,
    valueKriteria.valuePenilaianKeEmpatbelas,
    valueKriteria.valuePenilaianKeLimabelas,
    valueSubKriteriaSensor.valuePenilaianPertama,
    valueSubKriteriaSensor.valuePenilaianKeDua,
    valueSubKriteriaSensor.valuePenilaianKeTiga,
    valueSubKriteriaSensor.valuePenilaianKeEmpat,
    valueSubKriteriaSensor.valuePenilaianKeLima,
    valueSubKriteriaSensor.valuePenilaianKeEnam,
    valueSubKriteriaResolusi.valuePenilaianPertama,
    valueSubKriteriaResolusi.valuePenilaianKeDua,
    valueSubKriteriaResolusi.valuePenilaianKeTiga,
    valueSubKriteriaResolusi.valuePenilaianKeEmpat,
    valueSubKriteriaResolusi.valuePenilaianKeLima,
    valueSubKriteriaResolusi.valuePenilaianKeEnam,
    valueSubKriteriaHarga.valuePenilaianPertama,
    valueSubKriteriaHarga.valuePenilaianKeDua,
    valueSubKriteriaHarga.valuePenilaianKeTiga,
    valueSubKriteriaHarga.valuePenilaianKeEmpat,
    valueSubKriteriaHarga.valuePenilaianKeLima,
    valueSubKriteriaHarga.valuePenilaianKeEnam,
    valueSubKriteriaFitur.valuePenilaianPertama,
    valueSubKriteriaFitur.valuePenilaianKeDua,
    valueSubKriteriaFitur.valuePenilaianKeTiga,
    valueSubKriteriaFitur.valuePenilaianKeEmpat,
    valueSubKriteriaFitur.valuePenilaianKeLima,
    valueSubKriteriaFitur.valuePenilaianKeEnam,
    valueSubKriteriaIso.valuePenilaianPertama,
    valueSubKriteriaIso.valuePenilaianKeDua,
    valueSubKriteriaIso.valuePenilaianKeTiga,
    valueSubKriteriaIso.valuePenilaianKeEmpat,
    valueSubKriteriaIso.valuePenilaianKeLima,
    valueSubKriteriaIso.valuePenilaianKeEnam,
  ]);

  const klikHitung = () => {
    const data = {
      kriteria: valueBobotKriteria,
      subKriteriaSensor: {
        nama: "sensor",
        bobot: valueBobotSubKriteriaSensor,
      },
      subKriteriaResolusi: {
        nama: "resolusi",
        bobot: valueBobotSubKriteriaResolusi,
      },
      subKriteriaHarga: {
        nama: "harga",
        bobot: valueBobotSubKriteriaHarga,
      },
      subKriteriaFitur: {
        nama: "fitur",
        bobot: valueBobotSubKriteriaFitur,
      },
      subKriteriaIso: {
        nama: "iso",
        bobot: valueBobotSubKriteriaIso,
      },
    };
    axios
      .post("http://localhost:8080/kriteria/perhitunganbobot", data)
      .then((response) => {
        console.log(response.data);
        props.history.push("/hasil-perhitungan-bobot", {
          bobot: response.data,
        });
      });
  };

  return (
    <div className="animated fadeIn">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Bobot Kriteria
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <BobotKriteria
                kriteria={kriteria}
                skalaSaaty={skalaSaaty}
                valueKriteria={valueKriteria}
                setValueKriteria={setValueKriteria}
                valueBobotKriteria={valueBobotKriteria}
                setValueBobotKriteria={setValueBobotKriteria}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Bobot Sub Kriteria Sensor
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <SubKriteriaSensor
                subKriteria={subKriteria.sensor}
                skalaSaaty={skalaSaaty}
                valueSubKriteria={valueSubKriteriaSensor}
                setValueSubKriteria={setValueSubKriteriaSensor}
                valueBobotSubKriteria={valueBobotSubKriteriaSensor}
                setValueBobotSubKriteria={setValueBobotSubKriteriaSensor}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Bobot Sub Kriteria Resolusi
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <SubKriteriaResolusi
                subKriteria={subKriteria.resolusi}
                skalaSaaty={skalaSaaty}
                valueSubKriteria={valueSubKriteriaResolusi}
                setValueSubKriteria={setValueSubKriteriaResolusi}
                valueBobotSubKriteria={valueBobotSubKriteriaResolusi}
                setValueBobotSubKriteria={setValueBobotSubKriteriaResolusi}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Bobot Sub Kriteria Harga
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <SubKriteriaHarga
                subKriteria={subKriteria.harga}
                skalaSaaty={skalaSaaty}
                valueSubKriteria={valueSubKriteriaHarga}
                setValueSubKriteria={setValueSubKriteriaHarga}
                valueBobotSubKriteria={valueBobotSubKriteriaHarga}
                setValueBobotSubKriteria={setValueBobotSubKriteriaHarga}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              Bobot Sub Kriteria Fitur
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <SubKriteriaFitur
                subKriteria={subKriteria.fitur}
                skalaSaaty={skalaSaaty}
                valueSubKriteria={valueSubKriteriaFitur}
                setValueSubKriteria={setValueSubKriteriaFitur}
                valueBobotSubKriteria={valueBobotSubKriteriaFitur}
                setValueBobotSubKriteria={setValueBobotSubKriteriaFitur}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
              Bobot Sub Kriteria Iso
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <SubKriteriaIso
                subKriteria={subKriteria.iso}
                skalaSaaty={skalaSaaty}
                valueSubKriteria={valueSubKriteriaIso}
                setValueSubKriteria={setValueSubKriteriaIso}
                valueBobotSubKriteria={valueBobotSubKriteriaIso}
                setValueBobotSubKriteria={setValueBobotSubKriteriaIso}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Col md="12" className="mb-3">
          <Row>
            <Button onClick={klikHitung} disabled={disabledButton}>
              Hitung
            </Button>
          </Row>
        </Col>
      </Accordion>
    </div>
  );
};

export default withRouter(Bobot);
