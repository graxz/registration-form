import React, { useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import RegisterValidates from '../../context/validates'
import useErrors from '../../hooks/useErrors'

function UserData ({ send }) {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const validate = useContext(RegisterValidates)

  const [error, validateFields, canSend] = useErrors(validate);

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        if(canSend()) {
          return send({ email, password });
        }
      }}
    >
      <TextField 
        value={email}
        onChange={(e) => 
          setEmail(e.target.value)
        }
        id="email" 
        label="email"
        name="email"
        type="email" 
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />

      <TextField 
        value={password}
        onChange={(e) => 
          setPassword(e.target.value)
        }
        onBlur={validateFields}
        error={!error.password.valido}
        helperText={error.password.text}
        id="password" 
        label="password"
        name="password"
        type="password" 
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />

      <Button variant="contained" color="primary" type="submit">Proximo</Button>
    </form>
  );
}

export default UserData;