window.onload = function() {
  var url = window.location.href;
  var id = getUrlParameter('k', url);
  
  if (id) {
    redirect(id);
  } else {
    document.body.innerHTML = "Página no encontrada";
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

function redirect(id) {
  var url = 'https://script.google.com/macros/s/AKfycbxfDughCQUGCBk9kvRMs_25bd7YrY_fZnfuHyWq00UTx5_nANfoABxQbclNLZSPFZw/exec?k=' + id; // Reemplaza la URL de tu script de Google Apps Script
  window.location.href = url;
}
