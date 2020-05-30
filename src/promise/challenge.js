const fetchData = require('../utils/fetchData');
let API = 'https://rickandmortyapi.com/api/character/' //Se crea la api a la que le haremos la peticion

//las promesas como este tipo nos dan la ventaja para no tener callback hells
//desventajas requiere una herramienta extra para que los navegadores lo corran
fetchData(API)
  .then(data => {
    const { info: { count }, results } = data;
    console.log(count);
    return fetchData(`${API}${data.results[0].id}`)
  })
  .then(data => {
    const { name, origin: { url } } = data;
    console.log(name)
    return fetchData(url)
  })
  .then(data => {
    const { dimension } = data;
    console.log(dimension);
  })
  .catch(err => console.error(err));
