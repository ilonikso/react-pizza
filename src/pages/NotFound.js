import React from 'react'
import { NavLink } from "react-router-dom";
import errorImage from "../assets/img/error-404.png"

const NotFound = () => {
    return (
        <div className="cart cart--empty">
            <h2>404</h2>
            <p>
                Вероятней всего, такой страницы не существует.
                <br />
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={errorImage} alt="Error" />
            <NavLink to="/" className="button button--black">
                <span>Вернуться назад</span>
            </NavLink>
        </div>
    )
}

export default NotFound;
