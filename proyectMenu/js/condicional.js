class Condicion {
    constructor() {
        this.aleatorio = 0;
        this.pregunta = "";
        this.preguntaAleatoria();
        this.presentar();
    }

    preguntaAleatoria() {
        this.aleatorio = Math.floor(Math.random() * 7) + 1;
        switch (this.aleatorio) {
            case 1:
                this.pregunta = "ayuda a juan a elegir una obcion";
                break;
            case 2:
                this.pregunta = "las dos cosas son muy divertidas pero cual ago";
                break;
            case 3:
                this.pregunta = "¿A dónde prefieres ir?";
                break;
            case 4:
                this.pregunta = "pregunta seria cual es mejor";
                break;
            case 5:
                this.pregunta = "mañana hay una expocicion q ago";
                break;
            case 6:
                this.pregunta = "que es mejor hacer";
                break;
            case 7:
                this.pregunta = "que comida es saludable";
                break;
            default:
                break;
        }
    }

    presentar() {
        let preguntaElement = document.getElementById("pregunta");
        preguntaElement.textContent = this.pregunta;

        let img1 = document.getElementById("img1");
        let img2 = document.getElementById("img2");

        switch (this.aleatorio) {
            case 1:
                img1.src = "/png/dormir.png";
                img2.src = "/png/estudiar.png";
                break;
            case 2:
                img1.src = "/png/cantar.png";
                img2.src = "/png/tocar.png";
                break;
            case 3:
                img1.src = "/png/iglesia.png";
                img2.src = "/png/fiesta.png";
                break;
            case 4:
                img1.src = "/png/goku.png";
                img2.src = "/png/naruto.png";
                break;
            case 5:
                img1.src = "/png/escucharM.png";
                img2.src = "/png/leer.png";
                break;
            case 6:
                img1.src = "/png/cenbrar.png";
                img2.src = "/png/talar.png";
                break;
            case 7:
                img1.src = "/png/comersano.png";
                img2.src = "/png/comermal.png";
                break;
            default:
                break;
        }
    }

    pre2() {
        let resp = document.getElementById("resp");
        switch (this.aleatorio) {
            case 1:
               resp.innerHTML = `MUY BIEN!!! hay q estudiar estamos en temporada de examenes `
                break;
            case 2:
                resp.innerHTML = `me gusta tocar la guitarra estubo buena `
                break;
            case 3:
                resp.innerHTML = `es mejor y a la iglesia y agradezer a Dios`
                break;
            case 4:
                resp.innerHTML = `bien pero goku es mejor JAJAJA`
                break;
            case 5:
                resp.innerHTML = `MUY BIEN!!! y leer apresdes mas `
                break;
            case 6:
                resp.innerHTML = `talar arboles no es bueno los arboles nos da aire`
                break;
            case 7:
                resp.innerHTML = `es mejor empezar comer sano si no te quieres enfermar`
                break;
            default:
                break;
        }
    }

    pre1() {
        let resp = document.getElementById("resp");
        switch (this.aleatorio) {
            case 1:
               resp.innerHTML = `no es una buena opcion deberias estudiar`
                break;
            case 2:
                resp.innerHTML = `no esta nada mal me gusta cantar`
                break;
            case 3:
                resp.innerHTML = `muy bien siempre hay tiempo para Dios`
                break;
            case 4:
                resp.innerHTML = `obio q Goku es mejor anime`
                break;
            case 5:
                resp.innerHTML = `ubiera sido mejor leer para aprender`
                break;
            case 6:
                resp.innerHTML = `muy buena obcion mas arboles mas oxigeno`
                break;
            case 7:
                resp.innerHTML = `la fruta es comida sana muy buena para la salud`
                break;
            default:
                break;
        }
    }

    random() {
        this.preguntaAleatoria();
        this.presentar();
    }
}

const con = new Condicion();

function actualizarPagina() {
    setTimeout(function() {
        location.reload();
    }, 5000); 
}
