// variaveis

            var b1 = document.getElementById("botao1");
            var b2 = document.getElementById('botao2');
            var b3 = document.getElementById('botao3');
            var b4 = document.getElementById('botao4');
            var b5 = document.getElementById('botao5');
            var b6 = document.getElementById('botao6');
            var b7 = document.getElementById('botao7');
            var b8 = document.getElementById('botao8');
            var b9 = document.getElementById('botao9');
            
            var botaoPlay = document.getElementById("botaoPlay");
            var simbolo = "X";
            var Exibir;
            
            function começa(){
                
                play.style.display = "none"; 
            }
//
            
/*Essas funções mostram que se o botão não tiver nada como valor, e se o simbolo for igual a X; 
    então ele  ponha X como valor do botão e deixa simbolo recebendo O, mas se simbolo for igual a O;
    ele ponha O como valor do botão e deixa simbolo recebendo X, e depois execulto as regras
    para ver se alguma conbinação de vitoria foi atingida*/


            var teste = [b1,b2,b3,b4,b5,b6,b7,b8,b9]


                teste.forEach((elemento)=> {
                    elemento.onclick = function(){
                        if(this.value == ""){

                        if(simbolo == "X"){

                            this.value = "X";
                            simbolo = "O";
                        }else {

                            this.value = "O";
                            simbolo = "X";
                        }
                         regras()

                    }

                    }
                
            })
            
            //  Funções chamadas quando se ganha 
            function limpa(){

                b1.value = "";
                b2.value = "";
                b3.value = "";
                b4.value = "";
                b5.value = "";
                b6.value = "";
                b7.value = "";
                b8.value = "";
                b9.value = "";
            }

            function mostraX(txt){

                Exibir = document.getElementById("caixaX").innerHTML = txt;
            }

            function mostraO(txt){

              Exibir = document.getElementById("caixaO").innerHTML = txt;
            }


// Aqui mostra a caixa de pontos de X e O.
            
            var contadorX = 0
            var contadorO = 0

            function ganhouX(){
                simbolo = "X";

                contadorX++;
                mostraX("<p1> X <br>" + contadorX + "</p1>");
                limpa();

            }

            function ganhouO(){
                contadorO++;
                mostraO("<p2>O <br>  " + contadorO + "</p2>");
                limpa();

            }


// Função que mostra o que acontece quando empata

            function empate(txt){

                simbolo = "X";
                Exibir = document.getElementById("empatou").innerHTML = "<p3>" + txt + "</p3>";
                empatou.style.display = "block"
            }

            function limpaEmpate(){

                limpa();
                Exibir = document.getElementById("empatou").innerHTML = "";
                empatou.style.display = "none";
            }
            

// Regras para Ganhar
            
            var tempo = 100

            function regras(){
                
                //primeira linha
                if(b1.value == "X" && b2.value == "X" && b3.value == "X"){
                    
                    
                    setTimeout(ganhouX, tempo);

                }

                if(b1.value == "O" && b2.value == "O" && b3.value == "O"){
                    
                    setTimeout(ganhouO, tempo);
                }

                //segunda linha
                if(b4.value == "X" && b5.value == "X" && b6.value == "X"){
                    
                    setTimeout(ganhouX, tempo);
                }

                if(b4.value == "O" && b5.value == "O" && b6.value == "O"){
                    
                    setTimeout(ganhouO, tempo);
                }

                //terceira linha
                if(b7.value == "X" && b8.value == "X" && b9.value == "X"){
                    
                    setTimeout(ganhouX, tempo);
                }

                if(b7.value == "O" && b8.value == "O" && b9.value == "O"){
                    
                    setTimeout(ganhouO, tempo);
                }

                //primeira linha
                if(b1.value == "X" && b4.value == "X" && b7.value == "X"){
                    
                    setTimeout(ganhouX, tempo);
                }

                if(b1.value == "O" && b4.value == "O" && b7.value == "O"){
                    
                    setTimeout(ganhouO, tempo);
                }

                //segunda linha
                if(b2.value == "X" && b5.value == "X" && b8.value == "X"){
                    
                    setTimeout(ganhouX, tempo);
                }

                if(b2.value == "O" && b5.value == "O" && b8.value == "O"){
                    
                    setTimeout(ganhouO, tempo);
                }

                //terceira linha
                if(b3.value == "X" && b6.value == "X" && b9.value == "X"){
                    
                    setTimeout(ganhouX, tempo);
                }

                if(b3.value == "O" && b6.value == "O" && b9.value == "O"){
                    
                    setTimeout(ganhouO, tempo);
                }

                //cruzado b1 a b9
                if(b1.value == "X" && b5.value == "X" && b9.value == "X"){
                    
                    setTimeout(ganhouX, tempo);
                }

                if(b1.value == "O" && b5.value == "O" && b9.value == "O"){
                    
                    setTimeout(ganhouO, tempo);
                }

                //cruzado b3 a b7
                if(b3.value == "X" && b5.value == "X" && b7.value == "X"){
                    
                    setTimeout(ganhouX, tempo);
                }
                if(b3.value == "O" && b5.value == "O" && b7.value == "O"){
                    
                    setTimeout(ganhouO, tempo);
                }

                //empate
                if(b1.value !== "" && b2.value !== "" && b3.value !== "" && b4.value !== "" && b5.value !== "" && b6.value !== "" && b7.value !== "" && b8.value !== "" && b9.value !== ""){

                    empate("Empatou!");
                    setTimeout(limpaEmpate, 2000);
                }
                
            }

// Eventos de onclick 

            botaoPlay.onclick = começa;
            // b1.onclick = teste;
            // b2.onclick = teste;
            // b3.onclick = teste;
            // b4.onclick = teste;
            // b5.onclick = teste;
            // b6.onclick = teste;
            // b7.onclick = teste;
            // b8.onclick = teste;
            // b9.onclick = teste;