
async function exercicio_cinco(idade) {
  const idadeNum = parseInt(idade);

  if (Number.isNaN(idadeNum) || idadeNum <= 0) {
    throw new Error("Idade inválida");
  }

  let classificacao;

  if (idadeNum < 9) {
    classificacao = "Criança";
    } else if (idadeNum < 14) {
      classificacao = "Pré-adolescente";
    } else if (idadeNum < 18) {
      classificacao = "Adolescente";
    } else if (idadeNum < 60) {
      classificacao = "Adulto";
    } else {
      classificacao = "Idoso";
    }

  return {
    idade: idadeNum,
    classificacao
  };
}

export { exercicio_cinco };
