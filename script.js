window.onload = function() {
  var url = window.location.href;
  var id = getUrlParameter('k', url);
  
  console.log("URL actual:", url);
  console.log("ID extraído:", id);
  
  if (id) {
    requestRedirectUrl(id);
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

function requestRedirectUrl(id) {
  var request = new XMLHttpRequest();
  var url = 'https://script.google.com/macros/s/AKfycbxTyKZyXNeMMUd9yQjykgPG32pvIooulLcaBCvCrjVANEq_hYMVfkOgjFxQAm7Myew/exec?k=' + id;
  
  request.open('GET', url, true);
  
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var redirectUrl = request.responseText;
      console.log("URL de redirección recibida:", redirectUrl);
      redirect(redirectUrl);
    } else if (request.readyState === 4) {
      console.log("Error al obtener la URL de redirección");
    }
  };
  
  request.send();
}

function redirect(url) {
  window.location.replace(url);
}

