const validator = {
  isValid : function ValidarTJ(numero_tarjeta) {
    var cadena = numero_tarjeta.toString();
    var longitud = cadena.length;
    var cifra = null;
    var cifra_cad=null;
    var suma=0;
    
    console.log("Entra al for de validar longitud")
    for (var i=0; i < longitud; i+=2){
      cifra = parseInt(cadena.charAt(i))*2;
      console.log("entra al if menor a 9")
      if (cifra > 9){ 
        cifra_cad = cifra.toString();
        cifra = parseInt(cifra_cad.charAt(0)) + 
        parseInt(cifra_cad.charAt(1));
      }
      suma+=cifra;
    }
    console.log("entra al for de suma")
    for (var i=1; i < longitud; i+=2){
      suma += parseInt(cadena.charAt(i));
    }
     console.log("entra al if de la division para hacer validacion")  
    if ((suma % 10) === 0){ 
     alert("Número de tarjeta correcto");
    } else {
     alert("El número de tarjeta no es válido");
    }
   },

  maskify: function(num2) {
    let numsGroup2 = num2.split("").reverse();
    let maskReversed = "";
   
    for (let i = 0; i < numsGroup2.length; i++) {
      if (i < 4) {
        maskReversed = maskReversed + numsGroup2[i];
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

