let passwordValid = undefined;
// let passwordStrength = undefined;
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗██╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝██║
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  ██║
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  ╚═╝
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗██╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝
                                                                `)
reader.question("Please input a password to validate: ", function(input){   
    
    while(passwordValid === undefined){
        for(i = 0; i < input.length; i++){
            if(input.charAt(i) === "$"){
                passwordValid = false;
            } 
            if(input.charAt(i) === "!" && input.length >= 10 && input.length < 21){
                passwordValid = true;
           
        }
    }
       if(passwordValid === undefined){
            passwordValid = false;
       }

     }

    if(passwordValid === true){
        console.log(`Success!`)
    }else{
        console.log(`Your password must be at least 10 characters, and must contain this symbol: !, and cannot contain this symbol: $`)
    }


    reader.close()




});

// const reader2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
// reader2.question("Please confirm your password: ", function(input2){
//     if(input !== input2){
//         console.log("Passwords do not match.")
//         reader2.close()
//     }else{
//         console.log("Success!")
//         reader2.close()
//     }
// })



