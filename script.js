window.onload = function() {
  var url = window.location.href;
  var id = getUrlParameter('k', url);
  
  console.log("URL actual:", url);
  console.log("ID extraído:", id);
  
  if (id) {
    getAppScriptResponse(id);
  } else {
    document.body.innerHTML = "Página no encontrada de lado de JS";
  }
};

function getUrlParameter(name, url) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);
  
  if (!results) return null;
  if (!results[2]) return '';
  
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getAppScriptResponse(id) {
  var url = 'https://script.google.com/macros/s/AKfycbxTyKZyXNeMMUd9yQjykgPG32pvIooulLcaBCvCrjVANEq_hYMVfkOgjFxQAm7Myew/exec?k=' + id;
  console.log("Obteniendo respuesta de Apps Script...");
  
  fetch(url)
    .then(response => response.text())
    .then(data => {
      console.log("Respuesta recibida:", data);
      console.log("Redireccionando a:", data);
      window.location.replace(data);
    })
    .catch(error => {
      console.log("Error al obtener la respuesta:", error);
    });
}
