// Clase para manejar la generación de la tabla de multiplicar o sumar
class Tabla {
  constructor() {
      this.numero = 0;
      this.tipoTabla = "";
  }

  // Método para obtener los datos ingresados por el usuario
  obtenerDatos() {
      this.numero = parseInt(document.getElementById('numero').value);
      this.tipoTabla = document.getElementById('tipo-tabla').value;
      if (isNaN(this.numero)) {
          alert("Por favor ingrese un número entero.");
          return false;
      }
      return true;
  }

  // Método para generar la tabla de multiplicar o sumar
  generarTabla() {
      let resultado = "";
      for (let i = 1; i <= 10; i++) {
          if (this.tipoTabla === "multiplicar") {
              resultado += `${this.numero} x ${i} = ${this.numero * i}<br>`;
          } else if (this.tipoTabla === "sumar") {
              resultado += `${this.numero} + ${i} = ${this.numero + i}<br>`;
          }
      }
      return resultado;
  }

  // Método para mostrar el resultado en la página
  mostrarResultado(resultado) {
      document.getElementById('resultado-texto').innerHTML = resultado;
  }
}

// Función para ejecutar la generación de la tabla
function jugar() {
  const juegoTabla = new Tabla();
  if (juegoTabla.obtenerDatos()) {
      const resultado = juegoTabla.generarTabla();
      juegoTabla.mostrarResultado(resultado);
  }
}
