class Secuencia2 {
    constructor() {
        this.numero = 0;
        this.inicio = 0;
        this.incre = 0;
        this.pre = [];
        this.currentValue = 0
        this.n =  0
    }

    random() {
        this.numero = Math.floor(Math.random() * 6) + 1;
        this.inicio = Math.floor(Math.random() * 10) + 1;
        this.incre = Math.floor(Math.random() * 10) + 1;
    }

    serieNumerica() {
        this.pre = []; 
        let currentValue = this.inicio;

        for (let i = 0; i < 4; i++) {
            this.pre.push(currentValue);
            currentValue = currentValue + this.incre;
        }
        let n = this.pre[3];
        this.n = n + this.incre

    }

    

    presentar() {
        let random = document.getElementById("ramdon");
        let n = this.pre.join(", ")
        random.innerHTML = `${n},...`;
    }

    generar() {
        let opcion1 = document.getElementById("opcion1");
        let opcion2 = document.getElementById("opcion2");
        let opcion3 = document.getElementById("opcion3");
        let opcion4 = document.getElementById("opcion4");

        let respuestas = [];

        respuestas.push( this.n + 4);
        respuestas.push(this.n );
        respuestas.push(this.n-1);
        respuestas.push(this.n + 2);

        respuestas.sort(() => Math.random() - 0.5);

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
        let imgresp= document.getElementById("imagenRespuesta");

        if (opcionSeleccionada === this.n) {
            resp.innerHTML = `¡Felicidades! Es la respuesta correcta.`;
            imgresp.src = "/png/ganador.png";
            imgresp.alt = "Imagen de respuesta correcta";
        } else {
            resp.innerHTML = `Respuesta incorrecta. La respuesta correcta es ${this.n}.<br>
                              Se incrementa de ${this.incre} en ${this.incre}. Por ejemplo, ${this.inicio} + ${this.incre} = ${this.inicio + this.incre}.<br>
                              ${this.inicio + this.incre}+${this.incre} = ${this.inicio + this.incre + this.incre}, etc `;
            imgresp.src = "/png/perdiste.png";
            imgresp.alt = "Imagen de respuesta incorrecta";
        }

    
        this.actualizarPagina();
    }

    actualizarPagina() {
        setTimeout(function() {
            location.reload();
        }, 5000); 
    }
}

// Inicializar la secuencia
const secuencia = new Secuencia2();
secuencia.random();
secuencia.serieNumerica();
secuencia.presentar();
secuencia.generar();
