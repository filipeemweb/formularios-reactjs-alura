import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro'
import './App.css';
import '@fontsource/roboto';

import { Container, Typography } from '@material-ui/core'

class App extends Component {
  render() {
    return (
      <Container components="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
