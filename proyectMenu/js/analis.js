class text{
    contarCarat(){
        let text = document.getElementById("fra").value
        let resp = document.getElementById("resp")
        let n = text.length;
        resp.innerHTML = `cantidad de caracteres es de: ${n}`

    }
    vocales(){
        let text = document.getElementById("fra").value
        let resp = document.getElementById("resp")
        let vocal = 0
        for (let i = 0; i < text.length; i++) {
            let m = text[i];
            if (m == "a" || m == "e" || m =="i"||m =="o"||m =="u"||m =="A"||m =="E"||m =="I"||m =="O"||m =="U") {
                vocal++
            }

        }
        resp.innerHTML=`la cantidad de vocales es de: ${vocal}`
    }
    signos(){
        let text = document.getElementById("fra").value
        let resp = document.getElementById("resp")
        let signo = 0
        for (let i = 0; i < text.length; i++) {
            let m = text[i];
            if (m == "," || m == ";" || m =="."||m ==":"||m =="-"||m =="_"||m =="!"||m =="¿"||m =="?"||m =="*") {
                signo++
            }

        }
        resp.innerHTML=`la cantidad de signos de puntuacion es de: ${signo}`

    }
    espacio(){
        let text = document.getElementById("fra").value
        let resp = document.getElementById("resp")
        let espacio = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                espacio++;
            }
        }
        resp.innerHTML = `Cantidad de espacios: ${espacio}`;
    }
    
    palabra(){
        let text = document.getElementById("fra").value.trim()
        let resp = document.getElementById("resp")
        let words = text.split(/\s+/)
        let count = (text === '') ? 0 : words.length
        resp.innerHTML = `Cantidad de palabras: ${count}`
    }
    digitos(){
        let text = document.getElementById("fra").value
        let resp = document.getElementById("resp")
        let digitos = 0
        for (let i = 0; i < text.length; i++) {
            if (text[i] >= '0' && text[i] <= '9') {
                digitos++;
            }
        }
        resp.innerHTML= `la cantidad d edigiots q tiene es de: ${digitos}`
    }
    invertir() {
        let text = document.getElementById("fra").value;
        let resp = document.getElementById("resp")
        let reversed = text.split('').reverse().join('');
        resp.innerHTML = `Frase invertida: ${reversed}`;
    }
}

const car = new text()