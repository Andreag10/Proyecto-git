

let numeroUsuario = document.getElementById("inputNumero").Value;

 numeroUsuario = parseInt(numeroUsuario);


 if(numeroUsuario >= 18){
    console.log("ya eres mayor de edad");
 }else{
    console.log("aun eres menor de edad");
 }

 document.getElementById("calcularBoton").addEventListener("click",numeroUsuario);