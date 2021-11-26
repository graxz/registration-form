import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import './App.css';
import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" >Formulario de cadastro</Typography>
        <RegistrationForm send={sendForm} validCpf={validateCpf} />
      </Container>
      
    )
  }
}

function sendForm (data) {
  console.log(data);
}

function validateCpf (cpf) {
  if (cpf.length !== 11) {
    return {
      valid: false,
      text: 'CPF deve conter 11 dígitos'
    }
  } else {
    return {
      valid: true,
      text: ''
    }
  }
}

export default App;
