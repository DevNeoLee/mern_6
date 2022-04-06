
import { Form, Tab, Sonnet, Tabs, Button, Alert } from "react-bootstrap";

import Game from "./pages/Game";
import Game2 from "./pages/Game";
import Game3 from "./pages/Game";
import Game4 from "./pages/Game";
import Result from "./pages/Result";
import TheEnd from "./components/TheEnd";
import Instruction from "./components/Instruction";
import Welcome from "./components/Welcome";

import Home from './pages/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import { useState } from "react";

export default function App({ ...props }) {
  const [step, setStep] = useState(0);

  const onSubmit = async (content) => {
    console.log("content: ", content);

    const response = await fetch(
      "http://localhost:3000/api/forms/CanadaCustomsInvoice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ canadaCustomsInvoice: content }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => console.log("Error: ", err));

    console.log("Data Created on DB: ", response);
  };

  const Input = ({ label, name, required, type, placeholder, value }) => (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        id={name}
        value={value}
      />
    </Form.Group>
  );

  const ShipperFields = () => (
    <section>
      <h3>{step + 1}. SHIPPER</h3>
      <Input name="formType" type="hidden" value="Canada Customs Invoice" />
      <Input
        label="NAME"
        name="shipperName"
        required={{ required: true, minLength: 3 }}
        type="text"
        step={step + 1}
      />
      <Input
        label="CONTACT"
        name="shipperContact"
        required={{ required: true, minLength: 3 }}
        type="text"
        step={step + 1}
      />
      <Input
        label="PHONE"
        name="shipperPhone"
        required={{ required: true, minLength: 3 }}
        type="tel"
        step={step + 1}
      />
      <Input
        label="ADDRESS"
        name="shipperAddress"
        required={{ required: true, minLength: 3 }}
        type="text"
        step={step + 1}
      />
    </section>
  );

  const ExporterFields = () => (
    <div>
      <section>
        <h3>{step + 1}. EXPORTER - IF OTHER THAN SHIPPER</h3>
        <Input
          label="NAME"
          name="exporterName"
          required
          type="text"
          step={step + 1}
        />
        <Input
          label="CONTACT"
          name="exporterContact"
          equired
          type="text"
          step={step + 1}
        />
        <Input
          label="PHONE"
          name="exporterPhone"
          required
          type="tel"
          step={step + 1}
        />
        <Input
          label="ADDRESS"
          name="exporterAddress"
          required
          type="text"
          step={step + 1}
        />
      </section>
      <section>
        <h3>OTHER REF. NOS.</h3>
        <Input
          label="OTHER REF. NOS."
          name="otherRefNosName"
          required
          type="number"
          step={step + 1}
        />
      </section>
    </div>
  );

  const ConsigneeFields = () => (
    <section>
      <h3>{step + 1}. CONSIGNEE / SHIP TO PARTY NAME</h3>
      <Input
        label="PHONE"
        name="consigneePhone"
        required
        type="tel"
        placeholder=""
        step={step + 1}
      />
      <Input
        label="ADDRESS"
        name="consigneeAddress"
        required
        type="text"
        placeholder="Street name, avenue, etc..."
        step={step + 1}
      />
      <Input
        label="IRS Number / EIN Number / Social Security Number - *mandatory for U.S. clearance"
        required
        name="consigneeIRS"
        type="number"
        placeholder=""
        step={step + 1}
      />
    </section>
  );

  const BuyerFields = () => (
    <section>
      <h3>{step + 1}. BUYER - IF OTHER THAN CONSIGNEE / SHIP TO PARTY</h3>
      <Input
        label="Phone"
        name="buyerPhone"
        required
        type="tel"
        placeholder=""
        step={step + 1}
      />
      <Input
        label="Address"
        name="buyerAddress"
        required
        type="text"
        placeholder="Street name, avenue, etc..."
        step={step + 1}
      />
      <Input
        label="IRS NUMBER / EIN NUMBER / SOCIAL SECURITY NUMBER - *mandatory for U.S. clearance"
        required
        type="number"
        name="buyerIRS"
        placeholder=""
        step={step + 1}
      />
    </section>
  );

  const GoodsFields = () => (
    <section>
      <h3>{step + 1}. GOODS</h3>
      <Input
        label="COUNTRY OF MANUFACTURE OR GROWTH"
        name="countryManufactured"
        required
        type="text"
        placeholder=""
        step={step + 1}
      />
      <Input
        label="HS TARIFF"
        name="hsTariff"
        required
        type="text"
        placeholder=""
        step={step + 1}
      />
      <Input
        label="NO OF PACKAGES"
        name="numberOfPackage"
        required
        type="number"
        placeholder=""
        step={step + 1}
      />
      <Input
        label="DESCRIPTION OF GOODS GIVE SUFFICIENT DETAIL TO PERMIT CLASSIFICATION ACCORDING TO TARIFF SCHEDULE OF THE U.S."
        name="descritionOfGoods"
        required
        type="text"
        placeholder=""
        step={step + 1}
      />
      <Input
        label="WEIGHT"
        name="weight"
        required
        type="number"
        placeholder=""
        step={step + 1}
      />
      <Input
        label="UNIT QUANTITY"
        name="units"
        required
        type="text"
        placeholder=""
        step={step + 1}
      />
      <Input
        label="UNIT PRICE"
        name="unitPrice"
        required
        type="number"
        placeholder=""
        step={step + 1}
      />
      <Input
        label="TOTAL"
        name="total"
        required
        type="number"
        placeholder=""
        step={step + 1}
      />
      {/* <div className="form-group col-sm-2">
        <button
          className="btn btn-link"
          type="button"
          disabled={index === 0}
          onClick={() => handleRemoveFields(index)}
        >
          -
        </button>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => handleAddFields()}
        >
          +
        </button>
      </div> */}
    </section>
  );

  const Buttons = () => (
    <section >
      {/* {step > 0 && (
        <Button
          type="button"
          onClick={() => {
            setStep(step - 1);
          }}
        >
          BACK
        </Button>
      )} */}
      {step === fieldGroups.length - 1 && (
        <Button type="submit" >
          SUBMIT
        </Button>
      )}
      {step < fieldGroups.length - 1 && (
        <Button
          type="button"
          onClick={() => {
            setStep(step + 1);
          }}
        >
          NEXT
        </Button>
      )}
    </section>
  );

  // const Reference = () =>(
  //   <footer >
  //     {renderMarkers()}
  //   </footer>
  // )

  // function renderMarkers(){
  //   let markers = []
  //   for(let i=0; i < fieldGroups.length; i++)
  //     markers.push(<span key={i} />)
  //   return markers
  // }

  const fieldGroups = [
    <Welcome />,
    <Instruction />,
    <ShipperFields step={step} />,
    <ExporterFields step={step} />,
    <ConsigneeFields step={step} />,
    // <BuyerFields step={step} />,
    // <GoodsFields step={step} />,
    // <ShipperFields step={step} />,
    // <ExporterFields step={step} />,
    // <ConsigneeFields step={step} />,
    <TheEnd />

  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={
          <Form onSubmit={onSubmit}
          className="section">
            {fieldGroups[step]}
            <Buttons />
          </Form>
        } />
        <Route path="/game" element={ <Game />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
        <Route path="/result" element={<Result />} />
        {/* <Route path="/game" element={<Game />} /> */}
      </Routes>
    </Router>
  );
}
