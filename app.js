//Funciones
const seleccioneBebida = (bebida, cantidad) => {
    console.log("switch");
    switch (bebida) {
      case 1:
        cantCerveza += cantidad;
        total += cantidad * 250;
        return alert("Elegiste " + cantidad + " Cervezas");
      case 2:
        cantFernet += cantidad;
        total += cantidad * 100;
        return alert("Elegiste " + cantidad + " Fernet");
      case 3:
        cantAperol += cantidad;
        total += cantidad * 50;
        return alert("Elegiste " + cantidad + " Aperol");
      case 4:
        cantGin += cantidad;
        total += cantidad * 10;
        return alert("Elegiste " + cantidad + " Gin");
      default:
        alert("Opción incorrecta");
    }
  }
  
  const funcionLoop = () => {
    let cantidad;
    let ingreseBebida;
  
    // IngreseBebida
    ingreseBebida = Number(prompt("Selecciona el número de la bebida deseada: \n1 Cerveza \n2 Fernet \n3 Aperol \n4 Gin \n0 FINALIZAR"));
  
    while (ingreseBebida !== 0) {
    //   Selecciones bebida
      cantidad = Number(prompt("Ingresá la cantidad de bebida deseada"));
    //   llamo función
      seleccioneBebida(ingreseBebida, cantidad);
  
    //   ingreseBebida
      ingreseBebida = Number(prompt("Selecciona el número de la bebida deseada: \n1 Cerveza \n2 Fernet \n3 Aperol \n4 Gin \n0 FINALIZAR"));
    }
  }
  
//variables 
  let edad = Number(prompt("Ingresá tu edad"));
  let total = 0;
  let cantCerveza = 0;
  let cantFernet = 0;
  let cantAperol = 0;
  let cantGin = 0;
  
//   programa
  if (edad < 18) { // Es menor
    alert("Sos menor de edad no podés ingresar")
  } else {  // es mayor
    funcionLoop();
  }
  
  if (total > 0) {
    // le digo cuanto gastó
    alert("Compraste :\n" + cantCerveza + " Cervezas \n"+ cantFernet + " Fernet \n" + cantAperol+ " Aperol \n" + cantGin + " Gin \n" + "\nTotal: " + total);
  } else {
    // gracias por visita
    alert("No compraste nada, gracias por tu visita.")
  }
  