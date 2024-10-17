const invitati = ["Diego","Alessio","Alessandro","Leonardo","Matteo",
    "Samuel","Pietro","Nicolo","Ettore","Jacopo"]
let flag = false

do{
    let email = prompt("inserisci la tua email");
    let control = email.includes("@");
    console.log(control);
}while(flag);

