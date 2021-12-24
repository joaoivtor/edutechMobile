const palavra = document.getElementById("palavra");
const enviaPalavra = document.getElementById("enviaPalavra");

const resposta = document.getElementById("resposta");
const enviaResposta = document.getElementById("enviaResposta");

function palavraChave(){
    let contador = 0;
    let lista = [];
    
    if(palavra.value.length <= 9){
        while(palavra.value.length > contador){
            lista.push("_");
            
            contador++;
        }
    }else{
        alert("palavra muito grande");
    }
    let tiraVirgula = lista.join(" ");
    palavra.value = tiraVirgula;
}

enviaPalavra.onclick = palavraChave;