import * as readline from 'readline';
import Calculo from './operações/calculo';
import Soma from './operações/soma';
import Subtracao from './operações/subtracao';
import Multiplicacao from './operações/multiplicacao';
import Divisao from './operações/divisao';
import Potenciacao from './operações/potenciacao';
import Radiciacao from './operações/radiciacao';
import Bhaskara from './operações/bhaskara';

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question('Quais são seus números e operação desejada?\n', (valor) => {
        let instrucoes = valor.split(' ');
        let numero1 = Number(instrucoes[0]);
        let numero2 = Number(instrucoes[1]);
        let operacao = instrucoes[2]
        if (instrucoes.length == 1) {
            operacao = instrucoes[0]
        }
        console.log(`Estas foram suas instruções: ${instrucoes}\n`);

        let calculo: Calculo;

        switch (operacao) {
            case 'Somar':
                calculo = new Soma()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;
            case 'Subtrair':
                calculo = new Subtracao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;
            case 'Multiplicar':
                calculo = new Multiplicacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;
            case 'Dividir':
                calculo = new Divisao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;
            case 'Potenciar':
                calculo = new Potenciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;
            case 'Radiciar':
                calculo = new Radiciacao()
                console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`)
                break;
            case 'Sair':
                leitor.close();
                break;
            default:
                console.log('Operação não existe.\n');
                break;
        }
    });
}

iniciar();