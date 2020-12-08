import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartEmpty from "../components/Cart/CartEmpty";
import CartItem from "../components/Cart/CartItem";
import BackIconSVG from "../components/Icons/BackIconSVG";
import CartIconSVG from "../components/Icons/CartIconSVG";
import ClearIconSVG from "../components/Icons/ClearIconSVG";
import {
    clearCart,
    removeCartItem,
    plusCartItem,
    minusCartItem,
} from "../redux/actions/cart";

const Cart = () => {
    const { items, itemsCount, totalPrice } = useSelector(({ cart }) => cart);

    const addedPizzas = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const dispatch = useDispatch();

    const onClearCart = () => {
        if (window.confirm("Вы действительно хотите очистить корзину?")) {
            dispatch(clearCart());
        }
    };

    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id));
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };

    return (
        <div className="container container--cart">
            {itemsCount === 0 && <CartEmpty />}

            {itemsCount !== 0 && (
                <div className="cart">
                    <div className="cart__top">
                        <h2 className="content__title">
                            <CartIconSVG />
                            Корзина
                        </h2>
                        <div className="cart__clear" onClick={onClearCart}>
                            <ClearIconSVG />
                            <span>Очистить корзину</span>
                        </div>
                    </div>

                    <div className="content__items">
                        {addedPizzas.map((pizza) => (
                            <CartItem
                                id={pizza.id}
                                name={pizza.name}
                                type={pizza.type}
                                size={pizza.size}
                                key={pizza.name}
                                imageUrl={pizza.imageUrl}
                                price={items[pizza.id].totalPrice}
                                count={items[pizza.id].items.length}
                                onRemoveItem={onRemoveItem}
                                onPlusItem={onPlusItem}
                                onMinusItem={onMinusItem}
                            />
                        ))}
                    </div>

                    <div className="cart__bottom">
                        <div className="cart__bottom-details">
                            <span>
                                Всего пицц:{" "}
                                <b>{!itemsCount ? 0 : itemsCount} шт.</b>
                            </span>
                            <span>
                                Сумма заказа: <b>{totalPrice} ₽</b>
                            </span>
                        </div>
                        <div className="cart__bottom-buttons">
                            <NavLink
                                to="/"
                                className="button button--outline button--add go-back-btn"
                            >
                                <BackIconSVG />
                                <span>Вернуться назад</span>
                            </NavLink>
                            <div className="button pay-btn">
                                <span>Оплатить сейчас</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
