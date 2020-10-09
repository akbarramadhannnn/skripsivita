import React, { Fragment } from "react";
import { CardBody, Card, Table, Col } from "reactstrap";
import { Link } from "react-router-dom";

const HasilPerhitunganBobotKriteria = ({ location }) => {
  // console.log("props hasil perhitungan bobot", props);
  const { state } = location;
  console.log("kriteria", state.bobot.kriteria);
  console.log("sub", state.bobot.sub);
  return (
    <div className="animated fadeIn">
      <h2>Hasil Perhitungan</h2>
      <Card>
        <CardBody>
          <h4>Perhitungan Kriteria</h4>
          <Table className="table-bordered text-center">
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

            {state.bobot.kriteria.kriteria_bobot.map((d, i) => {
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

        <CardBody>
          <div className="table-responsive text-center">
            <Table className="table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Sensor</th>
                  <th>Resolusi</th>
                  <th>Harga</th>
                  <th>Fitur</th>
                  <th>Iso</th>
                  <th>Jumlah</th>
                  <th>Bobot</th>
                  <th>Max</th>
                </tr>
              </thead>

              {state.bobot.kriteria.normalisasi_bobot_kriteria.map((d, i) => {
                return (
                  <Fragment key={i}>
                    <tbody>
                      <tr>
                        <td>{d.namaKriteria}</td>
                        {d.normalisasi.map((b, i1) => {
                          return <td key={i1}>{b}</td>;
                        })}
                        <td>{d.jumlahNormalisasi}</td>
                        <td>{d.bobotNormalisasi}</td>
                        <td>{d.lamdaNormalisasi}</td>
                      </tr>
                    </tbody>
                  </Fragment>
                );
              })}
            </Table>
          </div>
        </CardBody>

        <CardBody>
          <p>
            <b>CI</b> : {state.bobot.kriteria.consistency_index}
          </p>
          <p>
            <b>CR</b> : {state.bobot.kriteria.consistency_ratio}
          </p>
          <p>
            <b>KONSISTENSI</b> :{" "}
            {state.bobot.kriteria.is_consistent === true && "Konsisten"}
            {state.bobot.kriteria.is_consistent === false && "Tidak Konsisten"}
          </p>
        </CardBody>

        {/* Sub Kriteria Sensor */}
        <CardBody>
          <h4>Perhitungan Sub Kriteria Sensor</h4>
          <Table className="table-bordered text-center">
            <thead>
              <tr>
                <th></th>
                <th>nama sub kriteria 1</th>
                <th>nama sub kriteria 2</th>
                <th>nama sub kriteria 3</th>
              </tr>
            </thead>

            {state.bobot.sub.sensor.kriteria_bobot.map((d, i) => {
              return (
                <Fragment key={i}>
                  <tbody>
                    <tr>
                      <td>nama sub kriteria</td>
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

        <CardBody>
          <div className="table-responsive text-center">
            <Table className="table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>nama sub kriteria 1</th>
                  <th>nama sub kriteria 2</th>
                  <th>nama sub kriteria 3</th>
                  <th>Jumlah</th>
                  <th>Bobot</th>
                  <th>Max</th>
                </tr>
              </thead>

              {state.bobot.sub.sensor.normalisasi_bobot_kriteria.map((d, i) => {
                return (
                  <Fragment key={i}>
                    <tbody>
                      <tr>
                        <td>nama sub kriteria</td>
                        {d.normalisasi.map((b, i1) => {
                          return <td key={i1}>{b}</td>;
                        })}
                        <td>{d.jumlahNormalisasi}</td>
                        <td>{d.bobotNormalisasi}</td>
                        <td>{d.lamdaNormalisasi}</td>
                      </tr>
                    </tbody>
                  </Fragment>
                );
              })}
            </Table>
          </div>
        </CardBody>

        <CardBody>
          <p>
            <b>CI</b> : {state.bobot.sub.sensor.consistency_index}
          </p>
          <p>
            <b>CR</b> : {state.bobot.sub.sensor.consistency_ratio}
          </p>
          <p>
            <b>KONSISTENSI</b> :{" "}
            {state.bobot.sub.sensor.is_consistent === true && "Konsisten"}
            {state.bobot.sub.sensor.is_consistent === false &&
              "Tidak Konsisten"}
          </p>
        </CardBody>

        {/* Sub Kriteria Resolusi */}
        <CardBody>
          <h4>Perhitungan Sub Kriteria Resolusi</h4>
          <Table className="table-bordered text-center">
            <thead>
              <tr>
                <th></th>
                <th>nama sub kriteria 1</th>
                <th>nama sub kriteria 2</th>
                <th>nama sub kriteria 3</th>
              </tr>
            </thead>

            {state.bobot.sub.resolusi.kriteria_bobot.map((d, i) => {
              return (
                <Fragment key={i}>
                  <tbody>
                    <tr>
                      <td>nama sub kriteria</td>
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

        <CardBody>
          <div className="table-responsive text-center">
            <Table className="table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>nama sub kriteria 1</th>
                  <th>nama sub kriteria 2</th>
                  <th>nama sub kriteria 3</th>
                  <th>Jumlah</th>
                  <th>Bobot</th>
                  <th>Max</th>
                </tr>
              </thead>

              {state.bobot.sub.resolusi.normalisasi_bobot_kriteria.map(
                (d, i) => {
                  return (
                    <Fragment key={i}>
                      <tbody>
                        <tr>
                          <td>nama sub kriteria</td>
                          {d.normalisasi.map((b, i1) => {
                            return <td key={i1}>{b}</td>;
                          })}
                          <td>{d.jumlahNormalisasi}</td>
                          <td>{d.bobotNormalisasi}</td>
                          <td>{d.lamdaNormalisasi}</td>
                        </tr>
                      </tbody>
                    </Fragment>
                  );
                }
              )}
            </Table>
          </div>
        </CardBody>

        <CardBody>
          <p>
            <b>CI</b> : {state.bobot.sub.resolusi.consistency_index}
          </p>
          <p>
            <b>CR</b> : {state.bobot.sub.resolusi.consistency_ratio}
          </p>
          <p>
            <b>KONSISTENSI</b> :{" "}
            {state.bobot.sub.resolusi.is_consistent === true && "Konsisten"}
            {state.bobot.sub.resolusi.is_consistent === false &&
              "Tidak Konsisten"}
          </p>
        </CardBody>

        {/* Sub Kriteria Harga */}
        <CardBody>
          <h4>Perhitungan Sub Kriteria Harga</h4>
          <Table className="table-bordered text-center">
            <thead>
              <tr>
                <th></th>
                <th>nama sub kriteria 1</th>
                <th>nama sub kriteria 2</th>
                <th>nama sub kriteria 3</th>
              </tr>
            </thead>

            {state.bobot.sub.harga.kriteria_bobot.map((d, i) => {
              return (
                <Fragment key={i}>
                  <tbody>
                    <tr>
                      <td>nama sub kriteria</td>
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

        <CardBody>
          <div className="table-responsive text-center">
            <Table className="table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>nama sub kriteria 1</th>
                  <th>nama sub kriteria 2</th>
                  <th>nama sub kriteria 3</th>
                  <th>Jumlah</th>
                  <th>Bobot</th>
                  <th>Max</th>
                </tr>
              </thead>

              {state.bobot.sub.harga.normalisasi_bobot_kriteria.map((d, i) => {
                return (
                  <Fragment key={i}>
                    <tbody>
                      <tr>
                        <td>nama sub kriteria</td>
                        {d.normalisasi.map((b, i1) => {
                          return <td key={i1}>{b}</td>;
                        })}
                        <td>{d.jumlahNormalisasi}</td>
                        <td>{d.bobotNormalisasi}</td>
                        <td>{d.lamdaNormalisasi}</td>
                      </tr>
                    </tbody>
                  </Fragment>
                );
              })}
            </Table>
          </div>
        </CardBody>

        <CardBody>
          <p>
            <b>CI</b> : {state.bobot.sub.harga.consistency_index}
          </p>
          <p>
            <b>CR</b> : {state.bobot.sub.harga.consistency_ratio}
          </p>
          <p>
            <b>KONSISTENSI</b> :{" "}
            {state.bobot.sub.harga.is_consistent === true && "Konsisten"}
            {state.bobot.sub.harga.is_consistent === false && "Tidak Konsisten"}
          </p>
        </CardBody>

        {/* Sub Kriteria Fitur */}
        <CardBody>
          <h4>Perhitungan Sub Kriteria Fitur</h4>
          <Table className="table-bordered text-center">
            <thead>
              <tr>
                <th></th>
                <th>nama sub kriteria 1</th>
                <th>nama sub kriteria 2</th>
                <th>nama sub kriteria 3</th>
              </tr>
            </thead>

            {state.bobot.sub.fitur.kriteria_bobot.map((d, i) => {
              return (
                <Fragment key={i}>
                  <tbody>
                    <tr>
                      <td>nama sub kriteria</td>
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

        <CardBody>
          <div className="table-responsive text-center">
            <Table className="table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>nama sub kriteria 1</th>
                  <th>nama sub kriteria 2</th>
                  <th>nama sub kriteria 3</th>
                  <th>Jumlah</th>
                  <th>Bobot</th>
                  <th>Max</th>
                </tr>
              </thead>

              {state.bobot.sub.fitur.normalisasi_bobot_kriteria.map((d, i) => {
                return (
                  <Fragment key={i}>
                    <tbody>
                      <tr>
                        <td>nama sub kriteria</td>
                        {d.normalisasi.map((b, i1) => {
                          return <td key={i1}>{b}</td>;
                        })}
                        <td>{d.jumlahNormalisasi}</td>
                        <td>{d.bobotNormalisasi}</td>
                        <td>{d.lamdaNormalisasi}</td>
                      </tr>
                    </tbody>
                  </Fragment>
                );
              })}
            </Table>
          </div>
        </CardBody>

        <CardBody>
          <p>
            <b>CI</b> : {state.bobot.sub.fitur.consistency_index}
          </p>
          <p>
            <b>CR</b> : {state.bobot.sub.fitur.consistency_ratio}
          </p>
          <p>
            <b>KONSISTENSI</b> :{" "}
            {state.bobot.sub.fitur.is_consistent === true && "Konsisten"}
            {state.bobot.sub.fitur.is_consistent === false && "Tidak Konsisten"}
          </p>
        </CardBody>

        {/* Sub Kriteria Iso */}
        <CardBody>
          <h4>Perhitungan Sub Kriteria Iso</h4>
          <Table className="table-bordered text-center">
            <thead>
              <tr>
                <th></th>
                <th>nama sub kriteria 1</th>
                <th>nama sub kriteria 2</th>
                <th>nama sub kriteria 3</th>
              </tr>
            </thead>

            {state.bobot.sub.iso.kriteria_bobot.map((d, i) => {
              return (
                <Fragment key={i}>
                  <tbody>
                    <tr>
                      <td>nama sub kriteria</td>
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

        <CardBody>
          <div className="table-responsive text-center">
            <Table className="table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>nama sub kriteria 1</th>
                  <th>nama sub kriteria 2</th>
                  <th>nama sub kriteria 3</th>
                  <th>Jumlah</th>
                  <th>Bobot</th>
                  <th>Max</th>
                </tr>
              </thead>

              {state.bobot.sub.iso.normalisasi_bobot_kriteria.map((d, i) => {
                return (
                  <Fragment key={i}>
                    <tbody>
                      <tr>
                        <td>nama sub kriteria</td>
                        {d.normalisasi.map((b, i1) => {
                          return <td key={i1}>{b}</td>;
                        })}
                        <td>{d.jumlahNormalisasi}</td>
                        <td>{d.bobotNormalisasi}</td>
                        <td>{d.lamdaNormalisasi}</td>
                      </tr>
                    </tbody>
                  </Fragment>
                );
              })}
            </Table>
          </div>
        </CardBody>

        <CardBody>
          <p>
            <b>CI</b> : {state.bobot.sub.iso.consistency_index}
          </p>
          <p>
            <b>CR</b> : {state.bobot.sub.iso.consistency_ratio}
          </p>
          <p>
            <b>KONSISTENSI</b> :{" "}
            {state.bobot.sub.iso.is_consistent === true && "Konsisten"}
            {state.bobot.sub.iso.is_consistent === false && "Tidak Konsisten"}
          </p>
        </CardBody>

        <Col md="12" className="mb-3">
          <Link to="/bobot" className="btn btn-warning">
            Kembali
          </Link>
        </Col>
      </Card>
    </div>
  );
};

export default HasilPerhitunganBobotKriteria;
