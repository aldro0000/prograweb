//EJ 1
//  let ciudad = "Buenos Aires";
// let pais = "Argentina";
// let año_nacimiento = 2006;
// console.log("ciudad:",ciudad);
// console.log("pais:",pais);
// console.log("Año:",año_nacimiento)
// ciudad = "Córdoba";
// pais = "Chile";
// año_nacimiento = 1995;


// console.log("Ciudad modificada:", ciudad);
// console.log("País modificado:", pais);
// console.log("Año de nacimiento modificado:", año_nacimiento);
// EJ 2
// Declara tres variables numéricas. Calcula el promedio de las tres y encuentra el residuo de la división de la suma total entre 2. Imprime los resultados.
// let nro1=5
// let nro2=15
// let nro3=25
// let suma=(nro1+nro2+nro3)
// let promedio=suma/3
// let residuo=suma%2
// console.log("el promedio es:",promedio)
// console.log("el residuo es:",residuo)
// 3. Ejercicio 3: Tipos de Datos
// https://www.w3schools.com/js/js_datatypes.asp
// Declara una variable para almacenar un objeto que represente un coche con propiedades como marca, modelo y año. Imprime el tipo de cada propiedad con typeof.
// let coche={marca:"honda", modelo:"civic", año:2018}
// console.log("Marca:",coche.marca)
// console.log("Modelo:",coche.modelo)
// console.log("Año:",coche.año)
// console.log("Tipo de Marca:",typeof(coche.marca))
// console.log("Tipo de modelo:", typeof coche.modelo)
// console.log("tipo de año", typeof coche.año)
// 4. Ejercicio 4: Arrays Básicos
// https://www.w3schools.com/js/js_arrays.asp
// Crea un array con los nombres de 5 ciudades que te gustaría visitar. Reemplaza el tercer elemento por otra ciudad y luego imprime el array actualizado.
// let ARRAY_CIUDADES=["TOKIO","SHANGHAI","MELBOURNE","SEUL", "BANGKOK"];
// ARRAY_CIUDADES[2]="ULAM BATOR"
// console.log("las ciudades que quiero visitar son", ARRAY_CIUDADES)
// 5. Ejercicio 5: Array de Objetos
// https://www.w3schools.com/js/js_objects.asp
// Crea un array de 3 objetos que representen películas, cada una con título, director y año de lanzamiento. Imprime el director de la última película.
// let peliculas=["cars 1", "Mi pobre angelito", "F1:The movie"];
// let director=["John Lasseter","Chris Columbus","Joseph Kosinski"];
// let año=[2006,1990,2025];
// console.log("PELI 1:",peliculas[0],director[0],año[0])
// console.log("PELI 2:",peliculas[1],director[1],año[1])
// console.log("PELI 3:",peliculas[2],director[2],año[2])
// console.log("EL DRIECTOR DE LA PELICULA 3 ES:", director[2])
// 6. Ejercicio 6: Operadores Lógicos
// https://www.w3schools.com/js/js_comparisons.asp
// Declara tres variables booleanas y usa operadores lógicos para verificar si al menos dos son verdaderas. Imprime true o false en la consola dependiendo del resultado.
// let a=true;
// let b=false;
// let c=true;

// let al_menos_2_son_verdaderas= (a && b)||(a && c)||(b&&c)
// console.log("SON AL MENOS 2 VERDADERAS?", al_menos_2_son_verdaderas)
// 8. Ejercicio 8: Concatenación de Strings
// https://www.w3schools.com/js/js_string_methods.asp
// Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido). Luego, crea una tercera variable que concatene las dos primeras y muestra el resultado en la consola.
// let nombre= "ALAIN";
// let apellido="DROBLAS";
// console.log("El nombe y apellido del user es:", nombre+" "+ apellido)
// 9. Ejercicio 9: Incremento y Decremento
// https://www.w3schools.com/js/js_operators.asp
// Declara una variable numérica y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor. Imprime el valor de la variable después de cada operación.

// let numero = 15;
// console.log("Valor inicial:", numero);

// numero++;
// console.log("Después de incremento (++):", numero);

// numero--;
// console.log("Después de decremento (--):", numero);
// 13. Ejercicio 13: Uso de typeof con Variables No Definidas
// https://www.w3schools.com/js/js_typeof.asp
// Declara una variable sin asignarle un valor y otra variable con valor null. Utiliza typeof para imprimir el tipo de cada variable.
// let variable_indefinida;
// let variable_nula = null;

// console.log("Tipo de variableIndefinida:", typeof variable_indefinida);
// console.log("Tipo de variableNula:", typeof variable_nula);
// 14. Ejercicio 14: Conversión de Tipos
// https://www.w3schools.com/js/js_type_conversion.asp
// Declara una variable que almacene un número como string (por ejemplo, "123"). Convierte este string a un número usando parseInt o Number y demuestra que ahora puedes realizar operaciones matemáticas con él.
// let numero_string="555";
// let numero_entero=Number(numero_string);
// console.log("el tipo del numero string que deberia ser string es:",typeof numero_string);
// console.log("el tipo de numero number que deberia ser number es:", typeof numero_entero);
// console.log("sumo el numero entero +10:", numero_entero+10);´
// console.log(`la suma de uno mas uno es: ${1+1}`)--->FSTRING DE PYTHON->$+ LO QUE QUIERAS

// GUIA EJERCICIOS 2:
// 1. Ejercicio 1: Función Declarada
// https://www.w3schools.com/js/js_functions.asp
// Escribe una función que tome tres números como argumentos y retorne el mayor de ellos. Llama a la función con diferentes valores e imprime el resultado.
// function mayor_de_tres(num1, num2, num3){
//     let mayor;
//     if (num1>=num2 && num1>=num3){
//         mayor=num1;
//     }else if (num2>= num1 && num2>= num3){
//         mayor=num2;
//     }else {
//         mayor=num3;
//     }
//     return mayor;
// }
// console.log(mayor_de_tres(5,2,3))
// 2. Ejercicio 2: Función Expresada
// https://www.w3schools.com/js/js_functions.asp
// Crea una función expresada que reciba un array de strings y retorne un string que concatena todos los elementos del array separados por espacios.

// let concatenar_strings = function(array_de_strings) {
//     let resultado = "";

//     for (let i = 0; i < array_de_strings.length; i++) {
//         resultado += array_de_strings[i]; 
//         if (i < array_de_strings.length - 1) {
//             resultado += " ";
//         }
//     }

//     return resultado;
// };
// // console.log(concatenar_strings(["hola","mi","nombre","es","alain"]))
// 3. Ejercicio 3: Función Flecha
// https://www.w3schools.com/js/js_arrow_function.asp
// Convierte la función del ejercicio anterior a una función de flecha. Además, agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia.
// let concatenar_strings = (array_de_strings) => {
//     if (array_de_strings.length === 0) {
//         return "El array está vacío, no hay nada que concatenar.";
//     }

//     let resultado = "";
//     for (let i = 0; i < array_de_strings.length; i++) {
//         resultado += array_de_strings[i]; 
//         if (i < array_de_strings.length - 1) {
//             resultado += " ";
//         }
//     }

//     return resultado;
// }
// console.log(concatenar_strings([]))
// 4. Ejercicio 4: Estructura If-Else
// https://www.w3schools.com/js/js_if_else.asp
// Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva un mensaje que indique si hace frío (menor a 15 grados), templado (entre 15 y 25 grados) o calor (mayor a 25 grados).
// let temperatura=function(grados){
//     let frio=false;
//     let calor=false;
//     let templado=false;
//     if (grados > 25) {
//         calor = true;
//     } else if (grados >= 15 && grados <= 25) {
//         templado = true;
//     } else {
//         frio = true;
//     }
//     if (calor) {
//         return "Hace calor";
//     } else if (templado) {
//         return "Está templado";
//     } else {
//         return "Hace frío";
//     }
// }
// console.log(temperatura(14))
// 5. Ejercicio 5: Operador Ternario
// https://www.w3schools.com/js/js_comparisons.asp
// Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" si es antes de las 12, "Buenas tardes" si es entre las 12 y 18, o "Buenas noches" si es después de las 18, utilizando operadores ternarios.


// let saludo_por_hora = (hora) => 
//     hora < 12 
//         ? "Buenos días" 
//         : (hora < 18 
//             ? "Buenas tardes" 
//             : "Buenas noches");
// 6. Ejercicio 6: Operadores And y Or
// https://www.w3schools.com/js/js_comparisons.asp
// Escribe una función que reciba cuatro argumentos booleanos y retorne true si al menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso.
// function evaluar_and_or_declarada(a, b, c, d) {
//   return (a || b) && (!c || !d); 
// }
// console.log(evaluar_and_or_declarada(true,false,true,false))
// 7. Ejercicio 7: Función que Calcula el Factorial
// https://www.w3schools.com/js/js_functions.asp
// Escribe una función que tome un número como argumento y retorne su factorial. Utiliza una estructura if para manejar el caso base.
// function factorial(n) {
//   if (n === 0 || n === 1) return 1;   
//   return n * factorial(n - 1);        
// }
// console.log(factorial(10))
// 8. Ejercicio 8: Función con Parámetros por Defecto
// https://www.w3schools.com/js/js_function_parameters.asp
// // Crea una función que salude a una persona. Si no se proporciona el nombre, debe saludar con "Hola, invitado".
// function saludar(nombre="invitado"){
//     return `Hola, ${nombre}`
// }
// console.log(saludar())
// 9. Ejercicio 9: Función que Verifica Números Pares
// https://www.w3schools.com/js/js_comparisons.asp
// Escribe una función que tome un número y retorne true si es par o false si es impar. Utiliza el operador módulo (%) y un operador ternario.
// let es_par= (num)=> (num%2===0)? true:false;
// console.log(es_par(99))
// 10. Ejercicio 10: Uso de switch
// https://www.w3schools.com/js/js_switch.asp
// Escribe una función que reciba un día de la semana (en número) y retorne el nombre del día. Usa una estructura switch.
// 11. Ejercicio 11: Función Recursiva
// https://www.w3schools.com/js/js_functions.asp
// Crea una función recursiva que calcule la suma de los números de 1 hasta n.
// 12. Ejercicio 12: Validación con Operadores Lógicos
// https://www.w3schools.com/js/js_comparisons.asp
// Escribe una función que verifique si una contraseña cumple con ciertos criterios: al menos 8 caracteres, contiene un número y una letra mayúscula. Utiliza operadores lógicos para combinar las condiciones.
