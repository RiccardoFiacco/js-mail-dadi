const invitati = ["Diego","Alessio","Alessandro","Leonardo","Matteo",
    "Samuel","Pietro","Nicolo","Ettore","Jacopo"]
let flag = false;
let indexDot;
do{
    let email = prompt("inserisci la tua email(nome@dominio)");
    let control = email.includes("@");
    if(control){
        flag = true;
        indexDot = email.indexOf("@");
    }else{
        alert("inserisci email nel formato indicato");
    }
}while(!flag);

