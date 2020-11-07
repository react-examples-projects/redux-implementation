const actions = [];

// middleware de redux
const Middleware1 = (store) => (next) => (action) => {
    // const state = store.getState();
    // state.dispatch({
    //     type: "TEST",
    //     payload: {
    //         id: 10,
    //     },
    // });

    console.log("Middleware1: ", action);
    actions.push(action);
    localStorage.setItem("actions", JSON.stringify(actions));
    next(action);
};
export default Middleware1;
