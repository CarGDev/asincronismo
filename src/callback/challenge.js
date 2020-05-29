let XMLHttpRequest = require ('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/' //Se crea la api a la que le haremos la peticion

function fetchData (url_api, callback) {
  let xhttp = new XMLHttpRequest(); //se hace el shortcut the la funcion XMLHttpRequest
  xhttp.open('GET', url_api, true); //se utiliza un llamado a una url diciendole la peticion
  xhttp.onreadystatechange = function (event) { //Debemos escuchar la url y se crea el espacio para hacer una validacion para ver si se encuentra
    if (xhttp.readyState === 4) { //se utiliza una validacion para ver si se ha completado
      if (xhttp.status === 200){
        callback(null, JSON.parse(xhttp.responseText)) //con "responseText" se hacel el llamado del parse de JSON
      } else { //Se crea un else para cuando haya errores los podamos visualizar
        const error = new Error('Errpr' + url_api);
        return callback(error,null)
      }
    }
  }
  xhttp.send(); //Se envia la solicitud
}

//Lo ideal es hacer 3 llamados a los callback para evitar los callback hell
fetchData(API,function(error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id , function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function(error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  })
})


