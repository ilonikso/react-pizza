import axios from "axios";

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setPizzaLoaded(false))
    axios.get(`/pizzas?${category !== null ? 'category=' + category : ''}&_sort=${sortBy}&_order=asc`).then((data) => {
        dispatch(setPizzas(data.data));
        dispatch(setPizzaLoaded(true))
    });
};

export const setPizzas = (items) => {
    return {
        type: "SET_PIZZAS",
        payload: items,
    };
};

export const setPizzaLoaded = (isLoaded) => {
    return {
        type: "SET_PIZZA_LOADED",
        payload: isLoaded,
    };
};
