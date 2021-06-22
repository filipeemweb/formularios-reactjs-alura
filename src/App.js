import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro'
import '@fontsource/roboto';

import { Container, Typography } from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <Container components="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro onSubmit={onSubmitForm} validarCpf={validarCpf} />
      </Container>
    );
  }
}

function onSubmitForm(dados) {
  console.log(dados)
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O CPF deve ter 11 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export default App;
