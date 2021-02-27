import React, { useState, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import FormCariKamera from "./FormCariKamera";
import FormRekomendasi from "./FormRekomendasi";
import axios from "axios";

const Index = () => {
  const [showFormCari, setShowFormCari] = useState(true);
  const [valueHarga, setValueharga] = useState("");
  const [valueResolusi, setValueResolusi] = useState("");
  const [valueSensor, setValueSensor] = useState("");
  const [valueFitur, setValueFitur] = useState("");
  const [valueIso, setValueIso] = useState("");
  const [disabledButtonCariKamera, setDisabledButtonCariKamera] = useState(
    true
  );
  const [dataAlternatif, setDataAlternatif] = useState([]);

  useEffect(() => {
    if (
      valueHarga === "" ||
      valueResolusi === "" ||
      valueSensor === "" ||
      valueFitur === "" ||
      valueIso === ""
    ) {
      setDisabledButtonCariKamera(true);
    } else {
      setDisabledButtonCariKamera(false);
    }
  }, [valueHarga, valueResolusi, valueSensor, valueFitur, valueIso]);

  const onChangeHari = (e) => {
    const value = e.target.value;
    setValueharga(value);
  };

  const onChangeResolusi = (e) => {
    const value = e.target.value;
    setValueResolusi(value);
  };

  const onChangeSensor = (e) => {
    const value = e.target.value;
    setValueSensor(value);
  };

  const onChangeFitur = (e) => {
    const value = e.target.value;
    setValueFitur(value);
  };

  const onChangeIso = (e) => {
    const value = e.target.value;
    setValueIso(value);
  };

  const klikCariKamera = () => {
    const payload = {
      harga: valueHarga,
      resolusi: valueResolusi,
      sensor: valueSensor,
      fitur: valueFitur,
      iso: valueIso,
    };
    setShowFormCari(false);
    axios
      .post("http://localhost:8080/rekomendasi/cari", payload)
      .then((response) => {
        setDataAlternatif(response.data.data);
      });
  };

  return (
    <div className="animated fadeIn">
      <Card>
        <CardBody>
          {showFormCari && (
            <FormCariKamera
              valueHarga={valueHarga}
              valueResolusi={valueResolusi}
              valueSensor={valueSensor}
              valueFitur={valueFitur}
              valueIso={valueIso}
              onChangeHari={onChangeHari}
              onChangeResolusi={onChangeResolusi}
              onChangeSensor={onChangeSensor}
              onChangeFitur={onChangeFitur}
              onChangeIso={onChangeIso}
              klikCariKamera={klikCariKamera}
              disabledButtonCariKamera={disabledButtonCariKamera}
            />
          )}

          {!showFormCari && (
            <FormRekomendasi
              setShowFormCari={setShowFormCari}
              dataAlternatif={dataAlternatif}
            />
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Index;
