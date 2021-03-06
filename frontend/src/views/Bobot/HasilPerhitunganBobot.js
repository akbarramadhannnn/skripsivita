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
          <h2>Perhitungan Kriteria</h2>
          <div className="table-responsive">
            <h5> - Perbandingan</h5>
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
          </div>
        </CardBody>

        <CardBody>
          <div className="table-responsive">
            <h5> - Bobot Prioritas</h5>
            <Table className="table-bordered text-center">
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
          <h2>Perhitungan Sub Kriteria Sensor</h2>
          <div className="table-responsive">
            <h5> - Perbandingan</h5>
            <Table className="table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>Full Frame</th>
                  <th>APS-C</th>
                  <th>APS-H</th>
                </tr>
              </thead>

              {state.bobot.sub.sensor.kriteria_bobot.map((d, i) => {
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
          </div>
        </CardBody>

        <CardBody>
          <div className="table-responsive">
            <h5> - Bobot Prioritas</h5>
            <Table className="table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>Full Frame</th>
                  <th>APS-C</th>
                  <th>APS-H</th>
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
          <h2>Perhitungan Sub Kriteria Resolusi</h2>
          <div className="table-responsive">
            <h5> - Perbandingan</h5>
            <Table className="table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>TINGGI</th>
                  <th>SEDANG</th>
                  <th>RENDAH</th>
                </tr>
              </thead>

              {state.bobot.sub.resolusi.kriteria_bobot.map((d, i) => {
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
          </div>
        </CardBody>

        <CardBody>
          <div className="table-responsive">
          <h5> - Bobot Prioritas</h5>
            <Table className="table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>TINGGI</th>
                  <th>SEDANG</th>
                  <th>RENDAH</th>
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
          <h2>Perhitungan Sub Kriteria Harga</h2>
          <div className="table-responsive">
            <h5> - Perbandingan</h5>
            <Table className="table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>MAHAL</th>
                  <th>SEDANG</th>
                  <th>MURAH</th>
                </tr>
              </thead>

              {state.bobot.sub.harga.kriteria_bobot.map((d, i) => {
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
          </div>
        </CardBody>

        <CardBody>
          <div className="table-responsive">
            <h5> - Bobot Prioritas</h5>
            <Table className="table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>MAHAL</th>
                  <th>SEDANG</th>
                  <th>MURAH</th>
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
          <h2>Perhitungan Sub Kriteria Fitur</h2>
          <div className="table-responsive">
            <h5> - Perbandingan</h5>
            <Table className="table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>SANGAT LENGKAP</th>
                  <th>LENGKAP</th>
                  <th>TIDAK LENGKAP</th>
                </tr>
              </thead>

              {state.bobot.sub.fitur.kriteria_bobot.map((d, i) => {
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
          </div>
        </CardBody>

        <CardBody>
          <div className="table-responsive">
            <h5> - Bobot Prioritas</h5>
            <Table className="table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>SANGAT LENGKAP</th>
                  <th>LENGKAP</th>
                  <th>TIDAK LENGKAP</th>
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
          <h2>Perhitungan Sub Kriteria Iso</h2>
          <div className="table-responsive">
            <h5> - Perbandingan</h5>
            <Table className="table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>TINGGI</th>
                  <th>SEDANG</th>
                  <th>MURAH</th>
                </tr>
              </thead>

              {state.bobot.sub.iso.kriteria_bobot.map((d, i) => {
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
          </div>
        </CardBody>

        <CardBody>
          <div className="table-responsive">
            <h5> - Bobot Prioritas</h5>
            <Table className="table-bordered text-center">
              <thead>
                <tr>
                  <th></th>
                  <th>TINGGI</th>
                  <th>SEDANG</th>
                  <th>MURAH</th>
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
          </Link>{' '}

          {
            state.bobot.kriteria.is_consistent === true &&
            state.bobot.sub.sensor.is_consistent === true &&
            state.bobot.sub.resolusi.is_consistent === true &&
            state.bobot.sub.harga.is_consistent === true &&
            state.bobot.sub.fitur.is_consistent === true &&
            state.bobot.sub.iso.is_consistent === true && (
              <Link to={`/hasil-perhitungan-fuzzy/${state.bobot.kriteria.id_bobot_kriteria}`} className="btn btn-info">
                Lanjut Fuzzy
              </Link>
            )
          }
        </Col>
      </Card>
    </div>
  );
};

export default HasilPerhitunganBobotKriteria;
