import React, { useState, Fragment, useEffect } from "react";
import { Button, Col, Row, FormGroup, Input, Label } from "reactstrap";

const FormRekomendasi = ({ setShowFormCari, dataAlternatif }) => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [idAlternatif, setIdAlternatif] = useState([]);

  useEffect(() => {
    if (dataAlternatif.length <= 1 && idAlternatif.length <= 1) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [dataAlternatif, idAlternatif]);

  const changeALternatif = (e, id) => {
    const clickedAlternatif = idAlternatif.indexOf(id);
    const newStateCheckedAlternatif = [...idAlternatif];
    if (clickedAlternatif === -1) {
      newStateCheckedAlternatif.push(id);
    } else if (clickedAlternatif !== -1) {
      newStateCheckedAlternatif.splice(clickedAlternatif, 1);
    }
    setIdAlternatif(newStateCheckedAlternatif);
  };

  const submit = () => {
    const payload = {
      id: idAlternatif,
    };
    console.log(payload);
    // RekomendasiAlternatif(payload).then((response) => {
    //   const sortBobot = response.bobot.sort((a, b) => b.total - a.total);
    //   setBobot(sortBobot);
    //   setMatrixAhp(response.kriteria.matrix_ahp);
    //   setMatrixFAhp(response.kriteria.matrix_fahp);
    //   setSintetis(response.kriteria.syntetic);
    //   setVector(response.kriteria.vector);
    //   setNormalisasiVector(response.kriteria.normalisasi_vector);
    //   setSubkriteria(response.sub_kriteria);
    //   setShowHasil(true);
    // });
  };

  return (
    <Fragment>
      <Col className="mb-4">
        {dataAlternatif &&
          dataAlternatif.map((data, i) => {
            return (
              <Fragment key={i}>
                <FormGroup check inline>
                  <Input
                    checked={idAlternatif.includes(data._id)}
                    className="form-check-input"
                    type="checkbox"
                    id={`fasilitas-${data._id}`}
                    onChange={(e) => changeALternatif(e, data._id)}
                  />
                  <Label className="form-check-label">{data.merk}</Label>
                </FormGroup>
              </Fragment>
            );
          })}
      </Col>
      <Row>
        <Col md="6" className="text-center">
          <Button color="warning" onClick={() => setShowFormCari(true)}>
            Cari Kamera
          </Button>
        </Col>
        <Col md="6" className="text-center">
          <Button color="primary" disabled={disabledButton} onClick={submit}>
            Rekomendasi
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default FormRekomendasi;
