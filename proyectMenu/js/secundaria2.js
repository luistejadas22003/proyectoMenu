// Clase para el juego de sumar números naturales
class SumaNumerosNaturales {
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
  
    // Método para calcular la suma de números naturales hasta el número ingresado
    calcularSuma() {
        let suma = 0;
        let proceso = [];
        for (let i = 1; i <= this.numero; i++) {
            proceso.push(i); // Almacenar cada número en el proceso
            suma += i;
        }
        return { suma, proceso };
    }
  
    // Método para mostrar el resultado y el proceso en la página
    mostrarResultado(suma, proceso) {
        let procesoTexto = proceso.join(' + ');
        const resultadoTexto = `La suma de los números naturales hasta ${this.numero} es ${suma}.<br>
                                Proceso: ${procesoTexto} = ${suma}.`;
        document.getElementById('resultado-texto').innerHTML = resultadoTexto;
        document.getElementById('resultado').style.display = 'block'; // Mostrar el resultado
    }
  }
  
  // Función para ejecutar el juego
  function jugar() {
    const juegoSuma = new SumaNumerosNaturales();
    if (juegoSuma.obtenerNumero()) {
        const { suma, proceso } = juegoSuma.calcularSuma();
        juegoSuma.mostrarResultado(suma, proceso);
    }
  }
  