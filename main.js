//constante que pega a div dino para manipular na DOM
const dino = document.querySelector('.dino');
const fundoPagina = document.querySelector('.fundo')

let position = 0;
let estaPulando = false;

//funcao sobeTecla pega o momento que soltamos a tecla 32 que é o espaço
//se espaço for solto ele executa a função pular
function sobeTecla(event){
    if(event.keyCode === 32){
        if(!estaPulando){
        pular()
        }
    }
}

//função pular direciona a altura e o tempo que a constante dino vai ficar na página
function pular() {
//let positin pega a posição inicial da constante dino

    estaPulando = true;
//neste let vamos manipular o intervalo de tempo e altura que o elemento sobe na div
    let intervaloPulo = setInterval(()=>{
//parar de subir quando chegar a 150 de altura, sem isso ele sobe eternamente
        if(position >= 150){
//nesta altura ele utiliza a função do js de limpar o intervalo            
            clearInterval(intervaloPulo)
//descer
            let intervaloDesce = setInterval(()=>{
//condição que avalia a posição para descida
                if (position <= 0){
//quando chega no ponto zero ele chama a função de limpar o intervalo do js
                    clearInterval(intervaloDesce)
                    estaPulando=false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px'; 
                }                
            }, 20);
        }else{
            position +=20;
            dino.style.bottom = position + 'px';
        }
    }, 20); //executa a cada 20milisegundos
};


function criarCactos() {
    const cactos = document.createElement('div');
    let cactusPosicao = 1000;

    let apareceRandomicamente = Math.random() * 6000;

    cactos.classList.add('cactus');
    cactos.style.left = cactusPosicao + 'px';
    fundoPagina.appendChild(cactos)

    let intervaloEsquerda = setInterval(()=>{

        if(cactusPosicao < -60){
            clearInterval(intervaloEsquerda);
            fundoPagina.removeChild(cactos);
        }else if(cactusPosicao > 0 && cactusPosicao < 60 && position <60){
            clearInterval(intervaloEsquerda);
            document.body.innerHTML = '<h1 class="gameover"> Fim de jogo! </h1>'
        }else {
            cactusPosicao -= 10;
            cactos.style.left = cactusPosicao + 'px';
        }
    }, 20)

    setTimeout(criarCactos, apareceRandomicamente)
}

criarCactos();


document.addEventListener('keyup', sobeTecla)