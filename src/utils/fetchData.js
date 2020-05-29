let XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest;


const fetchData = (url_api, callback) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest(); //se hace el shortcut the la funcion XMLHttpRequest
    xhttp.open('GET', url_api, true); //se utiliza un llamado a una url diciendole la peticion
    xhttp.onreadystatechange = (() => { //Debemos escuchar la url y se crea el espacio para hacer una validacion para ver si se encuentra
      if (xhttp.readyState === 4) { //se utiliza una validacion para ver si se ha completado
        (xhttp.status == 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error ', url_api))
      }
    });
    xhttp.send(); //Se envia la solicitud
  });
}
