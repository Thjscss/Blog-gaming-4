//- **let**: para datos que pueden cambiar.
//- **const**: para datos que no deben cambiar.
//String: para textos.
//Number: para números.
//Boolean: para valores verdadero (true) o falso (false).
//null: representa un valor nulo.
//undefined: indica que una variable no tiene asignado un valor
//Variables y tipos de datos:
let suma = 10 + 5; // 15
let preducto = 20 * 2; // 40
let division = 100 / 4; // 25
let modulo = 10 % 3; // 1
//const
//CONDICIONALES:
//if: Ejecuta un bloque de código si una condición es verdadera.
if (suma > 20) {
  console.log("La suma es mayor que 20");
}
//else: Se ejecuta si la condición del if no se cumple.
else {
  console.log("La suma es menor o igual a 20");
}
//for: Ejecuta un bloque de código un número determinado de veces.
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//while: Ejecuta un bloque de código mientras una condición sea verdadera.
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
//Atributos async y defer
//El atributo async permite que el script se cargue de manera asincrónica con respecto al resto de la página. Esto significa que el navegador no necesita esperar a que el script se cargue y ejecute para continuar procesando el resto del contenido HTML. El script se ejecutará tan pronto como esté disponible, lo que puede mejorar la velocidad de carga de la página.

//El atributo defer, por otro lado, también permite la carga asincrónica del script, pero retrasa la ejecución del mismo hasta que todo el documento HTML ha sido completamente cargado y analizado. Esto es útil para scripts que necesitan interactuar con elementos del DOM o cuyo orden de ejecución es importante.