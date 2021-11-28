import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';
import RegisterValidates from '../../context/validates'
import useErrors from '../../hooks/useErrors'

function PersonalDataForm ({ send }) {
  const [ name, setName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ cpf, setCpf ] = useState('');
  const [ newsletter, setNewsletter ] = useState(true);
  const [ promote, setPromote ] = useState(false);

  const validate = useContext(RegisterValidates)

  const [error, validateFields, canSend] = useErrors(validate);

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if(canSend()) {
        send({
          name,
          lastName,
          cpf,
          newsletter,
          promote
        })
      }
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
          name="name"
          variant="outlined" 
          fullWidth
          required
        />

        <TextField
          onChange={(e) => {
            setLastName(e.target.value)
          }}
          value={lastName}
          id="outlined-basic" 
          margin="normal"
          name="lastName"
          label="Sobrenome" 
          variant="outlined" 
          fullWidth
          required
        />

        <TextField
          onChange={(e) => {
            if(e.target.value.length <= 11) {
              setCpf(e.target.value)
            }
          }}
          name="cpf"
          onBlur={validateFields}
          error={!error.cpf.valido}
          helperText={error.cpf.text}
          value={cpf}
          id="outlined-basic" 
          margin="normal" 
          label="CPF" 
          variant="outlined" 
          fullWidth
          required
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

      <Button variant="contained" color="primary" type="submit">Proximo</Button>
    </form>
  );
}

export default PersonalDataForm;