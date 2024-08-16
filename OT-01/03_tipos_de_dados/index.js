// Os tipos primitivos são dados que não são objetos e têm um valor simples. 
// Em JavaScript, os tipos primitivos incluem:

// string:
// Representa texto. 
// Strings podem ser delimitadas por aspas simples ('), aspas duplas ("), ou crase (`) para templates literais.

let nome = 'João';
let mensagem = "Olá, mundo!";
let saudacao = `Bom dia, ${nome}`;

// number:
// Representa números, tanto inteiros quanto de ponto flutuante. JavaScript não diferencia entre inteiros e floats.

let idade = 30;
let preco = 19.99;
let soma = 10 + 5;

// boolean:
// Representa um valor verdadeiro ou falso.

let estaChovendo = true;
let temSol = false;

// undefined:
// Representa uma variável que foi declarada mas ainda não foi atribuída um valor.

let a;
console.log(a); // Saída: undefined

// null:
// Representa a ausência intencional de valor ou objeto. É um valor atribuído explicitamente.
let pessoa = null;

// symbol (ES6):
// Representa um identificador único e imutável, usado para propriedades de objetos.
// É útil para evitar colisões de nomes de propriedades.
const meuSimbolo = Symbol('descricao');
let objeto = {
    [meuSimbolo]: 'valor'
};

// bigint (ES11):
// Representa números inteiros que são maiores do que Number.
// MAX_SAFE_INTEGER. É útil para cálculos com grandes números inteiros.
const grandeNumero = 1234567890123456789012345678901234567890n;


// Tipos de Referência
// Os tipos de referência são mais complexos e armazenam referências para valores,
// ao invés dos próprios valores. Eles incluem:

// object:
// Representa coleções de pares chave-valor.
// Objetos podem conter qualquer combinação de tipos primitivos e outros objetos.
let pessoa = {
    nome: 'Maria',
    idade: 25,
    saudacao: function() {
        return `Olá, meu nome é ${this.nome}`;
    }
};

// array:
// Um tipo especial de objeto usado para armazenar listas de valores. Arrays são indexados numericamente.
let frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas[1]); // Saída: banana

// function:
// Funções são objetos de primeira classe em JavaScript,
// o que significa que podem ser atribuídas a variáveis,
// passadas como argumentos e retornadas de outras funções.

function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3)); // Saída: 8

// date:
// O tipo Date é usado para trabalhar com datas e horas.
let agora = new Date();
console.log(agora); // Saída: data e hora atuais

// regexp:
// O tipo RegExp é usado para trabalhar com expressões regulares,
// úteis para correspondência e manipulação de strings
let regex = /abc/;
console.log(regex.test('abcdef')); // Saída: true

// Conversão de Tipos
// JavaScript permite conversão entre tipos, o que pode ser feito implicitamente ou explicitamente.

// Conversão Implícita:
let resultado = '5' + 1; // '51' (string)
let soma = '5' - 1; // 4 (number)

// Conversão Explícita:
let numeroString = '123';
let numero = Number(numeroString); // Conversão para número
let texto = String(numero); // Conversão para string

