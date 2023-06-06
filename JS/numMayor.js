function numMayor(){
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    let parrafo = document.getElementById('parrafo');
    let titulo = document.getElementById('titulo');
    

    if (numero1.length != 0 && numero2.length != 0){
        
        if (numero1 > numero2)
        {
            titulo.textContent = "El numero Mayor Es:";
            parrafo.textContent = numero1;
        }else if (numero1 < numero2){
            titulo.textContent = "El numero Mayor Es:";
            parrafo.textContent = numero2;
        }else if (numero1 == numero2){
            titulo.textContent = "los Numeros son Iguales";
            parrafo.textContent = "Intente de nuevo con valores diferentes para cada campo.";
        }else{
            titulo.textContent = "Ingrese Un Número en todos los campos";
            parrafo.textContent = " ";
        }
      
    }else{
        
        titulo.textContent = "No se encontro Ningun número";
    }
}
