import React, { useState } from "react";

const Categories = ({ items, onCategoryChange }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const onCategoryClick = (item) => {
        setActiveCategory(item);
        onCategoryChange(item);
    };

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? "active" : ""}
                    onClick={() => {
                        onCategoryClick(null);
                    }}
                >
                    Все
                </li>
                {items &&
                    items.map((item, index) => {
                        return (
                            <li
                                className={
                                    activeCategory === index ? "active" : ""
                                }
                                key={`${item}_${index}`}
                                onClick={() => onCategoryClick(index)}
                            >
                                {item}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Categories;
