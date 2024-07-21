// Clase para calcular el factorial de un número
class Factorial {
  constructor() {
      this.numero = 0;
  }

  // Método para obtener el número ingresado por el usuario
  obtenerNumero() {
      this.numero = parseInt(document.getElementById('numero').value);
      if (isNaN(this.numero) || this.numero <= 0) {
          alert("Por favor ingrese un número entero positivo.");
          return false;
      }
      return true;
  }

  // Método para calcular el factorial del número ingresado
  calcularFactorial() {
      let factorial = 1;
      let proceso = "Proceso: ";
      for (let i = 1; i <= this.numero; i++) {
          factorial *= i;
          if (i === 1) {
              proceso += i;
          } else {
              proceso += " * " + i;
          }
      }
      return { factorial, proceso };
  }

  // Método para mostrar el resultado en la página
  mostrarResultado(factorial, proceso) {
      const resultadoTexto = `El factorial de ${this.numero} es ${factorial}.<br>${proceso} = ${factorial}`;
      document.getElementById('resultado-texto').innerHTML = resultadoTexto;
  }
}

// Función para ejecutar el cálculo del factorial
function jugar() {
  const juegoFactorial = new Factorial();
  if (juegoFactorial.obtenerNumero()) {
      const { factorial, proceso } = juegoFactorial.calcularFactorial();
      juegoFactorial.mostrarResultado(factorial, proceso);
  }
}
