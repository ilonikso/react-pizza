import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import logo from "./../../assets/img/pizza-logo.svg";
import HeaderCartIconSVG from "../Icons/HeaderCartIconSVG";

const Header = () => {
    const state = useSelector(state => {
        return{
            totalPrice: state.cart.totalPrice,
            totalItemCount: state.cart.itemsCount
        }

    })

    return (
        <div className="header">
            <div className="container">
                <NavLink to="/">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </NavLink>

                <div className="header__cart">
                    <NavLink to="/cart">
                        <Button className="button--cart">
                            <span>{state.totalPrice} ₽</span>
                            <div className="button__delimiter"></div>
                            <HeaderCartIconSVG />
                            <span>{state.totalItemCount}</span>
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
