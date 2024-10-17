const invitati = ["Diego","Alessio","Alessandro","Leonardo","Matteo",
    "Samuel","Pietro","Nicolo","Ettore","Jacopo"]
let flag = false;
let indexDot;
let email;
do{
    email = prompt("inserisci la tua email(nome@dominio)");
    let control = email.includes("@");
    if(control){
        flag = true;
        indexDot = email.indexOf("@");
    }else{
        alert("inserisci email nel formato indicato");
    }
}while(!flag);

let nome = email.slice(0, indexDot);
let nomeCorretto = nome[0].toUpperCase() + nome.slice(1);
let result = invitati.includes(nomeCorretto);
if(result){
    console.log("invitato");
}else{
    console.log("non invitato");
}
