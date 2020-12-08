const initialState = {
    isFetchingItems: false,
    isInit: false,
};

const app = (state = initialState, action) => {
    if (action.type === "SET_IS_INIT") {
        return {
            ...state,
            isInit: action.payload,
        };
    }

    if (action.type === "SET_IS_FETCHING_ITEMS") {
        return {
            ...state,
            isFetchingItems: action.payload,
        };
    }

    return state;
};

export default app;
