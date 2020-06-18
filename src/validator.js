const validator = {
  isValid : function ValidarTJ(numero_tarjeta) {
    var cadena = numero_tarjeta;
    var longitud = cadena;
    var cifra = null;
    var cifra_cad=null;
    var suma=0;
    
    console.log("si ok")
    for (var i=0; i < longitud; i+=2){
      cifra = parseInt(cadena.charAt(i))*2;
      if (cifra > 9){ 
        cifra_cad = cifra;
        cifra = parseInt(cifra_cad.charAt(0)) + 
   parseInt(cifra_cad.charAt(1));
      }
      suma+=cifra;
    }
    console.log("ingreso al for")
    for (var i=1; i < longitud; i+=2){
      suma += parseInt(cadena.charAt(i));
    }
       console.log("entro")
    if ((suma % 10) == 0){ 
      alert("Su tarjeta es valida");
    } else {
      alert("Tarjeta invalida");
    }
   },
   maskify: function(num2) {
    let numeros2 = num2.split("").reverse();
    let maskReversed = "";
   
    for (let i = 0; i < numeros2.length; i++) {
      if (i < 4) {
        maskReversed = maskReversed + numeros2[i];
      } else {
        maskReversed = maskReversed + "*";
      }
    }
    let mask = "";
    for (let i = maskReversed.length - 1; i >= 0; i--) {
      mask = mask + maskReversed[i];
    }
    return mask;
  },
    };

export default validator;
