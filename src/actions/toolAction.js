import {
    TOOL_LIST_REQUEST, TOOL_LIST_SUCCESS, TOOL_LIST_FAIL, 
    TOOL_ITEM_REQUEST, TOOL_ITEM_SUCCESS, TOOL_ITEM_FAIL, TOOL_SAVE_SUCCESS
} from "../constants/toolConstants";

import { listToolApi, toolItem } from "../Api";

export const listToolAction = () => (dispatch) => {
    try {
        dispatch({ type: TOOL_LIST_REQUEST });
        dispatch({ type: TOOL_LIST_SUCCESS, payload: listToolApi })
    } catch (error) {
        dispatch({ type: TOOL_LIST_FAIL, payload: "error" })
    }
}

export const ItemToolAction = () => (dispatch) => {
    try {
        dispatch({ type: TOOL_ITEM_REQUEST });
        dispatch({ type: TOOL_ITEM_SUCCESS, payload: toolItem })
    } catch (error) {
        dispatch({ type: TOOL_ITEM_FAIL, payload: "error" })
    }
}

export const SaveItemToolAction = (data) => (dispatch) => {
    try {
        dispatch({ type: TOOL_ITEM_REQUEST });
        dispatch({ type: TOOL_SAVE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: TOOL_ITEM_FAIL, payload: "error" })
    }
}