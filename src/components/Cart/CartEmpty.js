import React from "react";
import { NavLink } from "react-router-dom";
import cartEmptyImage from "../../assets/img/empty-cart.png";

const CartEmpty = () => {
    return (
        <div className="cart cart--empty">
            <h2>Корзина пустая</h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.
                <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmptyImage} alt="Empty cart" />
            <NavLink to="/" className="button button--black">
                <span>Вернуться назад</span>
            </NavLink>
        </div>
    );
};

export default CartEmpty;
