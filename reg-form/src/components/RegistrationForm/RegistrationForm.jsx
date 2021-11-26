import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

function RegistrationForm ({ send, validateCpf }) {
  const [ name, setName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ cpf, setCpf ] = useState('');
  const [ newsletter, setNewsletter ] = useState(true);
  const [ promote, setPromote ] = useState(false);
  const [ error, setError ] = useState({ 
    cpf: { 
      valido: true, 
      text: "" 
    } 
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      send({
        name,
        lastName,
        cpf,
        newsletter,
        promote
      })
    }}>
      <div className="texts-fields">
        <TextField 
          onChange={(e) => {
            setName(e.target.value)
          }} 
          value={name} 
          id="outlined-basic" 
          margin="normal" 
          label="Nome" 
          variant="outlined" 
          fullWidth
        />

        <TextField
          onChange={(e) => {
            setLastName(e.target.value)
          }}
          value={lastName}
          id="outlined-basic" 
          margin="normal" 
          label="Sobrenome" 
          variant="outlined" 
          fullWidth
        />

        <TextField
          onChange={(e) => {
            if(e.target.value.length <= 11) {
              setCpf(e.target.value)
            }
          }}
          onBlur={(e) => {
            const isValid = validateCpf(e.target.value)
            setError({
              cpf: isValid
            })
          }}
          error={!error.cpf.valido}
          helperText={error.cpf.text}
          value={cpf}
          id="outlined-basic" 
          margin="normal" 
          label="CPF" 
          variant="outlined" 
          fullWidth
        />
      </div>

      <FormControlLabel 
        label="Promoções"
        onChange={(e) => {
          setPromote(e.target.checked)
        }}
        control={
          <Switch 
            checked={promote} 
            name="Promoções" 
            color="primary"
          />
        } 
      />

      <FormControlLabel 
        label="Newsletter"
        onChange={(e) => {
          setNewsletter(e.target.checked)
        }}
        control={
          <Switch 
            checked={newsletter} 
            name="Newsletter" 
            color="primary"
          />
        } 
      />

      <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
    </form>
  );
}

export default RegistrationForm;