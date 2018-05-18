var age = parseInt(prompt ("¿Cuál es tu edad?"));
//convertir edad en segundos
var ageInseconds = age*365*24*60*60;
console.log (ageInseconds)
//Mostrando edad en la web
document.write("Tu edad es  " + age + " y en segundos sería " + ageInseconds)
