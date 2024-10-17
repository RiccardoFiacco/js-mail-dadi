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

// let nome = email.slice(0, indexDot);
// let nomeCorretto = nome[0].toUpperCase() + nome.slice(1);
// let result = invitati.includes(nomeCorretto);
// if(result){
//     console.log("puoi accedere");
// }else{
//     console.log("non puoi accedere");
// }

//seconda soluzione
const emailArr = ["Diego@gmail.com","Alessio@gmail.com","Alessandro@gmail.com",
    "Leonardo@gmail.com","Matteo@gmail.com","Samuel@gmail.com",
    "Pietro@gmail.com","Nicolo@gmail.com","Ettore@gmail.com","Jacopo@gmail.com"]

// do{
//     email = prompt("inserisci la tua email(nome@dominio)");
//     let control = email.includes("@");
//     if(control){
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
do{
    email = prompt("inserisci la tua email(nome@dominio)");
    for(let i=0;i<email.length; i++){
        if(email[i]==="@"){
            control = true;
        }
    } 

    if(control){
        email = email.toLowerCase();
        let emailCorretta= email[0].toUpperCase() + email.slice(1);
        for(let i=0;i<emailArr.length; i++){
            if(emailCorretta===emailArr[i]){
                result = true;
            }
        } 
        if(result){
            console.log("puoi accedere");
        }else{
            console.log("non puoi accedere");
        }
        flag = true;
    }else{
        alert("inserisci email nel formato indicato");
    }
}while(!flag);