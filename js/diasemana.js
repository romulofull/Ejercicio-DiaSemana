var fechaingreso = prompt("Ingrese la fecha","mm/dd/yyyy");
var fecha = new Date (fechaingreso);
var dia = fecha.getDay();

var diaSemana;

switch (dia) {
case 0:
diaSemana = "Domingo";
break;

case 1:
diaSemana = "Lunes";
break;

case 2:
diaSemana = "Martes";
break;

case 3:
diaSemana = "Miercoles";
break;

case 4:
diaSemana = "Jueves";
break;

case 5:
diaSemana = "Viernes";
break;

case 6:
diaSemana = "Sabado";
break;
}

alert ("El día de la semana de esa fecha es : " + diaSemana);



