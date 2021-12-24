// chamando os botão
const palavra = document.getElementById("palavra");
const enviaPalavra = document.getElementById("enviaPalavra");

const resposta = document.getElementById("resposta");
const enviaResposta = document.getElementById("enviaResposta");



function criaLista(n){
    let lista = palavra.value;
   
    return lista.substr(n,1)
}






// essa função serve para fazer a palavra virar traços
function palavraChave() {

    console.log(criaLista())


    let contador = 0;
    let lista = [];
    //tamanho da palavra
    if (palavra.value.length <= 15) {
        //traços
        while (palavra.value.length > contador) {
            lista.push("_");
            
            contador++;
        }
        //<><>
    } else {
        alert("palavra muito grande");
    }
    palavra.type = "text";
    //aqui tira a virgula do array
    let tiraVirgula = lista.join(" ");
    palavra.value = tiraVirgula;
    //<>
}

function verificaLetra(){
    
}



enviaPalavra.onclick = palavraChave;