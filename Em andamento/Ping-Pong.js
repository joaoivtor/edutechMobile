const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");




	function personagem() {
		pincel.fillStyle = "blue";
		pincel.fillRect(px,py,tamanhoX,tamanhoY);
	}

	function bola(){
		pincel.fillStyle = "blue";
		pincel.beginPath()
		pincel.arc(x,y,raio,0,2*Math.PI);
		pincel.fill()
	}



	function repete() {
		pincel.clearRect(0,0,tela.width,tela.height)
		pincel.fillStyle = "lightGray";
		pincel.fillRect(0,0,tela.width,tela.height);
		moverBola();
		bola();
		personagem();
		moverP();
		
		console.log(tempo);
		
		colisao()
		


	}

	
	var acertos = 0
	var tempo = 10000
	var raio = 15;
	var x = 200;
	var y = 300;
	var sentidoX = 1
	var sentidoY = 1
	var px = 200;
	var py = 350;
	let vel = 2;
	let tamanhoX = 100
	let tamanhoY = 10
	let LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

	addEventListener("keydown", moverPersoDOWN);
    addEventListener("keyup", moverPersoUP);
    let mvl = mvu = mvr = mvd = false;

    
  	setInterval(repete,10)

  	function contador(txt){
  		var exibir = document.querySelector(".contador").innerHTML = txt;
  	}


  	function colisao() {

  		setTimeout(repete,tempo)
  		if(y >= py - raio && y < py + tamanhoY && x > px -raio && x < px + tamanhoX){
  		
						

			sentidoY = 1;
			
			}
			
			
	}
  	

	
	function moverBola(){
			
				

			//esquerda
		
		if(y == tela.height - tela.height + raio){

			sentidoY = -1
			

		}
		
			//colisão plataforma

		
		if(y == py - raio && x > px -raio && x < px + tamanhoX){
			
			acertos++
			contador(acertos)
		}

			//baixo

		if(y == tela.height - raio){
			sentidoY = 0
			sentidoX = 0
		}

			//cima

		if(x == tela.width - tela.width +raio){
			sentidoX = -1
		}

			//direita

		if(x == tela.width - raio){
			sentidoX = 1

		}
		y = y - sentidoY
		x = x -sentidoX
	}

	function moverP() {

        //direita pra esquerda

        if (mvl && px > 0) {  
            
            px -= vel;   

        }

        //da esquerda pra direita

        if (mvr && px < tela.width -  tamanhoX) {
            px += vel;
  
        }
        
    }

    function moverPersoDOWN(e) {
        const key = e.keyCode;

        switch (key) {
            case LEFT:
                mvl = true
                break;
            case UP:
                mvu = true
                break;
            case RIGHT:
                mvr = true
                break;
            case DOWN:
                mvd = true
                break;

            default:
        }
    }

    function moverPersoUP(e) {
        const key = e.keyCode;

        switch (key) {
            case LEFT:
                mvl = false
                break;
            case UP:
                mvu = false
                break;
            case RIGHT:
                mvr = false
                break;
            case DOWN:
                mvd = false
                break;
        }
    }
