// Clase para manejar la generación de la secuencia de Fibonacci
class Fibonacci {
  constructor() {
      this.numero = 0;
  }

  // Método para obtener el número ingresado por el usuario
  obtenerDatos() {
      this.numero = parseInt(document.getElementById('numero').value);
      if (isNaN(this.numero) || this.numero <= 0) {
          alert("Por favor ingrese un número entero positivo.");
          return false;
      }
      return true;
  }

  // Método para generar la secuencia de Fibonacci
  generarSecuencia() {
      let secuencia = [];
      let a = 0, b = 1;
      if (this.numero >= 1) secuencia.push(a);
      if (this.numero >= 2) secuencia.push(b);
      for (let i = 3; i <= this.numero; i++) {
          let temp = a + b;
          secuencia.push(temp);
          a = b;
          b = temp;
      }
      return secuencia.join(", ");
  }

  // Método para mostrar el resultado en la página
  mostrarResultado(resultado) {
      document.getElementById('resultado-texto').innerHTML = resultado;
  }
}

// Función para ejecutar la generación de la secuencia de Fibonacci
function jugar() {
  const juegoFibonacci = new Fibonacci();
  if (juegoFibonacci.obtenerDatos()) {
      const resultado = juegoFibonacci.generarSecuencia();
      juegoFibonacci.mostrarResultado(resultado);
  }
}
