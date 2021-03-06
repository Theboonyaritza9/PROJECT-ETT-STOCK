import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { toolItemReducer, toolListReducer } from "./reducers/toolReducer";
import { boardListReducer, boardItemReducer } from "./reducers/boardReducer";
import { todoListReducer } from "./reducers/todoReducer";

const initailState = { state: '' }

const reducer = combineReducers({
    toolList: toolListReducer,
    toolItem: toolItemReducer,
    boardList: boardListReducer,
    boardItem: boardItemReducer,
    todoList: todoListReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initailState,composeEnhancer(applyMiddleware(thunk)));
export default store;