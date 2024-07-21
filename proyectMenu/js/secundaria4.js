// Clase para manejar números pares e impares en un rango
class ParImpar {
    constructor() {
        this.numero1 = 0;
        this.numero2 = 0;
    }

    // Método para obtener los números ingresados por el usuario
    obtenerNumeros() {
        this.numero1 = parseInt(document.getElementById('numero1').value);
        this.numero2 = parseInt(document.getElementById('numero2').value);
        if (isNaN(this.numero1) || isNaN(this.numero2)) {
            alert("Por favor ingrese dos números enteros.");
            return false;
        }
        if (this.numero1 > this.numero2) {
            alert("El primer número debe ser menor o igual al segundo número.");
            return false;
        }
        return true;
    }

    // Método para calcular los números pares e impares en el rango
    calcularParesImpares() {
        let pares = [];
        let impares = [];
        for (let i = this.numero1; i <= this.numero2; i++) {
            if (i % 2 === 0) {
                pares.push(i);
            } else {
                impares.push(i);
            }
        }
        return { pares, impares };
    }

    // Método para mostrar el resultado en la página
    mostrarResultado(pares, impares) {
        const resultadoTexto = `Números Pares: ${pares.join(', ')}.<br>Números Impares: ${impares.join(', ')}.`;
        document.getElementById('resultado-texto').innerHTML = resultadoTexto;
    }
}

// Función para ejecutar el cálculo de números pares e impares
function jugar() {
    const juegoParImpar = new ParImpar();
    if (juegoParImpar.obtenerNumeros()) {
        const { pares, impares } = juegoParImpar.calcularParesImpares();
        juegoParImpar.mostrarResultado(pares, impares);
    }
}
