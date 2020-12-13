import {
    BOARD_ITEM_FAIL, BOARD_ITEM_REQUEST, BOARD_ITEM_SUCCESS,
    BOARD_LIST_FAIL, BOARD_LIST_REQUEST, BOARD_LIST_SUCCESS
} from "../constants/boardConstants";
import { listBoards, boardItem } from "../Api";

export const listBoardAction = () => (dispatch) => {
    try {
        dispatch({ type: BOARD_LIST_REQUEST });
        dispatch({ type: BOARD_LIST_SUCCESS, payload: listBoards })
    } catch (error) {
        dispatch({ type: BOARD_LIST_FAIL, payload: "error" })
    }
}

export const ItemBoardAction = () => (dispatch) => {
    try {
        dispatch({ type: BOARD_ITEM_REQUEST });
        dispatch({ type: BOARD_ITEM_SUCCESS, payload: boardItem })
    } catch (error) {
        dispatch({ type: BOARD_ITEM_FAIL, payload: "error" })
    }
}