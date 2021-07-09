import React from 'react';

export const ValidacoesCadastro = React.createContext({ cpf: semValidacao, senha: semValidacao });

/* Valores dafault caso o provider de contexto não seja explicitado */
function semValidacao(dados) {
  console.log(dados);
  return { validp: true, texto: '' };
}