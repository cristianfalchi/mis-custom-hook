# useFetch

Ejemplo:
```
const url = 'endpoint de una api';
const { data: null, loading: true, error: null } use(url);

// En caso de error con el endpotin
use(url) => {data: null, loading: false: error: 'No se pudo cargar la data'}
```