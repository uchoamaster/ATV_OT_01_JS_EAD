// Caracteres Permitidos:

// Os nomes de variáveis podem conter letras (a-z, A-Z), dígitos (0-9), sublinhados (_) e sinais de dólar ($).
// Os nomes de variáveis devem começar com uma letra, sublinhado ou sinal de dólar. Não podem começar com um dígito.
let nome = 'Ana'; // Válido
let _idade = 25; // Válido
let $valor = 100; // Válido
let nome2 = 'Pedro'; // Válido
// let 2nome = 'Maria'; // Inválido


// Palavras Reservadas:

// Não é permitido usar palavras reservadas do JavaScript como nomes de variáveis.
// Exemplos incluem var, let, const, if, while, for, etc.

// let let = 10; // Inválido
// const if = 20; // Inválido

// Case Sensitivity:

// JavaScript é case-sensitive, o que significa que variavel, Variavel e VARIAVEL são considerados nomes distintos.
let idade = 30;
let Idade = 25;
let IDADE = 20;
// Cada uma dessas variáveis é distinta

// Nomes Descritivos:

// Utilize nomes descritivos e significativos para tornar o código mais legível e fácil de entender.
// Evite abreviações excessivas.

let nomeCompleto = 'Carlos Silva'; // Descritivo
let n = 42; // Pouco descritivo

// Convenções de Nomenclatura

// Ccamelase:

// É uma prática comum em JavaScript usar camelCase para variáveis e funções. No camelCase,
// a primeira palavra começa com uma letra minúscula e cada nova palavra começa com uma letra maiúscula.

let nomeUsuario = 'Ana';
function calcularSoma(a, b) {
    return a + b;
}

// snake_case:

// Embora não seja a convenção padrão em JavaScript,
// snake_case (usando sublinhados) pode ser usado em alguns contextos, especialmente em variáveis.

let nome_usuario = 'Ana'; // Menos comum em JavaScript

// UPPER_SNAKE_CASE:

// Usado frequentemente para constantes que não devem mudar.
// Em JavaScript, é comum ver constantes globais ou valores fixos nomeados dessa maneira.

const PI = 3.14;
const MAX_USERS = 100;

// Prefixos e Sufixos:

// Em alguns casos, prefixos e sufixos são usados para indicar o tipo ou a função da variável.
// Por exemplo, variáveis booleanas frequentemente usam prefixos como is, has, ou can.

let isLoggedIn = true;
let hasPermission = false;
let userCount = 25;

// Evite Nomes Ambíguos:

// Evite nomes genéricos como data, info, temp, a menos que sejam muito contextuais e claros no uso.

let clienteNome = 'Carlos'; // Mais claro do que apenas 'nome'

