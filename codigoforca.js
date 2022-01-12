
const biblioteca = ["seleção", "coração", "universal", "avião", "terra", "brasil", "oca", "carro", "orelha",
    "chupeta", "lona", "vida", "motorista", "programador", "televisão", "bicicleta", "praia", "areia", "pastel", "computador",
    "escola", "namorada", "raiva", "criança", "esperança", "boneca", "barro", "abacaxi", "morango", "laranja", "professora",
    "cachorro, trapaça", "ameaça", "nariz", "komby", "queijo", "elefante", "cabelo", "nuvens", "dente", "barriga",
    "ilha", "portão", "ventilador", "medicina", "unha", "pelé","dó","pó","visão"];


let palavras;
let palavraGuardada;
let qtdErros = 0;

//Inicializa o Jogo
function inicio() {

    for (let y = 0; y < 30; y++) {

        let b = document.getElementsByTagName("button");
        b[y].disabled = false;

    }

    //Ambas recebem uma matriz vazia
    palavraGuardada = [];
    palavras = [];
    document.getElementById("btnjogar").innerText = 'Jogar';
    document.getElementById("btnjogar").disabled = true;
    document.getElementById("btnjogar").style.color = "white";
    document.getElementById("btnjogar").style.backgroundColor = "gray"
    document.getElementById("btnjogar").style.borderColor = "gray";

    //Sorteia uma palavra da matriz Biblioteca 
    let numAleatorio = Math.round(Math.random() * biblioteca.length);

    //A palavra sorteada é fracionada em caracteres e colocada na matriz Palavras
    for (let index = 0; index < biblioteca[numAleatorio].length; index++) {
        palavras[index] = biblioteca[numAleatorio].charAt(index);
    }


    for (let ind = 0; ind < palavras.length; ind++) {
        palavraGuardada[ind] = "_";
    }

    document.getElementById("demo").innerHTML = palavraGuardada.join(" ");
    document.getElementById("demo").style.fontSize = "40px";
    document.getElementById("controle").style.display = "inline-block";

}

//Verifica se a letra existe na palavra

function comparar(tecla) {

    //Verifica se a letra existe na palavra
    for (let x = 0; x < palavras.length; x++) {
        // Se existir, coloca a letra no índice correto e desenha novamente a tela
        if (tecla === palavras[x]) {
            palavraGuardada[x] = tecla;
            document.getElementById("demo").innerHTML = palavraGuardada.join(" ");
        }
    }
    if (palavras.join() === palavraGuardada.join()) {
        alert("A palavra é : " + palavras.join(""));
        document.getElementById("btnjogar").disabled = false;
        document.getElementById("btnjogar").style.backgroundColor = "tomato";
        document.getElementById("btnjogar").style.color = "white";
        document.getElementById("btnjogar").style.borderColor = "tomato";
        document.getElementById("btnjogar").innerText = 'Próxima Palavra';

        for (let y = 0; y < 30; y++) {

            let b = document.getElementsByTagName("BUTTON");
            b[y].disabled = true;

        }
    }
}



