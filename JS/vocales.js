function contarV() {
   
    const a = "aá";
    const e = "eé";
    const i = "ií";
    const o = "oó";
    const u = "uú";

    let cantidada = 0;
    let cantidade = 0;
    let cantidadi = 0;
    let cantidado = 0;
    let cantidadu = 0;

    let palabra = document.getElementById('texto').value;
    let parrafo = document.getElementById('parrafo');
    let titulo = document.getElementById('titulo');

    for (const letra of palabra) {
        if (a.includes(letra.toLowerCase())) {
            cantidada++;
        }else if (e.includes(letra.toLowerCase())) {
            cantidade++;
        }else if (i.includes(letra.toLowerCase())) {
            cantidadi++;
        }else if (o.includes(letra.toLowerCase())) {
            cantidado++;
        }else if (u.includes(letra.toLowerCase())) {
            cantidadu++;
        }
    }
    parrafo.textContent = "Cantidad de A: " + cantidada + "   " + 
                            "Cantidad de E: " + cantidade + "   " +
                            "Cantidad de I: " + cantidadi + "   " +
                            "Cantidad de O: " + cantidado + "   " +
                            "Cantidad de U: " + cantidadu ;
    return parrafo;
};

function mostrarV(){
    const a = "aá";
    const e = "eé";
    const i = "ií";
    const o = "oó";
    const u = "uú";
    const arr = []
    var auxa=true;
    var auxe=true;
    var auxi=true;
    var auxo=true;
    var auxu=true;
    let texto = document.getElementById('texto').value;
    let parrafo = document.getElementById('parrafo');
    let titulo = document.getElementById('titulo');
     if (texto.length != 0){
        for (const letra of texto) {
            if (a.includes(letra.toLowerCase()) && auxa) {
                if (arr.indexOf("a") != 1){
                    arr.push("a");
                    auxa=false;
                }                
            }else if (e.includes(letra.toLowerCase())&& auxe) {
                if (arr.indexOf("e") != 1){
                    arr.push("e");
                    auxe=false;
                } 
            }else if (i.includes(letra.toLowerCase()) && auxi) {
                if (arr.indexOf("i") != 1){
                    arr.push("i");
                    auxi=false;
                } 
            }else if (o.includes(letra.toLowerCase()) && auxo) {
                if (arr.indexOf("o") != 1){
                    arr.push("o");
                    auxo=false;
                } 
            }else if (u.includes(letra.toLowerCase()) && auxu) {
                if (arr.indexOf("u") != 1){
                    arr.push("u");
                    auxa=false;
                } 
            }
        }
    //toString(arr)
        return titulo.textContent = "las vocales que contiene el texto son: ", parrafo.textContent = arr.toString();
                //titulo.textContent = "Las Vocales en el texto son:" ; 
    } else {
        titulo.textContent = "No se Encontro Ningun Texto";
        parrafo.textContent ="Ingrese Un texto para comenzar";
    }
};

