const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    gerarSenha();
}

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?$#&';
gerarSenha();


function gerarSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMa
    }
    let senha = '';
    for (let i = 0; i <tamanhoSenha;i++){    
    let numeroAleatorio =Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}

