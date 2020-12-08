import React from "react";
import { useDispatch } from "react-redux";
import { addPizzaCart } from "../../redux/actions/cart";
import Pizza from "./Pizza";

const PizzaItems = ({ items, cartItems }) => {
    /* Use react-redux hook for dispatching to state */
    const dispatch = useDispatch();

    const onAddPizzaToCart = (pizzaObj) => {
        dispatch(addPizzaCart(pizzaObj))
    };

    return (
        <>
            {items &&
                items.map((item) => {
                    return (
                        <Pizza
                            onAddPizza={onAddPizzaToCart}
                            key={item.id}
                            addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                            {...item}
                        />
                    );
                })}
        </>
    );
};

export default PizzaItems;
