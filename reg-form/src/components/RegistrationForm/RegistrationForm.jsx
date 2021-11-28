import React, { useState, useEffect } from "react";
import PersonalDataForm from "../PersonalData/PersonalData";
import UserData from "../UserData/UserData"
import AddressData from "../AddressData/AddressData";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function RegistrationForm ({ send }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    if (step === arrForms.length - 1) {
      send(data);
    }
  })

  const arrForms = [
    <UserData send={colectData} />,
    <PersonalDataForm send={colectData} />,
    <AddressData send={colectData} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>
  ]

  const arrNameSteps = [
    "Dados do usuário",
    "Dados pessoais",
    "Endereço",
    "Finalizar"
  ]

  function nextStep () {
    setStep(step + 1);
  }

  function colectData(colectDataForms) {
    setData({ ...data, ...colectDataForms });
    nextStep();
  }

  return (
    <>
      <Stepper activeStep={step}>
          {arrNameSteps.map((form, index) => {
            return (
              <Step key={index}>
                <StepLabel>
                  {form}
                </StepLabel>
              </Step>
            )
          })}
      </Stepper>
      {
        arrForms[step]
      }
    </>
  );
}

export default RegistrationForm;