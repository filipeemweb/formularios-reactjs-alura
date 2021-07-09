import React, { useEffect, useState } from "react";

import { Stepper, Typography, Step, StepLabel } from "@material-ui/core";

import { DadosPessoais } from "../DadosPessoais";
import { DadosUsuario } from "../DadosUsuario";
import { DadosEntrega } from "../DadosEntrega";

export function FormularioCadastro({ onSubmit }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetado, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length) {
      onSubmit(dadosColetado);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>,
  ];

  function coletarDados(dados) {
    setDados({ ...dadosColetado, ...dados });
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}
