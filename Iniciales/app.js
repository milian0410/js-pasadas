var name = prompt("¿Cuál es tu nombre y apellido?");
var firstInitial= name.slice(0,1);
var secondInitialPosition = name.indexOf(" ") +1;
var secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);
console.log(firstInitial+secondInitial);
document.write("Tus iniciales son " + firstInitial.toUpperCase()+secondInitial.toUpperCase());
