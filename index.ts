import * as readline from 'readline';
import Mensagens from './mensagens';
import Multiplicacao from './multiplicacao';
import Soma from './soma';
import Subtracao from './subtracao';

let mensagens = new Mensagens()

let iniciar = () => {
    let leitor = readline.CreateInterface({
        input: process.stdin,
        output: process.stdout
    });