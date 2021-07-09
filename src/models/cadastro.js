function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O CPF deve ter 11 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 12) {
    return { valido: false, texto: "A senha deve ter entre 4 e 12 dígitos." }
  } else {
    return { valido: true, texto: "" }
  }
}

export { validarCpf, validarSenha }