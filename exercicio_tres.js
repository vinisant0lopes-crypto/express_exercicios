async function exercicio_tres(peso, altura) {
  const pesoNum = parseFloat(peso);
  const alturaNum = parseFloat(altura);

  if (Number.isNaN(pesoNum) || Number.isNaN(alturaNum) || alturaNum <= 0) {
    throw new Error("Peso e/ou altura inválidos");
  }

  const imc = pesoNum / (alturaNum * alturaNum);
  let classificacao;
  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Peso normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else classificacao = "Obesidade";

  return { imc: Number(imc.toFixed(2)), classificacao };
}

export { exercicio_tres };