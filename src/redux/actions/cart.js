export const addPizzaCart = (pizzaItem) => {
    return {
        type: "ADD_PIZZA_TO_CART",
        payload: pizzaItem
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    }
}

export const removeCartItem = (id) => {
    return {
        type: "REMOVE_CART_ITEM",
        payload: id
    }
}

export const plusCartItem = (id) => {
    return {
        type: "PLUS_CART_ITEM",
        payload: id
    }
}

export const minusCartItem = (id) => {
    return {
        type: "MINUS_CART_ITEM",
        payload: id
    }
}