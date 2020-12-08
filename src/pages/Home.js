import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories/Categories";
import PizzaItems from "../components/Pizza/PizzaItems";
import PizzaLoaderContainer from "../components/Pizza/PizzaLoaderContainer";
import Sort from "../components/Sort/Sort";
import { setCategory, setSortBy } from "../redux/actions/filters";

const Home = () => {
    /* Get pizza items from state using react-redux hooks */
    const state = useSelector((state) => {
        return {
            pizzaItems: state.pizzas.items,
            categoryItems: state.filters.categoryItems,
            sortItems: state.filters.sortItems,
            isInit: state.app.isInit,
            isPizzaLoaded: state.pizzas.isPizzaLoaded,
            category: state.filters.category,
            sortBy: state.filters.sortBy,
            cartItems: state.cart.items,
        };
    });

    /* Use react-redux hook for dispatching to state */
    const dispatch = useDispatch();

    const onCategoryChange = (category) => {
        dispatch(setCategory(category));
    };

    const onSortByChange = (sortBy) => {
        dispatch(setSortBy(sortBy));
    };

    return (
        <div className="container">
            <div className="content__top content__top--fix">
                <Categories
                    items={state.categoryItems}
                    onCategoryChange={onCategoryChange}
                />

                <Sort items={state.sortItems} onSortByChange={onSortByChange} />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {!state.isPizzaLoaded && <PizzaLoaderContainer />}
                {state.isPizzaLoaded && (
                    <PizzaItems
                        items={state.pizzaItems}
                        cartItems={state.cartItems}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
