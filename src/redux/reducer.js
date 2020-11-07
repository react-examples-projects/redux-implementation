let id = 0;

const reducer = (state = [], action) => {
    switch (action.type) {
        case "AGREGAR":
            id++;
            return [
                ...state,
                {
                    id,
                    text: action.payload.text,
                },
            ];

        case "BORRAR":
            const tareas_filtradas = state.filter(
                (tarea) => tarea.id !== action.payload.id
            );
            
            return [...tareas_filtradas];

        case "ALTERNAR":
            const item = state.find(
                (tarea) => tarea.id === action.payload.id
            );

            item.completado = !item.completado;
            return [...state];

        default:
            return state;
    }
};

export default reducer;
