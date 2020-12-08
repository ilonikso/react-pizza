import React from "react";
import MinusCartIconSVG from "../Icons/MinusCartIconSVG";
import PlusIconSVG from "../Icons/PlusIconSVG";
import RemoveCartIconSVG from "../Icons/RemoveCartIconSVG";

const CartItem = ({id, name, type, size, imageUrl, price, count, onRemoveItem, onPlusItem, onMinusItem}) => {
    
    const handleRemoveItem = () => {
        onRemoveItem(id);
    }

    const handlePlusItem = () => {
        onPlusItem(id);
    }

    const handleMinusItem = () => {
        onMinusItem(id);
    }
    
    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{name}</h3>
                <p>{type} тесто, {size} см.</p>
            </div>
            <div className="cart__item-count">
                <div className="button button--outline button--circle cart__item-count-minus" onClick={handleMinusItem}>
                    <MinusCartIconSVG />
                </div>
                <b>{count}</b>
                <div className="button button--outline button--circle cart__item-count-plus" onClick={handlePlusItem}>
                    <PlusIconSVG />
                </div>
            </div>
            <div className="cart__item-price">
                <b>{price} ₽</b>
            </div>
            <div className="cart__item-remove">
                <div className="button button--outline button--circle" onClick={handleRemoveItem}>
                    <RemoveCartIconSVG />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
