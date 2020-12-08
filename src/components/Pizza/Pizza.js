import React, { useState } from "react";
import PlusIconSVG from "../Icons/PlusIconSVG";
import cn from "classnames";

const Pizza = ({ id, name, imageUrl, price, types, sizes, onAddPizza, addedCount }) => {
    // Layout pizza parameters
    const typeNames = ["тонкое", "традиционное"];
    const sizeNames = [26, 30, 40];

    // State for pizza type
    const [activeType, setActiveType] = useState(types[0]);

    const onTypeChange = (item) => {
        setActiveType(item);
    };
    // State for pizza size
    const [activeSize, setActiveSize] = useState(sizes[0]);

    const onSizeChange = (item) => {
        setActiveSize(sizeNames[item]);
    };

    // Create chosen pizza data object
    const handleAddPizza = () => {
        const pizzaData = {
            id,
            name,
            imageUrl,
            price,
            size: activeSize,
            type: typeNames[activeType],
        };
        // Send pizza data by adding to cart
        onAddPizza(pizzaData);
    };

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            <h4 className="pizza-block__title">{name}</h4>

            <div className="pizza-block__selector">
                <ul>
                    {typeNames.map((item, index) => (
                        <li
                            key={item}
                            className={cn({
                                active: activeType === index,
                                disabled: !types.includes(index),
                            })}
                            onClick={() => onTypeChange(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <ul>
                    {sizeNames.map((item, index) => (
                        <li
                            key={item}
                            className={cn({
                                active: activeSize === sizeNames[index],
                                disabled: !sizes.includes(item),
                            })}
                            onClick={() => onSizeChange(index)}
                        >
                            {item} см.
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div
                    className="button button--outline button--add"
                    onClick={handleAddPizza}
                >
                    <PlusIconSVG />
                    <span>Добавить</span>

                    {
                        addedCount && <i> {addedCount}</i>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Pizza;
