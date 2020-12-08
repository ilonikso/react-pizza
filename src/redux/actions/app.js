export const setIsInit = (isInit) => {
    return {
        type: "SET_IS_INIT",
        payload: isInit,
    };
};

export const setIsFetchingItems = (isFetchingItems) => {
    return {
        type: "SET_IS_FETCHING_ITEMS",
        payload: isFetchingItems,
    };
};
