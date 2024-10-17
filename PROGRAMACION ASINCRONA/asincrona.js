//funciones callback
// function saludo(nombre){
//     document.write(" Hola "+nombre+"<br>")
// }
// function despedir (nombre){
//     document.write(" Chao con adios "+nombre+"<br>")
// }
// function llamarFuncion(fun, nom){
//     fun(nom);
// }
// //ejecutar callback
// llamarFuncion(saludo, "Pedrito");
// llamarFuncion(function(n){
//     document.write("¿Como estas"+n+"<br>");
// }, " Pedrito?");
// llamarFuncion(despedir, "Pedrito"); 



//PROGRAMACION ASINCRONA

//ES PROGRAMAR TENIENDO QUE ESPERAR UN PROCESO PARA 
//PODER FINALIZAR UN CALCULO O PROCEDIMIENTO 
// document.write("Proceso 1 <br>");

// setTimeout(function(){
//     document.write("Proceso 2 <br>");
// }, 2000);
// document.write("Proceso 3 <br>");

//despetador
// function despetador(tiempoSegundos, alarma){
//     document.write(`Despertador Activado. sonara en ${tiempoSegundos} seg....`);
//     //usamos setTimeout para esperar el tiempo especificado
//     setTimeout(()=>{
//         //cuando pase el tiempo llamamos la funcion callback
//         alarma();
//     }, tiempoSegundos * 1000);
// }
// //funcion que actuara como alarma
// function alarma(){
//     document.write("Hora de despertarse! ⏰⏰⏰")
// }
// //ejecutar codigo
// let tiempo = Number(prompt("Digite el tiempo en el que sonara la alarma"))
// //llamar la funcion callback
// despetador(tiempo, alarma);

//ASCENSOR
// function ascensor(pisoDestino, llegadaFn){
//     let pisoActual = 0; //empieza en planta baja
//     console.log(`Ascensor en el piso ${pisoActual}`)
//     function moverAscensor(){
//         if(pisoActual < pisoDestino){
//             pisoActual++;
//             console.log(`Ascensor subiendo ... piso ${pisoActual}`);
//         }else if(pisoActual > pisoDestino){
//             pisoActual--;
//             console.log(`Ascensor bajando ... piso ${pisoActual}`);
//         }
//         //si el ascensor aun no ha llegado, lo seguimos moviendo
//         if(pisoActual != pisoDestino){
//             //simula el tiempo de viaje del ascensor
//             setTimeout(moverAscensor, 1000);
//         }else{
//             llegadaFn(pisoDestino);
//         }
//     }
//     moverAscensor(); //iniciar el movimiento del ascensor 
// }

// function pisoLLegada(pisoDestino){
//     console.log(`Hemos llegado al destino. Piso ${pisoDestino}`);
// }
// //ejecutar funcion 
// let tomarAscensor = Number(prompt("¿A que piso desea ir?"));
// ascensor(tomarAscensor, pisoLLegada);