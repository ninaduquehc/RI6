# RI6 - Calculadora CLI em TypeScript

Calculadora de linha de comando feita em TypeScript para praticar os conceitos
principais de Programação Orientada a Objetos: **herança**, **polimorfismo** e
**encapsulamento**.

## Funcionalidades

Parte 1 - operações com dois números:

- Soma
- Subtração
- Multiplicação
- Divisão
- Potenciação
- Radiciação

Parte 2 - equação do 2º grau:

- Cálculo das raízes pela fórmula de Bhaskara (três números: a, b e c)

O usuário escolhe a operação por um menu numérico e, depois de cada resultado,
decide se quer fazer outro cálculo ou sair. Entradas inválidas (texto no lugar
de número, quantidade errada de números, e outros)
são tratadas com mensagens de aviso.

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```
npm install
npx ts-node src/calculadora.ts
```

## Exemplo de uso

```
===== CALCULADORA =====
1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
5 - Potenciar
6 - Radiciar
7 - Bhaskara (equação do 2º grau)
0 - Sair

Escolha uma opção: 1
Digite os dois números (separados por espaço): 5 3
Resultado da operação: 8
```

Decimais devem usar ponto (`2.5`), não vírgula.

## Estrutura do projeto

```
src/
├── calculadora.ts      # ponto de entrada: menu e leitura com readline
├── mensagens.ts        # textos exibidos ao usuário
└── operações/
    ├── calculo.ts      # classe abstrata base (contrato das operações)
    ├── soma.ts
    ├── subtracao.ts
    ├── multiplicacao.ts
    ├── divisao.ts
    ├── potenciacao.ts
    ├── radiciacao.ts
    └── bhaskara.ts     # equação do 2º grau (três números)
```

## Conceitos de POO aplicados

- **Herança:** `Soma`, `Subtracao`, `Multiplicacao`, `Divisao`, `Potenciacao` e
  `Radiciacao` estendem a classe abstrata `Calculo`.
- **Polimorfismo:** a calculadora guarda a operação escolhida em uma variável do
  tipo `Calculo` e chama `calcular()`, sem saber qual operação é. Cada classe
  executa a sua própria versão do método.
- **Encapsulamento:** as regras de cada operação ficam dentro da própria classe
  (por exemplo, `Bhaskara` recusa `a = 0` e `Divisao` recusa divisor zero), e
  os detalhes internos ficam como `private`, expondo apenas métodos públicos.

## Tecnologias

- TypeScript
- Node.js (módulo `readline`)
- ts-node