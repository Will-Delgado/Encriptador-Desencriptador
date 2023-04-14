/* Funcion para encriptar texto */
function encriptar() {
    const textoOriginal = document.getElementById("texto-entrada");
    /* validamos si hay texto */
    if (textoOriginal == ''){
      /* si no hay texto pintamos el muñeco añadiendo la clase */
      document.getElementById("texto-salida").classList.add('muneco');
    }else{
      /* aqui borramos la clase cuando ya hay texto */
      document.getElementById("texto-salida").classList.remove('muneco');
       const textoEncriptado = textoOriginal.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("texto-salida").value = textoEncriptado;
    }
  }

  // Función para desencriptar texto
  function desencriptar() {
    const textoEncriptado = document.getElementById("texto-entrada");

    const textoDesencriptado = textoEncriptado.value
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.getElementById("texto-salida").value = textoDesencriptado;
  }
/* funcion para copiar texto */
  function copiarTexto() {
    const textoSalida = document.getElementById("texto-salida");
    /* utilizamos clipboar (api), con writeText para copiar el texto del elemento */
    navigator.clipboard.writeText(textoSalida.value)
      .then(() => {
       alert('El texto ha sido copiado');
      })
      .catch(err => {
        alert('Hubo error al copiar el texto: ', err);
      });
  }
