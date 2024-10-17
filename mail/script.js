// const invitati = ["Diego","Alessio","Alessandro","Leonardo","Matteo",
//     "Samuel","Pietro","Nicolo","Ettore","Jacopo"]
let flag = false;
let indexDot;
let email;
// do{
//     email = prompt("inserisci la tua email(nome@dominio)");
//     let control = email.includes("@");
//     if(control){
//         flag = true;
//         indexDot = email.indexOf("@");
//     }else{
//         alert("inserisci email nel formato indicato");
//     }
// }while(!flag);
// 
// let nome = email.slice(0, indexDot);
// nome = nome.toLowerCase();
// let nomeCorretto = nome[0].toUpperCase() + nome.slice(1);
// let result = invitati.includes(nomeCorretto);
// if(result){
//     console.log("puoi accedere");
// }else{
//     console.log("non puoi accedere");
// }

//seconda soluzione
const emailArr = ["diego@gmail.com","alessio@gmail.com","alessandro@gmail.com",
    "leonardo@gmail.com","matteo@gmail.com","samuel@gmail.com",
    "pietro@gmail.com","nicolo@gmail.com","ettore@gmail.com","jacopo@gmail.com"]

// do{
//     email = prompt("inserisci la tua email(nome@dominio)");
//     let control = email.includes("@");
//     if(control){
//         email = email.toLowerCase();
//         let emailCorretta= email[0].toUpperCase() + email.slice(1);
//         let result = emailArr.includes(emailCorretta);
//         if(result){
//             console.log("puoi accedere");
//         }else{
//             console.log("non puoi accedere");
//         }
//         flag = true;
//     }else{
//         alert("inserisci email nel formato indicato");
//     }
// }while(!flag);


//terza soluzione
let result;
let control;
let msg;
do{
    //inserimento email
    email = prompt("inserisci la tua email(nome@dominio)");
    //controllo chiocciola per vedere se è un email
    for(let i=0;i<email.length; i++){
        if(email[i]==="@"){
            control = true;
        }
    } 
    //se è un email faccio
    if(control){
        //metto la mail in piccolo 
        email = email.toLowerCase();
        //controllo se email è presente nell'array
        for(let i=0;i<emailArr.length; i++){
            if(emailCorretta===emailArr[i]){
                result = true;
            }
        } 
        //se il result è vero un messaggio senno un altro
        if(result){
            msg= "puoi accedere";
        }else{
            msg= "non puoi accedere";
        }
        //metto la flag a true per uscire dal ciclo, perche la mail inserita è nel formato corretto
        flag = true;

    }else{ //altrimenti avviso di reinserire 
        alert("inserisci email nel formato indicato");
    }

}while(!flag);//faccio fino a che non è falsa
//output
console.log(msg);