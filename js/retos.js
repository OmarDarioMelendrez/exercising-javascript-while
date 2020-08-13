// Reto 1 Crea una variable que se llame total, después pide a tu usuario que ingrese un número y lo sume al valor de total. Haz que esto se repita hasta que el valor de total sea mayor a 50 y muestra el resultado en pantalla.

const retoUnoInputA = document.getElementById("reto-1-input-a");
const retoUnoContenedor = document.getElementById("reto-1-resultado");

const retoUno = () => {
  while (retoUnoContenedor.firstChild) {
      retoUnoContenedor.removeChild(retoUnoContenedor.firstChild);
    }
    let total = 0;
    while (total < 50) {
      total += parseInt(retoUnoInputA.value);
    let nuevoNumero = document.createElement('h2');
    let contenido = document.createTextNode(total);
    nuevoNumero.appendChild(contenido);
    retoUnoContenedor.appendChild(nuevoNumero);
  }
};

// Reto 2 Crea un código que pida al usuario un número y se repita hasta que coloque un número mayor a 42. Cuando se cumpla esta condición muestra el resultado en pantalla indicando esto al usuario y finaliza el ciclo.

const retoDosContenedor = document.getElementById("reto-2-resultado");

const retoDos = () => {
  const LIMIT = 42;
  let number = 0;
  while (number <= LIMIT) {
    number = parseInt(prompt('Por favor ingrese un número'));
  }
  let numeroFinal = document.createElement('h2');
  let contenido = document.createTextNode(`Se cumplió la condición secreta que el número sea mayor que 42, el número fue ${number}`);
  numeroFinal.appendChild(contenido);
  retoDosContenedor.appendChild(numeroFinal);
}

// Reto 3 Pide al usuario que ingrese dos números y los sume. Después pregunta si quiere añadir otro número: si la respuesta es afirmativa añádelo al total; en caso contrario finaliza el ciclo y muestra el resultado total en pantalla.

const retoTresContenedor = document.getElementById("reto-3-resultado");

const retoTres = () => {
  let num1 = parseInt(prompt('Escribe un número'));
  let num2 = parseInt(prompt('Escribe otro número'));
  let sum = num1 + num2;

  let question = 'Y';

  while (question === 'Y') {
    question = prompt('Si deseas agregar un nuevo numero coloca Y, sino quieres agregar otro número coloca N').toUpperCase();
    if (question === 'Y') {
      let number = parseInt(prompt('Escribe el nuevo número'));
      sum += number;
    }
  }
  let numeroFinal = document.createElement('h2');
  let contenido = document.createTextNode(`El resultado final de la suma es ${sum}`);
  numeroFinal.appendChild(contenido);
  retoTresContenedor.appendChild(numeroFinal);
}

// Reto 4 Estás organizando un banquete al que quieres invitar a tus amigos. Crea un programa que pida el nombre de uno de tus amigos, al hacerlo aumenta en uno una variable contadora, después pregunta si quieres invitar a alguien más: si la respuesta es afirmativa entonces pregunta por una persona más; en caso contrario cierra el ciclo y muestra en pantalla cuantos invitados son.

const retoCuatroContenedor = document.getElementById("reto-4-resultado");

const retoCuatro = () => {
  while (retoCuatroContenedor.firstChild) {
    retoCuatroContenedor.removeChild(retoCuatroContenedor.firstChild);
  }
  prompt('Escribe un nombre');
  let invitados = 1;

  let question = 'Y';

  while (question === 'Y') {
    question = prompt('Deseas invitar a alguien más? coloca Y para sí ó N para no.').toUpperCase();
    if (question === 'Y') {
      prompt('Ingrese el nombre');
      invitados++
    }
  }
  let numeroFinal = document.createElement('h2');
  let contenido = document.createTextNode(`La cantidad de invitados es de: ${invitados}`);
  numeroFinal.appendChild(contenido);
  retoCuatroContenedor.appendChild(numeroFinal);
}

// Reto 5 Crea un programa donde tendrás la variable numero_secreto, la cual toma un valor aleatorio entre 1 y 100. Después pide a tu usuario que indique un número para intentar adivinarlo: en caso de acertar indícale cual era el número secreto y cuantos intentos le tomó; en caso contrario indícale si el número ingresado es mayor o menor al número secreto.

const retoCincoContenedor = document.getElementById("reto-5-resultado");

const retoCinco = () => {

  while (retoCincoContenedor.firstChild) {
    retoCincoContenedor.removeChild(retoCincoContenedor.firstChild);
  }

  let random = Math.floor(Math.random() * 11);
  let numero = parseInt(prompt('Porfavor trata de adivinar un numero secreto entre el 1 - 100'));
  let contador = 1;

  while (numero != random) {
    contador++
    if (numero > random) {
      alert('Tu número es mayor que el número secreto.');
      numero = parseInt(prompt('Porfavor trata de adivinar un numero secreto entre el 1 - 10'));
    }else{
      alert('Tu número es menor que el número secreto.');
      numero = parseInt(prompt('Porfavor trata de adivinar un numero secreto entre el 1 - 10'));
    }
  }
  let numeroFinal = document.createElement('h2');
  let contenido = document.createTextNode(`Intentaste ${contador} veces hasta encontrar el número secreto ${random}`);
  numeroFinal.appendChild(contenido);
  retoCincoContenedor.appendChild(numeroFinal);
}
