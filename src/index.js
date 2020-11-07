import store from "./redux/store";
import $ from "jquery";

//actions
import { DELETE_TASK, ADD_TASK, TOGGLE_STATE } from "./redux/actions";

store.subscribe(() => {
    const state = store.getState();
    const items = state;
    console.log(items);
    actualizarLista(items);
});

const tarea_nombre = $("#tarea_nombre");
const tarea_model = $("#tarea_modelo");
const tareas = $("#tareas");

tarea_nombre.keyup((e) => {
    if (e.keyCode === 13) {
        const text = tarea_nombre.val();
        tarea_nombre.val("");
        store.dispatch(ADD_TASK(text));
    }
});

function actualizarLista(items) {
    tareas.html("");

    for (const item of items) {
        const tarea_model_clone = tarea_model.clone();
        const checkbox_input = tarea_model_clone.find("input");
        const btn_remove = tarea_model_clone.find("button");
        const span = tarea_model_clone.find("span");

        tarea_model_clone.removeClass("d-none");
        span.html(item.text);
        if (item.completado) {
            span.css("text-decoration", "line-through");
        }

        btn_remove.on("click", () => {
            store.dispatch(DELETE_TASK(item.id));
        });

        checkbox_input.prop("checked", item.completado);
        checkbox_input.on("click", () => {
            store.dispatch(TOGGLE_STATE(item.id));
        });

        tareas.append(tarea_model_clone);
    }
}

const actions = JSON.parse(localStorage.getItem("actions") || "[]");
console.log(actions);
actions.forEach((action, i) => {
    setTimeout(() => {
        store.dispatch(action);
    }, i * 1000);
});
