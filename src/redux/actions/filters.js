export const setSortBy = (name) => {
    return {
        type: "SET_SORT_BY",
        payload: name,
    };
};


export const setCategory = (category) => {
    return {
        type: "SET_CATEGORY",
        payload: category,
    };
};
