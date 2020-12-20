import { TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_LIST_FAIL } from "../constants/todoConstants";
import { todos } from "../Api";

export const listToolAction = () => (dispatch) => {
    try {
        dispatch({ type: TODO_LIST_REQUEST });
        dispatch({ type: TODO_LIST_SUCCESS, payload: todos })
    } catch (error) {
        dispatch({ type: TODO_LIST_FAIL, payload: "error" })
    }
}