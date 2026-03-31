
import inquirer from "inquirer";
import { exercicio_um } from "./exercicio_um.js";
import { exercicio_dois } from "./exercicio_dois.js";
import { exercicio_tres } from "./exercicio_tres.js";
import { exercicio_quatro } from "./exercicio_quatro.js";
import { exercicio_cinco } from "./exercicio_cinco.js";
import { exercicio_seis } from "./exercicio_seis.js";
import { exercicio_sete } from "./exercicio_sete.js";
import { exercicio_oito } from "./exercicio_oito.js";
import { objetos } from "./json.js"

var questions = [
    {
        type: "input",
        name: "valor",
        message: "Digite a case:"
    },
]
const resp = await inquirer.prompt(questions);
var valor = parseInt(resp.valor);


switch (valor) {
    case 1 :
        await exercicio_um();
        break;
    case 2 :
        await exercicio_dois();
        break;
    case 3 :
        await exercicio_tres();
        break;
    case 4 :
        await exercicio_quatro();
        break;
    case 5 :
        await exercicio_cinco();
        break;
    case 6 :
        await exercicio_seis();
        break;
    case 7 :
        await exercicio_sete();
        break;
    case 8 :
        await exercicio_oito();
        break;
    case 9 :
        objetos()
        break;
    default:
        console.log("Valor inválido. Digite um número entre 0 e 7.");
}