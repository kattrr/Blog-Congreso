function verificar(str){
  var re = /[^A-Za-z0-9]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');

  return reverseStr === lowRegStr;
}
function palindrome() {

    let texto = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('tituloRes');
    let parrafo = document.getElementById('parrafo');
    let flag = verificar(texto);

    if (texto.length != 0) {
            
      if (flag) {
        tituloMensaje.textContent = "El texto es un palidromo!";
        parrafo.textContent = "";
      }else{
        tituloMensaje.textContent = "No es un palindromo";
        parrafo.textContent = ""
      }
    } else{
      alert("Ingrese un texto primero");
      tituloMensaje.textContent = "No se ha encontrado ningun mensaje";
      parrafo.textContent = "Ingresa el texto que deseas verificar"
    }

    
}
  