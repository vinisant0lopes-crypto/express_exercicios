
async function exercicio_dois() {

 var valor1 = 10
 var valor2 = 5

 var adicao = valor1 + valor2
 var subtracao = valor1 - valor2
 var multiplicacao = valor1 * valor2
 var divisao = valor1 / valor2





 //return em string formatada
 // express utiliza e retorna formatos HTML (por isso o uso de <br>)
return `
valor base: ${valor1} e ${valor2} <br>
adicao : ${adicao} <br>
subtracao : ${subtracao} <br>
mutiplicacao : ${multiplicacao} <br>
divisao : ${divisao} <br>
`;

/*  return em formato array, pois o normal retorna apenas o ultimo valor inserido (divisao)
 return{
    adicao, 
    subtracao,
    multiplicacao, 
    divisao
 }
*/

}

export { exercicio_dois };