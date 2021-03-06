
import { Form, Tab, Sonnet, Tabs, Button, Alert } from "react-bootstrap";

import Game from "./pages/Game";
import Game2 from "./pages/Game";
import Game3 from "./pages/Game";
import Game4 from "./pages/Game";
import Result from "./pages/Result";
import TheEnd from "./components/TheEnd";
import Welcome from "./components/Welcome";
import FormGeneral from "./pages/FormGeneral/FormGeneral";
import FormPreGame from "./pages/FormPreGame/FormPreGame";
import FormPostGame from "./pages/FormPostGame/FormPostGame";
import Instruction from "./pages/Instruction";
import Role from "./pages/Role";

import Norman1 from "./pages/GameNorman/Norman1"
import Norman2 from "./pages/GameNorman/Norman2"
import Norman3 from "./pages/GameNorman/Norman3"
import Norman4 from "./pages/GameNorman/Norman4"
import Norman5 from "./pages/GameNorman/Norman5"

import Erica1 from "./pages/GameErica/Erica1"
import Erica2 from "./pages/GameErica/Erica2"
import Erica3 from "./pages/GameErica/Erica3"
import Erica4 from "./pages/GameErica/Erica4"
import Erica5 from "./pages/GameErica/Erica5"

import Pete1 from "./pages/GamePete/Pete1"
import Pete2 from "./pages/GamePete/Pete2"
import Pete3 from "./pages/GamePete/Pete3"
import Pete4 from "./pages/GamePete/Pete4"
import Pete5 from "./pages/GamePete/Pete5"

import Input from "./components/Input"
import RadioQuestionForm from "./components/Radio"

import Home from './pages/Home'
import Login from './pages/Login'

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
        <Route path="/" element={<Login />} />
        <Route path="/formgeneral" element={<FormGeneral />} />
        <Route path="/formpregame" element={<FormPreGame />} />
        <Route path="/formpostgame" element={<FormPostGame />} />
        <Route path="/form" element={
          <Form onSubmit={onSubmit}
          className="section">
            {fieldGroups[step]}
            <Buttons />
          </Form>
        } />
        <Route path="/norman1" element={<Norman1 />} />
        <Route path="/norman2" element={<Norman2 />} />
        <Route path="/norman3" element={<Norman3 />} />
        <Route path="/norman4" element={<Norman4 />} />
        <Route path="/norman5" element={<Norman5 />} />

        <Route path="/Pete1" element={<Pete1 />} />
        <Route path="/Pete2" element={<Pete2 />} />
        <Route path="/Pete3" element={<Pete3 />} />
        <Route path="/Pete4" element={<Pete4 />} />
        <Route path="/Pete5" element={<Pete5 />} />

        <Route path="/Erica1" element={<Erica1 />} />
        <Route path="/Erica2" element={<Erica2 />} />
        <Route path="/Erica3" element={<Erica3 />} />
        <Route path="/Erica4" element={<Erica4 />} />
        <Route path="/Erica5" element={<Erica5 />} />
        
        <Route path="/game" element={ <Game />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
        <Route path="/game4" element={<Game4 />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/result" element={<Result />} />
        <Route path="/theend" element={<TheEnd />} />
        <Route path="/instruction" element={<Instruction />} />          
        <Route path="/role" element={<Role />} />          
      </Routes>
    </Router>
  );
}
