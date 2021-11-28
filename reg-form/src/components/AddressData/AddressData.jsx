import React from 'react';
import { TextField, Button } from '@material-ui/core';

function AddressData({ send
 }) {
  const [cep, setCep] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      send({ cep, address, number, state, city });
    }} >
      <TextField 
        value={cep}
        onChange={(e) => 
          setCep(e.target.value)
        }
        id="cep" 
        label="CEP" 
        type="text" 
        variant="outlined"
        margin="normal"
        required
      />
      <TextField 
        value={address}
        onChange={(e) => 
          setAddress(e.target.value)
        }
        id="address" 
        label="Endereço" 
        type="text" 
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField 
        value={number}
        onChange={(e) => 
          setNumber(e.target.value)
        }
        id="number" 
        label="Número" 
        type="text" 
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={state}
        onChange={(e) => 
          setState(e.target.value)
        }
        id="state" 
        label="Estado" 
        type="text" 
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        value={city}
        onChange={(e) => 
          setCity(e.target.value)
        }
        id="city" 
        label="Cidade" 
        type="text" 
        variant="outlined"
        margin="normal"
        required
      />

      <Button variant="contained" color="primary" type="submit" fullWidth>Finalizar Cadastro</Button>

    </form>
  );
}

export default AddressData;