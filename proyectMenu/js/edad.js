class NumberGame {
    constructor() {
        this.edadMaria = 0;
        this.edadJuan = 0;
    }

    random() {
        this.edadJuan = Math.floor(Math.random() * 100) + 1;
        let edadElement = document.getElementById("randon2");
        edadElement.innerHTML = `${this.edadJuan}`;
    }

    random2() {
        this.edadMaria = Math.floor(Math.random() * 100) + 1;
        let edadElement = document.getElementById("randon1");
        edadElement.innerHTML = `${this.edadMaria}`;
    }

    maria(){
        let resp = document.getElementById("resp");
        let imgRespuesta = document.getElementById("imagenRespuesta");
        if( this.edadMaria > this.edadJuan ){
            resp.innerHTML = `Felicidades, María es mayor`;
            imgRespuesta.src = "./png/ganador.png";
            imgRespuesta.alt = "Imagen de respuesta correcta";
        } else {
            resp.innerHTML = `Perdiste, María no es mayor`;
            imgRespuesta.src = "/png/perdiste.png";
            imgRespuesta.alt = "Imagen de respuesta incorrecta";
        }
    }

    juan(){
        let resp = document.getElementById("resp");
        let imgresp = document.getElementById("imagenresp");
        if( this.edadMaria < this.edadJuan ){
            resp.innerHTML = `Felicidades, Juan es mayor`;
            imgresp.src = "/png/ganador.png";
            imgresp.alt = "Imagen de respuesta correcta";
        } else {
            resp.innerHTML = `Perdiste, Juan no es mayor`;
            imgresp.src = "/png/perdiste.png";
            imgresp.alt = "Imagen de respuesta incorrecta";
        }
    }
}

// Ejemplo de uso:
const game = new NumberGame();

// Generar edades aleatorias para Juan y Maria
game.random();
game.random2();

function actualizarPagina() {
    setTimeout(function() {
        location.reload();
    }, 5000); 
}
