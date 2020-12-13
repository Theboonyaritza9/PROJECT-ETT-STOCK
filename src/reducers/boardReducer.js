import { BOARD_ITEM_FAIL, BOARD_ITEM_REQUEST, BOARD_ITEM_SUCCESS, BOARD_LIST_FAIL, BOARD_LIST_REQUEST, BOARD_LIST_SUCCESS } from '../constants/boardConstants';

const boardListReducer = (state = { boards: [] }, action) => {
    switch (action.type) {
        case BOARD_LIST_REQUEST:
            return { loading: true, boards: [] };
        case BOARD_LIST_SUCCESS:
            return { loading: false, boards: action.payload }
        case BOARD_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

const boardItemReducer = (state = { board: {} }, action) => {
    switch (action.type) {
        case BOARD_ITEM_REQUEST:
            return { loading: true };
        case BOARD_ITEM_SUCCESS:
            return { loading: false, board: action.payload }
        case BOARD_ITEM_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { boardListReducer, boardItemReducer }