class Secuencia {
    constructor() {
        this.numero = 0;
        this.inicio = 0;
        this.incre = 0;
        this.pre = [];
    }

    random() {
        this.numero = Math.floor(Math.random() * 6) + 1;
        this.inicio = Math.floor(Math.random() * 10) + 1;
        this.incre = Math.floor(Math.random() * 10) + 1;
    }

    serieNumerica() {
        this.pre = []; 
        let currentValue = this.inicio;

        for (let i = 0; i < 6; i++) {
            this.pre.push(currentValue);
            currentValue = currentValue + this.incre;
        }
    }

    presentar() {
        let random = document.getElementById("ramdon");
        random.innerHTML = this.pre.join(", ");
    }

    generar() {
        let opcion1 = document.getElementById("opcion1");
        let opcion2 = document.getElementById("opcion2");
        let opcion3 = document.getElementById("opcion3");
        let opcion4 = document.getElementById("opcion4");

        let respuestas = [];

        // Generar las opciones de respuesta
        respuestas.push(this.incre + 5);
        respuestas.push(this.incre + 2);
        respuestas.push(this.incre);
        respuestas.push(this.incre - 2);

        // Barajar las respuestas
        respuestas.sort(() => Math.random() - 0.5);

        // Asignar respuestas a los botones
        opcion1.innerHTML = respuestas[0];
        opcion1.setAttribute("onclick", `secuencia.opcion(${respuestas[0]})`);
        opcion2.innerHTML = respuestas[1];
        opcion2.setAttribute("onclick", `secuencia.opcion(${respuestas[1]})`);
        opcion3.innerHTML = respuestas[2];
        opcion3.setAttribute("onclick", `secuencia.opcion(${respuestas[2]})`);
        opcion4.innerHTML = respuestas[3];
        opcion4.setAttribute("onclick", `secuencia.opcion(${respuestas[3]})`);
    }

    opcion(opcionSeleccionada) {
        let resp = document.getElementById("respuestaTexto");
        let imgRespuesta = document.getElementById("imagenRespuesta");

        if (opcionSeleccionada === this.incre) {
            resp.innerHTML = `¡Felicidades! Es la respuesta correcta.`;
            imgRespuesta.src = "/png/ganador.png";
            imgRespuesta.alt = "Imagen de respuesta correcta";
        } else {
            resp.innerHTML = `Respuesta incorrecta. La respuesta correcta es ${this.incre}.<br>
                              Se incrementa de ${this.incre} en ${this.incre}. Por ejemplo, ${this.inicio} + ${this.incre} = ${this.inicio + this.incre}.<br>`;
            imgRespuesta.src = "/png/perdiste.png";
            imgRespuesta.alt = "Imagen de respuesta incorrecta";
        }

        // Llamar a la función para actualizar la página
        this.actualizarPagina();
    }

    actualizarPagina() {
        setTimeout(function() {
            location.reload();
        }, 4000); 
    }
}

// Inicializar la secuencia
const secuencia = new Secuencia();
secuencia.random();
secuencia.serieNumerica();
secuencia.presentar();
secuencia.generar();
