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

function validatePassword (password) {
  if (password.length < 8) {
    return {
      valid: false,
      text: 'Senha deve conter pelo menos 8 dígitos'
    }
  } else {
    return {
      valid: true,
      text: ''
    }
  }
}

export { validateCpf, validatePassword }