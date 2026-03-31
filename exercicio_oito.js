
const vetorBase = [1, 2, 3, 4, 5];

async function exercicio_oito(acao, local, numero) {
  const acaoLower = String(acao || '').trim().toLowerCase();

  if (acaoLower === 'exibir') {
    return {
      acao: 'exibir',
      vetor: [...vetorBase],
    };
  }

  if (acaoLower === 'alterar') {
    const posicao = parseInt(local, 10);
    const valor = parseInt(numero, 10);

    if (Number.isNaN(posicao) || posicao < 0 || posicao >= vetorBase.length) {
      throw new Error('Posição inválida. Informe 0 até 4.');
    }
    if (Number.isNaN(valor)) {
      throw new Error('Número inválido. Informe um valor numérico.');
    }

    const vetorAtualizado = [...vetorBase];
    vetorAtualizado[posicao] = valor;

    return {
      acao: 'alterar',
      vetor: vetorAtualizado,
      posicao,
      valor,
    };
  }

  throw new Error("Ação inválida. Use 'Exibir' ou 'Alterar'.");
}

export { exercicio_oito };

