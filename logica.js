function inserir(numero){
    let tela_numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = tela_numero + numero;
}

function limpar(){
    document.getElementById("resultado").innerHTML = "";
}

function apagar(){
    let tela_numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = tela_numero.substring(0, tela_numero.length -1);
}

function calcular(){
    let tela_numero = document.getElementById("resultado").innerHTML;
    if (tela_numero){
        document.getElementById("resultado").innerHTML = eval(tela_numero);
    }
}