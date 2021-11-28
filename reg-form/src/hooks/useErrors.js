import { useState } from 'react';

function useErrors(validate) {
  const initialState = createInitialState(validate);

  const [ error, setError ] = useState(initialState);

  function validateFields (event) {
    const { name, value } = event.target;
    const newState = { 
      ...error
    }
    newState[name] = validate[name](value)

    setError(newState)
  }

  function canSend () {
    let can = true
    for(let field in error) {
      if(field === 'password') {
        !error[field].valid ? can = false : can = true
      }

      if(field === 'cpf') {
        !error[field].valid ? can = true : can = false
      }

      can = true
    }

    return can
  }

  return [error, validateFields, canSend]
}

function createInitialState(validate) {
  const initialState = {}
  for(let field in validate) {
    initialState[field] = {
      valido: true,
      text: ""
    }
  }

  return initialState
}

export default useErrors;