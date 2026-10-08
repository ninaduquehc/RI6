import * as readline from 'readline';
import Calculo from './operações/calculo';
import Soma from './operações/soma';
import Subtracao from './operações/subtracao';
import Multiplicacao from './operações/multiplicacao';
import Divisao from './operações/divisao';
import Potenciacao from './operações/potenciacao';
import Radiciacao from './operações/radiciacao';
import Bhaskara from './operações/bhaskara';
import Mensagens from './mensagens';

let leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let perguntarContinuar = () => {
    leitor.question('\n1 - Fazer outro cálculo\n0 - Sair\nEscolha: ', (resposta) => {
        if (resposta === '1') {
            iniciar();
        } else if (resposta === '0') {
            leitor.close();
        } else {
            console.log('Opção inválida.');
            perguntarContinuar();
        }
    });
}

let resolverBhaskara = () => {
    leitor.question('Digite a, b e c (separados por espaço): ', (valor) => {
        let numeros = valor.trim().split(/\s+/).map(Number);

        if (numeros.length !== 3 || numeros.some(isNaN)) {
            console.log('Entrada inválida. Digite exatamente três números.');
            iniciar();
            return;
        }

        let [a, b, c] = numeros as [number, number, number];

        try {
            let raizes = new Bhaskara().calcular(a, b, c);

            if (raizes.length === 0) {
                console.log('Não há raízes reais (delta negativo).');
            } else {
                console.log(`Raízes: ${raizes.join(' e ')}`);
            }
        } catch (erro) {
            console.log((erro as Error).message);
        }
        perguntarContinuar();
    });
}
let mensagens = new Mensagens();

let iniciar = () => {
    mensagens.exibirMenu();

    leitor.question('Escolha uma opção: ', (opcao) => {
        let calculo: Calculo;

        switch (opcao) {
            case '1': calculo = new Soma(); break;
            case '2': calculo = new Subtracao(); break;
            case '3': calculo = new Multiplicacao(); break;
            case '4': calculo = new Divisao(); break;
            case '5': calculo = new Potenciacao(); break;
            case '6': calculo = new Radiciacao(); break;
            case '7':
                resolverBhaskara();
                return;
            case '0':
                leitor.close();
                return;
            default:
                console.log('Opção inválida.');
                iniciar();
                return;
        }

        leitor.question('Digite os dois números (separados por espaço): ', (valor) => {
            let numeros = valor.trim().split(/\s+/).map(Number);

            if (numeros.length !== 2 || numeros.some(isNaN)) {
                console.log('Entrada inválida. Digite exatamente dois números (use ponto para decimais).');
                iniciar();
                return;
            }

            let numero1 = numeros[0] as number;
            let numero2 = numeros[1] as number;

            let resultado = calculo.calcular(numero1, numero2);

            if (!Number.isFinite(resultado)) {
                console.log('Não foi possível calcular (divisão por zero ou resultado inválido).');
            } else {
                console.log(`Resultado da operação: ${resultado}`);
            }
            perguntarContinuar();
        });
    });
}

iniciar();