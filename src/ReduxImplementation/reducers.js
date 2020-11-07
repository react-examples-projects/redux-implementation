import { createStore } from "./redux";

//acciones
import generateIdAction from "./actions";

/**
 *Funcion que evalua el tipo de action que se va a disparar en redux
 */
function reducer(state = {}, action) {
    switch (action.type) {
        case "NUEVA":
            return action.payload;

        default:
            state;
    }
}

const store = createStore(reducer);

// se esta pendiente por cualquier cambio del estado
store.subscribe(() => {
    const state = store.getState();
    console.log(state);
});

// Disparamos el action
setInterval(() => {
    store.dispatch(generateIdAction()); 
}, 1000);
