import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";

//middlewares
import Middleware1 from "./middlewares/middleware1";

const store = createStore(reducer, undefined, applyMiddleware(Middleware1));

export default store;
