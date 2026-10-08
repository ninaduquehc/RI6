export default class Mensagens {
    private titulo: string = '===== CALCULADORA =====';
    private opcoes: string[] = [
        '1 - Somar',
        '2 - Subtrair',
        '3 - Multiplicar',
        '4 - Dividir',
        '5 - Potenciar',
        '6 - Radiciar',
        '7 - Bhaskara (equação do 2º grau)',
        '0 - Sair',
    ];

    public exibirMenu(): void {
        console.log(`\n${this.titulo}`);
        this.opcoes.forEach((opcao) => console.log(opcao));
        console.log('');
    }
}