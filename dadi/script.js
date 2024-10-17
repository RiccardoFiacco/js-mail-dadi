// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


let dadoPc;
let dadoPlayer;
let ceVincitore = false;

do{ 
    dadoPc = Math.floor(Math.random()*6);
    dadoPlayer = Math.floor(Math.random()*6);
    console.log(dadoPc, dadoPlayer);

    if (dadoPc==dadoPlayer){

        console.log("Pareggio, ripete!");

    }else if(dadoPc>dadoPlayer){

        console.log("Vince il Pc");
        ceVincitore = true;

    }else{

        console.log("Vince il Player");
        ceVincitore = true;

    }
}while(!ceVincitore);