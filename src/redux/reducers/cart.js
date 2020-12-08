const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0,
};

const getTotalPrice = (arr) =>
    arr.reduce((sum, item) => (sum += item.price), 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_TO_CART": {
            const currentItem = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItem,
                    totalPrice: getTotalPrice(currentItem),
                },
            };

            const items = Object.values(newItems).map((obj) => obj.items);
            const totalItemsArr = [].concat.apply([], items);

            return {
                ...state,
                items: newItems,
                itemsCount: totalItemsArr.length,
                totalPrice: getTotalPrice(totalItemsArr),
            };
        }

        case "CLEAR_CART": {
            return {
                ...state,
                items: {},
                totalPrice: 0,
                itemsCount: 0,
            };
        }

        case "REMOVE_CART_ITEM": {
            const newItems = { ...state.items };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentItemsCount = newItems[action.payload].items.length;

            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                itemsCount: state.itemsCount - currentItemsCount,
            };
        }

        case "PLUS_CART_ITEM": {
            const newPizzaItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newPizzaItems,
                    totalPrice: getTotalPrice(newPizzaItems),
                },
            };

            const items = Object.values(newItems).map((obj) => obj.items);
            const totalItemsArr = [].concat.apply([], items);

            return {
                ...state,
                items: newItems,
                itemsCount: totalItemsArr.length,
                totalPrice: getTotalPrice(totalItemsArr),
            };
        }

        case "MINUS_CART_ITEM": {
            const oldPizzaItems = state.items[action.payload].items;
            const newPizzaItems =
                oldPizzaItems.length > 1
                    ? state.items[action.payload].items.slice(1)
                    : oldPizzaItems;

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newPizzaItems,
                    totalPrice: getTotalPrice(newPizzaItems),
                },
            };

            const items = Object.values(newItems).map((obj) => obj.items);
            const totalItemsArr = [].concat.apply([], items);

            return {
                ...state,
                items: newItems,
                itemsCount: totalItemsArr.length,
                totalPrice: getTotalPrice(totalItemsArr),
            };
        }

        default:
            return state;
    }
};

export default cart;
