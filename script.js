window.onload = function() {
  var url = window.location.href;
  var id = getUrlParameter('k', url);
  
  console.log("URL actual:", url);
  console.log("ID extraído:", id);
  
  if (id) {
    console.log("Este es el link de Apps Script perro!:", id);
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

