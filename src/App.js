import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core'

import { FormularioCadastro } from './components/FormularioCadastro'
import { validarCpf, validarSenha } from './models/cadastro'
import { ValidacoesCadastro } from "./contexts/ValidacoesCadastro";

import '@fontsource/roboto';


class App extends Component {
  render() {
    return (
      <Container components="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCpf, senha: validarSenha }}>
          <FormularioCadastro onSubmit={onSubmitForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function onSubmitForm(dados) {
  console.log(dados)
}

export default App;
