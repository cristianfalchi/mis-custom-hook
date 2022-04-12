// concideraciones cuando se intente cambiar el estado y el componente no este montado
// hay que crear un componente donde trabajar esta informacion

import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        let cancel = false;
        setState({ data: null, loading: true, error: null });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(cancel) return;
                setState({
                    loading: false,
                    error: null,
                    data
                });
            })
            .catch(() => {
                if(cancel) return;
                setState({ 
                    data: null, 
                    loading: false,
                    error: 'No se pudo cargar la info'
                });
            })
            return () =>{
                cancel = true;
            }
    }, [url]);

    return state;
}

