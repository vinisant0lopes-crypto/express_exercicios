import express from 'express';
import { exercicio_um } from "./exercicio_um.js";
import { exercicio_dois } from "./exercicio_dois.js";
import { exercicio_tres } from "./exercicio_tres.js";
import { exercicio_quatro } from "./exercicio_quatro.js";
import { exercicio_cinco } from "./exercicio_cinco.js";
import { exercicio_seis } from "./exercicio_seis.js";
import { exercicio_sete } from "./exercicio_sete.js";
import { exercicio_oito } from "./exercicio_oito.js";


const app = express();
// Configurações para lidar com dados de formulários
app.use(express.urlencoded({ extended: true }));
// Configurações para lidar com dados JSON
app.use(express.json());

app.get('/exercicioUm', async (req, res) => {
    
    const exercicioUm = await exercicio_um();
    res.send(exercicioUm)
})

app.get('/exercicioDois', async (req, res) => {
    
    const exerciciodois = await exercicio_dois();
    res.send(exerciciodois)
})



app.get("/exercicioTres", (req, res) => {
//Send: retorna um formulário HTML para o usuário inserir peso e altura
// lembre que o express utiliza formatos HTML
  res.send(`
    <h1>Calcule seu IMC</h1>
    <form method="POST" action="/exercicioTres">

      <label>Peso (kg): <input name="peso" required /></label><br/>

      <label>Altura (m): <input name="altura" required /></label><br/>

      <button type="submit">Calcular</button>

    </form>

    <h2>Utiliza . para separar casas decimais pois o JavaScript usa o ponto como separador decimal</h2>
  `);
});

// Post: recebe os dados do formulário, chama a função e retorna o resultado formatado
app.post("/exercicioTres", async (req, res) => {
  try {
    //req.body: contém os dados enviados pelo formulário, acessados pelos nomes dos campos (peso e altura)
    //ex: req.body.peso para acessar o valor do campo peso
    //ex2: req.body.altura para acessar o valor do campo altura
    const resultado = await exercicio_tres(req.body.peso, req.body.altura);
    res.send(`
      <p>IMC: ${resultado.imc}</p>
      <p>Classificação: ${resultado.classificacao}</p>
      <a href="/exercicioTres">Fazer outro cálculo</a>
    `);
  } catch (err) {
    res.status(400).send(`<p>Erro: ${err.message}</p><a href="/exercicioTres">Voltar</a>`);
  }
});


app.get("/exercicioQuatro", (req, res) => {
  res.send(`
    <h1>Perguntas sobre gosto</h1>

    <form method="POST" action="/exercicioQuatro">

      <label>Você gosta de sushi? 
        <select name="sushi" required>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </label><br/>

      <label>Você gosta de hamburguer? 
        <select name="hamburguer" required>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </label><br/>

      <button type="submit">Verificar</button>

    </form>
  `);
});

app.post("/exercicioQuatro", async (req, res) => {
  try {
    const resultado = await exercicio_quatro(req.body.sushi, req.body.hamburguer);
    res.send(`
      <p>${resultado}</p>
      <a href="/exercicioQuatro">Tentar novamente</a>
    `);
    // catch: se o usuário inserir um valor diferente de "sim" ou "nao", a função lançará um erro, que será capturado aqui e exibido para o usuário
  } catch (err) {
    res.status(400).send(`<p>Erro: ${err.message}</p><a href="/exercicioQuatro">Voltar</a>`);
  }
});


app.get("/exercicioCinco", (req, res) => {
  res.send(`
    <h1>Calcule idade</h1>
    <form method="POST" action="/exercicioCinco">

      <label>Idade: <input name="idade" required /></label><br/>

      <button type="submit">Inserir</button>

    </form>
  `);
});

app.post("/exercicioCinco", async (req, res) => {
  try {
    const resultado = await exercicio_cinco(req.body.idade);
    res.send(`
      <p>Idade: ${resultado.idade}</p>
      <p>Classificação: ${resultado.classificacao}</p>
      <a href="/exercicioCinco">Repetir</a>
    `);
  } catch (err) {
    res.status(400).send(`<p>Erro: ${err.message}</p><a href="/exercicioCinco">Voltar</a>`);
  }
});


app.get("/exercicioSeis", (req, res) => {
  res.send(`
    <h1>Insira o mes:</h1>
    <form method="POST" action="/exercicioSeis">

      <label>Mes: <input name="mes" required /></label><br/>

      <button type="submit">Inserir</button>

    </form>
  `);
});

app.post("/exercicioSeis", async (req, res) => {
  try {
    const resultado = await exercicio_seis(req.body.mes);
    res.send(`
      <p>mês: ${resultado}</p>
      <a href="/exercicioSeis">Repetir</a>
    `);
  } catch (err) {
    res.status(400).send(`<p>Erro: ${err.message}</p><a href="/exercicioSeis">Voltar</a>`);
  }
});

app.get("/exercicioSete", (req, res) => {
  res.send(`
    <h1>Calculo de Potência</h1>
    <form method="POST" action="/exercicioSete">

      <label>Base: <input name="base" required /></label><br/>

      <label>Elevado: <input name="elevado" required /></label><br/>

      <button type="submit">Calcular</button>

    </form>

    <h2>Utiliza . para separar casas decimais pois o JavaScript usa o ponto como separador decimal</h2>
  `);
});

app.post("/exercicioSete", async (req, res) => {
  try {
    const resultado = await exercicio_sete(req.body.base, req.body.elevado);
    res.send(`
      <p>base: ${resultado.base}</p>
      <p>expoente: ${resultado.elevado}</p>
      <p>resultado: ${resultado.resultado}</p>
      <a href="/exercicioSete">Fazer outro cálculo</a>
    `);
  } catch (err) {
    res.status(400).send(`<p>Erro: ${err.message}</p><a href="/exercicioTres">Voltar</a>`);
  }
});

app.get("/exercicioOito", (req, res) => {
  res.send(`
    <h1>Alterar Vetor</h1>
    <form method="POST" action="/exercicioOito">
      <label>Escolha a ação:
        <select name="manipularVetor" required>
          <option value="exibir">Exibir</option>
          <option value="alterar">Alterar</option>
        </select>
      </label><br/>
      <button type="submit">Enviar</button>
    </form>
  `);
});

app.post("/exercicioOito", async (req, res) => {
  const acao = req.body.manipularVetor;

  if (acao === 'exibir') {
    try {
      const resultado = await exercicio_oito('exibir');
      res.send(`
        <p>Vetor atual: [${resultado.vetor.join(', ')}]</p>
        <a href="/exercicioOito">Voltar</a>
      `);
    } catch (err) {
      res.status(400).send(`<p>Erro: ${err.message}</p><a href="/exercicioOito">Voltar</a>`);
    }
    return;
  }

  if (acao === 'alterar') {
    res.send(`
      <h1>Alterar vetor</h1>

      <form method="POST" action="/exercicioOitoAlterar">
        <label>Posição (0-4): <input name="posicao" required type="number" min="0" max="4" /></label><br/>
        <label>Valor: <input name="valor" required type="number" /></label><br/>
        <button type="submit">Alterar</button>
      </form>
    `);
    return;
  }

  res.status(400).send(`<p>Ação inválida</p><a href="/exercicioOito">Voltar</a>`);
});

app.post("/exercicioOitoAlterar", async (req, res) => {
  try {
    const resultado = await exercicio_oito('alterar', req.body.posicao, req.body.valor);
    res.send(`
      <p>Vetor atualizado: [${resultado.vetor.join(', ')}]</p>

      <p>Alterado na posição ${resultado.posicao} com valor ${resultado.valor}</p>

      <a href="/exercicioOito">Voltar</a>
    `);
  } catch (err) {
    res.status(400).send(`<p>Erro: ${err.message}</p><a href="/exercicioOito">Voltar</a>`);
  }
});

app.get("/objetos", (req, res) => res.json(objetos));





app.listen(3000, () => {
  console.log('Primeiro exercicio: http://localhost:3000/exercicioUm')
  console.log('Segundo exercicio: http://localhost:3000/exercicioDois')
  console.log('Terceiro exercicio: http://localhost:3000/exercicioTres')
  console.log('Quarto exercicio: http://localhost:3000/exercicioQuatro')
  console.log('Quinto exercicio: http://localhost:3000/exercicioCinco')
  console.log('Sexto exercicio: http://localhost:3000/exercicioSeis')
  console.log('Sétimo exercicio: http://localhost:3000/exercicioSete')
  console.log('Oitavo exercicio: http://localhost:3000/exercicioOito')
})