import {
    TOOL_LIST_REQUEST, TOOL_LIST_SUCCESS, TOOL_LIST_FAIL, TOOL_SAVE_SUCCESS,
    TOOL_ITEM_REQUEST, TOOL_ITEM_SUCCESS, TOOL_ITEM_FAIL
} from "../constants/toolConstants";

const toolListReducer = (state = { tools: [] }, action) => {
    switch (action.type) {
        case TOOL_LIST_REQUEST:
            return { loading: true, tools: [] };
        case TOOL_LIST_SUCCESS:
            return { loading: false, tools: action.payload }
        case TOOL_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

const toolItemReducer = (state = { tool: {} }, action) => {
    switch (action.type) {
        case TOOL_ITEM_REQUEST:
            return { loading: true };
        case TOOL_ITEM_SUCCESS:
            return { loading: false, tool: action.payload }
        case TOOL_SAVE_SUCCESS:
            return { loading: false, tool: action.payload }
        case TOOL_ITEM_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export { toolListReducer, toolItemReducer }