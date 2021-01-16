import React, { useEffect, useState } from "react";
import { Accordion, Card, Button, Col, Row } from "react-bootstrap";
import { Table } from "reactstrap";
import axios from "axios";
import { Fragment } from "react";

const PerhitunganBobotAHP = () => {
  const [dataKriteria, setDataKriteria] = useState([]);

  useEffect(() => {
    const GetDataKriteria = async () => {
      const result = await axios.get("http://localhost:8080/kriteria");
      setDataKriteria(result.data.data);
    };

    GetDataKriteria();
  }, []);
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
              <Table className="table-bordered text-center">
                <thead>
                  <tr>
                    <th></th>
                    {dataKriteria.map((d, i) => {
                      return <th key={i}>{d.namaKriteria}</th>;
                    })}
                  </tr>
                </thead>

                {dataKriteria.map((d, i) => {
                  return (
                    <tbody key={i}>
                      <tr>
                        <th>{d.namaKriteria}</th>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default PerhitunganBobotAHP;
