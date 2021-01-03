import React, { useEffect, useState } from "react";
import { Accordion, Card, Button, Row, Col } from "react-bootstrap";
import { getDataAlternatif } from "../../api";

const Alternatif = () => {
  const [dataAlternatif, setDataAlternatif] = useState([]);

  useEffect(() => {
    getDataAlternatif().then((res) => {
      if (res.status === true) {
        console.log(res.data);
        setDataAlternatif(res.data);
      }
    });
  }, []);
  return (
    <div className="animated fadeIn">
      <h2>Alternatif</h2>

      {dataAlternatif.map((d, i) => {
        return (
          <Card key={i}>
            <Accordion>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={i + 1}>
                  {d.merk}
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey={i + 1}>
                <Card.Body>
                  <Row>
                    <Col md="12">
                      <Card.Title>Keterangan</Card.Title>
                      <p>{d.keterangan}</p>
                    </Col>

                    <Col md="3">
                      <Card.Title>Iso</Card.Title>
                      <p>{d.iso}</p>
                    </Col>

                    <Col md="3">
                      <Card.Title>Resolusi</Card.Title>
                      <p>{d.resolusi}</p>
                    </Col>

                    <Col md="3">
                      <Card.Title>Sensor</Card.Title>
                      <p>{d.sensor}</p>
                    </Col>

                    <Col md="3">
                      <Card.Title>Harga</Card.Title>
                      <p>{d.harga}</p>
                    </Col>

                    <Col md="12">
                      <Card.Title>Fitur</Card.Title>
                      <Row>
                        {d.fitur.map((f, fi) => {
                          return (
                            <Col md="auto" key={fi}>
                              - {f.namaFitur}
                            </Col>
                          );
                        })}
                      </Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Accordion>
          </Card>
        );
      })}
    </div>
  );
};

export default Alternatif;
