/*
CREAR UN SCRIPT JS QUE MUESTRE UN MENU CON TRES OPCIONES:


1- SALUDAR (pide el nombre y muestre un mensaje saludando al nombre)
2- CALCULAR EDAD (pide la edad al usuario y muestra con alert el año de nacimiento)
3- ingrese 'q' para salir

el menu debe mostrarse siempre, hasta que el usuario ingrese q. 

usar blucle do while.
*/

/*let opcion;
do {
  
  opcion=prompt("MENU \n 1-SALUDAR \n2-CALCULAR EDAD \n 3-SALIR con q o Q");

    switch(opcion){
        case "1":
           let nombre= prompt("ingrese su  nombre");
            alert("Hola como estas "+ nombre);
            break;
        case "2": 
        let edad = prompt("Ingrese su edad");
            alert(" su año de nacimiento es " +(2023-edad));
            break;
        case "q": 
        case "Q":
            alert("saliendo hasta luego!!"); 
            break;
    
          
           
        default:
             alert("opcion incorrecta, seleccione otra opcion!!");
        break;
    }

} while (opcion !== "q" && opcion !== "Q");*/

/*crear un bucle do while que le pida al usuario su nombre. 

si es distinto de 'q' mostrar con una alertar un mensaje que diga "hola " + nombre;

si es 'q' cortar el buclet*/

do {
    let nombre1 = prompt("ingrese su nombre");
    if(nombre1 !=="Q" && nombre1!=="q"){
    alert (" hola como estas "+ nombre1);
    }
}while(nombre1 != "q" && nombre1 !="Q")