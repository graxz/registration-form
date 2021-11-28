import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import './App.css';
import { Container, Typography } from '@material-ui/core';
import { validatePassword, validateCpf } from './models/register'
import RegisterValidates from './context/validates'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h3" >Formulario de cadastro</Typography>
        <RegisterValidates.Provider value={{ cpf: validateCpf, password: validatePassword }} >
          <RegistrationForm send={sendForm} />
        </RegisterValidates.Provider>
      </Container>
    )
  }
}

function sendForm (data) {
  console.log(data);
}



export default App;
