async function exercicio_sete(base, elevado) {
  const baseNum = parseFloat(base);
  const elevadoNum = parseInt(elevado);

  if (Number.isNaN(baseNum) || Number.isNaN(elevadoNum) || elevadoNum < 0) {
    throw new Error("Base e/ou expoente inválido");
  }

  let resultado = 1; // correto para qualquer expoente
  for (let i = 0; i < elevadoNum; i++) {
    resultado = resultado * baseNum;
  }

  return {
    base: baseNum,
    elevado: elevadoNum,
    resultado
  };
}

export { exercicio_sete };