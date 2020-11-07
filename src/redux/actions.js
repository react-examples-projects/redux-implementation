const DELETE_TASK = (id) => {
    return {
        type: "BORRAR",
        payload: {
            id,
        },
    };
};

const TOGGLE_STATE = (id) => {
    return {
        type: "ALTERNAR",
        payload: {
            id,
        },
    };
};

const ADD_TASK = (text) => {
    return {
        type: "AGREGAR",
        payload: {
            text,
        },
    };
};

export { DELETE_TASK, TOGGLE_STATE, ADD_TASK };
