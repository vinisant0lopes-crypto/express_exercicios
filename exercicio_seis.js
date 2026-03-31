// Remove inquirer aqui (será via Express ou chamada direta)
async function exercicio_seis(mes) {
  const mesNum = parseInt(mes);

  if (Number.isNaN(mesNum) || mesNum < 1 || mesNum > 12) {
    throw new Error("Mês inválido");
  }

var classificacao;
  // break não é necessário aqui, pois cada case retorna um valor, encerrando a função. O default lança um erro se o número do mês for inválido.
  //Nota (aqui o retorno é uma string, e não um objeto, então no index deve estar apenas resultado, e não resultado.classificacao)
  switch (mesNum) {
    case 1: return classificacao = "Janeiro";
    case 2: return classificacao = "Fevereiro";
    case 3: return classificacao = "Março";
    case 4: return classificacao = "Abril";
    case 5: return classificacao = "Maio";
    case 6: return classificacao = "Junho";
    case 7: return classificacao = "Julho";
    case 8: return classificacao = "Agosto";
    case 9: return classificacao = "Setembro";
    case 10: return classificacao = "Outubro";
    case 11: return classificacao = "Novembro";
    case 12: return classificacao = "Dezembro";
    default:
      throw new Error("Mês inválido");
  }
}

export { exercicio_seis };