class convertir{
    bin(){
        let b = document.getElementById("num").value;
        let resp = document.getElementById("resp")
        let h = parseInt(b, 2).toString(16).toUpperCase()
        resp.innerText = `Hexadecimal: ${h}`;
    }
    hexa(){
        let h = document.getElementById("num").value;
        let resp = document.getElementById("resp")
        let b = parseInt(h, 16).toString(2)
        resp.innerText = `Binario: ${b}`;
    }
}

const con = new convertir()