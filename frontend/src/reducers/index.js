import {
    ADD_ITEM,
    REMOVE_ITEM_REQUEST,
    REMOVE_ITEM_SUCCESS,
    AUTH_SUCCESS,
    FETCH_REQUEST,
    FETCH_SUCCESS
} from "../actions";

const initialState = {
    userID: '5d7e900ad80fca0eac729174',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                userID: action.payload.data._id
            };
        case ADD_ITEM:
            return {
                ...state,
                [action.payload.itemType]: [
                    ...state[action.payload.itemType],
                    action.payload.item
                ]
            };
        case REMOVE_ITEM_SUCCESS:
            return {
                ...state,
                [action.payload.itemType]: [
                    ...state[action.payload.itemType].filter(item => item._id !== action.payload.id)
                ]
            };
        case FETCH_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                [action.payload.itemType]: [
                    ...action.payload.data
                ]
            };
        default:
            return state;
    }
};

export default rootReducer;