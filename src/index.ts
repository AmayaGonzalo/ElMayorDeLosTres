rotulo.innerHTML = "Primer Numero";
rotulo1.innerHTML = "Segundo Numero";
rotulo2.innerHTML = "Tercer Numero";

let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
  let numero1: number = Number(dato.value);
  let numero2: number = Number(dato1.value);
  let numero3: number = Number(dato2.value);

  if (numero1 > numero2 && numero1 > numero3) {
    console.log("El número mayor es: ", numero1);
  } else if (numero2 > numero1 && numero2 > numero3) {
    console.log("El número mayor es: ", numero2);
  } else if (numero3 > numero1 && numero3 > numero1) {
    console.log("El número mayor es: ", numero3);
  }
});
