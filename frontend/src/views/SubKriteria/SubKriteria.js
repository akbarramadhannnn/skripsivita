import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
} from "reactstrap";
import { getDataSubKriteriaByIdKriteria } from "../../api";

const SubKriteria = (props) => {
  const [dataSubKriteria, setDataSubKriteria] = useState([]);

  useEffect(() => {
    getDataSubKriteriaByIdKriteria(props.match.params.idkriteria).then(
      (res) => {
        if (res.status === true) {
          setDataSubKriteria(res.data);
        }
      }
    );
  }, [props.match.params.idkriteria]);

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Data Sub Kriteria
            </CardHeader>
            <CardBody>
              <Link to={`/kriteria`}>
                <Button color="primary">Kembali</Button>{" "}
              </Link>
              <br />
              <br />

              <Table className="text-center" responsive>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Kriteria</th>
                    <th>Sub Kriteria</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>

                {dataSubKriteria &&
                  dataSubKriteria.map((data, i) => {
                    return (
                      <Fragment key={i}>
                        <tbody>
                          <tr>
                            <td>{i + 1}</td>
                            <td>{data.idKriteria.namaKriteria}</td>
                            <td>{data.namaSubKriteria}</td>
                            <td>
                              <Button color="warning">edit</Button>{" "}
                              <Button color="danger">hapus</Button>{" "}
                            </td>
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

export default SubKriteria;
