async function exercicio_quatro(gostaSushi, gostaHamburguer) {
  
  const gostaSushiBool = String(gostaSushi).toLowerCase() === 'sim';
  const gostaHamburguerBool = String(gostaHamburguer).toLowerCase() === 'sim';

  if (gostaSushiBool && gostaHamburguerBool) {
    return 'Você gosta de sushi e hamburguer.';
  }

  if (!gostaSushiBool && !gostaHamburguerBool) {
    return 'Você não gosta de sushi nem de hamburguer.';
  }

  return 'Você gosta de um e não do outro.';
}

export { exercicio_quatro };
