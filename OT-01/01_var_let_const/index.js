//exemplo var
function exemploVar() {
    if (true) {
        var x = 10;
        console.log(x); // Saída: 10
    }
    console.log(x); // Saída: 10 (a variável x é acessível aqui também)
}

exemploVar();

//exemplo let
function exemploLet() {
    if (true) {
        let y = 20;
        console.log(y); // Saída: 20
    }
    console.log(y); // Erro: y não está definido
}

exemploLet();

//exemplo const
function exemploConst() {
    if (true) {
        const z = 30;
        console.log(z); // Saída: 30
    }
    console.log(z); // Erro: z não está definido
}

exemploConst();

// Nota: Embora const proíba a reatribuição da variável, isso não significa que o valor da variável é imutável.
//  Se a variável for um objeto ou um array, seus conteúdos podem ser alterados.
const obj = { nome: 'João' };
obj.nome = 'Maria'; // Isso é permitido
console.log(obj.nome); // Saída: Maria

// obj = { nome: 'Pedro' }; // Erro: Assignment to constant variable

// Em resumo:

// var tem um escopo de função ou global e pode ser redeclarado e reatribuído.
// let tem um escopo de bloco e pode ser reatribuído, mas não redeclarado no mesmo bloco.
// const tem um escopo de bloco e não pode ser reatribuído ou redeclarado no mesmo bloco,
//  mas seu conteúdo pode ser alterado se for um objeto ou array.