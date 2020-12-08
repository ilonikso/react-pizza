const initialState = {
    sortBy: "popular",
    sortItems: [
        { name: "популярности", type: "popular" },
        { name: "цене", type: "price" },
        { name: "алфавиту", type: "name" },
    ],
    category: null,
    categoryItems: ["Мясные", "Вегетарианская", "Острые", "Гриль", "Закрытые"],
};

const filters = (state = initialState, action) => {
    if (action.type === "SET_SORT_BY") {
        return {
            ...state,
            sortBy: action.payload,
        };
    }

    if (action.type === "SET_CATEGORY") {
        return {
            ...state,
            category: action.payload,
        };
    }

    return state;
};

export default filters;
