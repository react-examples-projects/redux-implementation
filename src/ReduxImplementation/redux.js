/**
 * Obtiene la informacion almacenada dentro del `store`
 * @param {Function} `reducer` Una funcion que se ejecuta cuando se dispara una accion
 * @returns {Object} `store` Un objeto para administrar el estado
 */
function createStore(reducer) {
    let state = {};
    const susbcribes = [];

    const store = {
        /**
         * Obtiene la informacion almacenada dentro del `store`
         * @returns {Object} `state` Un objeto con toda la informacion que se ha almacenado
         */
        getState() {
            return { ...state };
        },
        /**
         * Ejecuta una accion dentro del `store`
         * @param {Object} `action` Un objeto con la descripcion y los datos de la accion
         */
        dispatch(action) {
        	// reducer retorna un payload (datos) a introducir en el state
            state = reducer(state, action);

            for (const subscribe of susbcribes) {
                subscribe(state); // el arreglo de callbacks donde estan subscritos
            }
        },

        /**
         * Almacena una funcion, que luego se invoca con el nuevo `estado` o con el anterior
         * @param {Function} callback Una funcion que es invocada cuando se dispara un `action`
         */
        subscribe(callback) {
            susbcribes.push(callback);
        },
    };

    return store;
}

export { createStore };
