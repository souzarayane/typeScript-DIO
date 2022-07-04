// Desafio 01 - Como podemos rodar isso em um arquivo .ts sem causar erros? 

//Pode ser dessa forma:
let employee = {
    code: 10,
    name: 'John'
};

//Ou pode ser também da forma abaixo:
let employee02: {code: number; name: String} = {
    code: 10,
    name: 'John'
}

//Outra forma de resolver é criando uma interface
interface employee {
    code: number,
    name: string
}

let employee03: employee = {
    code: 10,
    name: 'John'
}

//Criando um objeto
const employeeObj = {} as employee;
employeeObj.code = 10;
employeeObj.name = 'João';

const funcionarioObj2: employee = {
    code: 10,
    name: 'João'
}

//Desafio 02 - Como podemos melhorar o esse código usando TS? 


enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}

//Desafio 03 - O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
export {} 

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });

    botaoLimpar.addEventListener('click', () => { 
        limparSaldo();
    });
}