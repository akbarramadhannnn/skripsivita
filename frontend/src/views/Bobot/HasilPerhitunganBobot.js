import React, { Fragment } from "react";
// import { CardBody, Table, Button } from "reactstrap";

const HasilPerhitunganBobotKriteria = (props) => {
  console.log("props hasil perhitungan bobot", props);
  return (
    <Fragment>
      <h2>Hasil Perhitungan Bobot</h2>
      {/* <CardBody>
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

            {normalisasi.map((d, i) => {
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
          <b>CI</b> : {hasil.ci}
        </p>
        <p>
          <b>CR</b> : {hasil.cr}
        </p>
        <p>
          <b>KONSISTENSI</b> : {hasil.konsisten === true && "Konsisten"}
          {hasil.konsisten === false && "Tidak Konsisten"}
        </p>
      </CardBody>

      <Button color="warning" onClick={klikKembali}>
        Kembali
      </Button> */}
    </Fragment>
  );
};

export default HasilPerhitunganBobotKriteria;
